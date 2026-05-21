// Single source of truth for all site content.

export const profile = {
  name: 'Gidraf Orenja Mtange',
  shortName: 'Gidraf Orenja',
  title: 'Senior Software Engineer',
  tagline:
    'I design high-availability, API-driven platforms — and the delivery practices that let teams ship them continuously.',
  location: 'Nairobi, Kenya',
  email: 'orenjagidraf@gmail.com',
  phone: '+254 791 186 712',
  linkedin: 'https://www.linkedin.com/in/gidraf-orenja-a2287917b/',
  github: 'https://github.com/Gidraf',
  site: 'gidraf.dev',
  resume: '/Gidraf-Orenja-Mtange-Resume.pdf',
  available: 'Open to Senior / Lead Software Engineer roles',
};

export const summary =
  "Senior Software Engineer with96+ years delivering high-availability, API-driven platforms across FinTech, digital payments, e-commerce and agri-tech. I design integration architectures and microservices that turn constrained legacy systems into reusable platforms — and I partner with DevOps, QA and security teams to introduce the CI/CD, blue-green deployment and automated-testing practices that make continuous delivery possible. I work across the stack, from React, Next.js and Angular on the frontend to Node.js and Spring Boot services on the backend, and I'm at my best mentoring engineers, leading code and design reviews, and writing the documentation that helps a team scale.";

export const stats = [
  { value: '9+', label: 'Years building software' },
  { value: '5', label: 'Companies across FinTech & beyond' },
  { value: '200M+', label: 'Reach of platforms contributed to' },
  { value: 'Weekly', label: 'Feature delivery cadence enabled' },
];

export const experience = [
  {
    company: 'Safaricom PLC',
    division: 'Home & Fibre',
    role: 'Senior Software Engineer',
    period: 'Jan 2026 — Present',
    location: 'Nairobi, Kenya',
    summary:
      'Bringing proven continuous-delivery practices to the Home & Fibre engineering team.',
    points: [
      'Helping the team raise delivery throughput by introducing the continuous-delivery practices proven on earlier platforms — blue-green deployments, feature flagging and automated pull-request testing.',
      'Partnering with frontend and backend engineers to streamline the release pipeline toward a predictable, repeatable delivery cadence.',
      'Contributing across the stack and sharing delivery practices through mentoring.',
    ],
    tags: ['CI/CD', 'Blue-Green', 'Feature Flags', 'Mentoring', 'React'],
  },
  {
    company: 'Safaricom PLC',
    division: 'DigiFarm',
    role: 'Software Engineer',
    period: 'Jan 2024 — Dec 2025',
    location: 'Nairobi, Kenya',
    summary:
      'DigiFarm Buyer Portal — connecting produce buyers with smallholder farmers, with quality-based payments and farmer-collection management.',
    points: [
      'Built and shipped the Buyer Portal MVP, owning the full frontend through first release and contributing backend microservices alongside the backend team.',
      'Designed and rolled out blue-green deployment environments with DevOps, removing environment contention between development, QA and security and enabling near-continuous delivery.',
      'Introduced feature flagging across the codebase so each change could be released independently and targeted to selected UAT or production users — reducing release risk and unblocking parallel work.',
      'Co-created a build-promotion pipeline that builds a Docker image once and promotes the same artifact through every environment, and added ephemeral preview environments with Playwright automation to GitLab merge requests.',
      'Served as onboarding lead for new engineers — mentoring joiners, running code and design reviews, and owning the team’s engineering documentation.',
      'Helped stand up a self-hosted Langfuse instance to manage and observe prompts for the team’s AI chatbot, supporting an AI-assisted product workflow with LangChain and LangGraph.',
      'Together, these practices supported a weekly feature cadence and contributed to DigiFarm reaching operational break-even and securing renewed board funding.',
    ],
    tags: [
      'Microservices',
      'Docker',
      'CI/CD',
      'Blue-Green',
      'Feature Flags',
      'Playwright',
      'LangChain',
      'Langfuse',
    ],
  },
  {
    company: 'Co-operative Bank of Kenya',
    division: 'Contract via Techsavanna',
    role: 'Software Engineer',
    period: 'Sep 2022 — Dec 2023',
    location: 'Nairobi, Kenya',
    summary:
      'Architecting the integration layer that modernised the bank’s digital channels.',
    points: [
      'Architected an integration middleware layer that decoupled the bank’s mobile and web clients from legacy core-banking and internet-banking APIs — enabling modern app development without altering a contractually frozen legacy codebase.',
      'Built the layer in Node.js with Redis as a caching and tokenization store for authentication sessions, replacing server-rendered jQuery pages with clean REST services consumed directly by client applications.',
      'Established a reusable platform foundation the bank has continued to build on — including the Yea youth-banking app, pioneered during the engagement, and the rebuilt MCo-op Cash Android application.',
      'Contributed to delivery of the KCEP digital platform supporting county-government entities.',
      'Partnered with QA and security to introduce automated testing into the codebase, improving release stability and cutting regression defects by roughly half.',
    ],
    tags: ['System Architecture', 'REST APIs', 'Node.js', 'Redis', 'FinTech'],
  },
  {
    company: 'Tracom Services Limited',
    division: 'Card Payments & POS',
    role: 'Software Developer',
    period: 'Oct 2019 — May 2020',
    location: 'Nairobi, Kenya',
    summary:
      'Card-payments and point-of-sale technology — where my backend journey began.',
    points: [
      'Began my career building backend services, developing reporting microservices that improved accounting-team throughput during month-end and invoice-generation peaks.',
      'Built an SMS notification microservice for rider-SACCO payment reminders, improving payment-response and revenue-collection rates.',
      'Contributed frontend and operational improvements to the ride-hailing platform, supporting steady growth in active usage.',
    ],
    tags: ['Microservices', 'Backend', 'Payments'],
  },
  {
    company: 'Andela Kenya',
    division: 'Software Engineering Program',
    role: 'Junior Software Developer',
    period: 'Oct 2018 — Sep 2019',
    location: 'Nairobi, Kenya',
    summary: 'Intensive training, then delivering outsourced software for global clients.',
    points: [
      'Completed Andela’s intensive software-engineering program and joined the apprenticeship delivering outsourced software for international clients.',
      'Served as team captain for a group of junior developers, coordinating delivery, quality and morale — an early grounding in technical leadership.',
    ],
    tags: ['Apprenticeship', 'Team Leadership'],
  },
];

export const skillGroups = [
  {
    label: 'Languages',
    items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'Kotlin', 'SQL'],
  },
  {
    label: 'Backend & Services',
    items: [
      'Spring / Spring Boot',
      'Node.js',
      'REST APIs',
      'Microservices',
      'Multi-threaded Services',
      'Application Servers',
    ],
  },
  {
    label: 'Frontend',
    items: ['React / Redux', 'Next.js', 'Angular', 'HTML5', 'CSS3'],
  },
  {
    label: 'Data & Caching',
    items: ['PostgreSQL', 'Relational Databases', 'Data Modeling', 'Redis', 'MongoDB'],
  },
  {
    label: 'DevOps & Cloud',
    items: [
      'Docker',
      'Kubernetes',
      'CI/CD (GitLab)',
      'Blue-Green Deployments',
      'PaaS',
      '12-Factor App Design',
      'Linux / Unix Shell',
    ],
  },
  {
    label: 'AI Engineering',
    items: ['LangChain', 'LangGraph', 'Langfuse', 'AI-assisted PDLC'],
  },
  {
    label: 'Quality & Testing',
    items: ['Playwright', 'Selenium', 'Jest', 'Pytest', 'TDD / BDD'],
  },
  {
    label: 'Practices',
    items: [
      'System Architecture',
      'High-Availability Design',
      'Code & Design Reviews',
      'Mentoring',
      'Technical Documentation',
      'Agile',
    ],
  },
];

export const work = [
  {
    name: 'Yea by Co-op Bank',
    kind: 'Youth banking app',
    note: 'Pioneered on the integration layer I architected; built and shipped by the bank after the engagement.',
    href: 'https://yea.co-opbank.co.ke/',
    linkLabel: 'yea.co-opbank.co.ke',
  },
  {
    name: 'MCo-op Cash',
    kind: 'Retail banking app',
    note: 'The rebuilt Android app — running on the middleware foundation established during the project.',
    href: 'https://play.google.com/store/apps/details?id=com.mcoopcash.retail6',
    linkLabel: 'Google Play',
  },
  {
    name: 'KCEP — County Entities',
    kind: 'Government digital platform',
    note: 'Contributed to delivery of the digital platform supporting county-government entities.',
    href: 'https://www.co-opbank.co.ke/corporate/county-governments-and-county-entities/',
    linkLabel: 'co-opbank.co.ke',
  },
  {
    name: 'DigiFarm Buyer Portal',
    kind: 'Agri-tech payments platform',
    note: 'Built the MVP end-to-end — connecting buyers with farmers and handling quality-based payments. Internal admin platform available on request.',
    href: 'https://digifarmkenya.com/',
    linkLabel: 'digifarmkenya.com',
  },
];

export const education = [
  {
    title: 'BSc, Applied Computing',
    org: 'KCA University',
    period: '2023 — 2025',
  },
  {
    title: 'Software Engineering Program',
    org: 'Andela Kenya',
    period: '2018 — 2019',
  },
  {
    title: 'Kenya Certificate of Secondary Education',
    org: "St Columban's Secondary School",
    period: '',
  },
];
