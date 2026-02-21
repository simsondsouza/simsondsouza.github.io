import {
  aim_logo,
  cmu,
  hits,
  icon,
  ros,
  voidrobotics,
  ureka,
  ci4_defense,
  coboticca,
  autobotsinc,
  lunar_ot,
  lunar_ft,
  lunar_rover,
  vm_1,
  vm_2,
  vm_3,
  vm_cad,
  vm_fc,
  tb_battery_data,
  tb_battery_data_plot,
  tb_battery_drain_equation,
  tb_burger_model,
  tb_distance_data,
  tb_infinity_path,
  tb_task_allocation,
  tb_time_data1,
  tb_time_data2,
  vas_block_diagram,
  vas_face_recognition_system_block_diagram,
  vas_lbph,
  vas_lbph_histogram,
  ai_assistant_project,
  lunar_roadster_project,
  task_allocation_project,
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiMicrosoftazure,
  SiNvidia,
} from "react-icons/si";

import {
  FaHardHat,
  FaRust,
  FaAward,
  FaRaspberryPi
} from "react-icons/fa";

import {
  FcLinux
} from "react-icons/fc";

import {
  IoIosNotificationsOutline
} from "react-icons/io";

import {
  FaGolang
} from "react-icons/fa6";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

import { GrDocker } from "react-icons/gr"; 

import rosicon from '../assets/ros_logo.png';
import gazeboicon from '../assets/gazebo_logo.png';
import solidworksicon from '../assets/solidworks_logo.png';
import fusion360icon from '../assets/fusion360_logo.png';
import matlabicon from '../assets/matlab_logo.png';
import scholarshipicon from '../assets/scholarship_logo.png';
import excellenceawardicon from '../assets/excellenceaward_logo.jpeg';

export const resumeLink = "https://drive.google.com/file/d/1zTkGrNp1QeLKBLjHGl3HHYGtLhWE0Odp/view?usp=sharing";
export const repoLink = "https://github.com/simsondsouza";

export const callToAction = "https://www.linkedin.com/in/simsondsouza";

export const navLinks = [
  { id: "home", title: "Home", route: null },
  { id: "skills", title: "Skills & Experience", route: null },
  { id: "education", title: "Education", route: null },
  { id: "achievements", title: "Achievements", route: null },
  { id: "projects", title: "Projects", route: "/projects" },
  { id: "blog", title: "Blog", route: "/blog" },
  { id: "contactMe", title: "Contact Me", route: null },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: cmu,
    title: "Carnegie Mellon University",
    degree: "Master of Science in Robotic Systems Development",
    duration: "August 2024 - May 2026",
    content1: "Current Coursework: Robot Mobility on Air, Land, & Sea; Computer Vision; Manipulation, Estimation and Control; Systems Engineering and Management for Robotics",
    //content2: "",
  },
  {
    id: "education-2",
    icon: hits,
    title: "Hindustan Institute of Technology and Science with Honors in Satellite Technology",
    degree: "Bachelor of Technology in Mechatronics Engineering",
    duration: "July 2019 - April 2023",
    content1: "Minors in Data Science Specialization deepen my understanding of how data drives AI model training.",
    content2: "Provided a comprehensive foundation in mechanical, electrical, and computer science, guiding my path toward robotics and exploring the intersection of space technologies and robotics applications.",
    content3: "Awarded the Certificate of Merit, Cash Prize, and Gold Medal for achieving the 1st rank in the Department of Mechatronics Engineering.",
    content4: "Recognized with a scholarship from the Hana Nanum Foundation for outstanding performance in both academics and extra-curricular activities"
  },
];

// Add your past achievments here for example - rankings in hackathons/events
export const achievements = [
  {
    id: "a-1",
    icon: excellenceawardicon,
    event: "Academic Excellence Award",
    position: "1st Rank",
    content1: "Awarded the Certificate of Merit, Cash Prize, and Gold Medal for achieving the 1st rank in the Department of Mechatronics Engineering.",
    content2: "",
    content3: ""
    // article: "",
    // project: "",
    // youtube: "",
  },
  {
    id: "a-2",
    icon: scholarshipicon,
    event: "Hana Scholarship",
    position: "",
    content1: "Recognized with a scholarship in undergrad from the Hana Nanum Foundation for outstanding performance in both academics and extra-curricular activities.",
    content2: "",
    content3: "",
    github: "",
  },
];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-3",
        icon: SiCplusplus,
        name: "C++",
      },
      {
        id: "pl-7",
        icon: SiC,
        name: "C",
      }
    ],
  },
  {
    title: "Tools / Operating Systems",
    items: [
      {
        id: "f-1",
        icon: rosicon,
        name: "ROS1/ROS2",
      },
      {
        id: "f-2",
        icon: matlabicon,
        name: "MATLAB",
      },
      {
        id: "f-3",
        icon: SiVisualstudiocode,
        name: "Vs Code",
      },
      {
        id: "f-4",
        icon: AiFillGithub,
        name: "Github",
      },
      {
        id: "f-5",
        icon: FcLinux,
        name: "Linux OS",
      },
      {
        id: "f-6",
        icon: GrDocker,
        name: "Docker",
      },
    ],
  },
  {
    title: "Simulation / Designing Software",
    items: [
      {
        id: "t-1",
        icon: gazeboicon,
        name: "Gazebo",
      },
      {
        id: "t-2",
        icon: solidworksicon,
        name: "Solidworks",
      },
      {
        id: "t-3",
        icon: fusion360icon,
        name: "Fusion360",
      },
    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "AIM Intelligent Machines, USA",
    logo: aim_logo,
    link: "https://aim.vision/",
    positions: [
      {
        title: "Machine Learning Engineer Intern",
        duration: "May 2025 - August 2025",
        content: [
          { text: "LiDAR Calibration Health Monitor", type: "header" },
          { text: "Real-time monitoring system to detect calibration issues using quantitative metrics.", type: "bullet", link: "" },
          { text: "Eliminates reliance on manual inspection and improves reliability.", type: "bullet", link: "" },
          { text: "LiDAR Calibration Validation", type: "header" },
          { text: "Offline Replay-based SLAM framework that evaluates LiDAR calibration with metrics.", type: "bullet", link: "" },
          { text: "Provides improved mount offsets with better map quality.", type: "bullet", link: "" },
        ],
      },
    ],
  },
  {
    organisation: "Void Robotics, USA",
    logo: voidrobotics,
    link: "https://www.voidrobotics.com/",
    positions: [
      {
        title: "Robotics Engineer Intern",
        duration: "April 2024 - July 2024",
        content: [
          {
            text: "Revamped ROS2 navigation for Voidwalking robot by implementing automatic waypoint generation and Googletest unit tests, improving repeatability and operational reliability through remote simulations.",
            link: "",
          },
          {
            text: "Utilized C++, Python, Embedded C, and Bash to test, optimize, and debug software for path/motion planning, firmware integration, sensor fusion and Docker deployment, enhancing system reliability.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Coboticca Automation Private Limited",
    logo: coboticca,
    link: "https://www.coboticca.com/",
    positions: [
      {
        title: "Robotics Engineer Intern",
        duration: "Dec 2022 - July 2023",
        content: [
          {
            text: "Engineered an autonomous vending robot for hotels, enabling the vending machine to dispense items directly into the robot for on-demand guest supplies delivery, thereby enhancing efficiency in service fulfillment.",
            link: ""
          },
          {
            text: "Tested autonomous delivery robots in hotels, refined navigation within ROS1, and led the transition to ROS2, resulting in a 30% increase in system performance and navigation.",
            link: ""
          },
          {
            text: "Gained expertise in designing robot frames, vending machine, and autonomous systems for industrial task automation.",
            link: ""
          }
        ],
      },
    ],
  },
  {
    organisation: "Ci4 - Autonomous Defense",
    logo: ci4_defense,
    link: "https://www.ci4.com/",
    positions: [
      {
        title: "Research Trainee - Satellite Technology Internship",
        duration: "Jul 2022 - Jul 2022",
        content: [
          {
            text: "Learned about the various factors involved in building a CubeSat and its integration with a launch vehicle.",
            link: "",
          },
          {
            text: "Visited Newtech Aerospace Pvt Ltd, Bangalore, India, gaining insights into the mounting of electronic components on PCB boards and witnessed quality inspection at each stage of the process to ensure the prevention of launch failures.",
            link: "",
          },
          {
            text: "Researched and prepared a comprehensive report on the design of a CubeSat payload focused on “Monitoring Greenhouse Gases and Predicting Future Atmospheric Levels.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Autobots Inc",
    logo: autobotsinc,
    link: "https://autobots-inc.com/",
    positions: [
      {
        title: "Robotics Engineer Intern",
        duration: "Jun 2022 - Jun 2022",
        content: [
          {
            text: "Proficiently used DobotStudio software, Robot Operating System (ROS), and Python to program a DOBOT Magician (4-axis robotic arm) for various tasks, including creating geometric drawings and executing pick-and-place operations.",
            link: ""
          },
          {
            text: "Acquired practical skills in programming and operating a six-axis industrial cobot using a Teach Pendant and Industrial-Grade Software.",
            link: ""
          },
        ],
      },
    ],
  },
  {
    organisation: "Ureka Education Group",
    logo: ureka,
    link: "https://ureka.co.uk/",
    positions: [
      {
        title: "Student Trainee - Data Science Internship",
        duration: "Nov 2020 - Dec 2020",
        content: [
          {
            text: "Acquired proficiency in programming techniques for creating machine learning models.",
            link: ""
          },
          {
            text: "Gained practical experience in data visualization, enhancing data-driven decision-making.",
            link: ""
          },
          {
            text: "Successfully developed a Tag Recommendation System utilizing advanced data scraping techniques, showcasing data engineering and problem-solving abilities.",
            link: ""
          },
        ],
      },
    ],
  },
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "Lunar ROADSTER",
    github: "https://github.com/Lunar-ROADSTER",
    link: "https://mrsdprojects.ri.cmu.edu/2025teami/",
    image: lunar_roadster_project,
    content:
      "The Lunar Robotic Operator for Autonomous Development of Surface Trails and Exploration Routes (Lunar ROADSTER) is an autonomous moon-working rover, capable of finding exploration routes and grooming the lunar surface to develop traversable surface trails. These groomed trails will become the backbone for the colonization of the Moon by enabling transportation, logistics, and enterprise development.",
    duration: "August 2024 - Present",
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-2",
        icon: SiCplusplus,
        name: "C++"
      },
      {
        id: "icon-3",
        icon: rosicon,
        name: "ROS"
      },
      {
        id: "icon-4",
        icon: gazeboicon,
        name: "Gazebo"
      },
      {
        id: "icon-5",
        icon: FcLinux,
        name: "Linux OS"
      },
      {
        id: "icon-6",
        icon: SiArduino,
        name: "Arduino"
      },
      {
        id: "icon-7",
        icon: SiNvidia,
        name: "Nvidia Jetsan"
      },
    ],
    details: [
      { type: "heading", content: "Project Overview", fontSize: "2rem", bold: true, color: "white", align: "center" },
      {
        type: "paragraph",
        content: [
          "The ",
          { type: "bold", content: "Lunar ROADSTER" },
          " is an autonomous moon-working rover for surface trail development.",
        ],
        fontSize: "1.2rem",
        fontStyle: "italic",
        align: "justify",
        color: "white",
      },
      {
        type: "paragraph",
        content: [
          "Learn more on the ",
          { type: "link", content: "official website", style: { href: "https://mrsdprojects.ri.cmu.edu/2025teami/" } },
          ".",
        ],
        align: "left",
        color: "gray",
      },
      {
        type: "subheading",
        content: "Problem Description",
        bold: true,
        underline: true,
        color: "teal",
      },
      {
        type: "paragraph",
        content: [`Humanity is preparing to return to the Moon, with the Artemis missions focusing on exploring the South Pole — a region rich in sites of interest. 
                  Establishing a circumnavigating route around the lunar pole will serve as a critical “highway” connecting these sites and enabling key activities such as transportation, human settlement, and resource extraction.
                  However, these assumptions rely on the terrain being flat and traversable, free from major topographical challenges. 
                  A mission to manipulate the lunar regolith in the circumnavigating path to make it more traversable for future missions is thus, a clear step forward. 
                  A robotic system can be designed to conduct these operations efficiently for extended durations.`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
      },
      {
        type: "paragraph",
        content: [`The Lunar Robotic Operator for Autonomous Development of Surface Trails and
                   Exploration Routes (Lunar ROADSTER) is an autonomous moon-working rover, capable
                   of finding exploration routes and grooming the lunar surface to develop traversable surface
                   trails. These groomed trails will become the backbone for the colonization of the Moon
                   by enabling transportation, logistics, and enterprise development.`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
      },
      {
        type: "image",
        src: lunar_rover,
        alt: "Lunar ROADSTER Rover",
        align: "center",  // You can use "left", "center", or "right"
        width: "30%",  // Optional: Specify width
        height: "auto",  // Optional: Specify height
        caption: "Fig 1: Lunar ROADSTER Rover",
        captionFontSize: "1rem", // Custom font size for the caption
        captionFontStyle: "italic", // Custom font style for the caption
        captionColor: "white", // Custom color for the caption
      },
      {
        type: "subheading",
        content: "Use Cases",
        bold: true,
        underline: true,
        color: "teal",
      },    
      {
        type: "paragraph",
        content: [`The process begins with the system receiving detailed maps of the user-specified latitude from prior exploration missions,
                   such as orbiters or exploratory rovers. Using this data, the system plans an optimal path
                   around the latitude. This path avoids un-gradable terrain and obstacles while selecting
                   craters and dunes as targets for regolith manipulation.`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
        indentation: "2rem",
      },
      {
        type: "paragraph",
        content: [`Once deployed, the system localizes itself using its surroundings and autonomously follows the planned path. Upon reaching a designated crater, the system plans the grooming
                   motion for its tools and begins manipulating the regolith. The rover pushes regolith from 
                   the crater rim into the crater to fill it, smoothing the terrain.`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
        indentation: "2rem",
      },
      {
        type: "paragraph",
        content: [`After completing the initial grooming, the system retreats to evaluate the groomed 
                   crater. If the terrain remains too steep or unsatisfactory for trail usability, the system 
                   autonomously returns to re-groom the crater. This grooming-evaluating cycle continues
                   iteratively until the desired surface quality is achieved. Throughout this process, the system updates the mission status in real-time for the user.`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
        indentation: "2rem",
      },
      {
        type: "paragraph",
        content: [`Once the surface meets the criteria, the system validates the completed work, informs
                  the user, and resumes its navigation along the planned path. This process repeats until 
                  the system reaches its final goal, leaving behind a groomed and navigable trail.`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
        indentation: "2rem",
      },          
      {
        type: "image",
        src: lunar_ot,
        alt: "Lunar ROADSTER Objectives Tree",
        align: "center",  // You can use "left", "center", or "right"
        width: "60%",  // Optional: Specify width
        height: "auto",  // Optional: Specify height
        caption: "Fig 2: Objectives Tree",
        captionFontSize: "1rem", // Custom font size for the caption
        captionFontStyle: "italic", // Custom font style for the caption
        captionColor: "white", // Custom color for the caption
      },
      {
        type: "subheading",
        content: "Functional Architecture",
        bold: true,
        underline: true,
        color: "teal",
      },    
      {
        type: "paragraph",
        content: [`Figure 3 illustrates the functional architecture of our system. 
                   The system receives three types of input: user input in the form of a map of the environment 
                   from the operational terminal, battery input as the electrical energy that powers the components, and 
                   environment input from the moonpit (worksite).`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
        indentation: "2rem",
      },
      {
        type: "image",
        src: lunar_ft,
        alt: "Lunar ROADSTER Functional Architecture",
        align: "center",  // You can use "left", "center", or "right"
        width: "50%",  // Optional: Specify width
        height: "auto",  // Optional: Specify height
        caption: "Fig 3: Functional Architecture",
        captionFontSize: "1rem", // Custom font size for the caption
        captionFontStyle: "italic", // Custom font style for the caption
        captionColor: "white", // Custom color for the caption
      },
      {
        type: "paragraph",
        content: [`The Communicate with User block serves as the critical interface between the user 
                   and the system. It transmits the map to the Plan Path algorithm and updates the user
                   with real-time job status information for active monitoring. The Plan Path algorithm
                   processes environmental information from the map to identify craters to groom and avoid.
                   These constraints are defined in the performance requirements (M.P.4 and M.P.5). Based
                   on this analysis, it generates precise waypoints near the craters requiring grooming and 
                   ends them to the Navigate block. Before initiating navigation, the robot undergoes 
                   localization through the Localize block, using information from the sensor stack to accurately 
                   determine its position within the environment. The Navigate block translates
                   the planned waypoints into motor commands for the chassis, which are executed by the
                   Traverse Terrain block, enabling the robot to maneuver through the moonpit and
                   approach the target crater effectively.`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
        indentation: "2rem",
      },
      {
        type: "paragraph",
        content: [`Once positioned near the crater, the Tool Planner is activated, sending motor commands to 
                   the Manipulate block to initiate tool operations, such as excavation and grading. 
                   The grooming process is then evaluated by the Validate block to determine if the 
                   crater meets the specified grooming criteria, as defined in the performance requirements(M.P.6). 
                   If validation fails, the system repeats the cycle, navigating the robot back to the position 
                   near the crater and restarting the tool operation. If grooming is successful, the Communicate with 
                   User block updates the user with the job status, and the system outputs a groomed trail. 
                   This iterative and modular workflow ensures precise grooming operations while maintaining 
                   active user monitoring and operational reliability.`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
        indentation: "2rem",
      },
      // {
      //   type: "paragraph",
      //   content: [
      //     "This is the first line of text.",
      //     "This is the second line with custom spacing.",
      //   ],
      //   style: { lineHeight: "2rem" }, // Adjust spacing between lines
      //   fontSize: "1rem",
      //   align: "justify",
      //   color: "gray",
      //   indentation: "2rem"
      // },  
      // {
      //   type: "youtube",
      //   src: "https://www.youtube.com/embed/dQw4w9WgXcQ", // YouTube embed URL
      //   align: "center", // Position: "center", "left", or "right"
      //   width: "30%", // Optional: Specify width
      //   height: "300px", // Optional: Specify height
      //   caption: "This is a caption for the video.",
      //   captionFontSize: "1rem", // Custom font size for the caption
      //   captionFontStyle: "italic", // Custom font style for the caption
      //   captionColor: "white", // Custom color for the caption
      // },
      // {
      //   type: "point",
      //   content: "Equipped with high-resolution cameras for vision processing.",
      //   fontSize: "1rem", 
      //   fontStyle: "normal", 
      //   color: "white",
      //   spacing: "1.8",  
      // },
      // {vas_face_recognition_block_diagram
      //   type: "mediaRow", // Custom type for side-by-side layout
      //   content: [
      //     {
      //       type: "image",
      //       src: "https://via.placeholder.com/400",
      //       alt: "Sample Image",
      //       caption: "An example image",
      //       captionFontSize: "1rem", // Custom font size for the caption
      //       captionFontStyle: "italic", // Custom font style for the caption
      //       captionColor: "white", // Custom color for the caption
      //       width: "400px",
      //       height: "250px",
      //     },
      //     {
      //       type: "youtube",
      //       src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      //       caption: "An example video",
      //       captionFontSize: "1rem", // Custom font size for the caption
      //       captionFontStyle: "italic", // Custom font style for the caption
      //       captionColor: "white", // Custom color for the caption
      //       width: "400px",
      //       height: "250px",
      //     },
      //   ],
      //   spacing: "20px", // Space between the items
      //   align: "center", // Optional alignment for the row
      // },
    ],
  },
  {
    id: "project-2",
    title: "Design and Development of IOT-Based Vending Machine Integrated with Delivery Robot",
    github: "",
    link: "https://drive.google.com/file/d/1zQS-sMAOI2JVRz42-QuHHmxsXBaA5Pqc/view?usp=sharing",
    image: vm_cad,
    content:
      "A smart vending machine and delivery robot system that allows guests to place orders through a website and receive supplies quickly, improving order speed and repeat purchases. The system also tracks inventory, alerts staff when items are running low, and ensures efficient delivery by avoiding obstacles along the way.",
    duration: "December 2022 - April 2023",
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-2",
        icon: SiCplusplus,
        name: "C++"
      },
      {
        id: "icon-3",
        icon: rosicon,
        name: "ROS"
      },
      {
        id: "icon-4",
        icon: gazeboicon,
        name: "Gazebo"
      },
      {
        id: "icon-5",
        icon: FcLinux,
        name: "Linux OS"
      },
      {
        id: "icon-6",
        icon: SiArduino,
        name: "Arduino"
      },
      {
        id: "icon-7",
        icon: FaRaspberryPi,
        name: "RaspberryPi"
      },
    ],
    details: [
      { type: "heading", content: "Project Overview", fontSize: "2rem", bold: true, color: "white", align: "center" },
      {
        type: "paragraph",
        content: [
          "Learn more about the project ",
          { type: "link", content: "here", style: { href: "https://drive.google.com/file/d/1zQS-sMAOI2JVRz42-QuHHmxsXBaA5Pqc/view?usp=sharing" } },
          ".",
        ],
        align: "left",
        color: "gray",
      },
      {
        type: "paragraph",
        content: [
          "A ",
          { type: "bold", content: "smart vending machine and delivery robot system" },
          " that allows guests to place orders through a website and receive supplies quickly, improving order speed and repeat purchases. The system also tracks inventory, alerts staff when items are running low, and ensures efficient delivery by avoiding obstacles along the way.",
        ],
        fontSize: "1.2rem",
        fontStyle: "italic",
        align: "justify",
        color: "white",
      },
      {
        type: "subheading",
        content: "Abstract",
        bold: true,
        underline: true,
        color: "teal",
      },
      {
        type: "paragraph",
        content: [`Advancements in mobile robotics, particularly in delivery robots, have revolutionized industries by increasing efficiency and productivity. 
                   Utilizing robots for room service delivery in hotels has proved beneficial by reducing labour costs, saving time, and increasing customer 
                   satisfaction. A vending machine is a self-service device that dispenses products or services when money is inserted. The integration of vending machines 
                   and mobile robots allows for on-demand delivery of items increasing storage capacity and less human intervention. The current trend of integrating robots 
                   in the hospitality industry has inspired me to embark on a project titled "Design and Development of Vending Mechanism for Dispensing Housekeeping Supplies On-Demand".`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
        indentation: "2rem",
      },
      {
        type: "paragraph",
        content: [`Some of the recently developed robots have dispensing mechanism within itself or a human loads item into robot tray. 
                   Research studies have shown the effectiveness and efficiency of using mobile robots for delivering items in hotels. 
                   This project is based on those previous developments and aims to build upon them. The focus of this project is on developing 
                   a vending machine with an automated dispensing mechanism that will be integrated with a mobile robot for on-demand delivery.`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
        indentation: "2rem",
      },
      {
        type: "paragraph",
        content: [`This project aims to design and develop a vending machine with an efficient dispensing mechanism for Runnr Joe, 
                   a delivery robot developed by "Coboticca Automation Private Limited". The dispensing mechanism will be triggered 
                   by guest orders via a web application, and the robot will safely dock at the dispensing spot using an ArUco marker-based algorithm. 
                   IoT technology will be integrated to track inventory and notify staff of stockouts, while also providing valuable data on consumer behavior. 
                   Additionally, a QR code detection system will ensure products are delivered to the correct guests, and notifications will be sent upon the robot's arrival at the doorstep.`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
        indentation: "2rem",
      },
      {
        type: "paragraph",
        content: [`The proposed system has the potential to improve guest services in hotels by providing on-demand delivery of housekeeping 
                   supplies using mobile robots. The vending machine and mobile robot will be tested and evaluated in a hotel, assessing their performance and impact 
                   on customer satisfaction. The successful implementation of the project will demonstrate the viability of using mobile robots to deliver items to hotel 
                   guests and provide a foundation for further research and development in this area.`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
        indentation: "2rem",
      },
      {
        type: "subheading",
        content: "Problem Statement",
        bold: true,
        underline: true,
        color: "teal",
      },
      {
          type: "point",
          content: `Relying on human labour for delivery services in hotels can result in human errors which 
                    can lead to decrease in hotel ratings and customer satisfaction.`,
          align: "justify",
          fontSize: "1rem", 
          fontStyle: "normal", 
          color: "white", 
      },
      {
        type: "point",
        content: `The robot should successfully avoid dynamic obstacles and locate itself in case of loss of
                  odometry due to wheel slippage.`,
        align: "justify",
        fontSize: "1rem", 
        fontStyle: "normal", 
        color: "white",  
      },
      {
        type: "point",
        content: `The dispensing mechanism must be designed to prevent items from getting stuck during dispensing.`,
        align: "justify",
        fontSize: "1rem", 
        fontStyle: "normal", 
        color: "white",
      },
      {
        type: "subheading",
        content: "Objectives of the Project",
        bold: true,
        underline: true,
        color: "teal",
      },
      {
        type: "point",
        content: `To design and develop an efficient dispensing mechanism.,
                  To trigger the dispensing mechanism through orders placed by guests via a web application.,
                  To safely dock the delivery robot in front of the vending machine at the 
                  dispensing spot using an ArUco marker-based docking algorithm.,
                  To integrate IoT technology to track vending machine inventory and notify hotel staff if 
                  any item goes out of stock.,
                  To provide valuable data and insights into consumer behaviour and purchasing patterns 
                  through IoT integration.,
                  To develop a QR code detection system for the delivery robot to ensure products are 
                  delivered to the correct guests.,
                  To send notifications to guests upon the delivery robot's arrival at their doorstep.`,
        align: "justify",
        fontSize: "1rem", 
        fontStyle: "normal", 
        color: "white", 
      },
      {
        type: "image",
        src: vm_cad,
        alt: "Vending Machine CAD",
        align: "center",  // You can use "left", "center", or "right"
        width: "20%",  // Optional: Specify width
        height: "auto",  // Optional: Specify height
        caption: "Fig 1: Vending Machine CAD",
        captionFontSize: "1rem", // Custom font size for the caption
        captionFontStyle: "italic", // Custom font style for the caption
        captionColor: "white", // Custom color for the caption
      },
      {
        type: "mediaRow", // Custom type for side-by-side layout
        align: "center",
        spacing: "10px",
        captionFontSize: "1rem",
        captionFontStyle: "italic",
        captionColor: "white",
        content: [
          {
            type: "image",
            src: vm_1,
            alt: "Vending Machine Isometric View",
            caption: "",
            width: "400px",
            height: "250px",
          },
          {
            type: "image",
            src: vm_2,
            alt: "Vending Machine Side View",
            caption: "Fig 2: Vending Machine",
            width: "400px",
            height: "250px",
          },
          {
            type: "image",
            src: vm_3,
            alt: "Vending Machine",
            caption: "",
            width: "400px",
            height: "250px",
          },
        ],
      },
      {
        type: "subheading",
        content: "System Working",
        bold: true,
        underline: true,
        color: "teal",
      },
      {
        type: "paragraph",
        content: [`The ordering process for guests in this system is facilitated through a dedicated website. 
                   The website program, operating on the Raspberry Pi of the robot, serves as the central platform 
                   for receiving and processing guest orders. When a guest places an order, the website program 
                   captures the relevant information and adds it to a queue. Once the first order is placed, the robot 
                   initiates its movement towards the vending machine. As subsequent orders are placed, they are sequentially 
                   appended to the queue, ensuring a First-In-First-Out (FIFO) order. Throughout this process, the robot continually 
                   checks its proximity to the vending machine to determine if it has reached its destination.`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
        indentation: "2rem",
      },
      {
        type: "image",
        src: vm_fc,
        alt: "Vending Machine Program Flowchart",
        align: "center",  // You can use "left", "center", or "right"
        width: "80%",  // Optional: Specify width
        height: "auto",  // Optional: Specify height
        caption: "Fig 3: Vending Machine Program Flowchart",
        captionFontSize: "1rem", // Custom font size for the caption
        captionFontStyle: "italic", // Custom font style for the caption
        captionColor: "white", // Custom color for the caption
      },
      {
        type: "paragraph",
        content: [`Upon reaching the vending machine, the robot communicates its status and transmits the 
                   details of the first three orders in the queue to the vending machine. This information is 
                   received by the vending machine, which then begins the process of dispensing the requested 
                   items in the specified order. While the vending machine handles the dispensing process, the robot continues to fulfil its 
                   delivery duties and simultaneously runs the GUI program. The GUI program allows new 
                   orders to be appended to the queue as they are placed by guests. Once the delivery is 
                   completed, the robot verifies the state of the queue. If there are pending orders in the queue, 
                   the robot returns to the vending machine to commence another round of order processing. 
                   This cycle continues until the queue becomes empty.`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
        indentation: "2rem",
      },
      {
        type: "paragraph",
        content: [`While the vending machine handles the dispensing process, the robot continues to fulfil its 
                   delivery duties and simultaneously runs the GUI program. The GUI program allows new 
                   orders to be appended to the queue as they are placed by guests. Once the delivery is 
                   completed, the robot verifies the state of the queue. If there are pending orders in the queue, 
                   the robot returns to the vending machine to commence another round of order processing. 
                   This cycle continues until the queue becomes empty. However, if the queue is found to be empty, 
                   indicating that all orders have been fulfilled, the robot adjusts its course and navigates towards the designated charging station. 
                   This ensures that the robot remains operational and ready for future orders while also maintaining its power supply.`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
        indentation: "2rem",
      },
      {
        type: "paragraph",
        content: [`By implementing this systematic approach, the system effectively manages the ordering process through the website, maintains the 
                   order queue, orchestrates the movement of the robot towards the vending machine, and coordinates with the vending machine for item 
                   dispensing. This seamless integration of processes enables efficient and uninterrupted service for guests while optimizing the robot's operational efficiency.`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
        indentation: "2rem",
      },
    ],
  },
  {
    id: "project-3",
    title: "Development of Task Allocation Algorithm for Autonomous Warehouse Robots",
    github: "",
    link: "https://drive.google.com/file/d/11Txdx3U9qqhdDhpMj8O8VOb_pJnVq-mn/view?usp=sharing",
    image: task_allocation_project,
    content:
      "This project involves coordinating TurtleBot3 robots using a centralized controller to collect and visualize data, including a battery drain time equation. A Python-based task allocation algorithm was designed to optimize task assignments based on factors such as completion time, robot status, and battery levels.",
    duration: "June 2022 - November 2022",
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-2",
        icon: SiCplusplus,
        name: "C++"
      },
      {
        id: "icon-3",
        icon: rosicon,
        name: "ROS"
      },
      {
        id: "icon-4",
        icon: gazeboicon,
        name: "Gazebo"
      },
      {
        id: "icon-5",
        icon: FcLinux,
        name: "Linux OS"
      },
      {
        id: "icon-6",
        icon: SiArduino,
        name: "Arduino"
      },
      {
        id: "icon-7",
        icon: FaRaspberryPi,
        name: "RaspberryPi"
      },
    ],
    details: [
      { type: "heading", content: "Project Overview", fontSize: "2rem", bold: true, color: "white", align: "center" },
      {
        type: "paragraph",
        content: [
          "Learn more about the project ",
          { type: "link", content: "here", style: { href: "https://drive.google.com/file/d/11Txdx3U9qqhdDhpMj8O8VOb_pJnVq-mn/view?usp=sharing" } },
          ".",
        ],
        align: "left",
        color: "gray",
      },
      {
        type: "paragraph",
        content: [
          "This project involves ",
          { type: "bold", content: "coordinating TurtleBot3 robots using a centralized controller" },
          " to collect and visualize data, including a battery drain time equation. A Python-based task allocation algorithm was designed to optimize task assignments based on factors such as completion time, robot status, and battery levels.",
        ],
        fontSize: "1.2rem",
        fontStyle: "italic",
        align: "justify",
        color: "white",
      },
      {
        type: "subheading",
        content: "Abstract",
        bold: true,
        underline: true,
        color: "teal",
      },
      {
        type: "paragraph",
        content: [`The latest advancements in field of research and technology especially in cyber physical systems 
                   have propelled its extensive inclusion in robotics. Cyber physical systems enable robots to communicate 
                   with humans and other robots in the surrounding environment and accomplish assigned tasks collaboratively. 
                   The recent trends in deployment of multiple robot systems in warehouses and search-rescue operations has 
                   inspired us to work on the project. Controlling a swarm of robots through ROS is simplified due to its highly intricate 
                   architecture of communication through nodes which enables sensor and control integration with ease. The 
                   interaction between robots and humans over a remote interface helps the operator to guide the robot which 
                   enables the implementation of the concept “Supervised Autonomy.” Autonomous Intelligent robot control is 
                   always the desired way forward but achieving that requires expensive controllers and higher levels of AI. 
                   We are trying to explore an effective way to control the robot remotely and we aim to restrict some 
                   cognitive decision making of the robot and stream the decision making over a remote interface through an 
                   operator which is termed as “cognitive collaboration.” This also helps in performing tasks in areas that 
                   pose high risk for humans to do it themselves.`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
        indentation: "2rem",
      },
      {
        type: "paragraph",
        content: [`This project involves developing and improving the software architecture for enabling multiple robot 
                  navigation and path planning. We intend to use multiple TurtleBot 3 Burger robots. We aim to achieve 
                  seamless communication between 2 or more TurtleBot 3 robots. It has been extensively researched upon and 
                  successfully achieved to avoid stationary obstacles based on a pre-built map. In this project, we like to 
                  extend it to also dynamic objects which were not present during mapping or enter the environment during 
                  robot task execution.`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
        indentation: "2rem",
      },
      {
        type: "image",
        src: tb_burger_model,
        alt: "TurtleBot3 Burger Model",
        align: "center",  // You can use "left", "center", or "right"
        width: "40%",  // Optional: Specify width
        height: "auto",  // Optional: Specify height
        caption: "Fig 1: TurtleBot3 Burger Model",
        captionFontSize: "1rem", // Custom font size for the caption
        captionFontStyle: "italic", // Custom font style for the caption
        captionColor: "white", // Custom color for the caption
      },
      {
        type: "subheading",
        content: "Objective of the Project",
        bold: true,
        underline: true,
        color: "teal",
      },
      {
        type: "paragraph",
        content: [`The objectives of the project would be on the software development of the swarm of robots which can 
                   adapt to their working environment. The subsequent challenge that would be tackled upon is development of 
                   a single point control module that would integrate all the robots in a single map and work together to 
                   complete all the allocated tasks. The task allocation would be based on the battery capacity remaining in 
                   the robot. The minor objectives of the robot include building a map using SLAM algorithms like Gmapping 
                   and localize the robots using AMCL algorithm and navigate using A* path search in that map while ensuring 
                   that any dynamic obstacles are avoided that appear during the task execution.`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
        indentation: "2rem",
      },
      {
        type: "subheading",
        content: "Battery Data Acquisition",
        bold: true,
        underline: true,
        color: "teal",
      },
      {
        type: "paragraph",
        content: [`The Battery Data needs to be acquired when the maximum possible power usage is done by the 
                   robot for the whole duration of the discharge of the battery. The solution to derive maximum power 
                   output from the battery is to make the robot move in a vertical lemniscate both in forward and reverse 
                   direction. The vertical lemniscate makes the differential drive robot to draw individual voltages to 
                   each of the motors and having to perform a continuous circular movement makes variable voltage supply 
                   to each motor which reverses in value when the robot is turning either left or right. The forward and 
                   reverse movement makes the motor driver to continuously change the polarity of supply for re-directing 
                   the robot movement. The LIDAR sensor is made functional as it is also would draw a significant amount of 
                   supply while movement in the total duration of the discharge. The vertical lemniscate movement is first 
                   performed using the teleoperation control and the velocity values are stored in a bag file which 
                   is played in a continuous loop for the whole duration of the discharge.`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
        indentation: "2rem",
      },
      {
        type: "image",
        src: tb_infinity_path,
        alt: "Vertical Lemniscate Movement",
        align: "center",  // You can use "left", "center", or "right"
        width: "20%",  // Optional: Specify width
        height: "auto",  // Optional: Specify height
        caption: "Fig 2: Vertical Lemniscate Movement",
        captionFontSize: "1rem", // Custom font size for the caption
        captionFontStyle: "italic", // Custom font style for the caption
        captionColor: "white", // Custom color for the caption
      },
      {
        type: "paragraph",
        content: [`The total duration of the discharge was estimated at around 90 to 100 minutes after 
                   conducting multiple iterations with each of the robot in the team. The battery data was obtained 
                   with the help of the ROS topic /BatteryState/voltage values on which an internal voltage 
                   measurement circuitry publishes the input voltage received by the OpenCR board and the data 
                   of collected in a bag file by subscribing and storing the ROS topic data and then acquired data 
                   in the rosbag is converted into a csv file. Then proper data filtering is performed and only 1 
                   battery status value is obtained for every 5 seconds which is a sufficient data samples to 
                   estimate and plot the Voltage vs Time graph.`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
        indentation: "2rem",
      },
      {
        type: "image",
        src: tb_battery_data,
        alt: "Turtlebot3 Battery Data",
        align: "center",  // You can use "left", "center", or "right"
        width: "20%",  // Optional: Specify width
        height: "auto",  // Optional: Specify height
        caption: "Fig 3: Turtlebot3 Battery Data",
        captionFontSize: "1rem", // Custom font size for the caption
        captionFontStyle: "italic", // Custom font style for the caption
        captionColor: "white", // Custom color for the caption
      },
      {
        type: "paragraph",
        content: [`The maximum voltage value attained at full charge theoretical is 12.6 volts but 
                   experimentally it was observed to be around 12.30 volts to 12.35 volts. The TurtleBot3 robot 
                   has an in-built alarm circuitry which alerts the user at 11.0 volts that the battery power is quite 
                   low and needs to be charged immediately to prevent damage to the battery pack. The robot is 
                   also designed to terminate the motor movement at the onset of the alarm which helps reduce 
                   the battery voltage drop significantly after the beeping has started. The minimum voltage level 
                   for the full battery discharge circle was experimentally set at 11.1 volts. Furthermore, the 
                   acquired battery data was plotted in Microsoft Excel software to visualize the discharge curve 
                   which gave a significant insight on how the voltage levels vary over the whole discharge cycle.`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
        indentation: "2rem",
      },
      {
        type: "image",
        src: tb_battery_data_plot,
        alt: "Voltage – Time Plot of Battery Data",
        align: "center",  // You can use "left", "center", or "right"
        width: "30%",  // Optional: Specify width
        height: "auto",  // Optional: Specify height
        caption: "Fig 4: Voltage – Time Plot of Battery Data",
        captionFontSize: "1rem", // Custom font size for the caption
        captionFontStyle: "italic", // Custom font style for the caption
        captionColor: "white", // Custom color for the caption
      },
      {
        type: "paragraph",
        content: [`A linear regression model was fitted on the battery data and the subsequent line 
                   equation was obtained for the voltage time relation which can be incorporated as one of the 
                   constraints for the task allocation algorithm.`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
        indentation: "2rem",
      },
      {
        type: "paragraph",
        content: [`The voltage time equation fitted on battery data is as follows:`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
        indentation: "2rem",
      },
      {
        type: "image",
        src: tb_battery_drain_equation,
        alt: "Battery Drain Time Equation",
        align: "center",  // You can use "left", "center", or "right"
        width: "20%",  // Optional: Specify width
        height: "auto",  // Optional: Specify height
        caption: "Fig 5: Battery Drain Time Equation",
        captionFontSize: "1rem", // Custom font size for the caption
        captionFontStyle: "italic", // Custom font style for the caption
        captionColor: "white", // Custom color for the caption
      },
      {
        type: "subheading",
        content: "Development of Centralized Control System",
        bold: true,
        underline: true,
        color: "teal",
      },
      {
        type: "paragraph",
        content: [`The development of the centralized control system required the distance data between 
                   the start positions of the robot and each of the loading destinations and the distance to the 
                   delivery point from the loading position. For simplicity for variables, the loading point is 
                   named as the task position while collection of the data. The distances are the sum of the 
                   Euclidean distances of each of the estimated waypoints of the closest possible estimated path 
                   of the robot which is analyzed based on visual inspections of multiple iterations of the robot`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
        indentation: "2rem",
      },
      {
        type: "image",
        src: tb_distance_data,
        alt: "Distance Data for TurtleBot3 robots",
        align: "center",  // You can use "left", "center", or "right"
        width: "80%",  // Optional: Specify width
        height: "auto",  // Optional: Specify height
        caption: "Fig 6: Distance Data for TurtleBot3 robots",
        captionFontSize: "1rem", // Custom font size for the caption
        captionFontStyle: "italic", // Custom font style for the caption
        captionColor: "white", // Custom color for the caption
      },
      {
        type: "paragraph",
        content: [`Subsequently the timing data to cover the above distances was also measured with the 
                   help of a calibrated stopwatch. 5 iterations of each to and fro movement was done by manual 
                   assignment of the tasks to the robots and the timing data for both the robot was acquired. The 
                   average time of the movement was determined as the final timing for movement. The acquired 
                   data is tabulated as shown below:`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
        indentation: "2rem",
      },
      {
        type: "image",
        src: tb_time_data1,
        alt: "Timing Data for TurtleBot3 [Turtlebot3 Burger 1]",
        align: "center",  // You can use "left", "center", or "right"
        width: "80%",  // Optional: Specify width
        height: "auto",  // Optional: Specify height
        caption: "Fig 7: Timing Data for TurtleBot3 [Turtlebot3 Burger 1]",
        captionFontSize: "1rem", // Custom font size for the caption
        captionFontStyle: "italic", // Custom font style for the caption
        captionColor: "white", // Custom color for the caption
      },
      {
        type: "image",
        src: tb_time_data2,
        alt: "Timing Data for TurtleBot3 [Turtlebot3 Burger 2]",
        align: "center",  // You can use "left", "center", or "right"
        width: "80%",  // Optional: Specify width
        height: "auto",  // Optional: Specify height
        caption: "Fig 8: Timing Data for TurtleBot3 [Turtlebot3 Burger 1]",
        captionFontSize: "1rem", // Custom font size for the caption
        captionFontStyle: "italic", // Custom font style for the caption
        captionColor: "white", // Custom color for the caption
      },
      {
        type: "paragraph",
        content: [`Based on the data, a control algorithm is scripted in python which checks the robot 
                   battery state in every loop iteration and assigns the task based on the total distance, total time 
                   and the minimum required battery power for the movement above the set buffer of 11.15V 
                   volts. The task allocation algorithm first initializes the tasks, stores all the assigned tasks in a 
                   list data structure and keeps track of the completed tasks. On basis of the availability of the robot, current location of the robot, 
                   the control algorithm would assign the task to the robot. The scenario for task allocation based on the consideration 
                   that both robots are available for task assignment with sufficient battery power available and 
                   ready at the respective home positions, the algorithm task assignment and estimated robot path would be as shown below:`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
        indentation: "2rem",
      },
      {
        type: "image",
        src: tb_task_allocation,
        alt: "Task Allocation and Estimated Path of TurtleBot3 robots",
        align: "center",  // You can use "left", "center", or "right"
        width: "80%",  // Optional: Specify width
        height: "auto",  // Optional: Specify height
        caption: "Fig 9: Task Allocation and Estimated Path of TurtleBot3 robots",
        captionFontSize: "1rem", // Custom font size for the caption
        captionFontStyle: "italic", // Custom font style for the caption
        captionColor: "white", // Custom color for the caption
      },
      {
        type: "paragraph",
        content: [`The robots indicated in the above image are the starting positions of the TurtleBot1 and 
                   TurtleBot3. The shaded circles are the delivery locations of the robots. To avoid collision 
                   between robots, there are two different delivery locations of the robots. After assigning the 
                   task, the robot will start moving at the estimated path but it will not be the same in case due to 
                   intervention of dynamic obstacle. The robot will avoid dynamic obstacle and either rotate left 
                   or right and estimate a new path to reach the goal.`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
        indentation: "2rem",
      },
      {
        type: "subheading",
        content: "Project Implementation Summary",
        bold: true,
        underline: true,
        color: "teal",
      },
      {
        type: "paragraph",
        content: [`The study for implementation of a homogeneous team of robots that co-ordinate among the 
                   team with the supervision of a centralized controller to complete all the tasks available to be 
                   completed is successfully demonstrated on educational robots like TurtleBot3 Burger robots. 
                   The parameters like battery state of the individual robot, time required to complete the tasks, 
                   the distance needed to be travelled are acquired, tabulated, and visualized for the proper 
                   demonstration of the task allocation algorithm. The centralized controller requires all the data 
                   to be centrally stored and computed on a single high performance external system which can 
                   easier for fault detection but the breakdown of the centralized system would culminate in the 
                   total shutdown of the automation system. The project assumed the tasks to be similar in nature 
                   and considered every robot to able to perform every task efficiently, although variations in the 
                   nature of the task can vary the battery discharge and cause failures in task accomplishments.`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
        indentation: "2rem",
      },
      {
        type: "paragraph",
        content: [`The mapping of the environment was performed using Gmapping Algorithm which gave best 
                   results when the comparative study of all algorithms was previously performed in the due 
                   course of a research study previously conducted. The navigation and localization was carried 
                   out with the help of AMCL algorithm which provided good results and got incorporated into 
                   the task allocation algorithm and took lower computation on the centralized control unit when 
                   tested in the real time implementation. Moreover, the usage of RRT had to be restricted as the 
                   nodal tree data needs to be generated while mapping for the implementation of the algorithm 
                   and Gmapping being a occupancy grid based mapping system fails to do so. The dynamic 
                   obstacle avoidance algorithm was implemented such that the robots will not collide with each 
                   other and deviate the bare minimum towards the right or left to re-direct to another path and 
                   subsequently arrive at the target location.`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
        indentation: "2rem",
      },
    ],
  },
  {
    id: "project-4",
    title: "Development of Interactive Visual Recognition Assistant Bot",
    github: "",
    link: "https://ieeexplore.ieee.org/document/10084243",
    image: ai_assistant_project,
    content:
      "A Voice Assistant System was created using Python and Natural Language Processing to understand user commands and deliver human-like responses, with features like wake word detection, news fetching, and app launching. It also integrated face recognition for personalized communication and was designed to operate seamlessly on both Windows and Linux systems, ensuring broad accessibility.",
    duration: "January 2022 - May 2022",
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-2",
        icon: SiCplusplus,
        name: "C++"
      },
      {
        id: "icon-3",
        icon: rosicon,
        name: "ROS"
      },
      {
        id: "icon-4",
        icon: gazeboicon,
        name: "Gazebo"
      },
      {
        id: "icon-5",
        icon: FcLinux,
        name: "Linux OS"
      },
      {
        id: "icon-6",
        icon: SiArduino,
        name: "Arduino"
      },
      {
        id: "icon-7",
        icon: FaRaspberryPi,
        name: "RaspberryPi"
      },
    ],
    details: [
      { type: "heading", content: "Project Overview", fontSize: "2rem", bold: true, color: "white", align: "center" },
      {
        type: "paragraph",
        content: [
          "Learn more about the project: ",
          { type: "link", content: "Publication", style: { href: "https://ieeexplore.ieee.org/document/10084243" } },
          " and ",
          { type: "link", content: "Project Report", style: { href: "https://drive.google.com/file/d/1WwjmJoBKLoCkkAM4GM290fF0vf65li6l/view?usp=sharing" } },
        ],
        align: "left",
        color: "gray",
      },
      {
        type: "paragraph",
        content: [
          "A ",
          { type: "bold", content: "Voice Assistant System" },
          " was created using Python and Natural Language Processing to understand user commands and deliver human-like responses, with features like wake word detection, news fetching, and app launching. It also integrated face recognition for ",
          { type: "bold", content: "personalized communication" },
          " and was designed to operate seamlessly on both Windows and Linux systems, ensuring broad accessibility.",
        ],
        fontSize: "1.2rem",
        fontStyle: "italic",
        align: "justify",
        color: "white",
      },
      {
        type: "subheading",
        content: "Abstract",
        bold: true,
        underline: true,
        color: "teal",
      },
      {
        type: "paragraph",
        content: [`The latest advancements have rapidly developed the field of robotics especially robots that can 
                   communicate with humans like friends and provide a personal touch in their lives. Assistive 
                   robots are beneficial for people with disabilities and elderly people by helping them in their 
                   daily chores and improving their day-to-day living. The interaction between robots and humans 
                   over voice commands through voice assistant systems like Alexa, Siri, Cortana, Bixby, Google 
                   Assistant etc., have called for research in the field of Human Language Processing. With the 
                   use of NLP (Natural Language Processing), NLU (Natural Language Understanding) and NLG 
                   (Natural Language Generation), Computer Vision, robots can understand human language by 
                   breaking down the spoken sentence into 3 parts; Wake word, Invocation name, Utterance and 
                   find the intent using the keywords extracted. Voice control is an effective way to control the 
                   robot and also helps in performing task in areas that pose high risk for humans to enter. AI 
                   powered chatbots for contactless screening of Corona Virus symptoms, Assistive robots to 
                   deliver food, medication and other necessities etc. have been quite beneficial.`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
        indentation: "2rem",
      },
      {
        type: "paragraph",
        content: [`This project involves developing and improving the software architecture of an Assistive Robot 
                   that can substitute humans in areas that are not advisable for humans especially in hospitals 
                   where services rendered to the patients directly through human contact can cause spread of 
                   infections. The robot will feature voice control system which can be operated using voice 
                   commands as well as have one-to-one personalized communication with the patients about 
                   general topics which makes the patients feel comfortable and also provide an interface for 
                   doctors to communicate with the patients. The robot can also provide answers to questions 
                   asked by the patients by searching for the answers over the internet. The robot is developed so 
                   that after a few interactions with the patient, the robot can recognize the patient by name and 
                   recognize it through face recognition techniques.`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
        indentation: "2rem",
      },
      {
        type: "subheading",
        content: "Objective of the Project",
        bold: true,
        underline: true,
        color: "teal",
      },
      {
        type: "paragraph",
        content: [`The objectives of the project would mainly focus on the software development of the voice 
                   assistant system which is adaptable to its working environment. The subsequent challenge that 
                   would be tackled upon is development of a face recognition module that would integrate with 
                   the voice analysis module and work together to deliver personalized communication capabilities to the owner of the robot. Other objectives of the robot include the mapping of the 
                   working environment where implementation of ROS framework would be mainly focussed 
                   upon and also use of manipulator unit to pick up and transport small scaled items to the target location.`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
        indentation: "2rem",
      },
      {
        type: "subheading",
        content: "Phases of Face Recognition Process",
        bold: true,
        underline: true,
        color: "teal",
      },
      {
        type: "paragraph",
        content: [`The end-to-end execution of the Face recognition process is characterized into four major suballocations which are namely: 
                   face detection, face alignment, feature extraction, and face recognition.`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
        indentation: "",
      },
      {
        type: "point",
        content: `Face Detection: This is first of the steps where the algorithm needs to finalize whether there 
                  is a human face or not in the field of view of the recognizer and also locate the faces in the 
                  image. It is a usual practice among the community to point out the detected the faces within 
                  rectangles that generally cover the whole face.,
                  Face Alignment: This is a secondary step but is equally necessary so that have match correlation 
                  between the detected faces and the known faces in the database. This process 
                  involves the normalization of the detected faces and this ensure that the face is consistent with 
                  atleast one of the faces in the trained database if at all the end user is an authorized user. The 
                  normalization of the detected faces helps in matching the geometry and photometrics of the 
                  faces and ensures higher confidence level to be achieved in the recognition.,
                  Feature Extraction. After the face is detected; salient features need to be extracted from 
                  the person face. Although every recognizer has its independent methodology that it deploys 
                  while in process to extract and reject features or valuable facial assets; the common aim of the 
                  recognizers is to maximize the feature extraction to improve the recognition process.,
                  Face Recognition. This is the final step of the recognition pyramid which is responsible for 
                  performing the matching of the detected face against one or more already known faces from 
                  the trained database. The final detection result is given based on the maximum confidence level 
                  value achieved by the recognizer during the iterations done over each of the matching phases 
                  for every individual face.`,
        align: "justify",
        fontSize: "1rem", 
        fontStyle: "normal", 
        color: "white", 
      },
      {
        type: "subheading",
        content: "Working of LBPH Face Recognizer",
        bold: true,
        underline: true,
        color: "teal",
      },
      {
        type: "paragraph",
        content: [`Based on the lighting limitations of the Eigenfaces and Fisherfaces Recognizer and taking into 
                   notice the low training data requirement of Local Binary Pattern Histograms (LBPH) algorithm, 
                   after preliminary testing the LBPH algorithm looks ideal for the assistive robot. The 
                   personalized communication theoretical understanding of how the algorithm evaluates every single image is important the training process is as follows:`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
        indentation: "2rem",
      },
      {
        type: "image",
        src: vas_lbph,
        alt: "Lopez and Ruiz; Local Binary Patterns applied to Face Recognition",
        align: "center",  // You can use "left", "center", or "right"
        width: "40%",  // Optional: Specify width
        height: "auto",  // Optional: Specify height
        caption: "Fig 1: Lopez and Ruiz; Local Binary Patterns applied to Face Recognition",
        captionFontSize: "1rem", // Custom font size for the caption
        captionFontStyle: "italic", // Custom font style for the caption
        captionColor: "white", // Custom color for the caption
      },
      {
        type: "point",
        content: `The LBPH algorithm creates a 3x3 window and moves the window across every possible combination of the image.,
                  As the window performs every move; the central pixel is compared with its surrounding pixels and a corresponding 
                  value of 0/1 is given to the pixel using this methodology:`,
        align: "justify",
        fontSize: "1rem", 
        fontStyle: "normal", 
        color: "white", 
      },
      {
        type: "paragraph",
        content: [`a. Surrounding Pixel Value >= Central Pixel Value, the value 1 is assigned.`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
        indentation: "1rem",
      },
      {
        type: "paragraph",
        content: [`b. Surrounding Pixel Value < Central Pixel Value, the value 0 is assigned.`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
        indentation: "1rem",
      },
      {
        type: "point",
        content: `The 0/1 values that occupy the 3x3 window are read in clockwise order and will a 8-bit 
                  binary pattern that localizes to the image and creates a list of local binary patterns,
                  These local binary patterns are converted into decimal values using the binary to decimal 
                  conversion and subsequent histogram of values; one for each face is created as shown below`,
        align: "justify",
        fontSize: "1rem", 
        fontStyle: "normal", 
        color: "white", 
      },
      {
        type: "image",
        src: vas_lbph_histogram,
        alt: "Histogram of Local Binary Patterns",
        align: "center",  // You can use "left", "center", or "right"
        width: "30%",  // Optional: Specify width
        height: "auto",  // Optional: Specify height
        caption: "Fig 2: Histogram of Local Binary Patterns",
        captionFontSize: "1rem", // Custom font size for the caption
        captionFontStyle: "italic", // Custom font style for the caption
        captionColor: "white", // Custom color for the caption
      },
      {
        type: "subheading",
        content: "Working of Voice Assistant System",
        bold: true,
        underline: true,
        color: "teal",
      },
      {
        type: "image",
        src: vas_block_diagram,
        alt: "Block Diagram of Voice Assistant System",
        align: "center",  // You can use "left", "center", or "right"
        width: "40%",  // Optional: Specify width
        height: "auto",  // Optional: Specify height
        caption: "Fig 3: Block Diagram of Voice Assistant System",
        captionFontSize: "1rem", // Custom font size for the caption
        captionFontStyle: "italic", // Custom font style for the caption
        captionColor: "white", // Custom color for the caption
      },
      {
        type: "paragraph",
        content: [`The user provides audio input which is fed into the processing system and the audio is processed and 
                   synthesized into meaningful text in English language using Speech Recognition module. The intent of 
                   the user is found out through a continuous iterative procedure which includes a number of IF ELSE conditions 
                   that are explicitly specified in the main executing program script. The number of conditions have a direct 
                   dependence on the number of features. The keywords in the text (spoken phrase) are identified and extracted 
                   and based on the specific keyword, the allocated response is generated and necessary task is executed. A number of 
                   modules which are dependent on each other or are specific to a single task needs to verified and proper installed into 
                   the operating workspace for smooth execution. Audio Output is generated after processing, by text to speech conversion 
                   which using the pyttsx3 module.`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
        indentation: "2rem",
      },
      {
        type: "subheading",
        content: "Working of Face Recognition System",
        bold: true,
        underline: true,
        color: "teal",
      },
      {
        type: "image",
        src: vas_face_recognition_system_block_diagram,
        alt: "Block Diagram of Face Recognition System",
        align: "center",  // You can use "left", "center", or "right"
        width: "50%",  // Optional: Specify width
        height: "auto",  // Optional: Specify height
        caption: "Fig 4: Block Diagram of Face Recognition System",
        captionFontSize: "1rem", // Custom font size for the caption
        captionFontStyle: "italic", // Custom font style for the caption
        captionColor: "white", // Custom color for the caption
      },
      {
        type: "paragraph",
        content: [`The training aspect of the recognizer involves usage of single snap of the images that include the 
                   face of known person and also requires the person’s name to be the file name for extracting the label 
                   for the detected face. The new user adding phase involves usage of single image of the new user through the 
                   webcam or camera device and matching it with the name input that is extracted through the microphone and stored 
                   as a label. The recognizer will load the image detect, align and extract features from the faces available in the 
                   image or video feed. These features are stored as a 128-D array of pixels which are members of successive execution 
                   of deep neural network that is enabled in the backend of the recognizer. The feature vector is mapped to the appropriate 
                   label so as to avoid misclassifications and getting an insight of how the algorithm execution behind the recognizer.`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
        indentation: "2rem",
      },
      {
        type: "paragraph",
        content: [`These vectors are stored in pickle file and data loading and unloading 
                   can be done directly through the pickle file. The trained model is captured by 
                   the system in the form of .yml file. The real-time detection phase involves usage of 
                   camera which provides me ample amount of training data. The trained recognizer is evaluated 
                   by taking an image randomly over the internet and load the .yml file. Using the encoding 
                   matching technique, the real understanding about the detected face is characterized by the common 
                   feature consensus by the developers. One the face is detected; a bounding box is created about each 
                   face and the corresponding facial trained label is depicted using the maximum confidence algorithm.`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
        indentation: "2rem",
      },
      {
        type: "subheading",
        content: "Project Implementation Summary",
        bold: true,
        underline: true,
        color: "teal",
      },
      {
        type: "paragraph",
        content: [`The objectives of the project have been accomplished to a large extent. Voice assistant system and face 
                   recognition system is successfully developed and the objective of personalized communication by calling 
                   the user with his/her name is accomplished. On experimentation, it is observed that response time of the 
                   system is quite fast but there are some drawbacks that the user has to be specific when asking for a query 
                   because the intent of the user is identified based on the keyword present in the spoken phrase. When an alarm 
                   is set, the timing should be specified along with am/pm. It is observed that not more than one alarm/reminder 
                   can be set in a single execution. Our assistive robot is programmed such that the user cannot terminate an ongoing 
                   task until and unless it gets completed. The advantage of our robot is that the conversion of speech into text and 
                   vice-versa is possible without an internet connection. The major breakthrough to detect the user by recognizing its 
                   face and calling the user by its name is achieved. LBPH algorithm is used where the model is trained with single image 
                   by which it can find the face encodings and store it locally. On every iteration, it checks the user’s face, extracts 
                   face encodings and compares it with the encodings stored locally and labels it. Face Recognition takes within fraction 
                   of second but the response time depends upon the microprocessor. It is observed that the face recognition process fails 
                   when the person face is tilted and background lighting is illuminated less than 60% on the face. Also, it is unable to 
                   detect the user if the user is moving and not facing to the camera.`],
        align: "justify",
        fontSize: "1rem",
        fontStyle: "normal",
        color: "white",
        indentation: "2rem",
      },
    ],
  }
];

// Add links to blogs here
export const blogPosts = [
  {
    id: "post-1",
    slug: "what-are-neural-networks",
    title: "What Are Neural Networks?",
    date: "Feb 20, 2025",
    image: "https://media.giphy.com/media/3oKIPEqDGUULpEU0aQ/giphy.gif",
    tags: [{ id: "tag-1", name: "AI" }, { id: "tag-2", name: "Machine Learning" }, { id: "tag-3", name: "Deep Learning" }],
    content: [
      { type: "heading", content: "Introduction" },
      { type: "paragraph", content: "Neural networks are computing systems inspired by the biological neural networks in animal brains. They form the backbone of modern artificial intelligence, powering everything from voice assistants to self-driving cars. In this post, we'll explore what they are, how they work, and why they've become so powerful." },
      { type: "gif", src: "https://media.giphy.com/media/3oKIPEqDGUULpEU0aQ/giphy.gif", alt: "Neural network node graph visualization" },
      { type: "caption", content: "Neural networks process information through layers of connected nodes, mimicking how neurons fire in the brain." },
      { type: "heading", content: "The Basic Building Blocks" },
      { type: "paragraph", content: "A neural network consists of layers of nodes (neurons): an input layer, one or more hidden layers, and an output layer. Each connection between nodes has a weight that gets adjusted during training. Data flows from input to output, with each node applying an activation function to produce its output. The strength of these connections determines what the network learns." },
      { type: "gif", src: "https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif", alt: "Data flowing through neural network layers" },
      { type: "caption", content: "Information flows forward through layers, with each neuron combining inputs and applying a non-linear function." },
      { type: "heading", content: "How Learning Works" },
      { type: "paragraph", content: "Neural networks learn through a process called backpropagation combined with gradient descent. When the network makes a prediction, we compare it to the correct answer and calculate the loss (error). This error is propagated backward through the network, and the weights are adjusted to reduce the error. Over many iterations (epochs), the network gets better at its task." },
      { type: "gif", src: "https://media.giphy.com/media/26BRzozg4TCBXv6QU/giphy.gif", alt: "Gradient descent and backpropagation in a neural network" },
      { type: "caption", content: "Training iteratively improves the model by minimizing the difference between predictions and ground truth." },
      { type: "heading", content: "Types of Neural Networks" },
      { type: "subheading", content: "Feedforward Networks" },
      { type: "paragraph", content: "The simplest architecture — data flows in one direction from input to output. Great for basic classification and regression tasks." },
      { type: "subheading", content: "Convolutional Neural Networks (CNNs)" },
      { type: "paragraph", content: "Designed for image data. They use convolutional layers to detect spatial patterns like edges, textures, and objects. Power image recognition, medical imaging, and autonomous vehicles." },
      { type: "subheading", content: "Recurrent Neural Networks (RNNs)" },
      { type: "paragraph", content: "Built for sequential data — text, speech, time series. They maintain a hidden state that carries information across time steps, allowing them to model sequences." },
      { type: "subheading", content: "Transformers" },
      { type: "paragraph", content: "The architecture behind GPT, BERT, and modern language models. Transformers use self-attention to process sequences in parallel, making them highly scalable and effective for NLP tasks." },
      { type: "gif", src: "https://media.giphy.com/media/3oKIPEqDGUULpEU0aQ/giphy.gif", alt: "Neural network architecture connections and weights" },
      { type: "heading", content: "Why They Matter" },
      { type: "paragraph", content: "Neural networks excel at finding patterns in large amounts of data. They can recognize images, translate languages, play games, drive cars, and generate human-like text. As we collect more data and build faster hardware (GPUs, TPUs), neural networks will continue to transform industries from healthcare to entertainment. Understanding their fundamentals is key to working in modern AI and robotics." },
    ],
  },
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

// List out the extra curricular activities you have induldged in like - student clubs, joining research groups etc.
export const extraCurricular = [
  {
    id: 1,
    organisation: "",
    title: "",
    duration: "",
    content: [
      {
        text: "",
        link: "",
      },
      {
        text: "",
        link: "",
      },
    ],
    logo: "",
  }
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/simsondsouza",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/SimsonDsouza",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:sjdsouza@andrew.cmu.edu",
  },
];

// Your professional summary
export const aboutMe = {
    name: "Simson D'Souza",
    githubUsername: 'SimsonDsouza',
    tagLine: "CMU'26 MRSD",
    intro: "a Robotics Engineer passionate about Reinforcement and Imitation Learning, Computer Vision, SLAM and Deep Learning. I am dedicated to empowering innovation that makes a difference in people's lives. Every project is a chance to turn complex challenges into solutions that shape the future."
}

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format. 
export const includedRepos = [];
