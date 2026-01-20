import {useEffect, useMemo} from "react";
import {globalAppData} from "@/data/pageData.js";
import {SocialProfile} from "./component/SocialProfile.jsx";
import {SocialProfileHorizontal} from "./component/SocialProfileHorizontal.jsx";
import "./Style.css";
import {useAppContext} from "@/app/context/AppContext.jsx";
import Carousel from "@/app/component/carousel/Carousel.jsx";
import AboutMe from "@/pages/home/component/AboutMe.jsx";
import InterestsEducation, { Interests, Education } from "@/pages/home/component/InterestsEducation.jsx";
import ProfileCard from "./component/ProfileCard.jsx";



const HomeContent = () => {

    const { isMobile } = useAppContext();

    useEffect(() => {
        document.title = globalAppData.name;
    }, [globalAppData.name]);

    const mobileCarouselItems = useMemo(
        () => [
            <ProfileCard key="profile" />,
            <AboutMe key="about" />,
            <InterestsEducation key="interests-education" isMobileView={true} />
        ],
        []
    );

    const mobileCarouselTitles = useMemo(
        () => ["Profile", "About Me", "Education & Interests"],
        []
    );

    const renderDevice = () => {
        if (isMobile) {
            return (
                <Carousel titles={mobileCarouselTitles}>
                    {mobileCarouselItems}
                </Carousel>
            );
        }

        return (
            <div className="about-wrapper">
                <div className="profile-desktop-sidebar">
                    <SocialProfile />
                </div>

                <div className="profile-landscape-tablet">
                    <SocialProfileHorizontal />
                </div>

                <article className="card">
                    <AboutMe />
                    <InterestsEducation />
                </article>
            </div>
        );
    };


    return (
        <section className={`home-page ${isMobile ? "mobile-page-container" : ""}`}>

            {renderDevice()}
            {/*<div className="about-wrapper">*/}
            {/*    <div className="profile-desktop-sidebar">*/}
            {/*        <SocialProfile/>*/}
            {/*    </div>*/}
            {/*    <div className="profile-landscape-tablet">*/}
            {/*        <SocialProfileHorizontal/>*/}
            {/*    </div>*/}
            {/*    <article className="card">*/}

            {/*        <AboutMe/>*/}
            {/*        <InterestsEducation/>*/}
            {/*    </article>*/}
            {/*</div>*/}
        </section>
    )
}

const HomePage = () => {
    return <HomeContent />;
};

export { HomePage };