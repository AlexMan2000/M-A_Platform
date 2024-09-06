import React, { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";
import "./CarouselBox.css";
import { classNamesArgs } from "@/commons/utils/classNameHandler";
import CarouselItem from "./CarouselItem";
import { extractNumberAndUnit } from "@/commons/utils/stylesHandler";

export interface CarouselBoxContextProps {
    isAllCarouselItem: boolean;
}

interface CarouselBoxProps {
    children: ReactNode;
    centerIndex?: number;
    navigation?: boolean;
    scrollSpeed?: "slow" | "moderate" | "fast" | "free";
    pagination?: boolean;
    loop?: boolean;
    scaleMode?: "linear" | "gaussian" | "none";
    width?: number;
    height?: number;
    style?: CSSProperties;
    className?: string;
}

export const CarouselBoxContext = React.createContext({
    isAllCarouselItem: false,
});

interface CarouselStateProps {
    childrenRenderArray: ReactNode[];
    cloneNumber: number;
}

const speedToAmount = {
    "slow": 1,
    "moderate": 3,
    "fast": 5,
}

const CarouselBox = ({
    children,
    centerIndex,
    navigation = true,
    scrollSpeed = "moderate",
    pagination = true,
    loop = false,
    scaleMode,
    width,
    height,
    style,
    className,
}: CarouselBoxProps) => {
    const [currentIndex, setCurrentIndex] = useState<number>(centerIndex ? centerIndex : 2);
    const containerRef = useRef<HTMLDivElement>(null);
    const buttonPrevLock = useRef<boolean>(false);
    const buttonNextLock = useRef<boolean>(false);

    const numerOfElement = useRef<number>(children ? React.Children.toArray(children).length : 0);
    const initialState = {
        childrenRenderArray: createLoopElements(children),
        cloneNumber: 3,
    };
    const [carouselState, setCarouselState] = useState<CarouselStateProps>(initialState);

    useEffect(() => {
        setCarouselState({
            childrenRenderArray: createLoopElements(children),
            cloneNumber: 3,
        });
    }, [children]);

    useEffect(() => {
        scrollToIndex(centerIndex  !== undefined  ? centerIndex + (+loop) * carouselState.cloneNumber : 3 + 3);
    }, [centerIndex, loop]);


    useEffect(() => {
        window.addEventListener("resize", updateScales);
        return () => {
            window.removeEventListener("resize", updateScales);
        }
    }, []);


    useEffect(() => {
        updateScales();
    }, [children, currentIndex]);

    useEffect(() => {
    }, [carouselState]);



    function createLoopElements (childrenArr: ReactNode) {
        const childrenArray = React.Children.toArray(childrenArr);
        if (childrenArray.length < 3) {
            throw new Error("Too few slides for a looping effect");
        }
        const cloneBefore = childrenArray.slice(-3).map((child, index) =>
            React.cloneElement(child as React.ReactElement, { key: `clone-before-${index}` })
        );
        const cloneAfter = childrenArray.slice(0, 3).map((child, index) =>
            React.cloneElement(child as React.ReactElement, { key: `clone-after-${index}` })
        );
        const childrenRenderArray = [...cloneBefore, ...childrenArray, ...cloneAfter];
        return childrenRenderArray;
    };

    const computeScrollEdges = (): number[] => {
        const {offsetWidth} = containerRef.current!;
        const paddingSize = Math.floor(offsetWidth / 2);

        const gapSize = extractNumberAndUnit(window.getComputedStyle(containerRef.current!).gap)!.number;
        const items = containerRef.current!.children;

        let firstElementPositionLeftX = 0, lastRealElementPositionRightX = 0;
        firstElementPositionLeftX += paddingSize;
        lastRealElementPositionRightX += paddingSize;
        for (let i = 0; i < numerOfElement.current + 2 * carouselState.cloneNumber; i++) {
        
            const item = items[i] as HTMLElement; 
            const itemWidth = extractNumberAndUnit(window.getComputedStyle(item!).width)!.number;
            if (i <= carouselState.cloneNumber - 1) {

                firstElementPositionLeftX += (itemWidth + gapSize)
            }

            if (i <= numerOfElement.current + carouselState.cloneNumber - 1) {
                lastRealElementPositionRightX  += (itemWidth + gapSize)
            } else {
                break;
            }
        }
        return [firstElementPositionLeftX - gapSize, lastRealElementPositionRightX - gapSize]
    }

    const scrollToIndex = (index: number, behavior: ScrollBehavior = "smooth") => {
        
        if (containerRef.current) {
            const items = containerRef.current.children;
            if (items.length > 0) {
                const item = items[index] as HTMLElement;
                const containerRect = containerRef.current.getBoundingClientRect();
                const itemRect = item.getBoundingClientRect();
                const scrollPosition =
                    itemRect.left - containerRect.left + containerRef.current.scrollLeft + itemRect.width / 2 - containerRect.width / 2;
                containerRef.current.scrollTo({ left: scrollPosition, behavior: behavior });
            }
        }
    };

    const handleOnScroll = () => {
        const newCurrentIndex = getCurrentIndex();
        /**
         * 1. scrollLeft: Retrieves the current horizontal scroll position of the carousel container.
         * 2. offsetWidth: Retrieves the width of the visible area of the carousel container.
         * 3. scrollWidth: Retrieves the total width of the content inside the carousel container.
         */
        // const { scrollLeft, offsetWidth } = containerRef.current!;
        setCurrentIndex(newCurrentIndex);
        updateScales();
    };

    const handleScrollPrev = (event: React.MouseEvent): void => {
        if (buttonPrevLock.current) {
            return;
        }
        event.preventDefault();
        const newIndex = (currentIndex - 1 + numerOfElement.current) % numerOfElement.current;
        const tempIndex = (currentIndex - 1) + carouselState.cloneNumber;
        
        if (loop) {
            scrollToIndex(tempIndex, "smooth");
            setTimeout(() => {
                scrollToIndex(newIndex + (+loop) * carouselState.cloneNumber, "auto"); // Instantly jump to the first real item
            }, 350); 
        } else {
            scrollToIndex(newIndex + (+loop) * carouselState.cloneNumber, "smooth"); // Instantly jump to the first real item
        }
       
        buttonPrevLock.current = true;
        setTimeout(() => {
            buttonPrevLock.current = false;
        }, 350)
        setCurrentIndex(newIndex);
    };

    const handleScrollNext = (event: React.MouseEvent): void => {
        if (buttonNextLock.current) {
            return;
        }
        event.preventDefault();
        const newIndex = (currentIndex + 1) % numerOfElement.current;
        const tempIndex = (currentIndex + 1) + carouselState.cloneNumber;
        
        if (loop) {
            scrollToIndex(tempIndex, "smooth");
            setTimeout(() => {
                scrollToIndex(newIndex + (+loop) * carouselState.cloneNumber, currentIndex + 1 >= numerOfElement.current? "auto": "smooth");
            }, 350); 
        } else {
            scrollToIndex(newIndex + (+loop) * carouselState.cloneNumber, "smooth");

        }
        buttonNextLock.current = true;
        setTimeout(() => {
            buttonNextLock.current = false;
        }, 350)
        setCurrentIndex(newIndex);
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
                const itemRect = item.getBoundingClientRect();
                const itemLeftX = itemRect.left;
                const itemRightX = itemRect.right;
                if (itemLeftX <= containerCenterX && containerCenterX <= itemRightX) {
                    newCurrentIndex = i ;
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

            return newCurrentIndex - (+loop) * carouselState.cloneNumber;
        } else {
            return 0;
        }
    };

    const evaluateGaussian = (x: number, variance: number): number => {
        return Math.exp(-1 * x ** 2 / (2 * variance ** 2));
    };

    const calculateScale = (distance: number, maxDistance: number, scaleMode?: string): number => {
        let scale: number;
        switch (scaleMode) {
            case "linear":
                scale = 1 - (distance / maxDistance) * 0.5;
                return Math.max(scale, 0.5);
            case "gaussian":
                scale = evaluateGaussian(distance / maxDistance, 0.95);
                return Math.max(scale, 0.5);
            default:
                return 1;
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
                item.style.transform =`scale(${scale})`;
            }
        }
    };

    const padding = `20px ${width ? `${Math.floor(width / 2)}px` : "50%"}`;

    return (
        <CarouselBoxContext.Provider value={{ isAllCarouselItem: true }}>
            <div className={classNamesArgs("carousel-wrapper", className)} style={{ width, height, ...style }}>
                <div
                    className={classNamesArgs("carousel-container", className)}
                    ref={containerRef}
                    style={{ width, height, padding: padding, ...style }}
                    onScroll={handleOnScroll}
                >
                    {loop ? carouselState.childrenRenderArray : children}
                </div>
                <div className={classNamesArgs("carousel-container-mask", className)}></div>
                {navigation &&      
                    <>
                        <div className={classNamesArgs("carousel-control", "prev", className)} onClick={handleScrollPrev}>
                            ❮
                        </div>
                        <div className={classNamesArgs("carousel-control", "after", className)} onClick={handleScrollNext}>
                            ❯
                        </div>
                    </>
                }
            </div>
        </CarouselBoxContext.Provider>
    );
};

CarouselBox.Item = CarouselItem;

export default CarouselBox;