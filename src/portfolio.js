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
            `Computer Science undergraduate at the University of Utah, originally from Huế, Vietnam.\n\nI build software that's useful and meaningful — from multiplayer games to healthcare tools for kids.\n\nOutside of coding, I enjoy hiking, photography, and traveling.`
        ),
        resumeLink: "/resume.pdf",
        profilePicture: "/profilepic.JPG",
        display: true
    },

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
                items: ["Git/GitHub", "GitLab", "Unity", "SQL", "Figma"]
            }
        ],
        display: true
    },

    educationInfo: {
        display: true,
        schools: [
            {
                schoolName: "University of Utah, John & Marcia Price College of Engineering",
                subHeader: "Bachelor of Science in Computer Science",
                duration: "Expected May 2028"
            }
        ]
    },

    workExperiences: {
        display: true,
        experience: [
            {
                role: "Undergraduate Software Developer / Research Assistant",
                company: "Therapeutic Games and Apps Lab — University of Utah",
                date: "May 2026 – Present",
                desc:
                    "Building software for Color Me Healthy, a Unity/C# pediatric health game used clinically to help children ages 5–10 self-report symptoms."
            },
            {
                role: "Officer",
                company: "Programming Club — Salt Lake Community College",
                date: "Sep 2024 – May 2025",
                desc:
                    "Designed and led weekly coding challenges in data structures and algorithms for 200+ students.",
                descBullets: [
                    "Created problem sets with edge cases, test suites, and solution walk throughs covering time and space complexity.",
                    "Reviewed submissions and facilitated peer discussions to strengthen algorithmic thinking.",
                    "Organized workshops, competitions, and events through social media and classroom outreach."
                ]
            }
        ]
    },

    projects: {
        display: true,
        items: [
            {
                title: "Learning Management System",
                date: "Apr 2026",
                description:
                    "Full-stack LMS with automated grading, enrollment tracking, and real-time grade dashboards.",
                details:
                    "Designed a normalized relational database with constraints and indexing for scalable multi-table queries. Implemented weighted grade calculation logic and integrated a Blazor front-end with live SQL-backed data binding.",
                tags: ["C#", "SQL", "Blazor"],
                link: "",
                thumbnail: "",
                gallery: []
            },
            {
                title: "Cooking Educational Game",
                date: "Apr 2026",
                description:
                    "Physics-based cooking game that teaches recipe concepts through real-time ingredient simulations.",
                details:
                    "Engineered live physics using Box2D forces to simulate pouring, mixing, and whisking with distinct particle effects for dry and liquid ingredients. Designed a custom cursor interaction system with timer-based animations for tactile feedback.",
                tags: ["C++", "Qt", "Box2D"],
                link: "",
                thumbnail: "/assets/projects/cooking1.png",
                gallery: ["/assets/projects/cooking2.png", "/assets/projects/cooking3.png", "/assets/projects/cooking4.png"]
            },
            {
                title: "Real-Time Multiplayer Snake",
                date: "Nov 2025",
                description:
                    "Multiplayer Snake client with async TCP networking and event-driven architecture.",
                details:
                    "Built a Blazor UI rendering snakes, walls, and power-ups in real time with low-latency input handling. Optimized rendering via targeted component redraws from JSON server broadcasts. Integrated SQL-backed REST endpoints for leaderboard and post-game analytics.",
                tags: ["C#", "Blazor", "SQL", "TCP Networking"],
                link: "",
                thumbnail: "/assets/projects/snake1.png",
                gallery: ["/assets/projects/snake2.png", "/assets/projects/snake3.png"]
            },
            {
                title: "Spreadsheet Application",
                date: "Oct 2025",
                description:
                    "Spreadsheet engine with formula parsing, dependency graph tracking, and cascading recalculation.",
                details:
                    "Implemented cycle detection and real-time formula error feedback. Added JSON-based save/load and built a responsive Blazor UI for inline cell editing.",
                tags: ["C#", "Blazor", "HTML/CSS"],
                link: "",
                thumbnail: "/assets/projects/sheet1.png",
                gallery: ["/assets/projects/sheet2.png", "/assets/projects/sheet3.png"]
            },
            {
                title: "Smart Pet Feeder",
                date: "Apr 2025",
                description:
                    "Arduino-based automated pet feeder with scheduled dispensing and real-time status feedback.",
                details:
                    "Integrated sensors to monitor feeder state and displayed live status on an LED matrix. Added manual override controls for reliability in edge cases.",
                tags: ["Arduino", "C++", "IoT"],
                link: "",
                thumbnail: "/assets/projects/pet1.png",
                gallery: ["/assets/projects/pet2.png", "/assets/projects/pet3.png"]
            },
            {
                title: "Campus Navigation Tool",
                date: "Nov 2024",
                description:
                    "Wayfinding tool with building search and shortest-path routing across campus.",
                details:
                    "Built a digitized sidewalk/intersection graph with CSV datasets for buildings and edges. Developed a Java GUI with a visual path overlay for intuitive navigation.",
                tags: ["Java"],
                link: "",
                thumbnail: "/assets/projects/campus1.png",
                gallery: ["/assets/projects/campus2.png", "/assets/projects/campus3.png"]
            }
        ]
    },

    thingsILove: {
        items: [
            {
                title: "Where I'm From",
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
                details: "It makes for a funny party trick and always gets a laugh.",
                image: "/assets/love/hiddentalent.jpg",
                gallery: ["/assets/love/hiddentalent.jpg"]
            },
            {
                title: "Music I Love",
                note: "Vietnamese Indie, Country, Pop, and chill playlists.",
                details: "Soft indie for focus, country for road trips, and pop for energy.",
                image: "/assets/love/music.jpg",
                gallery: ["/assets/love/music.jpg"]
            }
        ]
    },

    contactInfo: {
        display: true,
        title: emoji("Contact"),
        subtitle: "Feel free to reach out!",
        email: "tmvu511@gmail.com"
    }
};