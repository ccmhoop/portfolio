import picTest from "@/assets/images/projectTest.png";

const globalOptions = {
    title: 'My Application',
    name: 'Conner',
    fullName: 'Conner de Hoop',
    profession: 'Software Developer'
}

const projectCardData = [
    {
        title: "E-Commerce Platform",
        description: "A full-featured online store with cart functionality, secure checkout, and real-time inventory management. Built with performance and scalability in mind.",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        progress: "Completed",
        image: picTest,
        link: "#"
    },
    {
        title: "Portfolio Website",
        description: "A modern, responsive portfolio designed to showcase creative work. Features glassmorphism, smooth animations, and optimized for all screen sizes.",
        tags: ["React", "Vite", "CSS3", "Framer Motion"],
        progress: "95%",
        image: picTest,
        link: "#"
    },
    {
        title: "Task Management App",
        description: "Collaborative tool for teams to organize projects and track progress. Includes drag-and-drop boards, task assignments, and deadline notifications.",
        tags: ["Java", "Spring Boot", "PostgreSQL", "React"],
        progress: "Completed",
        image: picTest,
        link: "#"
    },
    {
        title: "AI Chat Assistant",
        description: "Intelligent chatbot powered by large language models to provide instant support and information. Integrates with various APIs for enhanced functionality.",
        tags: ["Python", "OpenAI API", "React", "WebSocket"],
        progress: "80%",
        image: picTest,
        link: "#"
    },
    {
        title: "Weather Dashboard",
        description: "Interactive dashboard providing real-time weather data and forecasts for locations worldwide. Uses advanced visualization for climate trends.",
        tags: ["JavaScript", "OpenWeatherMap API", "Chart.js"],
        progress: "Completed",
        image: picTest,
        link: "#"
    },
    {
        title: "Fitness Tracker",
        description: "Mobile-first application to monitor health metrics, track workouts, and set personalized fitness goals. Includes data visualization and social features.",
        tags: ["React Native", "Firebase", "Redux"],
        progress: "In Progress",
        image: picTest,
        link: "#"
    }
];

export {globalOptions, projectCardData}