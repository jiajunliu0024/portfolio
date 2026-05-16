import petrolMap from "./components/images/petrol-map.gif";
import yepai from "./components/images/yep-ai.gif";
export const personInfo = {
  linkedin: "https://www.linkedin.com/in/jiajun-liu-8a9b681b4/",
  github: "https://github.com/jiajunliu0024",
  hobby: "/coming-soon",
  email: "jiajunliu0024@gmail.com",
  whatsApp: "https://wa.me/0452590768",
};

export const projects = [
  {
    title: "Yep AI",
    subtitle: "React and Java",
    description:
      "Use digital humans to provide a tailored experience for customers",
    image: yepai,
    link: "https://www.yepai.io/",
  },
  {
    title: "Petrol Map",
    subtitle: "React and Python",
    description:
      "Realtime update servo information and provides navigation on map",
    image: petrolMap,
    link: "https://petrol-co.com",
  },
  {
    title: "AI Resume Tailor",
    subtitle: "AI and Automation",
    description: "A tool can tailor your resume for different job applications",
    image: `${process.env.PUBLIC_URL}/images/ai-resume-tailor.gif`,
    link: "https://chromewebstore.google.com/detail/resume-tailor/dcojgdkfagbfbeakmblnnhbgfjibihli?authuser=0&hl=en",
  },
  {
    title: "3D Car Configurator",
    subtitle: "React and Three.js",
    description: "A tool can change your car paint in 3D",
    image: `${process.env.PUBLIC_URL}/images/3d-car-configurator.gif`,
    link: "https://car-configurator.jiajunliu0024.workers.dev/",
  },
];

export const comments = [
  {
    text: "Jiajun is a talented developer with a strong work ethic. He is always willing to go the extra mile to ensure that his projects are completed on time and to the highest standard. I would highly recommend him to anyone looking for a skilled software engineer.",
    image: `${process.env.PUBLIC_URL}/images/testimonials/norton.jpeg`,
    name: "Norton Wei",
    company: "Huawei Pty Ltd",
    link: "https://www.linkedin.com/in/wenzhou-wei-535060aa/",
  },
  {
    text: "Working with Jiajun has been an absolute pleasure. His dedication to delivering high-quality work is commendable. Jiajun's expertise in development coupled with his proactive approach in staying updated with industry advancements makes him a valuable asset to any project. Looking forward to collaborating with him again!",
    image: `${process.env.PUBLIC_URL}/images/testimonials/ken.jpeg`,
    name: "ken vilaysane",
    company: "NAB",
    link: "https://www.linkedin.com/in/ken-vilaysane/",
  },
  {
    text: "A highly skilled developer, Jiajun combines technical expertise with a strong sense of responsibility. He consistently delivers high-quality work, even under tight deadlines. His dedication and reliability make him an excellent choice for any team seeking a talented software engineer",
    image: `${process.env.PUBLIC_URL}/images/testimonials/meng.jpeg`,
    name: "Meng Chen",
    company: "JD.COM",
    link: "https://www.linkedin.com/in/meng-chen-50547a3a//",
  },
  {
    text: "Jiajun is a talented developer with a strong work ethic. He is always willing to go the extra mile to ensure that his projects are completed on time and to the highest standard. I would highly recommend him to anyone looking for a skilled software engineer.",
    image: `${process.env.PUBLIC_URL}/images/testimonials/anderson.jpeg`,
    name: "Anderson",
    company: "YepAI",
    link: "https://www.linkedin.com/in/un-leng-kam-a28582269/",
  },
];

export const skills = ["JavaScript", "React", "Java", "Node", "SQL", "Node.js"];

export const experience = [
  {
    period: "2017.07-2020.10",
    name: "Monash University",
    major: "Advanced Computer Science",
    image: "./components/images/monash.png",
    description: [
      "In-depth knowledge of data structures and algorithms",
      "Skilled in programming languages such as Java, C++, and Python",
      "Experienced in machine learning and artificial intelligence",
      "Understanding of computer networks and security principles",
      "Familiar with operating systems and system architecture",
      "Capable of analyzing and optimizing code for performance",
      "Experienced in web development and database management",
    ],
    detail: {
      type: "Skills",
      desc: "Courses completed at Monash University",
      subjects: [
        "Data Algorithms",
        "Operating Systems",
        "Object-Oriented Programming",
        "Project Management",
        "iOS Development",
        "Android Application Development",
        "Database Management",
      ],
      img: {
        degree: "./monash_degree.jpeg",
        ahegs: "./monash_hd.jpeg",
      },
    },
  },
  {
    period: "2020.10-2022.12",
    name: "University of Melbourne",
    major: "Artificial Intelligence",
    image: "./unimelb.jpg",
    description: [
      "Strong grasp of machine learning algorithms",
      "Proficient in Python programming",
      "Experienced with deep learning frameworks like TensorFlow and PyTorch",
      "Skilled in big data handling and data preprocessing",
      "Knowledgeable in natural language processing and computer vision",
      "Understanding of neural networks and reinforcement learning",
      "Experienced with cloud computing platforms for AI development",
    ],
    detail: {
      type: "Skills",
      desc: "Courses completed at the University of Melbourne",
      subjects: [
        "Machine Learning",
        "Cloud Computing",
        "AI Planning for Autonomy",
        "Advanced Database Systems",
        "Computer Vision",
      ],
      img: {
        degree: "./components/images/melb_degree.jpeg",
        ahegs: "./components/images/melb_hd.jpeg",
      },
    },
  },
  {
    period: "2022.12-2024.5",
    name: "Huawei",
    major: "Software Developer",
    image: "./components/images/huawei.jpg",
    description: [
      "Developed a precision test platform using SpringBoot",
      "Utilized RabbitMQ for message consumption",
      "Proficient in SQL for database management",
      "Created predictive models with Deep Neural Networks",
      "Implemented a test automation pipeline, reducing workload by 50%",
      "Developed front-end applications with Vue3 and JavaScript",
      "Deployed applications in Kubernetes for scalability and reliability",
    ],
    detail: {
      type: "Skills",
      desc: "Projects completed at Huawei",
      subjects: [
        "Java",
        "ReactJS",
        "Python",
        "RabbitMQ",
        "SpringBoot",
        "Kubernetes",
        "PostgreSQL",
      ],
      img: {
        degree: "./components/images/java.png",
        ahegs: "./components/images/k8s.png",
      },
    },
  },
  {
    period: "2024.05-2024.10",
    name: "YepAI",
    major: "Application Developer",
    image: "./components/images/py.jpg",
    description: [
      "Researched and implemented a voice cloning model, deploying it as a FastAPI microservice on AWS",
      "Used AWS Load Balancer to support scalable and reliable text-to-speech services for 600+ clients",
      "Deployed AWS Lambda functions for sign-in, sign-up, and password recovery on the YepAI website",
      "Integrated AWS Cognito and a third-party email provider for user management and communication",
    ],
    detail: {
      type: "Skills",
      desc: "Projects completed at YepAI",
      subjects: ["FastAPI", "AWS Lambda", "AWS Cognito", "Load Balancer"],
      img: {
        degree: "",
        ahegs: "",
      },
    },
  },
  {
    period: "2024.10-Present",
    name: "SITA",
    major: "IT Operations Engineer",
    image: "",
    description: [
      "Provided field operations support for airport IT equipment and services, including kiosks, bag-drop machines, PCs, printers, and related devices",
      "Performed onsite interventions, troubleshooting, local repairs, and preventive maintenance in line with customer contracts and SLAs",
      "Developed and maintained a scheduling system integrating applications from 20 airlines, supporting daily operations for 10,000+ passengers",
      "Participated in the development of a real-time machine health detection system with live web-based GUI status updates",
      "Managed Windows servers and domain, Linux systems, SQL databases, and LAN networks",
      "Coordinated with resolver groups as customer SPOC and ensured accurate reporting in the SITA Service Hub",
    ],
    detail: {
      type: "Skills",
      desc: "Projects and operations completed at SITA",
      subjects: [
        "Field Operations",
        "Windows Server",
        "Linux",
        "SQL",
        "LAN Networks",
        "Web GUI",
      ],
      img: {
        degree: "",
        ahegs: "",
      },
    },
  },
];
