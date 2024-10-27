export const navMenu = [
  {
    title: "Home",
    link: "home",
  },
  {
    title: "Summary",
    link: "summary",
  },
  {
    title: "Technology",
    link: "stack",
  },
  {
    title: "Experience",
    link: "experience",
  },
  {
    title: "Portfolio",
    link: "portfolio",
  },
  {
    title: "Testimony",
    link: "testimony",
  },
  {
    title: "Contact",
    link: "contact",
  },
];

export const stackItem = [
  {
    name: "Javascript",
    image: "icon/js.png",
  },
  {
    name: "Node JS",
    image: "icon/nodejs.png",
  },
  {
    name: "Typescript",
    image: "icon/typescript.png",
  },
  {
    name: "Express",
    image: "icon/express.png",
  },
  {
    name: "Nest",
    image: "icon/nestjs.png",
  },
  {
    name: "React",
    image: "icon/react.png",
  },
  {
    name: "MySQL",
    image: "icon/mysql.png",
  },
  {
    name: "PostgreSQL",
    image: "icon/postgres.png",
  },
  {
    name: "Git",
    image: "icon/git.png",
  },
  {
    name: "HTML",
    image: "icon/html.png",
  },
  // {
  //   name: "CSS",
  //   image: "icon/css.png",
  // },
  {
    name: "Tailwind",
    image: "icon/tailwind.png",
  },
  {
    name: "Redis",
    image: "icon/redis.png",
  },
  {
    name: "Sequelize",
    image: "icon/sequelize.png",
  },
  {
    name: "Prisma",
    image: "icon/prisma.png",
  },
  {
    name: "Vite",
    image: "icon/vite.png",
  },
];

export const experienceList = [
  {
    logo: "experience/incit.jpeg",
    isActive: true,
    company: "INCIT",
    role: "Backend Developer",
    job: "Fulltime",
    start: "Oct 2022",
    end: "Present",
    location: "Remote",
    city: "Singapore",
    country: "Singapore",
    website: "https://incit.org/",
    description:
      "The International Centre for Industrial Transformation, or INCIT (pronounced as “insight”), is an Environmental, Social, and Governance (ESG) institution which champions manufacturing transformation. I joined INCIT as a backend developer in October 2022 and have been working there ever since. Upon joining, I immediately took charge of several projects built from scratch through to production, collaborating with other developers and designers on the team.",
    responsibilities: [
      "Write clean, readable, and reusable code.",
      "Develop backend aplication for new project or features along with Product Manager",
      "Build scalable and reliable APIs.",
      "Design Database and create open-API for incoming project",
      "Collaborate with Front-end developers to integrate user-facing elements with server-side logic.",
    ],
  },
  {
    logo: "experience/rsi.jpeg",
    isActive: false,
    company: "Ruang Solusi Internusa",
    role: "Lead Engineer",
    job: "Freelance",
    start: "Jan 2023",
    end: "Dec 2023",
    location: "Remote",
    city: "Jakarta",
    country: "Indonesia",
    website: "https://ruang-solusi.com/",
    description:
      "PT Ruang Solusi Internusa is a local startup company engaged in the technology and information sector. I joined RSI as a working partner, handling client projects alongside a development team consisting of UI/UX designers and several developers. I led the team through to project completion and am still actively providing solutions and advice to RSI in the context of software development.",
    responsibilities: [
      "Lead the engineering team.",
      "Provide business flow alongs with client request.",
      "Provide business flow documentation according to client requests.",
      "Create various documents related to ongoing work.",
      "Manage project tasks using Trello.",
      "Lead stand-up meetings.",
      "Design databases and create OpenAPI specifications for the project.",
      "Contribute to the backend development.",
      "Collaborate with other developers to integrate user-facing elements with server-side logic.",
    ],
  },
  {
    logo: "experience/super.jpeg",
    isActive: false,
    company: "Aplikasi Super (YC W18)",
    role: "Backend Engineer",
    job: "Fulltime",
    start: "Dec 2021",
    end: "Jun 2022",
    location: "Onsite",
    city: "Surabaya",
    country: "Indonesia",
    website: "https://superapp.id/",
    description:
      "Super is an application for resellers to sell FMCG goods within their communities. Super empowers community leaders in 2nd tier and 3rd tier cities to become self-made entrepreneurs. I joined Super at the end of 2021 as a backend engineer. The company's IT team is quite large, and I became part of the Vanguard team, which is responsible for developing the company's main product, the Super application itself.",
    responsibilities: [
      "Write clean, readable, reusable, and testable code.",
      "Build scalable and reliable APIs.",
      "Collaborate with Front-end developers to integrate user-facing elements with server-side logic.",
      "Work closely with product managers and other developers towards the completion of development assigned features.",
    ],
  },
  {
    logo: "experience/cdi.jpeg",
    isActive: false,
    company: "Castellum Digital Indonesia",
    role: "Junior Backend Developer",
    job: "Intern",
    start: "Oct 2021",
    end: "Nov 2021",
    location: "Remote",
    city: "Mataram",
    country: "Indonesia",
    website: "https://castellumdigital.id/",
    description:
      "Castellum Digital Indonesia (CDI) is a company that focuses on “Health Information System (HIS) Development and Implementation,” through the Digital Principles¹ approach and the use of DHIS2 Global Digital Public Good (DPG). I joined CDI as a remote intern while also working as a driver at the time. I only worked here for a month and didn’t have the opportunity to contribute to any real projects.",
    responsibilities: [
      "Exploring typescript",
      "Design and implement REST Api for frontend developers",
    ],
  },
];

export const portfolioList = [
  {
    name: "SIRI",
    imagePath: "portfolio/siri.png",
    description:
      "The Smart Industry Readiness Index (SIRI) is the world’s first independent digital maturity assessment for manufacturers. It comprises a suite of frameworks and tools to help manufacturers – regardless of size and industry – start, scale, and sustain their manufacturing transformation journeys.",
    ownership:
      "This Product is fully owned by INCIT (International Center for Industrial Transformation).",
    techStack: ["Nodejs", "Nest", "Prisma", "PosgreSQL", "React", "Tailwind"],
    role: "Backend Developer",
    contribution:
      "building the server-side application that powers the web app, in which I was involved in nearly 80% of all backend features",
  },
  {
    name: "CoSIRI",
    imagePath: "portfolio/cosiri.png",
    description:
      "The Consumer Sustainability Industry Readiness Index (COSIRI) is a comprehensive framework and set of tools designed to assist manufacturers, regardless of size or industry, to embed sustainability into all their operations.",
    ownership:
      "This Product is fully owned by INCIT (International Center for Industrial Transformation).",
    techStack: ["Nodejs", "Nest", "Prisma", "PosgreSQL", "React", "Tailwind"],
    role: "Backend Developer",
    contribution:
      "building the server-side application that powers the web app, where I was involved in over 50% of all backend features",
  },
  {
    name: "Hulu Cash",
    imagePath: "portfolio/hulucash.png",
    description:
      "This application is an employee loan application, which makes the process faster and more accurate.",
    ownership: "This Product is fully owned by RSI Client.",
    techStack: [
      "Typescript",
      "NestJS",
      "Node.js",
      "Mysql",
      "Xendit",
      "Prisma ORM",
      "Digital Ocean Droplet",
    ],
    role: "Lead Engineer",
    contribution:
      "serving as the engineering lead and being responsible for providing the backend application to support both web and mobile platforms",
  },
  {
    name: "SuperApp",
    imagePath: "portfolio/super.png",
    description:
      "SuperApp is an e-commerce application that provides basic necessities and more, highly beneficial for grocers and wholesalers. This application was developed by PT. Krakatau Karya Abadi, my previous employer, and when I joined, it had already been downloaded by over 50,000 people on the Play Store",
    ownership: "This Product is fully owned by PT. Krakatau Karya Abadi",
    techStack: [
      "Nodejs",
      "Express",
      "Nest",
      "Mysql",
      "Ionic",
      "Flutter",
      "Firebase",
    ],
    role: "Backend Engineer",
    contribution:
      "working on lighter tasks assigned by the tech leader, such as adjusting API responses and implementing improvements, but I didn't contribute much on the feature side because the application was already quite large when I joined.",
  },
  {
    name: "Karakterku",
    imagePath: "portfolio/karakterku.png",
    description:
      "Karakterku is an application created as an aid for one of our clients who is completing their master's degree at a university.",
    ownership: "This Product is currently owned Miftahul, My client",
    techStack: ["Nodejs", "React", "Tailwind", "Express"],
    role: "Backend Developer",
    contribution:
      "building the server-side application that powers the web app and being involved in all backend features, as I was the sole backend developer",
  },
];

export const testimonial = [
  {
    name: "Agus Setiawan",
    review:
      "Mas Ary adalah mentor backend yang luar biasa. Dia menjelaskan teknikal skill dengan cara menarik dan sabar menghadapi semua pertanyaan saya.",
    designation: "Guru SD",
    image:
      "https://media.licdn.com/dms/image/v2/D5635AQFvSQr-5MbuEQ/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1703048158142?e=1730620800&v=beta&t=ZsUSugwzyA0t2Tzqj5BHbdjFmzwK9cA48E6hI1_zsFE",
    linkedin: "https://www.linkedin.com/in/agus-setiawan-50657a266",
  },
  {
    name: "Widodo",
    review:
      "Beliau adalah orang yang berjasa dalam karir saya di dunia programming, khususnya di bidang Backend Developer. Berawal kenal di media sosial sampai menjadi mentor.",
    designation: "Backend developer",
    linkedin: "https://www.linkedin.com/in/widodo-341a45307",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQG1uZrilEkrKw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729311302259?e=1735776000&v=beta&t=x1Uip9yc5Nf3O8I3B3eW5reqCnSG7l4ofdhDueu2_jM",
  },
  {
    name: "Ronaldo",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem itaque id reprehenderit molestias ut vero voluptatem. Eveniet fuga vero explicabo adipisci debitis.",
    designation: "Football Player",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQFpnbUJSvKAfw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1692162602148?e=1735776000&v=beta&t=rRN4NPAH_VdNc93N26hbl8K0XblbabcEP-W_SJSASQI",
  },
  {
    name: "Fufufafa",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem itaque id reprehenderit molestias ut vero voluptatem. Eveniet fuga vero explicabo adipisci debitis.",
    designation: "Backend developer",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQFpnbUJSvKAfw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1692162602148?e=1735776000&v=beta&t=rRN4NPAH_VdNc93N26hbl8K0XblbabcEP-W_SJSASQI",
  },
];
