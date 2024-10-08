import React, { CSSProperties, ReactNode } from 'react';
import "./Card.css"
import {classNamesArgs} from "@/commons/utils/classNameHandler"
import {getStyles, pagePos} from "@/commons/utils/draggingHandler"

interface CardProps {
  // Define your props here
  width?: number
  height?: number
  alignType?: "start" | "center"
  style?: CSSProperties
  className?: string
  children?: ReactNode
}

const Card: React.FC<CardProps> = (cardProps: CardProps) => {
    const {
        width,
        height,
        alignType,
        style, 
        className, 
        children 
        } = cardProps;

    const justifyType = alignType === "center"? "center": "flex-start";

    return (
        <div className={classNamesArgs("Card", className)} 
            style={{width: `${width}px`
                    ,height: `${height}px`
                    ,justifyContent: justifyType
                    ,...style}}>
            {children}
        </div>
    );
};

export default Card;