// ListItem.tsx
import { CSSProperties, FC, ReactNode, useContext, useState } from 'react';
import { ListContext } from './List';
import "./ListItem.css"
import { classNames, classNamesArgs } from '@/commons/utils/classNameHandler';



interface ListItemProps {
   children: ReactNode,
   bulletImage?:string,
   backgroundImage?: string,
   imageAttr?:{[key: string]: string},
   itemAlign?: string,
   itemGap?: string,
   textFontAttr?:{[key: string]: string},
   className?:string;
   style?:CSSProperties;
}

const ListItem: FC<ListItemProps> = ({ 
  children, 
  bulletImage, 
  backgroundImage,
  imageAttr,
  itemAlign, 
  itemGap,
  textFontAttr, 
  className, 
  style}) => {


  /** 
   * If a component that calls useContext(MyContext) is not wrapped in a corresponding MyContext.Provider, 
   * the useContext hook will return the defaultValue that was passed when the context was created using 
   * React.createContext(defaultValue). 
   * */
  const isListItem = useContext(ListContext);
  const [bulletImageError, setBulletImageError] = useState(false);
  const [backgroundImageError, setBackgroundImageError] = useState(false);

  if (!isListItem) {
    throw new Error("ListItem must be used within a List");
  }



  const bulletImageAlign = itemAlign == "start"? 
  {
    alignSelf: "flex-start",
    marginTop: "7px"
  }:
  {
    alignSelf: "center",
    marginTop: 0
  }

  return <div 
        className={classNames(["list-item", className])} 
        style={{gap: itemGap, ...style}}>

          {bulletImage && !bulletImageError ? (

            <img
                src={bulletImage}
                alt="bullet"
                className={classNames(["list-item-bullet-image", className])}
                style={ {...bulletImageAlign, ...imageAttr, ...style} }
                onError={() => setBulletImageError(true)}
            />
            ) : (
                <div className={classNames(["list-item-bullet", className])}
                  style={ {...bulletImageAlign, ...style}}
                ></div>
            )}
            <div className={classNames(["list-item-text", className])}
              style={{...textFontAttr,...style}}
            >{children}</div>
            <div className={classNamesArgs("list-item-container-background-image-container", className)}>
              {backgroundImage && !backgroundImageError && <img src={backgroundImage}
              className={classNamesArgs("list-item-container-background-image", className)}
                onError={() => setBackgroundImageError(true)}
              ></img>}
            </div>
  </div>;
};

export default ListItem;
