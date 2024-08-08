import { CSSProperties, ReactNode, useContext } from "react";
import "./CarouselItem.css"
import { classNamesArgs } from "@/commons/utils/classNameHandler";
import { CarouselBoxContext, CarouselBoxContextProps } from "./CarouselBox";


interface CarouselItemProps {
    children?: ReactNode;
    width?: number;
    height?: number;
    style?: CSSProperties;
    className?: string;

}

const CarouselItem = ({children, width, height, style, className}:CarouselItemProps) => {


    const {isAllCarouselItem} = useContext<CarouselBoxContextProps>(CarouselBoxContext)


    // Checck if <CarouselBox.Item> is used as a child element of <CarouselBox>
    if (!isAllCarouselItem) {
        throw new Error("<CarouselBox.Item> can only be within <CarouselBox>");
    }

    return (
        <div className={classNamesArgs("carousel-item-container", className)}
            style={
                {width, height, ...style}
            }
        >
            {children}
        </div>
    )

}

export default CarouselItem;