import { CSSProperties, ReactNode } from "react";
import "./BouncingTextLine.css"
import { classNames } from "@/commons/utils/classNameHandler";

interface BouncingTextLineProps {
    children: ReactNode,
    className?: string;
    textAttr? : {[key: string]: string};
    style?: CSSProperties;
}


const BouncingTextLine = ({children, className, textAttr, style}: BouncingTextLineProps) => {

    return (
        <div className={`${classNames(["bouncing-text-container", className])}`}>
            <div className={`${classNames(["bouncing-text", className])}`}
                    style={
                        {...textAttr, ...style}
                    }
                >
                {children}
            </div>
        </div>
    )
}


export default BouncingTextLine;