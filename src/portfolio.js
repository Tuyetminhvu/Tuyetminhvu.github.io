import emoji from "react-easy-emoji";

export const portfolio = {
backgroundImage: "/background.jpg",
  splashScreen: {
    enabled: false,
    duration: 0
  },

  greeting: {
    username: "Tuyet Minh Vu",
  title: "Hello! I'm Tuyet Minh Vu",
  subTitle: emoji(
    `I am a Computer Science undergraduate at the University of Utah, originally from Vietnam.

Passionate about building meaningful technology and transforming ideas into real-world solutions. 

In my free time, I enjoy hiking, photography, and traveling.`
  ),
  resumeLink: "/resume.pdf",
  profilePicture: "/profilepic.JPG",
  display: true
  }
,

  socialMediaLinks: {
    github: "https://github.com/Tuyetminhvu",
    linkedin: "https://www.linkedin.com/in/tuyetminhvu",
    gmail: "tmvu511@gmail.com",
    display: true
  },

  skillsSection: {
    title: "Skills",
    categories: [
      {
        label: "Programming Languages",
        items: ["Python", "Java", "C#", "C++", "JavaScript", "HTML/CSS"]
      },
      {
        label: "Frameworks & Libraries",
        items: ["PyTorch", "NumPy", "scikit-learn", "Blazor", "React"]
      },
      {
        label: "Tools & Technologies",
        items: ["Git/GitHub", "SQL", "Figma"]
      }
    ],
    display: true
  },

  educationInfo: {
    display: true,
    schools: [
      {
        schoolName: "University of Utah, Kahlert School of Computing",
        subHeader: "Bachelor of Science in Computer Science",
        duration: "Anticipated May 2028"
      }
    ]
  },

  workExperiences: {
    display: true,
    experience: [
      {
        role: "Officer",
        company: "Programming Club — Salt Lake Community College",
        date: "Sep 2024 – May 2025",
        desc:
          "Designed and moderated weekly coding challenges focused on problem-solving, data structures, and algorithms for 200+ students.",
        descBullets: [
          "Created prompts, edge cases, and test cases, and led solution walkthroughs with time and space complexity analysis.",
          "Reviewed submissions, provided written feedback, and facilitated peer discussions to strengthen algorithmic thinking.",
          "Planned and promoted workshops and technical events through outreach and social media."
        ]
      }
    ]
  },

  projects: {
    display: true,
    items: [
      {
        title: "Snake Game",
        date: "Nov 2025",
        description:
          "Real-time multiplayer Snake client with async TCP networking and event-driven architecture.",
        details:
          "Built a Blazor UI that renders snakes, walls, and power-ups with low-latency updates. Implemented client-side state sync by deserializing server JSON and triggering targeted UI redraws. Integrated SQL-backed endpoints for historical game data and per-player stats.",
        tags: ["C#", "Blazor", "HTML/CSS", "SQL"],
        link: "",
        thumbnail: "/assets/projects/snake1.png",
        gallery: [
          "/assets/projects/snake2.png",
          "/assets/projects/snake3.png"
        ]
      },
      {
        title: "Spreadsheet Application",
        date: "Oct 2025",
        description:
          "Spreadsheet engine with formula parsing, dependency tracking, and automatic recalculation.",
        details:
          "Implemented cycle detection and robust error handling for invalid formulas and circular references. Added JSON-based serialization for save/load and built a responsive Blazor UI for real-time cell editing.",
        tags: ["C#", "Blazor", "HTML/CSS"],
        link: "",
        thumbnail: "/assets/projects/sheet1.png",
        gallery: [
          "/assets/projects/sheet2.png",
          "/assets/projects/sheet3.png"
        ]
      },
      {
        title: "Smart Pet Feeder",
        date: "Apr 2025",
        description:
          "Arduino-based automated pet feeder with scheduled dispensing via servo control.",
        details:
          "Integrated sensors to monitor feeder state and added real-time status feedback on an LED matrix display. Added manual override controls to improve reliability and usability in edge cases.",
        tags: ["Arduino", "C++", "IoT"],
        link: "",
        thumbnail: "/assets/projects/pet1.png",
        gallery: [
          "/assets/projects/pet2.png",
          "/assets/projects/pet3.png"
        ]
      },
      {
        title: "Campus Navigation Tool",
        date: "Nov 2024",
        description:
          "Campus wayfinding tool with building search and shortest-path routing.",
        details:
          "Built a digitized sidewalk/intersection graph and created CSV datasets for buildings and edges. Developed a Java GUI with a visual path overlay for intuitive navigation.",
        tags: ["Java"],
        link: "",
        thumbnail: "/assets/projects/campus1.png",
        gallery: [
          "/assets/projects/campus2.png",
          "/assets/projects/campus3.png"
        ]
      }
    ]
  },

  thingsILove: {
    items: [
      {
        title: "Where I’m From",
note: "Huế, Vietnam — quiet streets, deep history, and comforting food.",
details:
  "Huế is my home: peaceful riverside sunsets, ancient temples, and the flavors I grew up with.",
        image: "/assets/love/hue1.jpeg",
        gallery: [
          "/assets/love/hue2.jpeg",
          "/assets/love/hue3.jpeg",
          "/assets/love/hue4.jpeg",
          "/assets/love/hue5.jpeg"
        ]
      },
      {
        title: "Favorite Places",
        note: "Sugar House Park, Coffee Garden, and Chinatown.",
        details:
          "I love strolling Sugar House Park, relaxing at Coffee Gardens, and exploring Chinatown.",
        image: "/assets/love/place1.jpg",
        gallery: [
          "/assets/love/place1.2.jpg",
          "/assets/love/place2.jpg",
          "/assets/love/place2.1.jpg"
        ]
      },
      
      {
        title: "Hidden Talent",
        note: "I can make my eyes look both sides :D",
        details:
          "It makes for a funny party trick and always gets a laugh.",
        image: "/assets/love/hiddentalent.jpg",
        gallery: [
          "/assets/love/hiddentalent.jpg"
        ]
      },
      {
        title: "Music I Love",
        note: "Vietnamese Indie, Country, Pop, and chill playlists.",
        details:
          "Soft indie for focus, country for road trips, and pop for energy.",
        image: "/assets/love/music.jpg",
        gallery: [
          "/assets/love/music.jpg"
        ]
      }
    ]
  },

  contactInfo: {
    display: true,
    title: emoji("Contact"),
    subtitle: "Feel free to reach out!",
    email: "tmvu511@gmail.com",
  }
};
