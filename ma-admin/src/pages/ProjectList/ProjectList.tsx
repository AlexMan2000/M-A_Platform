import { Switch, Tooltip } from "antd";
import styles from "./ProjectList.module.less"
import { FilterFilled } from '@ant-design/icons';
import EditableTable from "@/commons/components/EditableTable/EditableTable";
import "./ProjectList.css"

// Define the SellerInquiry type
type SellerInquiry = {
  sellerId: string;
  companyName: string;
  industry: string;
  progressPhase: { phase: string, percentage: number };
  annualTurnover: string;
  askingPrice: string;
  region: string;
  publicationDate: string;
  visibility: boolean;
};

// Define an array of SellerInquiry data
const sellerInquiries: SellerInquiry[] = [
  {
    sellerId: 'S0056',
    companyName: 'Company A',
    industry: 'Logistics',
    progressPhase: { phase: 'Buyers Outreach', percentage: 60 },
    annualTurnover: '$10M',
    askingPrice: '$100M',
    region: 'South China',
    publicationDate: '2024-07-20',
    visibility: false
  },
  {
    sellerId: 'S0056',
    companyName: 'Company B',
    industry: 'Beauty',
    progressPhase: { phase: 'Negotiation', percentage: 70 },
    annualTurnover: '$10M',
    askingPrice: '$100M',
    region: 'South China',
    publicationDate: '2024-07-20',
    visibility: true
  },
  {
    sellerId: 'S0056',
    companyName: 'Company C',
    industry: 'Beverages',
    progressPhase: { phase: 'Buyers Outreach', percentage: 60 },
    annualTurnover: '$10M',
    askingPrice: '$100M',
    region: 'South China',
    publicationDate: '2024-07-20',
    visibility: true
  },
  {
    sellerId: 'S0056',
    companyName: 'Company D',
    industry: 'Consumer',
    progressPhase: { phase: 'Negotiation', percentage: 75 },
    annualTurnover: '$10M',
    askingPrice: '$100M',
    region: 'South China',
    publicationDate: '2024-07-20',
    visibility: true
  },
  {
    sellerId: 'S0056',
    companyName: 'Company E',
    industry: 'Electronics',
    progressPhase: { phase: 'Buyers Outreach', percentage: 60 },
    annualTurnover: '$10M',
    askingPrice: '$100M',
    region: 'South China',
    publicationDate: '2024-07-20',
    visibility: true
  },
  {
    sellerId: 'S0056',
    companyName: 'Company F',
    industry: 'E-commerce',
    progressPhase: { phase: 'Pre-Consultation', percentage: 15 },
    annualTurnover: '$10M',
    askingPrice: '$100M',
    region: 'South China',
    publicationDate: '2024-07-20',
    visibility: true
  },
  {
    sellerId: 'S0056',
    companyName: 'Company F',
    industry: 'E-commerce',
    progressPhase: { phase: 'Pre-Consultation', percentage: 15 },
    annualTurnover: '$10M',
    askingPrice: '$100M',
    region: 'South China',
    publicationDate: '2024-07-20',
    visibility: true
  },
  {
    sellerId: 'S0056',
    companyName: 'Company F',
    industry: 'E-commerce',
    progressPhase: { phase: 'Pre-Consultation', percentage: 15 },
    annualTurnover: '$10M',
    askingPrice: '$100M',
    region: 'South China',
    publicationDate: '2024-07-20',
    visibility: false
  },
  {
    sellerId: 'S0056',
    companyName: 'Company F',
    industry: 'E-commerce',
    progressPhase: { phase: 'Pre-Consultation', percentage: 15 },
    annualTurnover: '$10M',
    askingPrice: '$100M',
    region: 'South China',
    publicationDate: '2024-07-20',
    visibility: true
  },
  {
    sellerId: 'S0056',
    companyName: 'Company F',
    industry: 'E-commerce',
    progressPhase: { phase: 'Pre-Consultation', percentage: 15 },
    annualTurnover: '$10M',
    askingPrice: '$100M',
    region: 'South China',
    publicationDate: '2024-07-20',
    visibility: true
  },
  {
    sellerId: 'S0056',
    companyName: 'Company F',
    industry: 'E-commerce',
    progressPhase: { phase: 'Pre-Consultation', percentage: 15 },
    annualTurnover: '$10M',
    askingPrice: '$100M',
    region: 'South China',
    publicationDate: '2024-07-20',
    visibility: true
  },
  {
    sellerId: 'S0056',
    companyName: 'Company F',
    industry: 'E-commerce',
    progressPhase: { phase: 'Pre-Consultation', percentage: 15 },
    annualTurnover: '$10M',
    askingPrice: '$100M',
    region: 'South China',
    publicationDate: '2024-07-20',
    visibility: true
  },

];

// Filter options for industry column
const filterIndustryOptions = sellerInquiries.map((elem, _) => ({ text: elem.industry, value: elem.industry }));

// Define the column configuration for Ant Design's Table component
const sellerColumns = [
  { title: 'Project ID', dataIndex: 'sellerId', key: 'sellerId' },
  { title: 'Co. Name', dataIndex: 'companyName', key: 'companyName' },
  {
    title: 'Industry',
    dataIndex: 'industry',
    key: 'industry',
    filters: filterIndustryOptions,
    filterIcon: () => (
      <Tooltip title="Filter by industry">
        <FilterFilled />
      </Tooltip>
    ),
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.industry.indexOf(value as string) === 0,
  },
  {
    title: 'Progress & Phase',
    dataIndex: 'progressPhase',
    key: 'progressPhase',
    render: (progressPhase: { phase: string, percentage: number }) => (
      <>
        <div>{progressPhase.phase}</div>
        <div style={{display:"flex", flexDirection: "row", alignItems:"center", gap: "10px"}}>
          <div style={{ backgroundColor: '#eaeaea', width: '100%', height: '15px', borderRadius: '4px' }}>
            <div style={{ backgroundColor: '#BDBDBD', width: `${progressPhase.percentage}%`, height: '100%', borderRadius: '4px' }} />
          </div>
          <div>{`${progressPhase.percentage}%`}</div>
        </div>
      </>
    ),
  },
  { title: 'Annual Turnover', dataIndex: 'annualTurnover', key: 'annualTurnover', align: "center" },
  { title: 'Asking Price', dataIndex: 'askingPrice', key: 'askingPrice' },
  { title: 'Region', dataIndex: 'region', key: 'region' },
  {
    title: 'Publication Date',
    dataIndex: 'publicationDate',
    key: 'publicationDate',
    sorter: (a, b) => new Date(a.publicationDate).getTime() - new Date(b.publicationDate).getTime(),
    render: (date) => new Date(date).toLocaleDateString(),
  },
  {
    title: "Visibility",
    dataIndex: "visibility",
    key: "visibility",
    render: (_) => {
      return <Switch 
        // checked={checked} 
        className={"projectList-switch"}
        onChange={()=>{
          // 发请求
        }}>
        </Switch>
    }
  }
];

const actionOptions = ["Preview", "Details", "Edit", "Share", "Archive"]

const ProjectList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.addButton} 
          onClick={()=>{
          alert("Expect detail page design")
        }}>
          Add
        </div>
      <EditableTable 
        data={sellerInquiries} 
        inputColumns={sellerColumns} 
        loading={false}
        rowKey={"sellerId"}
        actionOptions={actionOptions}
        >
      </EditableTable>
    </div>
  );
};

export default ProjectList;