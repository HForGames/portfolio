import React, {useEffect} from 'react';
import defaultTheme from "./constant";

import Navbar from "./Component/Navbar";
import CardWork from "./Component/CardWork";
import CardCompetence from "./Component/CardCompetence";

import SvgArrow from "./Svg/ArrowDown";
import SvgMail from "./Svg/Mail";
import SvgLinkedin from "./Svg/Linkedin";
import SvgGithub from "./Svg/Github";
import SvgPhone from "./Svg/Phone";

import imgMe from "./assets/images/me.jpeg";
import imgReact from "./assets/images/react.png";
import imgNode from "./assets/images/node.png";
import imgPython from "./assets/images/python.png";
import imgC from "./assets/images/c.png";
import imgCpp from "./assets/images/cpp.png";
import imgMongoDB from "./assets/images/mongodb.png";
import imgSql from "./assets/images/sql.png";
import imgGit from "./assets/images/git.png";

import SortifyDashboard from "./assets/images/Sortify/dashboard.png";
import SortifyCreate from "./assets/images/Sortify/create.png";
import SortifyHome from "./assets/images/Sortify/home.png";
import SortifySort from "./assets/images/Sortify/sort.png";
import SortifyFinish from "./assets/images/Sortify/finish.png";

import TrackapMap from "./assets/images/Trackap/Map.png"
import TrackapProfile from "./assets/images/Trackap/Profile.png"
import TrackapStatistics from "./assets/images/Trackap/Statistics.png"
import TrackapCustomisation from "./assets/images/Trackap/Customisation.png"

const Competences = [
    {
        image: imgReact,
        alt: "React Logo",
        value: 70
    },
    {
        image: imgNode,
        alt: "NodeJs Logo",
        value: 80
    },
    {
        image: imgPython,
        alt: "Python Logo",
        value: 90
    },
    {
        image: imgC,
        alt: "C Logo",
        className: "hidden 2xl:block",
        value: 80
    },
    {
        image: imgCpp,
        alt: "C++ Logo",
        className: "hidden md:block",
        value: 60,
    },
    {
        image: imgMongoDB,
        alt: "MongoDB Logo",
        value: 80,
    },
    {
        image: imgSql,
        alt: "Sql Logo",
        value: 60,
        className: "hidden md:block"
    },
    {
        image: imgGit,
        alt: "Git Logo",
        value: 70,
        className: "hidden 2xl:block"
    }
]

const Works = [
    {
        images: [SortifyHome, SortifyDashboard, SortifySort, SortifyCreate, SortifyFinish],
        alts: ["Sortify home", "Sortify dashboard", "Sortify sort", "Sortify create", "Sortify finish"],
        title: "Sortify",
        description: "Sortify est une application web qui permet de trier ses musiques en fonction de leur genre a partir de spotify.",
        link: "https://www.sortify.fr/",
        github: "https://github.com/SimonBandiera/Sortify"
    },
    {
        images: [TrackapMap, TrackapStatistics, TrackapCustomisation, TrackapProfile],
        alts: ["Trackap Map", "Trackap Statistics", "Trackap Customisation", "Trackap Profile"],
        title: "B2B Trackap",
        description: "La B2B de Trackap est une application web qui permet de suivre en temps réel les véhicules de la société Trackap.",
        link: "https://b2b.trackap.com/",
    }
]

function App() {
    useEffect(() => {
        window.addEventListener("scroll", () => {
            let reveals = document.querySelectorAll(".reveal");
            if (window.scrollY > 1) {
                document.querySelectorAll(".fade").forEach((e) => {
                    e.classList.add("active");
                });
            } else {
                document.querySelectorAll(".fade").forEach((e) => {
                    e.classList.remove("active");
                });
            }
            reveals.forEach((e) => {
                let windowHeight = window.innerHeight;
                let elementBottom = e.getBoundingClientRect().top;
                let elementVisible = windowHeight / 5;

                if (elementBottom < windowHeight - elementVisible) {
                    e.classList.add("active");
                    return;
                }
                e.classList.remove("active");
            });
        });
    }, []);
    return (
        <div>
            <Navbar/>
            <div className={"flex flex-col m-auto justify-around w-10/12 lg:w-3/4 xl:w-2/3 gap-10"}>
                <a href={"#About"} className={"arrow fade"}>
                    <SvgArrow className={"w-5"} color={defaultTheme.theme.colors.third}/>
                </a>
                <div className={"flex flex-col justify-center h-screen gap-3"}>
                    <p className={"font-light"}>Bonjour, Je suis</p>
                    <h1 className={"text-5xl md:text-7xl"}>Hugo GALAN.</h1>
                    <h1 className={"text-5xl md:text-7xl"}>Développeur.</h1>
                    <p className={"md:text-2xl"}>Transformez votre vision en réalité digitale avec un développeur
                        expérimenté et passionné !
                    </p>
                </div>
                <div id={"About"} className={"flex flex-col justify-center min-h-screen"}>
                    <div className={"flex justify-between gap-5 mt-2"}>
                        <h1 className={"text-2xl lg:text-5xl reveal"}>A propos de moi</h1>
                        <div className={"flex flex-col justify-center w-1/3"}>
                            <hr className={"reveal"}/>
                        </div>
                    </div>
                    <div className={"flex flex-col-reverse md:flex-row justify-around mt-6 lg:mt-10 gap-14"}>
                        <div className={"flex flex-col gap-5 md:w-6/12 reveal"}>
                            <h3>
                                Bounjour, je suis Hugo. J'ai développé une réelle curiosité pour les nouvelles
                                technologies et j'aime m'amuser à les découvrir par moi-même.
                            </h3>
                            <h3>
                                En tant que développeur, j'adore trifouiller et essayer de nouvelles choses pour me
                                perfectionner. Je suis convaincu que l'apprentissage est une aventure perpétuelle et
                                qu'il est
                                important de se tenir informé des dernières avancées technologiques pour rester
                                compétent dans notre domaine.
                            </h3>
                            <h3>
                                Si vous avez des projets intéressants à réaliser, je serais ravi de discuter avec vous.
                                N'hésitez pas à me <a href={"#Contact"}>contacter</a> pour en
                                savoir plus sur mes expériences et mes compétences en développement !
                            </h3>
                        </div>
                        <div className={"flex justify-center"}>
                            <div className={"img w-8/12 md:w-full max-h-72 aspect-square reveal"}>
                                <img alt={"Hugo GALAN"} src={imgMe} className={"rounded"}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div id={"Work"} className={"flex flex-col justify-center min-h-screen"}>
                    <div className={"flex justify-between gap-5 mt-2"}>
                        <h1 className={"text-2xl lg:text-5xl reveal"}>Work</h1>
                        <div className={"flex flex-col justify-center w-1/3"}>
                            <hr className={"reveal"}/>
                        </div>
                    </div>
                    <div className={"flex flex-wrap justify-around gap-5 mt-6 lg:mt-10"}>
                        {Works.map((e, i) => <CardWork key={i} images={e.images} alts={e.alts} title={e.title}
                                                       description={e.description} github={e?.github}
                                                       siteLink={e?.link}/>)}
                    </div>
                </div>
                <div id={"Experience"} className={"flex flex-col justify-center min-h-screen"}>
                    <div className={"flex justify-between gap-5 mt-2"}>
                        <h1 className={"text-2xl lg:text-5xl reveal"}>Compétence</h1>
                        <div className={"flex flex-col justify-center w-1/3"}>
                            <hr className={"reveal"}/>
                        </div>
                    </div>
                    <div className={"flex flex-wrap justify-around gap-5 mt-6 lg:mt-10"}>
                        {Competences.map((e, i) => <CardCompetence key={i} value={e.value} image={e.image} alt={e.alt}
                                                                   className={e?.className} max={100} min={0}
                                                                   color={defaultTheme.theme.colors.third}/>)}
                    </div>
                </div>
                <div id={"Contact"} className={"flex flex-col justify-center min-h-screen h-screen"}>
                    <div className={"flex justify-between gap-5 mt-2"}>
                        <h1 className={"text-2xl lg:text-5xl reveal"}>Contact</h1>
                        <div className={"flex flex-col justify-center w-1/3"}>
                            <hr className={"reveal"}/>
                        </div>
                    </div>
                    <div className={"flex flex-col justify-center items-center gap-5 mt-6 lg:mt-10 h-1/2"}>
                        <div className={"flex w-full md:w-2/3 flex-col justify-center gap-5 reveal"}>
                            <h3 className={"text-center"}>
                                Vous avez un projet en tête ? Vous avez besoin d'un développeur pour vous aidez à
                                le réaliser ? N'hésitez pas à me contacter !
                            </h3>
                        </div>
                        <div
                            className={"flex flex-row justify-center flex-wrap items-center w-full md:w-2/3 reveal"}>
                            <div className={"flex flex-col justify-center items-center gap-2 mt-10 w-1/2"}>
                                <a href={"mailto:contact@hgalan.dev"}>
                                    <SvgMail className={"w-10"} color={defaultTheme.theme.colors.third}/>
                                </a>
                                <p className={"text-center"}>
                                    contact@hgalan.dev
                                </p>
                            </div>
                            <div className={"flex flex-col justify-center items-center gap-2 mt-10 w-1/2"}>
                                <a href={"https://www.linkedin.com/in/hugo-galan-8a8290233/"} target={"_blank"}
                                   rel={"noreferrer"}>
                                    <SvgLinkedin className={"w-10"} color={defaultTheme.theme.colors.third}/>

                                </a>
                                <p className={"text-center"}>
                                    Hugo GALAN
                                </p>
                            </div>
                            <div className={"flex flex-col justify-center items-center gap-2 mt-10 w-1/2"}>
                                <a href={"https://github.com/HForGames"} target={"_blank"} rel={"noreferrer"}>
                                    <SvgGithub className={"w-10"} color={defaultTheme.theme.colors.third}/>
                                </a>
                                <p className={"text-center"}>
                                    HForGames
                                </p>
                            </div>
                            <div className={"flex flex-col justify-center items-center gap-2 mt-10 w-1/2"}>
                                <a href={"tel:+336 78 73 90 81"}>
                                    <SvgPhone className={"w-10"} color={defaultTheme.theme.colors.third}/>
                                </a>
                                <p className={"text-center"}>
                                    +336 78 73 90 81
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
