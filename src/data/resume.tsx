import { Icons } from "@/components/icons";
import { HomeIcon, Instagram, NotebookIcon, GitBranchIcon, BarChart2Icon, PenToolIcon, LayoutIcon, FlaskConicalIcon, BrainCircuitIcon, TableIcon } from "lucide-react";
import { Python } from "@/components/ui/svgs/python";
import { Java } from "@/components/ui/svgs/java";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { FileUser } from "lucide-react";



export const DATA = {
  name: "Andrew Bacigalupi",
  initials: "AB",
  url: "https://andrewbacigalupi.com",
  location: "Minneapolis, MN",
  locationLink: "https://www.google.com/maps/place/Minneapolis,+MN",
  description:"",
  summary:
    "I'm studying CS + Applied Math in the School of Engineering at Tufts. I'm passionate about impactful computing and solutions that better the lives of others. I'm most interested in software development and statistical analysis in the natural and social sciences, including medicine and public health, computational biology/ecology, non-profit organizations, or any similar work that seeks to make a difference.",
  avatarUrl: "/YSB.JPG",
  skills: [
  { name: "Python",                      icon: Python },
  { name: "Java",                        icon: Java },
  { name: "C/C++",                       icon: Icons.cpp },
  { name: "HTML",                        icon: Icons.html },
  { name: "CSS / Tailwind",              icon: Icons.css },
  { name: "SQL / Postgres",              icon: Postgresql },
  { name: "Next.js",                     icon: Icons.nextjs },
  { name: "Assembly",                    icon: Icons.assembly },
  { name: "Git / GitHub",                icon: GitBranchIcon },
  { name: "MediaPipe Computer Vision", icon: Icons.mediapipe },
  { name: "Google Suite",                icon: Icons.googleworkspace },
  { name: "SciPy / NumPy",               icon: Icons.numpy },
  { name: "Scikit-Learn",                icon: Icons.scikitlearn },
  { name: "Matplotlib/Seaborn",                  icon: Icons.matplotlib },
  { name: "Pandas",                      icon: Icons.pandas },
  { name: "Statistical Analysis",       icon: Icons.statistics },
  { name: "Software Design",             icon: BrainCircuitIcon },
],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/resume.pdf", icon: FileUser, label: "Resume" },
    { href: "/thoughts", icon: NotebookIcon, label: "Blog" }
  ],
  contact: {
    email: "andrew.bacigalupi@gmail.com",
    tel: "605-252-1868",
    social: {
      
      GitHub: {
        name: "GitHub",
        url: "https://github.com/andrewbacigalupi",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/the-andrew-bacigalupi/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/andrewbacigalupi/",
        icon: Icons.instagram,
        navbar: true,
      },
      
      email: {
        name: "Send Email",
        url: "mailto:andrew.bacigalupi@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Tufts University – CS Department",
      href: "https://www.tufts.edu/",
      badges: ["Teaching", "Python", "C++", "Leadership"],
      location: "Medford, MA",
      title: "Teaching Assistant",
      logoUrl: "/tuftsLogo.png",
      start: "January 2025",
      end: "Present",
      description:
        "TA for Programming Fundamentals (Spring 2025) and Data Structures (Spring 2026–Present). Provide constructive feedback on weekly homework, labs, and projects. Grade assignments and exams, and lead weekly office hours fostering collaborative learning and problem-solving skills.",
    },
    {
      company: "Tufts JumboCode",
      href: "https://www.jumbocode.org/",
      badges: ["React", "Next.js", "SQL", "Tailwind", "GitHub"],
      location: "Medford, MA",
      title: "Volunteer Software Developer",
      logoUrl: "/jumboCode.png",
      start: "January 2025",
      end: "Present",
      description:
        "Addressing disconnected communication issues for Commonwealth Kitchen, a local non-profit supporting small food businesses and food shelves. Leading a small team building a centralized communication app using Next.js, SQL, Tailwind CSS, and GitHub.",
    },
    {
      company: "Lavner Education",
      href: "https://lavnereducation.com/",
      badges: ["STEM Education", "Leadership"],
      location: "Remote / On-site",
      title: "STEM Instructor",
      logoUrl: "/lavnerLogo.png",
      start: "June 2025",
      end: "August 2025",
      description:
        "Led classrooms of kids ages 6–14 in programming, robotics engineering, chess, and computer skills. Collaborated with fellow counselors and management to deliver fun, engaging, and safe camp experiences.",
    },
    {
      company: "Securian Financial",
      href: "https://www.securian.com/",
      badges: ["Data Analysis", "Finance", "Excel"],
      location: "St. Paul, MN",
      title: "Actuarial Analyst Intern",
      logoUrl: "/securian.png",
      start: "March 2023",
      end: "May 2023",
      description:
        "Prepared audits by scheduling check-ins and revised quarterly report documents. Collaborated with analysts to brainstorm improvements to risk models and data analysis processes.",
    },
  ],
  education: [
    {
      school: "Tufts University",
      href: "https://www.tufts.edu/",
      degree:
        "B.S. Computer Science (School of Engineering), B.S. Applied Mathematics Minor in Philosophy",
      logoUrl: "/tuftsLogo.png",
      start: "2024",
      end: "2028",
    },
    {
      school: "Highland Park Senior High School",
      href: "#",
      degree: "Full International Baccalaureate Diploma",
      logoUrl: "/HPLogo.png",
      start: "2020",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Iterly",
      href: "https://learn-to-scode-rho.vercel.app",
      dates: "June 2025 – Present",
      active: true,
      description:
        "Entry-level learn-to-code site emphasizing problem solving on large-scale input data for hands-on, meaningful practice. Features educational articles, suggestions, and code/puzzle contributions.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Neon",
        "Drizzle",
        "GitHub OAuth",
      ],
      links: [
        {
          type: "Website",
          href: "https://iterly-learn.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/andrewbacigalupi/iterly-learn-to-code",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/iterly.png",
      video: "",
    },
    {
      title: "Tufts MBB In-Practice Stat Tracker",
      href: "#",
      dates: "September 2024 – Present",
      active: true,
      description:
        "Custom web app built with Google Apps Script and Sheets for in-practice stat tracking for the Tufts Men's Basketball team. Produces personnel insights and original weighted statistics to aid coaches' meetings and strategic decisions.",
      technologies: [
        "Google Apps Script",
        "Google Sheets",
        "Statistical Analysis",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/andrewbacigalupi/rac-stats",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/tuftsmbb.png",
      video: "",
    },
    {
      title: "Golf Swing Analysis Application",
      href: "#",
      dates: "January – April 2024",
      active: false,
      description:
        "Combined Google's MediaPipe library with original statistical measurements to quantify and analyze golf swings. Integrated results with a MySQL database accessible via a graphical user interface, comparing swings against professional benchmarks.",
      technologies: [
        "MediaPipe",
        "MySQL",
        "SciPy",
        "TKinter",
        "Custom Statistics",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AndrewBacigalupi/golf-swing-analysis",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/golf.png",
      video: "",
    },
  ],
  hackathons: [],
}