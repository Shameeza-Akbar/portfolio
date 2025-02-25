/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Shameeza's Portfolio",
  description:
    "A front-end developer passionate about creating beautiful and user-friendly websites.",
  og: {
    title: "Shameeza Akbar Portfolio",
    type: "website",
    url: "http://shameezaakbar.com/",
  },
};

//Home Page
const greeting = {
  title: "Shameeza Akbar",
  logo_name: "ShameezaAkbar",
  nickname: "Shameeza",
  subTitle:
    "A front-end developer passionate about creating beautiful and user-friendly websites.",
  resumeLink: "https://images.app.goo.gl/A4VYe62GLjLmYhLx6",
  portfolio_repository:
    "https://github.com/Shameeza-Akbar/shameeza-akbar-portfolio",
  githubProfile: "https://github.com/Shameeza-Akbar",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Shameeza-Akbar",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shameeza-akbar-2192a1237/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://youtube.com/my",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:shameezaakbar@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/my",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/my9/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/my/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Front-End Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building responsive website front ends using ReactJS",
        "⚡ Creating application front end using Angular and VueJS",
        "⚡ Experience with modern JavaScript libraries and frameworks",
        "⚡ Designing and developing user interfaces with a focus on accessibility and user experience",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#DD0031",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/my/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/my",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/my",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/my",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@my",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/my",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Lahore College for Women University",
      subtitle: "Bachelor of Science in Computer Science",
      logo_path: "lc.png",
      alt_name: "lcwu",
      duration: "September 2020 - August 2024",
      descriptions: ["⚡ CGPA 3.81"],
    },
    {
      title: "Punjab Group of Colleges",
      subtitle: "Intermediate in Computer Science",
      logo_path: "pgc.png",
      alt_name: "pgc",
      duration: "September 2018 - April 2020",
      descriptions: ["⚡ 85% Marks in board", "⚡ 968/1100", "⚡ Grade A"],
    },
    {
      title: "M.D High School",
      subtitle: "Matric in Computer Science",
      logo_path: "md.png",
      alt_name: "md",
      duration: "September 2017 - April 2018",
      descriptions: ["⚡ 92% Marks in board", "⚡ 1012/1100", "⚡ Grade A"],
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "React-The Complete Guide 2025 (incl. Next.js, Redux)",
      subtitle: "- Issued Jan 2025",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-453f9fcc-9099-4d22-9d09-e7b4ca97db3c/",
      alt_name: "Udemy Logo",
      color_code: "#8C151599",
    },
    {
      title: "JavaScript Algorithms and Data Structures (Beta)",
      subtitle: "Issued Sep 2024",
      logo_path: "fcc.png",
      certificate_link:
        "https://freecodecamp.org/certification/Shameeza-Akbar/javascript-algorithms-and-data-structures-v8",
      alt_name: "FCC Logo",
      color_code: "#00000099",
    },
    {
      title: "Project management",
      subtitle: "Issued Aug 2023",
      logo_path: "google_logo.png",
      certificate_link:
        "https://coursera.org/share/a232f36b57ba1a1e78d7495060504a14",
      alt_name: "Google Logo",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups. I have also worked with some well established companies mostly as Front-end Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer",
          company: "ABC",
          company_url: "https://www.abc.com/en/",
          logo_path: "abc.png",
          duration: "June 2023 – Present",
          location: "Lahore, Pakistan",
          description:
            "At ABC Corporation, I've expanded my skillset to encompass full-stack development.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Front-End Developer",
          company: "XYZ",
          company_url: "https://www.xyz.com/en/",
          logo_path: "xyz.png",
          duration: "May 2020 – May 2023",
          location: "Lahore, Pakistan",
          description:
            "At XYZ Company, I focused on front-end development, specializing in React.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Teacher",
          company: "MD High School",
          company_url: "https://mdhigh/",
          logo_path: "md.png",
          duration: "June 2020 - April 2023",
          location: "Lahore, Pakistan",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "pic.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.my.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Lahore, Pakistan",
    locality: "San Jose",
    country: "Pakistan",
    region: "Lahore",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
