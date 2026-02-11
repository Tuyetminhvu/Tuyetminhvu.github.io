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
    softwareSkills: [
      "Java",
      "Python",
      "C#",
      "C++",
      "JavaScript",
      "HTML/CSS",
      "Arduino",
      "SQL",
      "Git/GitHub",
      "React",
      "Figma",
      "Canva"
    ],
    display: true
  },

  educationInfo: {
    display: true,
    schools: [
      {
        schoolName: "University of Utah, John & Marcia Price College of Engineering",
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

  contactInfo: {
    display: true,
    title: emoji("Contact"),
    subtitle: "Feel free to reach out!",
    email: "tmvu511@gmail.com",
  }
};
