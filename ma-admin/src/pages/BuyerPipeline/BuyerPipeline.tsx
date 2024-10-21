import styles from "./BuyerPipeline.module.less"
import EditableTable from '@/commons/components/EditableTable/EditableTable';
import { FilterFilled } from '@ant-design/icons';
import { Tooltip } from "antd";


// Define the BuyerInquiry type
type BuyerInquiry = {
  buyerId: string;
  companyName: string;
  preferredIndustry: string;
  mnaStrategy: string;
  investmentSize: string;
  preferredRegion: string;
  latestUpdated: string;
};

// Define an array of BuyerInquiry data
const buyerInquiries: BuyerInquiry[] = [
  {
    buyerId: 'B1385',
    companyName: 'Company Capital xxx',
    preferredIndustry: 'Logistics',
    mnaStrategy: 'High',
    investmentSize: '$50M - $150M',
    preferredRegion: 'South China',
    latestUpdated: '2024-07-18',
  },
  {
    buyerId: 'B1385',
    companyName: 'Company Capital xxx',
    preferredIndustry: 'Beauty',
    mnaStrategy: 'Medium',
    investmentSize: '$50M - $150M',
    preferredRegion: 'South China',
    latestUpdated: '2024-07-14',
  },
  {
    buyerId: 'B1385',
    companyName: 'Company Capital xxx',
    preferredIndustry: 'Beverages',
    mnaStrategy: 'Low',
    investmentSize: '$50M - $150M',
    preferredRegion: 'South China',
    latestUpdated: '2024-07-13',
  },
  {
    buyerId: 'B1385',
    companyName: 'Company Capital xxx',
    preferredIndustry: 'Consumer',
    mnaStrategy: 'High',
    investmentSize: '$50M - $150M',
    preferredRegion: 'South China',
    latestUpdated: '2024-07-12',
  },
  {
    buyerId: 'B1385',
    companyName: 'Company Capital xxx',
    preferredIndustry: 'Electronics',
    mnaStrategy: 'Medium',
    investmentSize: '$50M - $150M',
    preferredRegion: 'South China',
    latestUpdated: '2024-07-11',
  },
  {
    buyerId: 'B1385',
    companyName: 'Company Capital xxx',
    preferredIndustry: 'E-commerce',
    mnaStrategy: 'Low',
    investmentSize: '$50M - $150M',
    preferredRegion: 'South China',
    latestUpdated: '2024-07-10',
  },
  {
    buyerId: 'B1385',
    companyName: 'Company Capital xxx',
    preferredIndustry: 'E-commerce',
    mnaStrategy: 'Low',
    investmentSize: '$50M - $150M',
    preferredRegion: 'South China',
    latestUpdated: '2024-07-10',
  },
  {
    buyerId: 'B1385',
    companyName: 'Company Capital xxx',
    preferredIndustry: 'E-commerce',
    mnaStrategy: 'Low',
    investmentSize: '$50M - $150M',
    preferredRegion: 'South China',
    latestUpdated: '2024-07-10',
  },
  {
    buyerId: 'B1385',
    companyName: 'Company Capital xxx',
    preferredIndustry: 'E-commerce',
    mnaStrategy: 'Low',
    investmentSize: '$50M - $150M',
    preferredRegion: 'South China',
    latestUpdated: '2024-07-10',
  },
  {
    buyerId: 'B1385',
    companyName: 'Company Capital xxx',
    preferredIndustry: 'E-commerce',
    mnaStrategy: 'Low',
    investmentSize: '$50M - $150M',
    preferredRegion: 'South China',
    latestUpdated: '2024-07-10',
  },
  {
    buyerId: 'B1385',
    companyName: 'Company Capital xxx',
    preferredIndustry: 'E-commerce',
    mnaStrategy: 'Low',
    investmentSize: '$50M - $150M',
    preferredRegion: 'South China',
    latestUpdated: '2024-07-10',
  },
  {
    buyerId: 'B1385',
    companyName: 'Company Capital xxx',
    preferredIndustry: 'E-commerce',
    mnaStrategy: 'Low',
    investmentSize: '$50M - $150M',
    preferredRegion: 'South China',
    latestUpdated: '2024-07-10',
  },
];


const filterPreferredIndustryOptions = buyerInquiries.map((elem,_)=>({text: elem.preferredIndustry, value:elem.preferredIndustry}));

// Define the column configuration for Ant Design's Table component
const buyerColumns = [
  { title: 'Buyer ID', dataIndex: 'buyerId', key: 'buyerId' },
  { title: 'Co. Name', dataIndex: 'companyName', key: 'companyName' },
  {
    title: 'Preferred Industry', dataIndex: 'preferredIndustry', key: 'preferredIndustry',
    filters: filterPreferredIndustryOptions,
    filterIcon: () => (
      <Tooltip title="Filter by preferred Industry">
        <FilterFilled />
      </Tooltip>
    ),
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.preferredIndustry.indexOf(value as string) === 0,
  },
  { title: 'M&A Strategy', dataIndex: 'mnaStrategy', key: 'mnaStrategy' },
  { title: 'Investment Size', dataIndex: 'investmentSize', key: 'investmentSize' },
  { title: 'Preferred Region', dataIndex: 'preferredRegion', key: 'preferredRegion' },
  {
    title: 'Latest Updated',
    dataIndex: 'latestUpdated',
    key: 'latestUpdated',
    sorter: (a, b) => new Date(a.latestUpdated).getTime() - new Date(b.latestUpdated).getTime(),
    render: (date) => new Date(date).toLocaleDateString(), // Optional: Format the date display
  },
];



const BuyerPipeline = () => {
  return (
    <div className={styles.container}>
      <div className={styles.toolBar}>
        <div className={styles.addButton}>
          Add
        </div>

      </div>
      <EditableTable data={buyerInquiries} inputColumns={buyerColumns} rowKey={"buyerId"}>

      </EditableTable>
    </div>
  );
};

export default BuyerPipeline;