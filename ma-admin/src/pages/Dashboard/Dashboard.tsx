
import styles from "./Dashboard.module.less"
import Card from '@/commons/components/Card/Card';
import { Tabs } from 'antd';
import TabPane from "antd/es/tabs/TabPane";
import { useEffect, useState } from "react";
import "./Dashboard.css"
import EditableTable from "@/commons/components/EditableTable/EditableTable";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import handleChangeMenu from "@/commons/utils/changePageHandler";
import { getBuyerInquiry, getSellerInquiry } from "@/services/inquiryServices/inquiryApi";

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


const Cards = [
  {
    title: "Active Projects",
    statistics: 25
  },
  {
    title: "To Do",
    statistics: 12
  },
  {
    title: "Backlogs",
    statistics: 32
  },
  {
    title: "Deal Completed",
    statistics: 16
  }
]



// Define the Company type
type Company = {
  companyName: string;
  industry: string;
  motivation: string;
  turnover: string;
  keyContact: string;
  region: string;
  publicationDate: string;
};

// Example data (same structure as in the image)
const companySellerData: Company[] = [
  {
    companyName: 'Company A',
    industry: 'Logistics',
    motivation: 'Business Succession',
    turnover: '10M USD',
    keyContact: 'xxxxxxx@xx.com',
    region: 'South China',
    publicationDate: 'Jul 20 2024 12:30',
  },
  {
    companyName: 'Company B',
    industry: 'Beauty',
    motivation: 'Change Of Priorities',
    turnover: '10M USD',
    keyContact: 'xxxxxxx@xx.com',
    region: 'South China',
    publicationDate: 'Jul 20 2024 12:30',
  },
  {
    companyName: 'Company C',
    industry: 'Beverages',
    motivation: 'Financial Gain',
    turnover: '10M USD',
    keyContact: 'xxxxxxx@xx.com',
    region: 'South China',
    publicationDate: 'Jul 20 2024 12:30',
  },
];


const companyBuyerData: Company[] = [
  {
    companyName: 'Company BBBA',
    industry: 'Logistics',
    motivation: 'Business Succession',
    turnover: '10M USD',
    keyContact: 'xxxxxxx@xx.com',
    region: 'South China',
    publicationDate: 'Jul 20 2024 12:30',
  },
  {
    companyName: 'Company SSB',
    industry: 'Beauty',
    motivation: 'Change Of Priorities',
    turnover: '10M USD',
    keyContact: 'xxxxxxx@xx.com',
    region: 'South China',
    publicationDate: 'Jul 20 2024 12:30',
  },
  {
    companyName: 'Company HAHAHC',
    industry: 'Beverages',
    motivation: 'Financial Gain',
    turnover: '10M USD',
    keyContact: 'xxxxxxx@xx.com',
    region: 'South China',
    publicationDate: 'Jul 20 2024 12:30',
  },
];

// Column definitions for the table
const buyerColumns = [
  { title: 'Co. Name', dataIndex: 'companyName', key: 'companyName' },
  {
    title: 'Industry',
    dataIndex: 'industry',
    key: 'industry',
  },
  { title: 'Turnover', dataIndex: 'turnover', key: 'turnover' },
  { title: 'Key Contact', dataIndex: 'keyContact', key: 'keyContact' },
  { title: 'Region', dataIndex: 'region', key: 'region' },
  {
    title: 'Publication',
    dataIndex: 'publicationDate',
    key: 'publication',
    sorter: (a: Company, b: Company) => new Date(a.publicationDate).getTime() - new Date(b.publicationDate).getTime(),
  },
];


const sellerColumns = [
  { title: 'Co. Name', dataIndex: 'companyName', key: 'companyName' },
  {
    title: 'Industry',
    dataIndex: 'industry',
    key: 'industry',
  },
  { title: 'Motivation', dataIndex: 'motivation', key: 'motivation' },

  { title: 'Turnover', dataIndex: 'turnover', key: 'turnover' },
  { title: 'Key Contact', dataIndex: 'keyContact', key: 'keyContact' },
  { title: 'Region', dataIndex: 'region', key: 'region' },
  {
    title: 'Publication',
    dataIndex: 'publicationDate',
    key: 'publication',
    sorter: (a: Company, b: Company) => new Date(a.publicationDate).getTime() - new Date(b.publicationDate).getTime(),
  },
];


const Dashboard = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState<string>("seller");
  const [buyerData, setBuyerData] = useState<BuyerInquiry[]>([]);
  const [sellerData, setSellerData] = useState<SellerInquiry[]>([]);
  const [inquiryLoading, setInquiryLoading] = useState<boolean>(false);
  // const [projectLoading, setProjectLoading] = useState<boolean>(false);


  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  useEffect(() => {
    (async function () {
      setInquiryLoading(true);
      const databaseBuyerData = await getBuyerInquiry();
      const databaseSellerData = await getSellerInquiry();
      setInquiryLoading(false);
      setBuyerData([...companyBuyerData, ...databaseBuyerData]);
      setSellerData([...companySellerData, ...databaseSellerData]);
    })();
  }, []);


  return (
    <div className={styles.container}>
      <div className={styles.topCards}>
        {Cards.map((elem, index) => (
          <Card
            key={elem.toString() + index}
            width={251}
            height={118}
            alignType='start'
          >
            <div className={styles.content}>
              <div className={styles.title}>{elem.title}</div>
              <div className={styles.stats}>{elem.statistics}</div>
            </div>
          </Card>
        ))}
      </div>
      <div className={styles.newInquiry}>
        <div className={styles.title}>
          New Inquiries
        </div>
        <div className={styles.tabContent}>
          <Tabs
            className={"dashboard-tab"}
            activeKey={activeTab}
            onChange={handleTabChange}
            tabBarGutter={15}
            tabBarStyle={{ borderBottom: 'none' }}
            tabBarExtraContent={
              <div className={"extra-content-view-all"}
                onClick={() => {
                  handleChangeMenu(navigate, dispatch, "/inquiries")
                }}
              >View All</div>}
          >
            <TabPane
              tab={<span className={activeTab === "seller" ? styles.activeTab : ''}
              >Seller</span>} key="seller">
              <EditableTable 
                data={sellerData} 
                inputColumns={sellerColumns} 
                rowKey={"companyName"}
                loading={inquiryLoading}></EditableTable>
            </TabPane>
            <TabPane tab={<span className={activeTab === "buyer" ? styles.inactiveTab : ''}>Buyer</span>} key="buyer">
              <EditableTable 
                data={buyerData} 
                inputColumns={buyerColumns} 
                rowKey={"companyName"}
                loading={inquiryLoading}
                ></EditableTable>

            </TabPane>
          </Tabs>
        </div>
      </div>
      <div className={styles.projects}>
        <div className={styles.headerRow}>
          <div className={styles.title}>
            Ongoing Projects
          </div>
          <div className={styles.viewAll}>View All</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;