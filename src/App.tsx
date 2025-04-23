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

import imgMe from "./assets/images/me.jpg";
import imgAsm from "./assets/images/asm.png";
import imgHaskell from "./assets/images/haskell.png";
import imgJava from "./assets/images/java.png";
import imgPytorch from "./assets/images/pytorch.png";
import imgTensorflow from "./assets/images/tensorflow.png";
import imgScikit from "./assets/images/scikit-learn.png";
import imgNumpy from "./assets/images/numpy.png";
import imgPandas from "./assets/images/pandas.png";
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
        image: imgAsm,
        alt: "ASM Logo",
    },
    {
        image: imgHaskell,
        alt: "Haskell Logo",
    },
    {
        image: imgC,
        alt: "C Logo",
    },
    {
        image: imgCpp,
        alt: "C++ Logo",
    },
    {
        image: imgPython,
        alt: "Python Logo",
    },
    {
        image: imgJava,
        alt: "Java Logo",
    },
    {
        image: imgPytorch,
        alt: "Pytorch Logo",
    },
    {
        image: imgTensorflow,
        alt: "Tensorflow Logo",
    },
    {
        image: imgScikit,
        alt: "Scikit-learn Logo",
    },
    {
        image: imgPandas,
        alt: "Pandas Logo",
    },
    {
        image: imgNumpy,
        alt: "Numpy Logo",
    },
    {
        image: imgReact,
        alt: "React Logo",
    },
    {
        image: imgNode,
        alt: "NodeJs Logo",
    },
    {
        image: imgMongoDB,
        alt: "MongoDB Logo",
    },
    {
        image: imgSql,
        alt: "Sql Logo",
    },
    {
        image: imgGit,
        alt: "Git Logo",
    }
]

const Works = [
    {
        images: [SortifyHome, SortifyDashboard, SortifySort, SortifyCreate, SortifyFinish],
        alts: ["Sortify home", "Sortify dashboard", "Sortify sort", "Sortify create", "Sortify finish"],
        title: "Sortify",
        description: "Sortify est une application web qui permet de trier ses musiques en fonction de leur genre à partir de Spotify.",
        link: "https://www.sortify.fr/",
        github: "https://github.com/SimonBandiera/Sortify"
    },
    {
        images: [TrackapMap, TrackapStatistics, TrackapCustomisation, TrackapProfile],
        alts: ["Trackap Map", "Trackap Statistics", "Trackap Customisation", "Trackap Profile"],
        title: "Trackap",
        description: "J'ai travaillé auprès de Trackap pendant 6 mois, où j'ai appris ReactJs, Mongo. J'ai été en mesure de travailler à la fois sur le back-end et à le front-end.",
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
                <a href={"#About"} aria-label={"Go on About"} className={"arrow fade"}>
                    <SvgArrow className={"w-5"} color={defaultTheme.theme.colors.third}/>
                </a>
                <div className={"flex flex-col justify-center h-screen gap-3"}>
                    <p className={"font-light"}>Bonjour, Je suis</p>
                    <h1 className={"text-5xl md:text-7xl"}>Hugo GALAN.</h1>
                    <h1 className={"text-5xl md:text-7xl"}>Développeur.</h1>
                    <p className={"md:text-2xl"}>Transformez votre vision en réalité digitale avec un développeur
                        passionné et à l'écoute !
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
                                Bonjour, je m'appelle Hugo. J’ai {(new Date()).getFullYear() - 2004} ans, j'étudie à
                                Epitech et je suis passionné par les nouvelles technologies. J'aime explorer et
                                maîtriser ces innovations par moi-même.
                            </h3>
                            <h3>
                                En tant que développeur, je prends plaisir à résoudre des problèmes complexes et à
                                expérimenter de nouvelles approches pour m'améliorer continuellement. Je crois fermement
                                que l'apprentissage est un voyage sans fin et qu'il est crucial de rester à la pointe
                                des technologies avancées pour demeurer performant dans mon domaine.
                            </h3>
                            <h3>
                                Pour preuve, en plus de mon Master à Epitech en ingénierie logicielle et innovation,
                                j'ai entrepris en quatrième année un deuxième Master en intelligence artificielle à
                                l'université de Kent, afin d'acquérir une double expertise.
                            </h3>
                            <h3>
                                J'apprécie particulièrement le travail en équipe et je suis toujours à l'écoute des
                                idées de mes collaborateurs. Ma curiosité insatiable me pousse constamment à apprendre
                                et à m'adapter.
                            </h3>
                            <h3>
                                Si vous avez des projets à réaliser, je serais ravi d'en discuter avec vous. N'hésitez
                                pas à me <a href={"#Contact"}>contacter</a> pour découvrir comment je peux vous aider à
                                concrétiser vos idées en matière de développement.
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
                        <h1 className={"text-2xl lg:text-5xl reveal"}>Compétences</h1>
                        <div className={"flex flex-col justify-center w-1/3"}>
                            <hr className={"reveal"}/>
                        </div>
                    </div>
                    <div className={"grid grid-cols-4 lg:grid-cols-6 gap-5 mt-6 lg:mt-10"}>
                        {Competences.map((e, i) => <CardCompetence key={i} image={e.image} alt={e.alt}
                                                                   max={100} min={0}
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
                                Vous avez un projet en tête ? Vous avez besoin d'un développeur pour vous aider à
                                le réaliser ? N'hésitez pas à me contacter !
                            </h3>
                        </div>
                        <div
                            className={"flex flex-row justify-center flex-wrap items-center w-full md:w-2/3 reveal"}>
                            <div className={"flex flex-col justify-center items-center gap-2 mt-10 w-1/2"}>
                                <a href={"mailto:hugo.galan8@gmail.com"} aria-label={"Send me a mail"}>
                                    <SvgMail className={"w-10"} color={defaultTheme.theme.colors.third}/>
                                </a>
                                <p className={"text-center"}>
                                    hugo.galan8@gmail.com
                                </p>
                            </div>
                            <div className={"flex flex-col justify-center items-center gap-2 mt-10 w-1/2"}>
                                <a href={"https://www.linkedin.com/in/hugo-galan-259743287/"}
                                   aria-label={"Go on my linkedin"} target={"_blank"}
                                   rel={"noreferrer"}>
                                    <SvgLinkedin className={"w-10"} color={defaultTheme.theme.colors.third}/>

                                </a>
                                <p className={"text-center"}>
                                    Hugo GALAN
                                </p>
                            </div>
                            <div className={"flex flex-col justify-center items-center gap-2 mt-10 w-1/2"}>
                                <a href={"https://github.com/HForGames"} aria-label={"Go on my github"}
                                   target={"_blank"} rel={"noreferrer"}>
                                    <SvgGithub className={"w-10"} color={defaultTheme.theme.colors.third}/>
                                </a>
                                <p className={"text-center"}>
                                    HForGames
                                </p>
                            </div>
                            <div className={"flex flex-col justify-center items-center gap-2 mt-10 w-1/2"}>
                                <a href={"tel:+336 78 73 90 81"} aria-label={"Call me"}>
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
