import React, { CSSProperties, useState } from 'react';
import "./SelectWithInput.css"
import {classNamesArgs} from "@/commons/utils/classNameHandler"
import { Checkbox, Input, Button } from 'antd';

interface Option {
    label:string
    value:string
    disabled?: boolean
}

interface SelectWithInputProps {
  // Define your props here
  inputOptions?: Option[] | string[]
  value: string
  style?: CSSProperties
  className?: string
}

const SelectWithInput: React.FC<SelectWithInputProps> = ({inputOptions, value, style, className}: SelectWithInputProps) => {
    
    const [checkedValues, setCheckedValues] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>('');

    const refinedOptions: (Option[] | undefined) = inputOptions?.map((elem, index) => {

        if (Object.prototype.toString.call(elem) == "[object Object]") {
            return elem;
        } else if (typeof elem === "string") {
            return ({label: elem, value: elem})
        }
    })

    const finalOptions: Option[] = [ ...(refinedOptions ? refinedOptions : []), { label: 'Other (please specify)', value: 'Other' }]

  
    return (
    <div className={classNamesArgs("select-with-input", className)} style={{...style}}>
      <Checkbox.Group options={options} onChange={onChange} />
    </div>
  );
};

export default SelectWithInput;