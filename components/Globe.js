'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * A slowly rotating point-cloud globe with a faint wireframe and
 * orbiting connection arcs — a nod to global, networked payments.
 * Lightweight: pure points + lines, no textures.
 */
export default function Globe() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const W = mount.clientWidth || 640;
    const H = mount.clientHeight || 640;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const R = 5;

    // ---- point cloud (fibonacci sphere) ----
    const COUNT = 1700;
    const positions = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      const y = 1 - (i / (COUNT - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = i * 2.399963229728653; // golden angle
      positions[i * 3] = Math.cos(theta) * radius * R;
      positions[i * 3 + 1] = y * R;
      positions[i * 3 + 2] = Math.sin(theta) * radius * R;
    }
    const ptGeo = new THREE.BufferGeometry();
    ptGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const ptMat = new THREE.PointsMaterial({
      color: 0xe6ab5e,
      size: 0.062,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
    });
    group.add(new THREE.Points(ptGeo, ptMat));

    // ---- faint wireframe shell ----
    const wire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(R * 0.995, 3),
      new THREE.MeshBasicMaterial({
        color: 0x79a9ad,
        wireframe: true,
        transparent: true,
        opacity: 0.06,
      })
    );
    group.add(wire);

    // ---- orbiting arc rings ----
    const rings = [];
    const ringDefs = [
      { tilt: 0.5, color: 0xe6ab5e, op: 0.3, scale: 1.18 },
      { tilt: -0.9, color: 0x79a9ad, op: 0.22, scale: 1.34 },
      { tilt: 1.6, color: 0xe6ab5e, op: 0.16, scale: 1.5 },
    ];
    ringDefs.forEach((d) => {
      const ringGeo = new THREE.RingGeometry(R * d.scale, R * d.scale + 0.018, 128);
      const ringMat = new THREE.MeshBasicMaterial({
        color: d.color,
        transparent: true,
        opacity: d.op,
        side: THREE.DoubleSide,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2 + d.tilt;
      rings.push(ring);
      group.add(ring);
    });

    // ---- travelling nodes on the rings (payment "packets") ----
    const nodes = [];
    rings.forEach((ring, i) => {
      const dot = new THREE.Mesh(
        new THREE.SphereGeometry(0.085, 12, 12),
        new THREE.MeshBasicMaterial({ color: 0xf3c585 })
      );
      nodes.push({ mesh: dot, ring: i, speed: 0.5 + i * 0.22, phase: i * 2 });
      group.add(dot);
    });

    group.rotation.x = 0.32;

    // ---- interaction: gentle parallax ----
    let targetX = 0, targetY = 0, curX = 0, curY = 0;
    const onMove = (e) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 0.4;
      targetY = (e.clientY / window.innerHeight - 0.5) * 0.3;
    };
    if (!reduced) window.addEventListener('mousemove', onMove);

    const clock = new THREE.Clock();
    let raf;

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      if (!reduced) {
        group.rotation.y += 0.0016;
        curX += (targetX - curX) * 0.04;
        curY += (targetY - curY) * 0.04;
        group.rotation.y += curX * 0.012;
        group.rotation.x = 0.32 + curY * 0.4;
      }

      const def = ringDefs;
      nodes.forEach((n) => {
        const a = t * n.speed + n.phase;
        const d = def[n.ring];
        const rad = R * d.scale + 0.009;
        const x = Math.cos(a) * rad;
        const z = Math.sin(a) * rad;
        // place on tilted ring plane
        const tilt = Math.PI / 2 + d.tilt;
        n.mesh.position.set(
          x,
          z * Math.cos(tilt - Math.PI / 2),
          z * Math.sin(tilt - Math.PI / 2)
        );
      });

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const w = mount.clientWidth, h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      ptGeo.dispose();
      ptMat.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} aria-hidden="true" />;
}
