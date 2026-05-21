import './globals.css';
import { profile } from '@/lib/data';

export const metadata = {
  metadataBase: new URL('https://gidraf.dev'),
  title: `${profile.name} — ${profile.title}`,
  description:
    'Senior Software Engineer with 9+ years building high-availability, API-driven platforms across FinTech, digital payments and agri-tech. Architecture, microservices, CI/CD and continuous delivery.',
  keywords: [
    'Senior Software Engineer',
    'Lead Software Engineer',
    'Software Architecture',
    'Microservices',
    'Spring Boot',
    'CI/CD',
    'FinTech',
    'Nairobi',
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description:
      'Engineering high-availability, API-driven platforms — and the delivery practices that ship them.',
    url: 'https://gidraf.dev',
    siteName: 'gidraf.dev',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: '#0c0d11',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..600;1,9..144,400..500&family=Public+Sans:ital,wght@0,300..600;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%230c0d11'/%3E%3Ccircle cx='16' cy='16' r='6' fill='none' stroke='%23e6ab5e' stroke-width='2'/%3E%3Ccircle cx='16' cy='16' r='2.4' fill='%23e6ab5e'/%3E%3C/svg%3E"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
