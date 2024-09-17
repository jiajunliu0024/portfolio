import petrolMap from "./components/images/petrol-map.gif";
import yepai from "./components/images/yep-ai.gif";
import voice2text from "./components/images/voice-2-text.gif";
import digitalRefrige from "./components/images/digital-refrige.gif";
import kenImg from "./components/images/ken.jpeg";
import mengImg from "./components/images/meng.jpeg";
import nortonImg from "./components/images/norton.jpeg";
import andersonImg from "./components/images/anderson.jpeg";

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
    title: "Digital Refridge",
    subtitle: "Java and FireBase",
    description: "An Android app will help users manage food expiration dates",
    image: digitalRefrige,
    link: "https://github.com/jiajunliu0024/DigitalRefrige",
  },
  {
    title: "Voice Cloning",
    subtitle: "React and Node Js",
    description: "A tool can simulate your voice for any texts",
    image: voice2text,
    link: "/coming-soon", // coming soon
  },
];

export const comments = [
  {
    text: "Jiajun is a talented developer with a strong work ethic. He is always willing to go the extra mile to ensure that his projects are completed on time and to the highest standard. I would highly recommend him to anyone looking for a skilled software engineer.",
    image: nortonImg,
    name: "Norton Wei",
    company: "Huawei Pty Ltd",
    link: "https://www.linkedin.com/in/wenzhou-wei-535060aa/",
  },
  {
    text: "Working with Jiajun has been an absolute pleasure. His dedication to delivering high-quality work is commendable. Jiajun's expertise in development coupled with his proactive approach in staying updated with industry advancements makes him a valuable asset to any project. Looking forward to collaborating with him again!",
    image: kenImg,
    name: "ken vilaysane",
    company: "NAB",
    link: "https://www.linkedin.com/in/ken-vilaysane/",
  },
  {
    text: "A highly skilled developer, Jiajun combines technical expertise with a strong sense of responsibility. He consistently delivers high-quality work, even under tight deadlines. His dedication and reliability make him an excellent choice for any team seeking a talented software engineer",
    image: mengImg,
    name: "Meng Chen",
    company: "JD.COM",
    link: "https://www.linkedin.com/in/meng-chen-50547a3a//",
  },
  {
    text: "Jiajun is a talented developer with a strong work ethic. He is always willing to go the extra mile to ensure that his projects are completed on time and to the highest standard. I would highly recommend him to anyone looking for a skilled software engineer.",
    image: andersonImg,
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
    period: "2024.6-Present",
    name: "YepAI",
    major: "Software Developer",
    image: "./components/images/py.jpg",
    description: [
      "Integrated the YepAI management system with a third-party email provider for enhanced communication",
      "Deployed AWS Lambda functions to manage sign-in and sign-up requests on the YepAI website, ensuring efficient user authentication",
      "Managed and analyzed user data within YepAI, leveraging insights for reporting and strategic decision-making",
      "Developed a text-to-voice generation model using Python and AWS, applied to digital humans",
    ],
    detail: {
      type: "Skills",
      desc: "Projects completed at YepAI",
      subjects: ["Project Management", "Internship"],
      img: {
        degree: "",
        ahegs: "",
      },
    },
  },
];
