import React from 'react';
import Carousel from './Carousel';
import Site from '../Svg/Site';
import Github from '../Svg/Github';
import defaultTheme from "../constant";
import './CardWork.css';

interface props {
    images: string[];
    alts: string[];
    title: string;
    description: string;
    github?: string;
    siteLink?: string;
}

function CardWork(props: props) {
    return (
        <div
            className={"reveal card-work w-full aspect-square lg:w-5/12 bg-second flex flex-col justify-around items-center p-4 rounded"}>
            <h1 className={"text-3xl font-bold m-2"}>{props.title}</h1>
            <div className={"img-double-work"}>
                <Carousel className={"w-full"} images={props.images} alts={props.alts}/>
            </div>
            <p className={"text-lg"}>{props.description}</p>
            <hr className={"reveal w-1/2 m-2"}/>
            <div className={"flex flex-row justify-around w-full border-third"}>
                {props?.siteLink ?
                    <a href={props?.siteLink} aria-label={`Go on ${props.title}`} target={"_blank"} rel={"noreferrer"}><Site className={"w-8"}
                                                                                         color={defaultTheme.theme.colors.third}/></a> : null}
                {props?.github ? <a href={props?.github} aria-label={`Go on ${props.title} github webpage`} target={"_blank"} rel={"noreferrer"}><Github className={"w-8"}
                                                                                                      color={defaultTheme.theme.colors.third}/></a> : null}
            </div>
        </div>)
}

export default CardWork;