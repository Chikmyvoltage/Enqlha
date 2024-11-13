import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = '"رشد" هي مبادرة شبابية تهدف إلى سد الفجوة في الإرشاد الأكاديمي والمهني لطلاب المرحلة الثانوية في المملكة العربية السعودية. نقدم برامج متخصصة تشمل التوجيه للبعثات الدراسية، اختيار التخصصات الجامعية، والتحضير للاختبارات التحصيلية. من خلال توفير موارد تعليمية عالية الجودة وبناء شبكة طلابية داعمة، نساعد الطلاب على تجاوز التحديات المادية والجغرافية والأكاديمية، مما يمكنهم من اتخاذ قرارات مستنيرة تعزز مستقبلهم الأكاديمي والمهني.';

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2020 - Present",
    role: "Math Tutor",
    company: "Free agent",
    description: `Led a team in teaching advance math prblem to both the high school students and university students. Collaborated with professors to define project requirements.`,
    technologies: ["Pre-calculus", "Calculus one", "Culculus two"],
  },
  {
    year: "2020 - 2021",
    role: "Full Stack Developer",
    company: "Sahm Coffe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked with backend to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "mySQL","React", "Python"],
  },
];

export const PROJECTS = [
  {
    title: "Neural Network",
    image: project1,
    description:
    "Developed a neural network model for image classification, leveraging deep learning techniques to achieve high accuracy. The project involved data preprocessing, model architecture design, training, and evaluation using Python. Key features include handling large datasets, implementing various layers such as convolutional and fully connected layers, and optimizing the model with techniques like dropout and batch normalization.",
    technologies: ["HTML", "CSS", "React", "Node.js", "Python", "NumPy"],
  },
  {
    title: "Algorithm Visualizer",
    image: project4,
    description:
      "Developed an interactive algorithm visualization tool that helps users understand and learn various algorithms such as sorting, searching, and graph algorithms. The platform provides real-time visual representations of algorithmic processes, enabling users to step through and see each stage of the algorithm. Key features include customizable speed, step-by-step execution, and educational explanations for each algorithm.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["Flutter", "CSS", "React", "Figma"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React"],
  },
  
];

export const CONTACT = {
  address: "Rushd. Founded in LA",
  phoneNo: "+1 (765) 810-1815",
  email: "rushd@rushd.sa",
};
