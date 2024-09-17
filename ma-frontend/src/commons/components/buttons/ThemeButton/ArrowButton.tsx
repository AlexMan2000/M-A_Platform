import React, { CSSProperties } from 'react';
import "./ArrowButton.css"
import {classNamesArgs} from "@/commons/utils/classNameHandler"

interface ArrowButtonProps {
  // Define your props here
  buttonText: string
  buttonImage?: string
  textStyle?: any
  style?: CSSProperties
  className?: string
}

const ArrowButton: React.FC<ArrowButtonProps> = (props: ArrowButtonProps ) => {
  
    const {buttonText, buttonImage, style, textStyle, className} = props;
    return (
    <div className={classNamesArgs("arrow-button-container", className)} style={{...style}}>
      <div className={classNamesArgs("left-text-container", className)} style={{...textStyle}}>
        {buttonText}
      </div>
      {buttonImage && <div className={classNamesArgs("right-img-container", className)}>
        <img className={classNamesArgs("right-img", className)} src={buttonImage}></img>
      </div>}
    </div>
  );
};

export default ArrowButton;