import React from 'react';
import Svg from './interface';
import ArrowLeft from "./ArrowLeft";

export default function ArrowRight(props: Svg) {
    return (
        <ArrowLeft className={props?.className + " rotate-180"} color={props.color}/>
    )
}