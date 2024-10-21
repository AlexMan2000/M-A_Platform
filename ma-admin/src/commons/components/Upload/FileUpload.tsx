import React, { CSSProperties } from 'react';
import "./FileUpload.css"
import {classNamesArgs} from "@/commons/utils/classNameHandler"

interface FileUploadProps {
  // Define your props here
  style?: CSSProperties
  className?: string
}

const FileUpload: React.FC<FileUploadProps> = ({style, className}: FileUploadProps) => {
  return (
    <div className={classNamesArgs(className)} style={{...style}}>
      FileUpload Component
    </div>
  );
};

export default FileUpload;