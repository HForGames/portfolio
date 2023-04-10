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
    //the offset value is not calculated in the css because when I use calc()
    //on my phone it always returns 0 instead of the correct value
    //I calculate it here and pass it to the css
    //IDK why it doesn't work on my phone
    const style = {"--num": props.value, "--offset": 630 - (630 * props.value) / 100} as React.CSSProperties;
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