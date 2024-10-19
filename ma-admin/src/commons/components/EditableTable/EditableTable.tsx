import styles from "./EditableTable.module.less"
import "./EditableTable.css"
import { Table } from "antd"
import { Tooltip, Menu, Dropdown } from 'antd';
import { MoreOutlined } from '@ant-design/icons'

type GenericTableProps<T> = {
    data: T[];
    inputColumns: any;
    rowKey: any;
}


const menu = (
    <Menu>
        <Menu.Item key="1">Preview</Menu.Item>
        <Menu.Item key="2">Details</Menu.Item>
        <Menu.Item key="3">Edit</Menu.Item>
        <Menu.Item key="4">Share</Menu.Item>
        <Menu.Item key="5">Archive</Menu.Item>
    </Menu>
);


const MenuInTooltip = () => (
    <Tooltip
        placement="bottom"
        title={menu} 
        trigger="click" 
        color={"#fff"}
    >
        <MoreOutlined style={{ fontSize: '24px', cursor: 'pointer', transform: "rotate(90deg)" }} />
    </Tooltip>
);


function EditableTable<T extends object>({ data, inputColumns, rowKey }: GenericTableProps<T>) {


    const columns = [
        ...inputColumns
        , {
            title: 'Action',
            key: 'action',
            align: 'center',
            render: () => <MenuInTooltip></MenuInTooltip>,
        }
    ]

    return (
        <div className={styles.container}>
            <Table<T>
                columns={columns}
                dataSource={data}
                rowKey={rowKey}
                pagination={{ position: ['bottomRight'] }}
            >
            </Table>
        </div>
    );
};

export default EditableTable;