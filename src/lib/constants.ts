import { IProject } from "@/types"
import { IExperience } from "@/types/experience"

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
]

export const stackItem = [
  {
    name: "Javascript",
    image: "/icon/js.png",
  },
  {
    name: "Node JS",
    image: "/icon/nodejs.png",
  },
  {
    name: "Typescript",
    image: "/icon/typescript.png",
  },
  {
    name: "Express",
    image: "/icon/express.png",
  },
  {
    name: "Nest",
    image: "/icon/nestjs.png",
  },
  {
    name: "React",
    image: "/icon/react.png",
  },
  {
    name: "Next",
    image: "/icon/nextjs.png",
  },
  {
    name: "MySQL",
    image: "/icon/mysql.png",
  },
  {
    name: "PostgreSQL",
    image: "/icon/postgres.png",
  },
  {
    name: "MongoDB",
    image: "/icon/mongo.png",
  },
  {
    name: "Git",
    image: "/icon/git.png",
  },
  {
    name: "HTML",
    image: "/icon/html.png",
  },
  {
    name: "Tailwind",
    image: "/icon/tailwind.png",
  },
  {
    name: "Redis",
    image: "/icon/redis.png",
  },
  {
    name: "Sequelize",
    image: "/icon/sequelize.png",
  },
  {
    name: "Prisma",
    image: "/icon/prisma.png",
  },
  {
    name: "Vite",
    image: "/icon/vite.png",
  },
  {
    name: "CSS",
    image: "/icon/css.png",
  },
]

export const experienceList: IExperience[] = [
  {
    logo: "/images/experience/incit.jpeg",
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
      'The International Centre for Industrial Transformation, or INCIT (pronounced as "insight"), is an Environmental, Social, and Governance (ESG) institution which champions manufacturing transformation. I joined INCIT as a backend developer in October 2022 and have been working there ever since. Upon joining, I immediately took charge of several projects built from scratch through to production, collaborating with other developers and designers on the team.',
    responsibilities: [
      "Write clean, readable, and reusable code.",
      "Develop backend aplication for new project or features along with Product Manager",
      "Build scalable and reliable APIs.",
      "Design Database and create open-API for incoming project",
      "Collaborate with Front-end developers to integrate user-facing elements with server-side logic.",
    ],
  },
  {
    logo: "/images/experience/rsi.jpeg",
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
    logo: "/images/experience/super.jpeg",
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
    logo: "/images/experience/cdi.jpeg",
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
      'Castellum Digital Indonesia (CDI) is a company that focuses on "Health Information System (HIS) Development and Implementation," through the Digital Principles¹ approach and the use of DHIS2 Global Digital Public Good (DPG). I joined CDI as a remote intern while also working as a driver at the time. I only worked here for a month and didn\'t have the opportunity to contribute to any real projects.',
    responsibilities: ["Exploring typescript", "Design and implement REST Api for frontend developers"],
  },
]

export const portfolioList: IProject[] = [
  {
    name: "Hulu Cash",
    imagePath: "/portfolio/hulucash.png",
    description: "This application is an employee loan application, which makes the process faster and more accurate.",
    ownership: "This Product is fully owned by RSI Client.",
    status: "private" as const,
    techStack: ["Typescript", "NestJS", "Node.js", "Mysql", "Xendit", "Prisma ORM", "Digital Ocean Droplet"],
    role: "Lead Engineer",
    website: "",
    contribution:
      "serving as the engineering lead and being responsible for providing the backend application to support both web and mobile platforms",
  },
  {
    name: "SuperApp",
    imagePath: "/portfolio/super.png",
    description:
      "SuperApp is an e-commerce application that provides basic necessities and more, highly beneficial for grocers and wholesalers. This application was developed by PT. Krakatau Karya Abadi, my previous employer, and when I joined, it had already been downloaded by over 50,000 people on the Play Store",
    ownership: "This Product is fully owned by PT. Krakatau Karya Abadi",
    techStack: ["Nodejs", "Express", "Nest", "Mysql", "Ionic", "Flutter", "Firebase"],
    role: "Backend Engineer",
    status: "live" as const,
    website: "https://play.google.com/store/apps/details?id=com.superagent.agent&utm_source=website-header",
    contribution:
      "working on lighter tasks assigned by the tech leader, such as adjusting API responses and implementing improvements, but I didn't contribute much on the feature side because the application was already quite large when I joined.",
  },
  {
    name: "SIRI",
    imagePath: "/portfolio/siri.png",
    description:
      "The Smart Industry Readiness Index (SIRI) is the world’s first independent digital maturity assessment for manufacturers. It comprises a suite of frameworks and tools to help manufacturers – regardless of size and industry – start, scale, and sustain their manufacturing transformation journeys.",
    ownership:
      "This Product is fully owned by INCIT (International Center for Industrial Transformation).",
    techStack: ["Nodejs", "Nest", "Prisma", "PosgreSQL", "React", "Tailwind"],
    role: "Backend Developer",
    status: "live",
    website: "https://siri.incit.org/",
    contribution:
      "building the server-side application that powers the web app, in which I was involved in nearly 80% of all backend features",
  },
  {
    name: "CoSIRI",
    imagePath: "/portfolio/cosiri.png",
    description:
      "The Consumer Sustainability Industry Readiness Index (COSIRI) is a comprehensive framework and set of tools designed to assist manufacturers, regardless of size or industry, to embed sustainability into all their operations.",
    ownership:
      "This Product is fully owned by INCIT (International Center for Industrial Transformation).",
    techStack: ["Nodejs", "Nest", "Prisma", "PosgreSQL", "React", "Tailwind"],
    role: "Backend Developer",
    status: "live",
    website: "https://cosiri.incit.org/",
    contribution:
      "building the server-side application that powers the web app, where I was involved in over 50% of all backend features",
  },
  {
    name: "Karakterku",
    imagePath: "/portfolio/karakterku.png",
    description:
      "Karakterku is an application created as an aid for one of our clients who is completing their master's degree at a university.",
    ownership: "This Product is currently owned by Miftahul, My client",
    techStack: ["Nodejs", "React", "Tailwind", "Express"],
    role: "Backend Developer",
    status: "private" as const,
    website: "",
    contribution:
      "building the server-side application that powers the web app and being involved in all backend features, as I was the sole backend developer",
  },
  {
    name: "POS Walidain",
    imagePath: "/portfolio/pos.png",
    description:
      'This is a point of sales application created specifically for the management of goods at the "Walidain" store.',
    ownership: 'This Product is currently owned by "Walidain" store.',
    techStack: ["Nodejs", "Next", "React Native", "Tailwind", "Nest", "Prisma"],
    role: "Backend Developer",
    status: "private" as const,
    website: "",
    contribution: "building the server-side application that powers both web and mobile platforms",
  },
  {
    name: "Pilkada Sumbawa - NTB 2024",
    imagePath: "/portfolio/pilkada.png",
    description:
      "This website was specifically created for my family and friends who are eagerly awaiting the election results in NTB in 2024.",
    ownership: "This Product is fully owned by me",
    techStack: ["Nodejs", "React", "Tailwind"],
    role: "Developer",
    status: "beta" as const,
    website: "https://pilkada-sumbawa-2024.vercel.app/",
    contribution: "Building the website",
  },
  {
    name: "Bale Ballon",
    imagePath: "/portfolio/bale.png",
    description: "I created this website to help grow my family's business, which specializes in decoration services.",
    ownership: "This Product is fully owned by me",
    techStack: ["Nodejs", "React", "Tailwind"],
    role: "Developer",
    status: "beta" as const,
    website: "https://bale-ballon.vercel.app/",
    contribution: "Building the website",
  },
]

export const testimonial = [
  {
    name: "Alamanda Shantika",
    review:
      "Ary has been a true inspiration for all of us at BINAR. **His passion for learning**, regardless of the obstacles, reflects a resilience that inspires everyone. Ary's journey reminds us that age is never a limitation when it comes to growth and self-improvement. Where he stands today is the result of that persistence and hard work. We are proud to have been part of his story and can't wait to see him continue to inspire and create meaningful impact for Indonesia.",
    designation: "CEO Binar",
    linkedin: "https://id.linkedin.com/in/alamanda-shantika-santoso",
    image: "/images/alamanda.jpeg",
  },
  {
    name: "Andi Satriawan L",
    review:
      "Knowing Ary since his early days in tech has been inspiring. **His beginner's mindset and hunger** for growth make him stand out. He's always eager to learn, embrace challenges, and improve. A true asset to any team—keep shining, Ary! 🚀",
    designation: "Career Consultant",
    linkedin: "https://www.linkedin.com/in/andisatr",
    image: "/images/andi.jpeg",
  },
  {
    name: "Syarip Mas'ud",
    review:
      "Sampai testimoni ini saya buat, saya belum pernah bertemu dengan beliau, tetapi interaksi yang kami jalani selama bekerja bersama menunjukkan bahwa Ary adalah pribadi yang amanah dan dapat dipercaya. Ia selalu memberikan yang terbaik dalam pekerjaannya, menyelesaikan tugas dengan penuh tanggung jawab. **InsyaAllah beliau adalah insan yang tidak hanya kompeten secara teknis, tetapi juga memiliki akhlak yang baik.**",
    designation: "Fullstack Developer",
    linkedin: "https://www.linkedin.com/in/syarip-mas-ud-220023168/",
    image: "/images/syarif.jpeg",
  },
  {
    name: "Fajar Ega Firmansyah",
    review:
      "Mas ary merupakan sosok yang pekerja keras serta skill beliau dalam IT dan **memimpin tim** developer sangat baik.",
    designation: "Senior Mobile Developer",
    linkedin: "https://id.linkedin.com/in/fajar-ega-firmansyah-b60992145",
    image: "/images/fajar.jpeg",
  },
  {
    name: "Riovaldo Todoan",
    review:
      "Ary adalah seorang developer yang **cekatan dan sangat profesional.** Mampu membangun sebuah sistem yang solid dan sangat menyenangkan bekerja sama dengan beliau.",
    designation: "QA Engineer",
    image: "/images/rio.jpeg",
    linkedin: "https://www.linkedin.com/in/todoantodoan/",
  },
  {
    name: "Agus Setiawan",
    review:
      "Mas Ary adalah mentor saya di backend. **Beliau luar biasa**, tidak hanya menjelaskan teknikal skill yang kuat, tetapi juga memperlihatkan indahnya backend. Mas Ary sangat baik dan sabar menghadapi pertanyaan-pertanyaan saya. Tidak ada kata yang pas kecuali Jazakkalahu Khairan untuk ilmu dan semangatnya. Belajar dengan beliau selalu ada pengetahuan baru dan semangat baru.",
    designation: "Fullstack Developer",
    image: "/images/agus.jpeg",
    linkedin: "https://www.linkedin.com/in/agus-setiawan-50657a266",
  },
  {
    name: "Widodo",
    review:
      "Beliau adalah salah satu orang yang **berjasa dalam karir saya di dunia programming**, khususnya di bidang Backend Developer. Berawal kenal di salah satu media sosial sampai menjadi mentor saya dalam mendalami bidang ini.",
    designation: "Backend developer",
    image: "/images/widodo.jpeg",
    linkedin: "https://www.linkedin.com/in/widodo-341a45307",
  },
  {
    name: "Irfan Nesya",
    review:
      "Mas Ari seorang mentor yang baik dan **inspirator dalam career**, dia bersedia mengajarkan hal yang sama berulang kali jika masih belum bisa dimengerti dan menjelaskannya dengan sabar. Dengan pengalamannya yang luar biasa di bidang backend penjelasannya menjadi logis dan bisa diterima oleh semua orang.",
    designation: "Freelance",
    image: "/images/irfan.jpeg",
    linkedin: "https://www.linkedin.com/in/irfannesya",
  },
  {
    name: "Rabiatul A",
    review:
      "Tak ada kata yang cukup untuk menggambarkan betapa bersyukurnya saya memiliki mentor seperti Kak Arie. Dari awal hingga saat ini, setiap ilmu yang dibagikannya selalu disampaikan dengan penuh kesabaran dan ketulusan yang luar biasa, seolah beliau benar-benar memahami apa yang kami butuhkan untuk berkembang. ",
    designation: "Resting Entrepreneur",
    image: '',
    linkedin: "https://www.linkedin.com/in/findabbyhere-a-4a99a0336",
  },
]

// **Kak Arie bukan hanya menunjukkan profesionalisme sebagai seorang Backend Developer, tetapi juga hadir sebagai senior yang penuh rasa peduli**, yang selalu siap membimbing dengan sepenuh hati. Beliau tak hanya melampaui harapan saya, tetapi juga menunjukkan kebaikan dan ketulusan yang tak terhitung.

export const seoKeywords = [
  "Backend Developer Indonesia",
  "Node.js Developer Remote",
  "NestJS Specialist",
  "API Development Expert",
  "Database Design Consultant",
  "Fullstack JavaScript Developer",
  "TypeScript Backend Engineer",
  "Microservices Architecture",
  "REST API Development",
  "GraphQL Developer",
  "PostgreSQL Database Expert",
  "MySQL Developer",
  "MongoDB Specialist",
  "Redis Cache Implementation",
  "Prisma ORM Developer",
  "Express.js Backend",
  "Software Architecture Design",
  "Scalable System Development",
  "Backend Performance Optimization",
  "Cloud Infrastructure Setup",
]
