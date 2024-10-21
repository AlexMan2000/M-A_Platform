import EditableTable from "@/commons/components/EditableTable/EditableTable";
import styles from "./Inquiry.module.less"
import Card from "@/commons/components/Card/Card";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPageIndex, setPageStatus } from "@/store/slice/globalSlice/globalSlice";
import handleChangeMenu from "@/commons/utils/changePageHandler";


type SellerInquiry = {
    companyName: string;
    industry: string;
    motivation: string;
    turnover: string;
    keyContact: string;
    region: string;
    publicationDate: string;
}


type BuyerInquiry = {
    companyName: string;
    desiredIndustry: string;
    desiredRegion: string;
    dealSize: string;
    companyType: string;
    keyContact: string;
    publicationDate: string;
}


const sellerInquiries: SellerInquiry[] = [
    {
        companyName: 'Logistics Co.',
        industry: 'Logistics',
        motivation: 'Business Succession',
        turnover: '$10M',
        keyContact: 'Lucy Huang',
        region: 'South China',
        publicationDate: 'Jul 20 2024',
    },
    {
        companyName: 'Beauty Corp.',
        industry: 'Beauty',
        motivation: 'Change of Priorities',
        turnover: '$15M',
        keyContact: 'Jack Li',
        region: 'East China',
        publicationDate: 'Jun 18 2024',
    },
    {
        companyName: 'Beverage Solutions',
        industry: 'Beverages',
        motivation: 'Financial Gain',
        turnover: '$12M',
        keyContact: 'Will Zhang',
        region: 'North China',
        publicationDate: 'Aug 10 2024',
    },
    {
        companyName: 'Consumer Goods Ltd.',
        industry: 'Consumer Goods',
        motivation: 'Market Conditions',
        turnover: '$8M',
        keyContact: 'Christina Wei',
        region: 'West China',
        publicationDate: 'May 25 2024',
    },
    {
        companyName: 'Tech Innovators',
        industry: 'Technology',
        motivation: 'Growth Opportunity',
        turnover: '$25M',
        keyContact: 'Edward Liu',
        region: 'Central China',
        publicationDate: 'Jul 30 2024',
    },
];


const sellerColumns = [
    { title: 'Company Name', dataIndex: 'companyName', key: 'companyName' },
    { title: 'Industry', dataIndex: 'industry', key: 'industry', sorter: true },
    { title: 'Motivation', dataIndex: 'motivation', key: 'motivation' },
    { title: 'Turnover', dataIndex: 'turnover', key: 'turnover' },
    { title: 'Key Contact', dataIndex: 'keyContact', key: 'keyContact' },
    { title: 'Region', dataIndex: 'region', key: 'region' },
    { title: 'Publication Date', dataIndex: 'publicationDate', key: 'publicationDate', sorter: true },
];


const buyerInquiries: BuyerInquiry[] = [
    {
        companyName: 'Investment Group A',
        desiredIndustry: 'Logistics',
        desiredRegion: 'South China',
        dealSize: '$10M - $50M',
        companyType: 'Private Equity',
        keyContact: 'Lucy Huang',
        publicationDate: 'Jul 21 2024',
    },
    {
        companyName: 'Global Ventures Ltd.',
        desiredIndustry: 'Beauty & Cosmetics',
        desiredRegion: 'East China',
        dealSize: '$5M - $20M',
        companyType: 'Venture Capital',
        keyContact: 'Jack Li',
        publicationDate: 'Jun 20 2024',
    },
    {
        companyName: 'Strategic Investors Inc.',
        desiredIndustry: 'Beverages',
        desiredRegion: 'North China',
        dealSize: '$15M - $40M',
        companyType: 'Strategic Buyer',
        keyContact: 'Will Zhang',
        publicationDate: 'Aug 11 2024',
    },
    {
        companyName: 'Consumer Partners',
        desiredIndustry: 'Consumer Goods',
        desiredRegion: 'West China',
        dealSize: '$5M - $30M',
        companyType: 'Private Equity',
        keyContact: 'Christina Wei',
        publicationDate: 'May 26 2024',
    },
    {
        companyName: 'Tech Ventures',
        desiredIndustry: 'Technology',
        desiredRegion: 'Central China',
        dealSize: '$20M - $60M',
        companyType: 'Strategic Buyer',
        keyContact: 'Edward Liu',
        publicationDate: 'Jul 31 2024',
    },
];


const buyerColumns = [
    { title: 'Company Name', dataIndex: 'companyName', key: 'companyName' },
    { title: 'Desired Industry', dataIndex: 'desiredIndustry', key: 'desiredIndustry' },
    { title: 'Desired Region', dataIndex: 'desiredRegion', key: 'desiredRegion' },
    { title: 'Deal Size', dataIndex: 'dealSize', key: 'dealSize' },
    { title: 'Company Type', dataIndex: 'companyType', key: 'companyType' },
    { title: 'Key Contact', dataIndex: 'keyContact', key: 'keyContact' },
    { title: 'Publication Date', dataIndex: 'publicationDate', key: 'publicationDate' },
];



const Inquiry = () => {


    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <div className={styles.headerStats}>
                <Card
                    style={{
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: "25%",
                        gap: "10px"
                    }}
                >
                    <div className={styles.statsTitle}>Total Inquiries</div>
                    <div className={styles.statsNum}>145</div>
                </Card>
                <Card
                    style={{
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: "25%",
                        gap: "10px"
                    }}
                >
                    <div className={styles.statsTitle}>Buyer Inquiries</div>
                    <div className={styles.statsNum}>120</div>
                </Card>
                <Card
                    style={{
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: "25%",
                        gap: "10px"
                    }}
                >
                    <div className={styles.statsTitle}>Seller Inquiries</div>
                    <div className={styles.statsNum}>25</div>
                </Card>
                <Card
                    style={{
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: "25%",
                        gap: "10px"
                    }}
                >
                    <div className={styles.statsTitle}>Others</div>
                    <div className={styles.statsNum}>21</div>
                </Card>
            </div>
            <div className={styles.sellerGroup}>
                <div className={styles.titleRow}>
                    <div className={styles.sellerTitle}>Seller Inquiries</div>
                    <div 
                        className={styles.viewAll} 
                        onClick={()=>{
                            handleChangeMenu(navigate, dispatch, "/list");
                        }}>View All</div>
                </div>
                <EditableTable<SellerInquiry> data={sellerInquiries} inputColumns={sellerColumns} rowKey={"companyName"}></EditableTable>
            </div>
            <div className={styles.buyerGroup}>
                <div className={styles.titleRow}>
                    <div className={styles.buyerTitle}>Buyer Inquiries</div>
                    <div className={styles.viewAll}
                     onClick={()=>{
                        handleChangeMenu(navigate, dispatch, "/pipeline");
                    }}
                    >View All</div>
                </div>
                <EditableTable<BuyerInquiry> data={buyerInquiries} inputColumns={buyerColumns} rowKey={"companyName"}></EditableTable>
            </div>
        </div>
    );
};


export default Inquiry;