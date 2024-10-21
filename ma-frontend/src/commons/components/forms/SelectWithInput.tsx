import React, { CSSProperties, useRef, useState } from 'react';
import "./SelectWithInput.css"
import { classNamesArgs } from "@/commons/utils/classNameHandler"
import { Checkbox, Input, Button, Select, Divider, Space, Tooltip, Radio } from 'antd';
import { PlusOutlined } from "@ant-design/icons"
import type { InputRef } from 'antd';
import "./SelectWithInput.css"

interface Option {
    label: string
    value: string
    desc?: string
    disabled?: boolean
}


type Mode = "multiple" | "tags" | undefined

interface SelectWithInputProps {
    placeholder: string
    mode?: Mode
    inputOptions?: Option[] | string[]
    onChange: (selectedValues: string[]) => void
    style?: CSSProperties
    className?: string
}

function isObj(elem: any) {
    return typeof elem[0] === "object";
}

const SelectWithInput: React.FC<SelectWithInputProps> = (props: SelectWithInputProps) => {


    const { placeholder, inputOptions, onChange, mode, style, className } = props;
    const inputItems = inputOptions && inputOptions.length > 0 ? isObj(inputOptions) ? inputOptions!.map((elem: any) => (elem.label)) : inputOptions : [];
    const [items, setItems] = useState<string[]>(inputItems);
    const [name, setName] = useState('');
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const inputRef = useRef<InputRef>(null);
    const index = useRef<number>(0);


    const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleSelectChange = (updatedSelection: any) => {
        /**
         * newSelectedItems: string[]: ["option1", "option2", "option3"]
         */
        let newSelectedItems = updatedSelection;
        if (typeof newSelectedItems === "string") {
            newSelectedItems = [updatedSelection]
        }
        setSelectedItems(newSelectedItems);
        onChange(newSelectedItems);
    };


    const addItem = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        e.preventDefault();
        setItems([...items, name || `New item ${index.current ? index.current : 0}`]);
        setName('');
        setTimeout(() => {
            inputRef.current?.focus();
            index.current++;
        }, 0);
    };

    const resetItems = () => {
        setItems(inputItems);
        setName('');
    }

    return (
        <Select
            className={classNamesArgs("select-with-inputs", className)}
            mode={mode}
            style={{ width: "100%", height: "100%", lineHeight: "100%", ...style }}
            placeholder={placeholder || "custom dropdown render"}
            onChange={handleSelectChange}
            onDropdownVisibleChange={(visible) => { if (!visible) { resetItems(); } }}
            dropdownRender={(menu) => {
                return (
                    <>
                        {menu}
                        <Divider style={{ margin: '8px 0' }} />
                        <Space style={{
                            padding: '0 8px 4px',
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: "100%"
                        }}>
                            <Input
                                placeholder="Other, please specify"
                                ref={inputRef}
                                value={name}
                                onChange={onNameChange}
                                onKeyDown={(e) => e.stopPropagation()}
                            />
                            <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
                                Add item
                            </Button>
                        </Space>
                    </>
                )
            }}
            options={inputOptions?.map((item, _) => { 
                const returnedOption = isObj(item) || item == "[object Object]" ? item : ({ label: item, value: item})
                return returnedOption;
            })}
            optionLabelProp="label"
            optionRender={(option) => { 
                return (
                mode === "multiple" ? <Checkbox checked={selectedItems.includes(option.data.value)}>
                    <div className={"dev-only-checkbox-label"}>
                        {option.data.desc ? <Tooltip title={option.data.desc}>{option.data.label}</Tooltip> : option.data.label}
                    </div>
                </Checkbox> :
                <Radio checked={selectedItems.includes(option.data.value)}><div className={"dev-only-checkbox-label"}>{option.data.label}</div></Radio>
            )}}
            maxTagCount="responsive"
            maxTagPlaceholder={(omittedValues) => {
                const omittedNum = omittedValues.length;

                return (
                    <Tooltip
                        overlayStyle={{ pointerEvents: 'none' }}
                        title={omittedValues.map(({ label }) => label).join(', ')}
                    >
                        <span>+{omittedNum} ...</span>
                    </Tooltip>
                )
            }}
        />
    );
};

export default SelectWithInput;