import React, {useEffect, useState} from 'react';
import SvgMenuBurger from '../Svg/MenuBurger';
import SvgCross from '../Svg/Cross';
import defaultTheme from "../constant";
import "./Navbar.css";

function Navbar() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth > 768)
                setOpen(false);
        });
    }, []);

    useEffect(() => {
        if (open) {
            document.documentElement.style.overflow = "hidden";
            return;
        }
        document.documentElement.style.overflow = "unset";
    }, [open]);

    const CloseNav = () => {
        setOpen(false);
    }

    return (
        <div className={"flex justify-between items-center absolute top-0 left-0 right-0 m-5 md:m-10"}>
            <div className={"items-start z-10"}>
                <h1 className={"text-2xl open-anim"}>HGALAN.DEV</h1>
            </div>
            <button className={"block md:hidden text-firth z-10"} onClick={() => {
                setOpen(!open);
            }}>
                {open ? <SvgCross className={"w-10 open-anim"} color={defaultTheme.theme.colors.third}/> :
                    <SvgMenuBurger className={"w-10 open-anim"} color={defaultTheme.theme.colors.third}/>}
            </button>
            <nav className={(open ? "nav-open" : "items-end hidden md:block nav-close")}>
                <ul className={(open ? "ul-open" : "flex gap-4 ul-close")}>
                    <li className={"open-anim"}><a href={"#About"} onClick={CloseNav} className={"nav-a"}>A propos de moi</a></li>
                    <li className={"open-anim"}><a href={"#Work"} onClick={CloseNav} className={"nav-a"}>Work</a></li>
                    <li className={"open-anim"}><a href={"#Experience"} onClick={CloseNav} className={"nav-a"}>Compétence</a></li>
                    <li className={"open-anim"}><a href={"#Contact"} onClick={CloseNav} className={"nav-a"}>Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;