export const siteConfig = {
  name: "Antoni Gawron",
  title: "Software Engineer",
  description: "Portfolio website of Antoni Gawron",
  accentColor: "#1d4ed8",
  social: {
    email: "antek.gawron@gmail.com",
    linkedin: "https://www.linkedin.com/in/antoni-gawron-213057302",
    github: "https://github.com/forbiddenrng",
  },
  aboutMe: 
    "I'm a software engineer focused on fullstack/backend development. I used to work a lot in React and Next.js creating SPA, but now I'm focuesd on mastering Python. I'm also a final-year computer science student at University of Gdańsk and an apprentice at OBR CTM S.A.",
  skills: ["JavaScript", "Python", "REST APIs", "SQL", "Linux", "Git", "Docker"],
  projects: [
    {
      name: "JobMatch.AI",
      description:
        "AI-powered platform for creating well fitted CVs and cover letters based on user profile, job offer and company description. Integrated with external job posting API for integrity.",
      link: "https://github.com/forbiddenrng/projekt-zespolowy/tree/develop",
      skills: ["FastAPI", "Next.js", "Auth0"],
    },
    {
      name: "Election emotions analysis ",
      description:
        "Analyzed emotions and content in tweets about two major candidates in 2025 Polish presidential elections. Gathered 14,000+ tweets from election campaign with custom scrape strategy. Created advanced scientific raport",
      link: "https://github.com/forbiddenrng/projekt-io/tree/master",
      skills: ["Python", "NLP", "Scraping", "HuggingFace"],
    },
    {
      name: "REST API for music albums",
      description:
        "The Albums project is a web application for managing a music catalog. The application enables organizing and viewing information about albums, songs, performers, and music genres. The system supports CRUD operations on all main domain entities, full-text search, filtering, and sorting of albums. The architecture is based on REST API and MVC patterns using Spring Boot.",
      link: "https://github.com/forbiddenrng/albums/tree/main",
      skills: ["Java", "Spring Boot", "Hibernate"],
    },
    {
      name: "Achievement game tracker",
      description:
        "Created CI/CD workflows for both GitHub and GitLab that builds, tests, run checks and builds Docker image. Used Kubernetes with Kustomize to create overlays for three different stages: dev, test and prod. Used Argo CD to sync with repo and deploy dev environment",
      link: "https://github.com/forbiddenrng/game-tracker-devops/tree/main",
      skills: ["CI/CD", "Docker", "Kubernetes", "GitOps"],
    },
  ],
  experience: [
    {
      company: "OBR CTM",
      title: "Apprentice",
      dateRange: "Jul 2025 - Present",
      bullets: [
        "Processed, analyzed and visualized marine vessels data",
        "Refactored Python function to Cython to reduce runtime",
        "Created scripts for automated installation & configuration of Debian",
      ],
    }
  ],
  education: [
    {
      school: "University Of Gdańsk",
      degree: "Practical Computer Science",
      dateRange: "2023 - Present",
      achievements: [
      ],
    }
  ],
};
