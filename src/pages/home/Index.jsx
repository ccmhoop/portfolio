import reactLogo from "/react.svg";
import profilePicture from "/profilePicTest.jpg"
import javaLogo from "/javaLogo.png";
import springLogo from "/springLogo.png";
import "./Style.css"

const HomePage = () => {

    return (
        <section className="home-page">
            <title>
                Conner de Hoop
            </title>
            <div className="about-wrapper">
                <div className="social-profile-wrapper">
                    <div className="profile-picture-container">
                        <img src={profilePicture} alt="Vite logo"/>
                    </div>
                    <h2>
                        Conner de Hoop
                    </h2>

                    <div className="logo-wrapper">
                        <a href="https://react.dev" target="_blank">
                            <img src={reactLogo} className="logo react" alt="React logo"/>
                        </a>
                        <div className="logo-container">
                            <img src={javaLogo} className="logo react" alt="React logo"/>
                        </div>
                        <div className="logo-container">
                            <img src={springLogo} className="logo react" alt="React logo"/>
                        </div>
                    </div>
                    <p>
                        Software Developer
                    </p>
                </div>
                <div className="card">
                    <h3>
                        About me
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cupiditate dicta dolorum
                        enim
                        error inventore, ipsam nisi odio sed ut? Esse et ex illum iste labore magnam quis sequi soluta?
                        Et ipsa magnam odio pariatur praesentium? Asperiores laborum libero molestiae praesentium qui,
                        sint
                        ut veritatis voluptates. Alias atque deleniti dolorem iste, obcaecati possimus quis soluta
                        tempora
                        voluptatem? Accusantium, mollitia, rem.
                    </p>
                    <button className={"button"}>
                        Download CV
                    </button>
                    <div className="interests-education-wrapper">
                        <div className="interests-container">
                            <h3>
                                Interests
                            </h3>
                            <ul>
                                <li>Programming</li>
                                <li>Web Development</li>
                                <li>Software Engineering</li>
                            </ul>
                        </div>
                        <div className="education-container">
                            <h3>
                                Education
                            </h3>
                            <ul>
                                <li>
                                    Java Software Developer
                                    <br/>
                                    <span>
                                        ITvitae Amersfoort
                                    </span>
                                </li>
                                <li>
                                    Financial Administration
                                    <br/>
                                    <span>
                                       Cebos Amersfoort
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export {HomePage}