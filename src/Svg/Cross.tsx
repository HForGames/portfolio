import React from 'react';
import Svg from './interface';

export default function Cross(props: Svg) {
    return (
        <svg className={props?.className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M19 5L4.99998 19M5.00001 5L19 19" stroke={props.color} strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round"></path>
            </g>
        </svg>
    )
}