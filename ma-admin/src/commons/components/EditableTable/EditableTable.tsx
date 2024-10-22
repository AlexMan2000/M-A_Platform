import styles from "./EditableTable.module.less"
import "./EditableTable.css"
import { Table } from "antd"
import { Tooltip, Menu } from 'antd';
import { MoreOutlined } from '@ant-design/icons'
import { useState } from "react";

type GenericTableProps<T> = {
    data: T[];
    loading: boolean;
    inputColumns: any;
    rowKey: any;
    actionOptions?: any;
}







function EditableTable<T extends object>({ data, loading, inputColumns, rowKey, actionOptions }: GenericTableProps<T>) {


    const [pageSize, setPageSize] = useState<number>(10);
    const [pageIndex, setPageIndex] = useState<number>(1);

        
    const menu = (
        <Menu onClick={()=>{alert("coming soon")}}>
            {actionOptions?.map((elem, index) => <Menu.Item key={`${index}`}>{elem}</Menu.Item>)}
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

    const columns = [
        ...inputColumns
        , {
            title: 'Action',
            key: 'action',
            align: 'center',
            render: () => <MenuInTooltip></MenuInTooltip>,
        }
    ]

    const numPages = Math.floor(data.length / pageSize) + 1;
    const showingNum = numPages == pageIndex ? data.length % pageSize: pageSize;

    return (
        <div className={styles.container}>
            <Table<T>
                columns={columns}
                dataSource={data}
                loading={loading}
                rowKey={rowKey}
                pagination={{ 
                    current: pageIndex,
                    pageSize:pageSize,
                    onChange: (page, _)=> {
                        setPageIndex(page);
                    },
                    showSizeChanger: true,
                    onShowSizeChange: (_, newPageSize) => {
                        setPageIndex(1);
                        setPageSize(newPageSize);
                    },
                    pageSizeOptions: [5, 10, 50],
                    position: ['bottomRight'] }}
                summary={()=>(
                    <Table.Summary fixed={'bottom'}>
                    <Table.Summary.Row>
                      <Table.Summary.Cell index={2} colSpan={8}>
                        <span style={{color:"black", fontWeight: 500}}>Showing {showingNum} results of {data.length} results</span>
                      </Table.Summary.Cell>
                    </Table.Summary.Row>
                  </Table.Summary>
                )}
            >
            </Table>
        </div>
    );
};

export default EditableTable;