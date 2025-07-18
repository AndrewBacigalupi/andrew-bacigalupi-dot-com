export const DATA = {
  name: "Andrew Bacigalupi",
  initials: "AB",
  avatarUrl: "/YSB.JPG", // Placeholder, add your image to public/
  work: [
    {
      company: "Tufts University",
      title: "Teaching Assistant",
      start: "Jan 2025",
      end: "Present",
      logoUrl: "/tuftsLogo.png",
      href: "https://www.tufts.edu/",
      badges: ["Teaching", "Leadership", "Python"],
      description: [
        "Provide feedback on student homework, labs, and projects for CS10 (intro Python).",
        "Grade coding assignments and exams.",
        "Lead office hours, fostering collaborative learning."
      ]
    },
    {
      company: "Tufts JumboCode",
      title: "Volunteer Software Developer",
      start: "Jan 2025",
      end: "Present",
      logoUrl: "/jumboCode.png",
      href: "https://www.jumbocode.org/",
      badges: ["React.js", "Python", "PostgreSQL", "GitHub", "Collaboration"],
      description: [
        "Address data challenges for Tufts University Counsel.",
        "Develop database and web app using Python and PostgreSQL."
      ]
    },
    {
      company: "Lavner Education",
      title: "STEM Instructor",
      start: "Jun 2025",
      end: "Aug 2025",
      logoUrl: "/lavnerLogo.png",
      href: "#",
      badges: ["STEM Education", "Leadership"],
      description: [
        "Led classrooms for kids ages 6-14 on robotics, CS, chess, and more.",
        "Collaborated to deliver engaging, safe camp experiences."
      ]
    },
    {
      company: "Securian Financial",
      title: "Actuarial Analyst Intern",
      start: "Mar 2023",
      end: "May 2023",
      logoUrl: "/securian.png",
      href: "https://www.securian.com/",
      badges: ["Data Analysis", "Finance", "Communication"],
      description: [
        "Improved investment models and data analysis.",
        "Prepared audits and revised quarterly reports."
      ]
    }
  ],
  education: [
    {
      school: "Tufts University",
      degree: "B.S. Computer Science (School of Engineering)",
      minors: "Pursuing minors in Philosophy and Mathematics",
      start: "2024",
      end: "2028",
      logoUrl: "/tuftsLogo.png",
      href: "https://www.tufts.edu/"
    },
    {
      school: "Highland Park Senior High School",
      degree: "Full International Baccalaureate Diploma",
      minors: "Summa Cum Laude, Honors in Mathematics and French",
      start: "2020",
      end: "2024",
      logoUrl: "/HPLogo.png",
      href: "#"
    }
  ],
  skills: [
    { title: "Python", logo: "/python.png" },
    { title: "Java", logo: "/java.png" },
    { title: "C/C++", logo: "/cpp.png" },
    { title: "HTML", logo: "/html.png" },
    { title: "CSS / Tailwind", logo: "/tailwind.png"},
    { title: "SQL / Postgres", logo: "/sql.png" },
    { title: "Next.js", logo: "/react.png" },
    { title: "Assembly", logo: "/assembly.png" },
    { title: "Git / GitHub", logo: "/github.png" },
    { title: "MediaPipe / Vision", logo: "/mediapipe.png" },
    { title: "Google Suite", logo: "/google.png"},
    { title: "SciPy / NumPy", logo: "/numpy.png"},
    { title: "Statistics / Analysis", logo: "/statistics.png" }
  ],

  projects: [
    {
      title: "LearnToScode",
      description: "Entry-level coding site for problem solving on large scale input data, giving learners hands on practice.",
      dates: "June 2025 - Present",
      technologies: ["Next.js", "TypeScript", "Tailwind", "Neon", "Drizzle", "GitHub OAuth"],
      href: "www.learn-to-scode-rho.vercel.app",
      image: "/lts.png",
      links: [
        {
          icon: "/www.png",
          type: 'Website',
          href: 'https://learn-to-scode-rho.vercel.app',
        },
        {
          icon: "/github.png",
          type: 'Source',
          href: 'https://github.com/andrewbacigalupi/learn-to-scode',
        }
      ]
    },
    {
      title: "Golf Swing Analysis Application",
      description: "Used Google’s MediaPipe and statistics to analyze golf swings. Integrated with MySQL and a TKinter GUI for visual analysis and stored results for users.",
      dates: "Jan - April 2024",
      technologies: ["MediaPipe", "MySQL", "SciPy", "TKinter", "Custom Statistics"],
      href: "#",
      image: "/golf.png",
      links: [
        {
          icon: "/github.png",
          type: 'Source',
          href: 'https://github.com/andrewbacigalupi/golf-swing-analysis',
        }
      ]
    },
    {
      title: "Tufts MBB In-Practice Stat Tracker",
      description: "Custom stat tracker connected to Google Sheets to streamline early-season data collection in practice. Includes original weighted statistics for shooting evaluation.",
      dates: "Sep 2024 - Present",
      technologies: ["Google Apps Script", "Google Sheets", "Statistical Analysis"],
      href: "www.learn-to-scode-rho.vercel.app",
      image: "/tuftsmbb.png",
      links: [
        {
          icon: "/github.png",
          type: 'Source',
          href: 'https://github.com/andrewbacigalupi/',
        }
      ]
    },

  ],
  hackathons: [],
  contact: {
    email: "mailto:andrew.bacigalupi@gmail.com"

  }
}; 