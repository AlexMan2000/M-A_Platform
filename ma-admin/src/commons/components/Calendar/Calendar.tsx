import React, { CSSProperties } from 'react';
import "./Calendar.css"
import {classNamesArgs} from "@/commons/utils/classNameHandler"

interface CalendarProps {
  // Define your props here
  style?: CSSProperties
  className?: string
}

const Calendar: React.FC<CalendarProps> = ({style, className}: CalendarProps) => {
  return (
    <div className={classNamesArgs(className)} style={{...style}}>
      Calendar Component
    </div>
  );
};

export default Calendar;