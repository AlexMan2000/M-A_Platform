// ListItem.tsx
import { CSSProperties, FC, ReactNode, useContext, useState } from 'react';
import { ListContext } from './List';
import "./ListItem.css"
import { classNames } from '@/commons/utils/classNameHandler';



interface ListItemProps {
   children: ReactNode,
   bulletImage?:string,
   imageAttr?:{[key: string]: string},
   itemAlign?: string,
   itemGap?: number,
   textFontAttr?:{[key: string]: string},
   className?:string;
   style?:CSSProperties;
}

const ListItem: FC<ListItemProps> = ({ 
  children, 
  bulletImage, 
  imageAttr,
  itemAlign, 
  itemGap,
  textFontAttr, 
  className, 
  style}) => {
  const isListItem = useContext(ListContext);
  const [imageError, setImageError] = useState(false);


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

  return <div className={classNames(["list-item", className])} 
  style={{gap: itemGap, ...style}}>

     {bulletImage && !imageError ? (

            <img
                src={bulletImage}
                alt="bullet"
                className={classNames(["list-item-bullet-image", className])}
                style={ {...bulletImageAlign, ...imageAttr, ...style} }
                onError={() => setImageError(true)}
            />
            ) : (
                <div className={classNames(["list-item-bullet", className])}
                  style={ {...bulletImageAlign, ...style}}
                ></div>
            )}
            <div className={classNames(["list-item-text", className])}
              style={{...textFontAttr,...style}}
            >{children}</div>
  </div>;
};

export default ListItem;
