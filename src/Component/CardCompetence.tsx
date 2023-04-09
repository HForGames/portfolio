import React from 'react';
import './CardCompetence.css';

interface props {
    value: number;
    max: number;
    min: number;
    color: string;
    image: string;
    className?: string;
    alt: string;
}

function CardCompetence(props: props) {
    const style = {"--num": props.value} as React.CSSProperties;
    return (
        <div className={props.className}>
            <div className={`card`}>
                <div className={"percent"} style={style}>
                    <div className={"dot reveal"}/>
                    <svg>
                        <circle cx="100" cy="100" r="100"/>
                        <circle className={"reveal"} cx="100" cy="100" r="100"/>
                    </svg>
                    <img className={"img competence"} alt={props.alt} src={props.image}></img>
                </div>
            </div>
        </div>
    )
}

export default CardCompetence;