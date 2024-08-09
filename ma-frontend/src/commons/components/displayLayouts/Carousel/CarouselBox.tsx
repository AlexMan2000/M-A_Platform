
import React, { CSSProperties, isValidElement, ReactNode, useEffect, useRef, useState } from "react";
import "./CarouselBox.css"
import { classNamesArgs } from "@/commons/utils/classNameHandler";
import CarouselItem from "./CarouselItem";
import { encodeToBase64, decodeFromBase64 } from "@/commons/utils/encoderHandler";

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
    windowSize?: number;
    style?: CSSProperties;
    className?: string;
}


export const CarouselBoxContext = React.createContext({
    isAllCarouselItem: false
})


const CarouselBox = ({children, centerIndex = 3, navigation, loop, scaleMode, width, height, windowSize, style, className}: CarouselBoxProps) => {


    // currentIndex is the real index of the element that's being displayed at the center
    const [currentIndex, setCurrentIndex] = useState<number>(centerIndex);
    const containerRef = useRef<HTMLDivElement>(null);


    // For clone management
    const numerOfElement = useRef<number>(children ? React.Children.toArray(children).length: 0);
    const windowWidth = useRef<number>(windowSize ? windowSize : numerOfElement.current == 0 ? numerOfElement.current: 5);

    // const [elementGap, setElementGap] = useState<number>(0);
    const [childrenRenderArray, setChildrenRenderArray] = useState<ReactNode[]>(React.Children.toArray(children));

        
    useEffect(() => {
        setChildrenRenderArray(React.Children.toArray(children));
    }, [children]);

    // useEffect(() => {
    //     const parseGap = (gap: string | number): number => {
    //         if (typeof gap == "number") {
    //             return gap;
    //         } else {
    //             const gapNumber =  /^\d+\w/.exec(gap);
    //             if (gapNumber) {
    //                 return Number.parseInt(gapNumber[0]);
    //             } else {
    //                 return 20;
    //             }
    //         }
    //     }
    //     if (containerRef.current) {
    //         setElementGap(parseGap(containerRef.current.style.gap));
    //     }
    // })

    useEffect(() => {
        updateRenderArray(currentIndex, numerOfElement.current);
    }, [children, currentIndex]);



    // useEffect(() => {
    //     if (containerRef.current) {
    //         const items = containerRef.current.children;
    //         const containerWidth = containerRef.current.clientWidth;
    //         const totalItemsWidth = Array.from(items).reduce((acc, item) => acc + (item as HTMLElement).offsetWidth, 0);
    //         const extraWidth = containerWidth - totalItemsWidth;
    //         if (extraWidth > 0) {
    //             containerRef.current.style.paddingRight = `${extraWidth}px`;
    //         }
    //     }
    // }, [children]);

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
    }, [scaleMode, children]);


    useEffect(() => {
        scrollToIndex(centerIndex);
    }, [centerIndex]);



    const updateRenderArray = (centerIndex: number, windowSize: number) => {
        
        let newCloneNumber, newCloneState;

        setChildrenRenderArray((childrenRenderArray) => {
            let newRenderArray = childrenRenderArray.slice(0);
            const halfWindowSize = Math.floor(windowSize / 2);
            const windowLeftIndex = centerIndex - halfWindowSize + 1;
            const windowRightIndex = centerIndex + halfWindowSize;
            if (windowLeftIndex >= 0 && windowRightIndex < numerOfElement.current) {
                newRenderArray = childrenRenderArray.slice(0);
                newCloneNumber = 0;
                newCloneState = 0;
            } else if (windowLeftIndex < 0) {
                newCloneNumber = numerOfElement.current - windowRightIndex - 1;
                
                for (let i = 0; i < newCloneNumber; i++) {
                    const popItem = newRenderArray.pop();
                    newRenderArray.unshift(popItem);
                }
                newCloneState = 2;
            } else if (windowRightIndex >= numerOfElement.current) {
                newCloneNumber = windowLeftIndex;
                for (let i = 0; i < newCloneNumber; i++) {
                    const popItem = newRenderArray.shift();
                    newRenderArray.push(popItem);
                }
                newCloneState = 2;
            }

            return newRenderArray;
    
        })

    };


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

    const getCurrentIndex = (): number => {
        if (containerRef.current) {
            
            const containerRect = containerRef.current.getBoundingClientRect();
            const containerCenterX = containerRect.left + containerRect.width / 2;
    

            const items = containerRef.current.children;

            const itemLeftEdgesX: number[] = []
            const itemRightEdgesX: number[] = []

            let newCurrentIndex = -1;
            for (let i = 0; i < items.length; i++) {
                const item = items[i] as HTMLElement;
                const itemClientRect = item.getBoundingClientRect();
                const itemLeftX = itemClientRect.left;
                itemLeftEdgesX.push(itemLeftX);
                const itemRightX = itemClientRect.right;
                itemRightEdgesX.push(itemRightX);
                if (itemLeftX <= containerCenterX && 
                    containerCenterX <= itemRightX) {
                        newCurrentIndex = i;
                        break;
                }
            }

            // 中轴线不在任何一个元素内部，选择离中轴线更近的元素
            if (newCurrentIndex == -1) {
                for (let i = 1; i < itemLeftEdgesX.length; i++) {
                    const nextElementLeft = itemLeftEdgesX[i];
                    const prevElementRight = itemRightEdgesX[i - 1];
                    if (prevElementRight <= containerCenterX 
                        && containerCenterX <= nextElementLeft
                    ) {
                        const distanceToLeft = containerCenterX - prevElementRight;
                        const distanceToRight = nextElementLeft - containerCenterX;
                        if (distanceToLeft > distanceToRight) {
                            newCurrentIndex = i;
                        } else {
                            newCurrentIndex = i - 1;
                        }
                    }
                }
            }
            return newCurrentIndex;
        } else {
            return 0;
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
            const containerRect = containerRef.current.getBoundingClientRect();
            const containerCenterX = containerRect.left + containerRect.width / 2;
    
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
        // if (containerRef.current) {
        //     containerRef.current.scrollBy({ left: -300, behavior: "smooth"})
        // }
        scrollToIndex((currentIndex - 1 + numerOfElement.current) %  numerOfElement.current)
    }

    const handleScrollNext = (event: React.MouseEvent): void => {
        event.preventDefault();
        // if (containerRef.current) {
        //     containerRef.current.scrollBy({ left: 300, behavior: "smooth"})
        // }
        scrollToIndex((currentIndex + 1 +  numerOfElement.current) %  numerOfElement.current)

    }

    const handleOnScroll = () => {
        const newCurrentIndex = getCurrentIndex();
        // updateRenderArray(newCurrentIndex,  numerOfElement.current);
        setCurrentIndex(newCurrentIndex);
    }

    // console.log(childrenRenderArray)
    
    
    const padding = `20px ${width ? `${Math.floor(width / 2)}px`: "50%"}`;
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
                            width, height, padding: padding , ...style
                        }
                    }
                    onScroll={handleOnScroll}
                >
                    {loop? childrenRenderArray: children}
                    {/* {children} */}
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