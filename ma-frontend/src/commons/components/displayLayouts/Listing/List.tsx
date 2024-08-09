
import { FC, ReactNode, useContext, isValidElement, CSSProperties } from "react"
import "./List.css"
import React from "react";
import ListItem from "./ListItem";
import { classNames } from "@/commons/utils/classNameHandler";


interface ListContextType {
    isAllListItem: boolean;
    themeColor?: string;
  }
  
const defaultContextValue: ListContextType = {
    isAllListItem: true,
    themeColor: "#2C5C4F"
};

export const ListContext = React.createContext<ListContextType>(defaultContextValue);

interface ListProps {
    children: ReactNode;
    orientation: string;
    listGap?: string;
    className?:string;
    style?:CSSProperties;
    theme?:string;
}


const List: FC<ListProps>& { Item: typeof ListItem } = ({children, orientation, listGap, className, style, theme}) => {


    const validateChildren = (children: ReactNode) => {
        React.Children.forEach(children, (child) => {
            if (!isValidElement(child) || child.type !== ListItem) {
                throw new Error("Only ListItem components are allowed as children of List");
            }
        })
    }

    validateChildren(children);


    return (
        <ListContext.Provider value={{isAllListItem: true, themeColor:theme}}>
            <div className={classNames(["list", className])} 
                style={{...orientation === "vertical" ?
                    {
                        display: "flex",
                        flexDirection: "column",
                    }
                    :
                    {
                        display: "flex",
                        flexDirection: "row",
                    } ,           
                    gap: listGap ? listGap: "15px",
                    ...style }}>
                {children}
            </div>
        </ListContext.Provider>
    )
    
}



// Attach ListItem as a static property
List.Item = ListItem;


export default List;