import React, {useEffect, useState} from 'react';
import './Carousel.css';
import ArrowLeft from "../Svg/ArrowLeft";
import ArrowRight from "../Svg/ArrowRight";
import defaultTheme from "../constant";

interface props {
    className?: string;
    images: string[];
    alts: string[];
    time?: number;
}

function Carousel(props: props) {
    const [current, setCurrent] = useState(0);
    const [hover, setHover] = useState(false);
    const length = props.images.length;

    useEffect(() => {
        if (hover)
            return;
        const interval = setInterval(() => {
            if (current === length - 1)
                setCurrent(0);
            else
                setCurrent(current + 1);
        }, props.time || 5000);
        return () => clearInterval(interval);
    }, [current, hover, length, props.time]);
    return (
        <div className={props?.className + " carousel"} onMouseEnter={() => {setHover(true)}} onMouseLeave={() => {setHover(false)}}>
            {current !== 0 ? <button className={"carousel-control-prev"} onClick={() => {
                setCurrent(current - 1)
            }}>
                <ArrowLeft color={defaultTheme.theme.colors.third} className={"w-10"}/>
            </button> : null}
            {props.images.map((e, i) => {
                return (
                    <img key={i} src={e} alt={props.alts[i]}
                         className={`carousel-img ${(i === current) ? "active" : "inactive"}`}/>
                )
            })}
            {current !== length - 1 ? <button className={"carousel-control-next"} onClick={() => {
                setCurrent(current + 1)
            }}>
                <ArrowRight color={defaultTheme.theme.colors.third} className={"w-10"}/>
            </button> : null}
        </div>
    )
}

export default Carousel;