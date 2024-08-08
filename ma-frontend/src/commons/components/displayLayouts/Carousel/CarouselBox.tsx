
import React, { CSSProperties, isValidElement, ReactNode, useEffect, useRef, useState } from "react";
import "./CarouselBox.css"
import { classNamesArgs } from "@/commons/utils/classNameHandler";
import CarouselItem from "./CarouselItem";


export interface CarouselBoxContextProps {
    isAllCarouselItem: boolean
}


interface CarouselBoxProps {
    children: ReactNode;
    centerIndex?: number;
    navigation?: boolean;
    loop?: boolean;
    scaleMode?: "linear" | "gaussian";
    width?: number;
    height?: number;
    style?: CSSProperties;
    className?: string;
}



export const CarouselBoxContext = React.createContext({
    isAllCarouselItem: false
})


const CarouselBox = ({children, centerIndex = 0, navigation, loop, scaleMode, width, height, style, className}: CarouselBoxProps) => {


    const [currentIndex, setCurrentIndex] = useState<number | null | undefined>(centerIndex);
    const containerRef = useRef<HTMLDivElement>(null);


    const loopedChildren = 

    useEffect(() => {
        updateScales();
        getCurrentIndex();
        if (containerRef.current) {
            containerRef.current.addEventListener("scroll", updateScales);
        }

        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener("scroll", updateScales);
            }
        };
    }, [scaleMode]);


    useEffect(() => {
        scrollToIndex(centerIndex);
    }, [centerIndex]);


    const scrollToIndex = (index: number) => {
        if (containerRef.current) {
            const items = containerRef.current.children;
            if (items.length > 0) {
                const item = items[index] as HTMLElement;
                const containerRect = containerRef.current.getBoundingClientRect();
                const itemRect = item.getBoundingClientRect();
                const scrollPosition = itemRect.left - containerRect.left + containerRef.current.scrollLeft + (itemRect.width / 2) - (containerRect.width / 2);
                containerRef.current.scrollTo({ left: scrollPosition, behavior: "smooth" });
            }
        }
    };

    const getCurrentIndex = () => {
        if (containerRef.current) {
            const containerCenterX = window.innerWidth / 2;
            const items = containerRef.current.children;
            let newCurrentIndex = 0;
            for (let i = 0; i < items.length; i++) {
                const item = items[i] as HTMLElement;
                const itemClientRect = item.getBoundingClientRect();
                const itemLeftX = itemClientRect.left;
                const itemRightX = itemClientRect.right;
                if (itemLeftX <= containerCenterX && 
                    containerCenterX <= itemRightX) {
                        newCurrentIndex = i;
                        break;
                }
            }
            setCurrentIndex(newCurrentIndex);
        }

    }

    const evaluateGaussian = (x: number, variance: number): number => {
        return Math.exp(-1 * x ** 2 / (2 * variance ** 2))
    }

    const calculateScale = (distance: number, maxDistance: number, scaleMode?: string): number => {
        let scale;
        switch (scaleMode) {
            case "linear":
                scale = 1 - (distance / maxDistance) * 0.5;
                return Math.max(scale, 0.5);
            case "gaussian":
                scale = evaluateGaussian(distance / maxDistance, 0.95)
                return Math.max(scale, 0.5);
            default:
                scale = 1 - (distance / maxDistance) * 0.5;
                return Math.max(scale, 0.5);
        }
    };
    
    const updateScales = () => {
        if (containerRef.current) {
            const containerCenterX = window.innerWidth / 2;
            const maxDistance = containerCenterX;
            const items = containerRef.current.children;

            for (let i = 0; i < items.length; i++) {
                const item = items[i] as HTMLElement;
                const itemRect = item.getBoundingClientRect();
                const itemCenterX = itemRect.left + itemRect.width / 2;
                const distanceToCenter = Math.abs(containerCenterX - itemCenterX);
                const scale = calculateScale(distanceToCenter, maxDistance, scaleMode);
                item.style.transform = `scale(${scale})`;
            }
        }
    };
    
    
    // Check if all the children of <CarouselBox> are of <CarouselItem>
    const validateChildren = (children: ReactNode) => {
        React.Children.forEach(children, (child)=> {
            if (!isValidElement(child) || child.type !== CarouselItem) {
                throw new Error("<CarouselBox> only accepts <CarouselItem> as children");
            }
        })
    }

    validateChildren(children);

    const handleScrollPrev = (event: React.MouseEvent ): void =>  {
        event.preventDefault();
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: -300, behavior: "smooth"})
        }
        getCurrentIndex();
    }

    const handleScrollNext = (event: React.MouseEvent): void => {
        event.preventDefault();
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: 300, behavior: "smooth"})
        }
        getCurrentIndex();
    }


    /**     
     *  标准结构为
     *  <Wrapper>
     *      <NavButtonPrev></NavButtonPrev> // 相对于Wrapper绝对定位
     *      <Container>
     *          {children}
     *         
     *      </Container>
     *      <NavButtonAfter></NavButtonAfter> // 相对于Wrapper绝对定位
     *      <EdgeMask></EdgeMask> // 遮罩Wrapper, 所以包在里面， 同时相对于Wrapper绝对定位
     *  </Wrapper>
    */
    return (
        <CarouselBoxContext.Provider value={{isAllCarouselItem: true}}>
            <div className={classNamesArgs("carousel-wrapper", className)}
                style={
                    {
                        width, height, ...style
                    }
                }
            >
            
                <div className={classNamesArgs("carousel-container", className)}
                    ref={containerRef}
                    style={
                        {
                            width, height, ...style
                        }
                    }
                >
                    {children}
                </div>
                <div className={classNamesArgs("carousel-container-mask", className)}></div>
                <div className={classNamesArgs("carousel-control", "prev", className)} onClick={handleScrollPrev}>❮</div>
                <div className={classNamesArgs("carousel-control", "after" ,className)} onClick={handleScrollNext}>❯</div>
            </div>
        </CarouselBoxContext.Provider>
    )
}


CarouselBox.Item = CarouselItem;

export default CarouselBox;