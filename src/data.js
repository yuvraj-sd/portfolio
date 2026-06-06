export const portfolioData = {
  profile: {
    name: "Yuvraj Singh",
    logoPath: "/logo.png",
    typingRoles: ["Frontend React Developer", "AI Explorer", "Product Builder"],
    aboutText:
      "As a student, I have worked building software and getting hands-on experience with technology for the last 3+ years. I like to work on ambitious challenges and develop thoughtful systems while working on my long-term ideas to make them into tangible products.",
    socials: {
      github: "https://github.com/yuvraj-sd",
      linkedin: "https://www.linkedin.com/in/yuvraj-singh-178a35313/",
      email: "mailto:imyuvi77@gmail.com"
    }
  },
  education: [
    {
      period: "2026 — 2027",
      title: "Intermediate Education & Advanced Analytics",
      details: [
        "Specialization: Core Physics, Chemistry, and Advanced Mathematics",
        "Academic Track: Intensive preparation for Engineering Entrance (JEE)",
      ]
    },
    {
      period: "2024 — 2025",
      title: "Secondary / Matriculation Education",
      details: [
        "Academic Standing: Secured 97% Aggregate Score",
        "Graduated with top-tier distinction honors for exceptional math and scientific excellence."
      ]
    }
  ],
  achievements: [
    {
      id: "olympiads",
      title: "Academic & STEM Olympiads",
      description: "Awarded multiple prestigious Olympiad Medals of Distinction for standout placement in science and mathematics. Secured high-ranking regional honors under competitive testing matrices.",
      icon: "Award"
    },
    {
      id: "athletics",
      title: "Athletic & Tournament Titles",
      description: "Earned multiple local and institutional tournament medals in competitive team sports. Refined real-time strategic play, collaborative synergy, and split-second problem-solving under extreme pressure.",
      icon: "Trophy"
    },
    {
      id: "honors",
      title: "Institutional Honors",
      description: "Consistently recognized as a top-tier academic performer throughout secondary schooling, receiving multiple physical scholastic trophies for excellence in STEM fields.",
      icon: "Medal"
    }
  ],
  leisure: [
    {
      title: "Competitive Team Sports",
      description: "Active player of Cricket and Volleyball. Utilizing high-tempo physical execution to sharpen situational awareness, spatial dynamics, and tight team communication frameworks.",
      icon: "Activity"
    },
  ],
  projects: [
    {
      id: "stumptrac",
      title: "StumpTrac",
      description:
        "A real-time cricket tournament tracking and live-scoring platform featuring dynamic statistics aggregation and a premium sports-dark aesthetic. Engineered for seamless game-state tracking and rapid data synchronization.",
      architecture: [
        "Flutter",
        "Dart",
        "Cloud Firestore",
        "Provider",
        "Firebase Hosting",
        "SharedPreferences"
      ],
      links: { github: "https://github.com/yuvraj-sd/strumptrac", live: "https://stumptrac.web.app" },
      images: ["/stumptrac1.png", "/stumptrac2.png"]
    },
    {
      id: "pulse",
      title: "Pulse App",
      description:
        "A high-performance, local-first desktop productivity application combining task management, Pomodoro tracking, and deep analytics. Built with a highly animated interface and optimized local data persistence.",
      architecture: [
        "Electron",
        "React 18",
        "TypeScript",
        "Zustand",
        "Dexie.js (IndexedDB)",
        "Tailwind CSS",
        "Framer Motion"
      ],
      links: { download: "https://drive.google.com/file/d/16Gm7fngQGpCaAQ-CGYfd9gFLQxXfVA_k/view?usp=drive_link" },
      images: ["/pulse1.png", "/pulse2.png"]
    },
    {
      id: "criminal-detection",
      title: "Real-Time Criminal Detection System",
      description:
        "An AI-powered full-stack surveillance application designed to detect and identify targeted individuals from live video feeds. Instantly streams alert telemetry and security logs to a centralized web dashboard.",
      architecture: ["Python", "OpenCV", "face_recognition", "React.js", "Firebase (Firestore)", "Tailwind CSS"],
      links: { github: "https://github.com/yuvraj-sd/criminal_detection" },
      images: ["/criminal_detection.png"]
    }
  ]
};