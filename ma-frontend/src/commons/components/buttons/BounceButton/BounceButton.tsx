
import { CSSProperties, ReactNode, useRef, useState } from "react";
import "./BounceButton.css"
import { classNamesArgs } from "@/commons/utils/classNameHandler";


interface BounceButtonProps {
    children: ReactNode;
    width? :number;
    height?: number;
    draggable?: boolean;
    style?: CSSProperties;
    className?: string;
}


const Bouncebutton = ({children, width, height, draggable = false, style, className}: BounceButtonProps) => {



    const buttonRef = useRef<HTMLDivElement>(null);
    const [isMouseDown, setIsMouseDown] = useState<boolean>(false);

    const offsetTop = useRef<number>(0);
    const offsetLeft = useRef<number>(0);

    const handleOnMouseDown = (event: React.MouseEvent<HTMLDivElement>): void => {
        event.preventDefault();
        setIsMouseDown(true);

        // 1. 获取鼠标相对于元素左上角的位置，用于拖拽跟随
        const boundingRect = buttonRef.current!.getBoundingClientRect();
        offsetTop.current = event.clientY - boundingRect.top;
        offsetLeft.current = event.clientX - boundingRect.left;
        
        document.addEventListener("mousemove", handleOnMouseMove)
        document.addEventListener("mouseup", handleOnMouseUp);
    }


    function handleOnMouseUp(event): void {
        event.preventDefault();
        setIsMouseDown(false);
        document.removeEventListener('mousemove', handleOnMouseMove)
        document.removeEventListener('mouseup', handleOnMouseUp)
    }


    function handleOnMouseMove(event): void {
        event.preventDefault();
        buttonRef.current!.style.top = `${event.clientY - offsetTop.current}px`;
        buttonRef.current!.style.left =`${event.clientX - offsetLeft.current}px`
    }


    return (
        <div className={classNamesArgs("bounce-button", className, isMouseDown ? "mousedown": "")}
            ref={buttonRef}
            onMouseDown={handleOnMouseDown}
            onMouseUp={handleOnMouseUp}
            style= {
                {
                    width: `${width}px`,
                    height: `${height}px`,
                    ...style
                }
            }
        >
            {children}
        </div>
    )


}


export default Bouncebutton;