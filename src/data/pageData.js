import pic from '@/assets/images/photoConner.jpg';

const globalOptions = {
    title: 'My Application',
    name: 'Conner',
    fullName: 'Conner de Hoop',
    profession: 'Software Developer'
}

const homeOptions = {
    title: 'Home',
    aboutMeTitle: 'About Me',
    profilePicture: `${pic}`,
    aboutMeDescription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cupiditate dicta dolorum\n' +
        'enim error inventore, ipsam nisi odio sed ut? Esse et ex illum iste labore magnam quis sequi soluta?\n' +
        'Et ipsa magnam odio pariatur praesentium? Asperiores laborum libero molestiae praesentium qui, sint\n' +
        'ut veritatis voluptates. Alias atque deleniti dolorem iste, obcaecati possimus quis soluta\n' +
        'tempora voluptatem? Accusantium, mollitia, rem.',
    interestsTitle: 'Interests',
    interestsArray: ['Programming', 'Web Development', 'Software Engineering'],
    educationTitle: 'Education',
    educationObjectArray: [
        {course:'Java Software Developer', school:'ITvitae Amersfoort'},
        {course:'Financial Administration', school:'Cebos Amersfoort'}
    ],
    icons: {
        reactIcon: './src/assets/images/react.svg',
        javaIcon: './src/assets/images/javaLogo.png',
        springIcon: './src/assets/images/springLogo.png',
    }
}

const projectCardData = [
    {
        title: "E-Commerce Platform",
        description: "A full-featured online store with cart functionality, secure checkout, and real-time inventory management. Built with performance and scalability in mind.",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        progress: "Completed",
        image: "projectTest.png",
        link: "#"
    },
    {
        title: "Portfolio Website",
        description: "A modern, responsive portfolio designed to showcase creative work. Features glassmorphism, smooth animations, and optimized for all screen sizes.",
        tags: ["React", "Vite", "CSS3", "Framer Motion"],
        progress: "95%",
        image: "projectTest.png",
        link: "#"
    },
    {
        title: "Task Management App",
        description: "Collaborative tool for teams to organize projects and track progress. Includes drag-and-drop boards, task assignments, and deadline notifications.",
        tags: ["Java", "Spring Boot", "PostgreSQL", "React"],
        progress: "Completed",
        image: "projectTest.png",
        link: "#"
    },
    {
        title: "AI Chat Assistant",
        description: "Intelligent chatbot powered by large language models to provide instant support and information. Integrates with various APIs for enhanced functionality.",
        tags: ["Python", "OpenAI API", "React", "WebSocket"],
        progress: "80%",
        image: "projectTest.png",
        link: "#"
    },
    {
        title: "Weather Dashboard",
        description: "Interactive dashboard providing real-time weather data and forecasts for locations worldwide. Uses advanced visualization for climate trends.",
        tags: ["JavaScript", "OpenWeatherMap API", "Chart.js"],
        progress: "Completed",
        image: "projectTest.png",
        link: "#"
    },
    {
        title: "Fitness Tracker",
        description: "Mobile-first application to monitor health metrics, track workouts, and set personalized fitness goals. Includes data visualization and social features.",
        tags: ["React Native", "Firebase", "Redux"],
        progress: "In Progress",
        image: "projectTest.png",
        link: "#"
    }
];

export {globalOptions, homeOptions, projectCardData}