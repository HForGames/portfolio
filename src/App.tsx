import React, {useEffect} from 'react';
import Navbar from "./Component/Navbar";
import Card from "./Component/Card";

import SvgArrow from "./Svg/ArrowDown";

import imgMe from "./assets/images/me.jpeg";
import imgReact from "./assets/images/react.png";
import imgNode from "./assets/images/node.png";
import imgPython from "./assets/images/python.png";
import imgC from "./assets/images/c.png";
import imgCpp from "./assets/images/cpp.png";
import imgMongoDB from "./assets/images/mongodb.png";
import imgSql from "./assets/images/sql.png";
import imgGit from "./assets/images/git.png";


import defaultTheme from "./constant";

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
                let elementTop = e.getBoundingClientRect().top;
                let elementVisible = windowHeight / 5;

                if (elementTop < windowHeight - elementVisible) {
                    e.classList.add("active");
                    return;
                }
                e.classList.remove("active");
            });
        });
    }, []);

    return (
        <>
            <Navbar/>
            <div className={"flex flex-col m-auto justify-around w-10/12 lg:w-3/4 xl:w-2/3 gap-10"}>
                <a href={"#About"} className={"arrow fade"}>
                    <SvgArrow className={"w-5"} color={defaultTheme.theme.colors.third}/>
                </a>
                <div className={"flex flex-col justify-center h-screen gap-3"}>
                    <p className={"font-light"}>Bonjour, Je suis</p>
                    <h1 className={"text-5xl md:text-7xl"}>Hugo GALAN.</h1>
                    <h1 className={"text-5xl md:text-7xl"}>Dévelopeur.</h1>
                    <p className={"md:text-2xl"}>Transformez votre vision en réalité digitale avec un développeur
                        expérimenté et passionné !
                    </p>
                </div>
                <div id={"About"} className={"flex flex-col justify-center min-h-screen"}>
                    <div className={"flex justify-between gap-5 mt-2"}>
                        <h1 className={"text-2xl lg:text-5xl"}>A propos de moi</h1>
                        <div className={"flex flex-col justify-center w-1/3"}>
                            <hr className={"reveal"}/>
                        </div>
                    </div>
                    <div className={"flex flex-col-reverse md:flex-row justify-around mt-6 lg:mt-10 gap-14"}>
                        <div className={"flex flex-col gap-5 md:w-6/12 reveal"}>
                            <h3>
                                Bounjour, Je suis Hugo. J'ai développé une réelle curiosité pour les nouvelles
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
                                N'hésitez pas à me contacter pour en
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
                <div id={"Experience"} className={"flex flex-col justify-center min-h-screen"}>
                    <div className={"flex justify-between gap-5 mt-2"}>
                        <h1 className={"text-2xl lg:text-5xl"}>Compétence</h1>
                        <div className={"flex flex-col justify-center w-1/3"}>
                            <hr className={"reveal"}/>
                        </div>
                    </div>
                    <div className={"flex flex-wrap justify-around gap-5 mt-6 lg:mt-10"}>
                        <Card min={0} max={100} color={defaultTheme.theme.colors.third} value={70} image={imgReact}
                              alt={"React competence"}/>
                        <Card min={0} max={100} color={defaultTheme.theme.colors.third} value={80} image={imgNode}
                              alt={"NodeJs competence"}/>
                        <Card min={0} max={100} color={defaultTheme.theme.colors.third} value={95} image={imgPython}
                              alt={"Python competence"}/>
                        <Card className={"hidden 2xl:block"} min={0} max={100} color={defaultTheme.theme.colors.third}
                              value={80} image={imgC} alt={"C competence"}/>
                        <Card className={"hidden md:block"} min={0} max={100} color={defaultTheme.theme.colors.third}
                              value={70} image={imgCpp} alt={"C++ competence"}/>
                        <Card min={0} max={100} color={defaultTheme.theme.colors.third} value={90} image={imgMongoDB}
                              alt={"MongoDb competence"}/>
                        <Card className={"hidden md:block"} min={0} max={100} color={defaultTheme.theme.colors.third}
                              value={60} image={imgSql} alt={"Sql competence"}/>
                        <Card className={"hidden 2xl:block"} min={0} max={100} color={defaultTheme.theme.colors.third}
                              value={70} image={imgGit} alt={"Git competence"}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;
