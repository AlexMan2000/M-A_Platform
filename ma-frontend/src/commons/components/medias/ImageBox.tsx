import { classNames } from "@/commons/utils/classNameHandler"
import { CSSProperties, ReactNode, useState } from "react";
import DefaultImage from "@/assets/pngs/default-image.png"
import "./ImageBox.css"


interface ImageBoxProps {
    src: string;
    masked?: boolean;
    maskAttr?: {[key: string] :string}
    width?: number;
    height?: number;
    keepAspectRatio?: boolean;
    style?: CSSProperties;
    className?: string;
}


const ImageBox = ({src, masked, maskAttr, width, height, keepAspectRatio, style, className}: ImageBoxProps) => {
    const [loadError, setLoadError] = useState<boolean>(false);
    const objectFit = keepAspectRatio? "cover":"fill";    

    return (
        <div className={classNames(["image-container", className])}
            style={
                {width: `${width}px`, height: `${height}px`, ...style}
            }
        >
            {
                !loadError ? 
                <img
                    className={classNames(["image", className])}
                    src = {src}
                    style={
                        {
                            objectFit
                        }
                    }
                    onError = {()=>{
                        setLoadError(true)
                    }}
                ></img>
                :
                <img 
                    className={classNames(["image", className])}
                    src={DefaultImage}
                    style={
                        {
                            objectFit
                        }
                    }
                    >
                </img> 
            }
            {
                masked && <div className={classNames(["image-container-mask", className])}
                    style={
                        {...maskAttr}
                    }
                ></div>
            }
        </div>
    )
}


export default ImageBox;