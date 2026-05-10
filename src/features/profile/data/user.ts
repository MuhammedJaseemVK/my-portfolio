import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Muhammed Jaseem",
  lastName: "VK",
  displayName: "Muhammed Jaseem",
  username: "muhammedjaseem",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  timeZone: "Asia/Kolkata",
  flipSentences: [
    "Fullstack Web Developer",
    "Mobile App Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
  ],
  address: "Kozhikode, Kerala, India",
  phoneNumber: "KzkyMzExODExNDgwNQ==", // E.164 format, base64 encoded (https://t.io.vn/
  secondPhoneNumber: "Kzk3MSA1NSA1NjMgMzI4OQ==",
  // base64-string-converter)
  email: "Y29udGFjdEBhYmR1bHJlaG1hbndhc2VlbS5tZQ==", // base64 encoded
  website: "https://abdulrehmanwaseem.me",
  jobTitle: "Fullstack Developer",
  jobs: [
    {
      title: "Software engineer",
      company: "Trenser Technology Solutions (P) Ltd.",
      website: "https://www.trenser.com/",
    },
    {
      title: "Founder",
      company: "ShopFlow",
      website: "/products/shopflow",
    },
  ],
  about: `
- **Software Engineer** with **2+ years of experience**, known for clean architecture and attention to detail.
- Expertise in **MERN stack** and **Next.js** building scalable web applications.
- Creator of [Fresher Park Kerala](https://fresher-park-kerala.onrender.com): A hassle free fresher job platform
  - Built with **MERN stack** (MongoDB, Express, React, Node.js) and **Puppeteer**
  - Lists fresher jobs across tech parks in kerala and updated daily
- **Passionate** about exploring new technologies and turning ideas into reality through polished, production-ready projects. Currently exploring **System Design** and aiming to venture into **AI**.
- **Mission:** Creating software that delivers exceptional user experiences while constantly adapting to stay at the forefront of technology.
`,
  avatar: "/images/me.jpg",
  ogImage: "/images/og-image-light.png",
  namePronunciationUrl: "/audio/abdulrehman.mp3",
  keywords: [
    "Muhammed Jaseem",
    "software engineer",
    "Muhammed Jaseem VK",
    "fullstack developer",
    "mern stack developer",
    "react developer",
    "nextjs developer",
    "mobile app developer",
    "nodejs developer",
    "nestjs developer",
  ],
  dateCreated: "2026-05-12", // YYYY-MM-DD
};
