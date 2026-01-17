import profilePicture from "@/assets/images/photoConner.jpg";
import reactIcon from "@/assets/images/react.svg";
import javaIcon from "@/assets/images/javaLogo.png";
import springIcon from "@/assets/images/springLogo.png";
import cvFile from "@/assets/files/CVConnerDeHoop.pdf";

export const homeData = {
    title: 'Home',
    aboutMeTitle: 'About Me',
    profilePicture: profilePicture,
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
        reactIcon: reactIcon,
        javaIcon: javaIcon,
        springIcon: springIcon,
    },
    cvFile:cvFile
}