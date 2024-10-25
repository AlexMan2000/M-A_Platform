import styles from "./BuyerDetail.module.less"
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Button, Form, Input } from "antd";
import SelectWithInput from "@/commons/components/Inputs/SelectWithInput";
import { getBuyerInquiry } from "@/services/inquiryServices/inquiryApi";



const BuyerDetail = () => {
  // 在Route中配置的:id 可以通过useParams()获取到
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { record } = location.state || {};  // Retrieve the passed data
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log(values)

    const { agreed, ...submitted } = values;
    getBuyerInquiry(submitted);
  };

  const handleFailValidation = (values: any) => {
    console.log(values);
  }

  return (
    <div className={styles.container}>
      <div className={styles.backContainer}>
        <div className={styles.backButton}
          onClick={() => {
            navigate("/inquiries");
          }}> Back</div>
        </div>
      <div className={styles.title}>Acquisition Needs (Domestic/Cross-border)</div>
      <Form
        form={form}
        onFinish={handleSubmit}
        onFinishFailed={handleFailValidation}
        layout="vertical"
        className={styles.form}
      >
        <div className={styles.heading}>1. Acquisition Needs</div>
        {/* Desired Industry */}
        <div className={styles.fieldContainer}>
          <label className={styles.fieldLabel}>Desired Industry and Business Field <span style={{ color: "red" }}>*</span></label>
          <div className={styles.fieldContent}>
            <Form.Item
              name={['acquisitionNeeds', 'desiredIndustry']}
              rules={[{ required: true, message: "Please enter your desired industry" }]}
            >
              <Input
                placeholder="Please enter your desired industry and field"
                style={{ width: "500px", height: "50px", fontFamily: "Nunito Sans", fontSize: "16px" }}
              />
            </Form.Item>
          </div>
        </div>
        {/* Desired Region */}
        <div className={styles.fieldContainer}>
          <label className={styles.fieldLabel}>Desired Region <span style={{ color: "red" }}>*</span></label>
          <div className={styles.fieldContent}>
            <Form.Item
              name={['acquisitionNeeds', 'desiredRegion']}
              rules={[{ required: true, message: "Please select all the regions" }]}
            >
              <SelectWithInput
                inputOptions={[
                  "East China", "South China", "North China", "Central China",
                  "China (Other Regions)", "Overseas (Europe/America)",
                  "Overseas (Japan/ Korea)", "Overseas (South East Asia)"
                ]}
                style={{ width: "500px", height: "50px" }}
                placeholder="Please select all the regions"
                mode="multiple" onChange={function (selectedValues: string[]): void {
                  form.setFieldValue(['acquisitionNeeds', 'desiredRegion'], selectedValues)
                }} />
            </Form.Item>
          </div>
        </div>

        {/* Currency */}
        <div className={styles.fieldContainer}>
          <label className={styles.fieldLabel}>Currency <span style={{ color: "red" }}>*</span></label>
          <div className={styles.fieldContent}>

            <Form.Item
              name={['acquisitionNeeds', 'currency']}
              rules={[{ required: true, message: "Please select the currency" }]}
            >
              <SelectWithInput
                inputOptions={["USD", "RMB", "HKD", "TWD", "SGD", "JPY"]}
                style={{ width: "500px", height: "50px" }}
                placeholder="Please select the currency"
                onChange={function (selectedValues: string[]): void {
                  form.setFieldValue(['acquisitionNeeds', 'currency'], selectedValues)
                }} />
            </Form.Item>
          </div>
        </div>

        {/* Preferred Deal Size */}
        <div className={styles.fieldContainer}>
          <label className={styles.fieldLabel}>Preferred Deal Size <span style={{ color: "red" }}>*</span></label>
          <div className={styles.fieldContent}>
            <Form.Item
              name={['acquisitionNeeds', 'preferredDealSize']}
              rules={[{ required: true, message: "Please select your preferred deal size" }]}
            >
              <SelectWithInput
                inputOptions={[
                  { value: "<100M", label: "Less than 100 million" },
                  { value: "100M-500M", label: "100 million to 500 million" },
                  { value: "500M-1B", label: "500 million to 1 billion" },
                  { value: "1B-2B", label: "1 billion to 2 billion" },
                  { value: ">2B", label: "More than 2 billion" },
                  { value: "undecided", label: "Undecided" }
                ]}
                style={{ width: "500px", height: "50px" }}
                placeholder="Please select the deal size"
                mode="multiple" onChange={function (selectedValues: string[]): void {
                  form.setFieldValue(['acquisitionNeeds', 'preferredDealSize'], selectedValues)
                }} />
            </Form.Item>
          </div>
        </div>


        <div className={styles.heading}>2. Company Info</div>


        <div className={styles.fieldContainer}>
          <label className={styles.fieldLabel}>Company's Name<span style={{ color: "red" }}>*</span></label>
          <div className={styles.fieldContent}>
            <Form.Item
              name={['companyInfo', 'companyName']}
              rules={[{ required: true, message: "Please enter your company's name" }]}
            >
              <Input
                placeholder="Please enter your company's name"
                style={{ width: "500px", height: "50px", fontFamily: "Nunito Sans", fontSize: "16px" }}
              />
            </Form.Item>
          </div>
        </div>


        <div className={styles.fieldContainer}>
          {/* Company Type */}
          <label className={styles.fieldLabel}>Your Company Type</label>
          <div className={styles.fieldContent}>
            <Form.Item
              name={['companyInfo', 'companyType']}
              rules={[{ required: false, message: "Please select your company type" }]}
            >
              <SelectWithInput
                inputOptions={[
                  "Private Equity Fund (PE)", "Search Fund", "Private Company",
                  "Public Company", "Family-Owned Business", "Individual Sponsor", "Financial Sponsor"
                ]}
                style={{ width: "500px", height: "50px" }}
                placeholder="Please select your company type"
                onChange={function (selectedValues: string[]): void {
                  form.setFieldValue(['companyInfo', 'companyType'], selectedValues)
                }} />
            </Form.Item>
          </div>
        </div>

        {/* Industry and business field */}
        <div className={styles.fieldContainer}>
          <label className={styles.fieldLabel}>Industry and business field</label>
          <div className={styles.fieldContent}>
            <Form.Item
              name={['companyInfo', 'industryAndField']}
              rules={[{ required: false, message: "Please select at least one from the dropdown options" }]}
            >
              <SelectWithInput
                inputOptions={[
                  "IT Communication",
                  "Professional Services",
                  "Retail",
                  "Real Estate",
                  "Food & Beverage",
                  "Education",
                  "Others"
                ]}
                style={{ width: "500px", height: "50px" }}
                placeholder="Please select the main industry and business field"
                mode="multiple" onChange={function (selectedValues: string[]): void {
                  form.setFieldValue(['companyInfo', 'industryAndField'], selectedValues)
                }} />
            </Form.Item>
          </div>
        </div>


        {/* Currency */}
        <div className={styles.fieldContainer}>
          <label className={styles.fieldLabel}>Currency <span style={{ color: "red" }}>*</span></label>
          <div className={styles.fieldContent}>

            <Form.Item
              name={['companyInfo', 'currency']}
              rules={[{ required: true, message: "Please select at least one currency" }]}
            >
              <SelectWithInput
                inputOptions={["USD", "RMB", "HKD", "TWD", "SGD", "JPY"]}
                style={{ width: "500px", height: "50px" }}
                placeholder="Please select the currency"
                onChange={function (selectedValues: string[]): void {
                  form.setFieldValue(['companyInfo', 'currency'], selectedValues)
                }} />
            </Form.Item>
          </div>
        </div>

        {/* Company's turnover level */}
        <div className={styles.fieldContainer}>
          <label className={styles.fieldLabel}>Your Company's Turnover Level <span style={{ color: "red" }}>*</span></label>
          <div className={styles.fieldContent}>

            <Form.Item
              name={['companyInfo', 'turnoverLevel']}
              rules={[{ required: true, message: "Please select at least one level" }]}
            >
              <SelectWithInput
                inputOptions={[
                  { value: "<50M", label: "Less than 50 million" },
                  { value: "50M~500M", label: "50 million to 500 million" },
                  { value: ">500M", label: "More than 500 million" },
                ]}
                style={{ width: "500px", height: "50px" }}
                placeholder="Please select the currency"
                onChange={function (selectedValues: string[]): void {
                  form.setFieldValue(['companyInfo', 'turnoverLevel'], selectedValues)
                }} />
            </Form.Item>
          </div>
        </div>


        {/* Company's Location */}
        <div className={styles.fieldContainer}>
          <label className={styles.fieldLabel}>Company's Location</label>
          <div className={styles.fieldContent}>
            <Form.Item
              name={['companyInfo', 'companyLocation']}
              rules={[{ required: false, message: "Please enter your company's location" }]}
            >
              <Input
                placeholder="Please enter your company's address"
                style={{ width: "500px", height: "50px", fontFamily: "Nunito Sans", fontSize: "16px" }}
              />
            </Form.Item>
          </div>
        </div>

        {/* M&A Strategy */}
        <div className={styles.fieldContainer}>
          <label className={styles.fieldLabel}>M&A Strategy</label>
          <div className={styles.fieldContent}>
            <Form.Item
              name={['companyInfo', 'mAndAStrategy']}
              rules={[{ required: false, message: "Please select your M&A strategy" }]}
            >
              <SelectWithInput
                inputOptions={[
                  "Business Succession", "Revenue Boosting", "Portfolio-Building", "Market Expansion",
                  "Cost-Cutting", "Horizontal Integration", "Vertical Integration", "Divestiture Options",
                  "Turnaround Acquisition"
                ]}
                style={{ width: "500px", height: "50px" }}
                placeholder="Please select your M&A strategy"
                mode="multiple" onChange={function (selectedValues: string[]): void {
                  form.setFieldValue(['companyInfo', 'mAndAStrategy'], selectedValues)
                }} />
            </Form.Item>
          </div>
        </div>

        <div className={styles.heading}>3. Contact Info</div>

        {/* Department */}
        <div className={styles.fieldContainer}>
          <label className={styles.fieldLabel}>Department</label>
          <div className={styles.fieldContent}>
            <Form.Item
              name={['contactInfo', 'department']}
              rules={[{ required: false, message: "Please enter your department" }]}
            >
              <Input
                placeholder="Please enter your department name"
                style={{ width: "500px", height: "50px", fontFamily: "Nunito Sans", fontSize: "16px" }}
              />
            </Form.Item>
          </div>
        </div>

        {/* Position */}
        <div className={styles.fieldContainer}>
          <label className={styles.fieldLabel}>Position</label>
          <div className={styles.fieldContent}>
            <Form.Item
              name={['contactInfo', 'position']}
              rules={[{ required: false, message: "Please enter your position" }]}
            >
              <Input
                placeholder="Please enter your position"
                style={{ width: "500px", height: "50px", fontFamily: "Nunito Sans", fontSize: "16px" }}
              />
            </Form.Item>
          </div>
        </div>

        {/* Key Contact Person */}
        <div className={styles.fieldContainer}>
          <label className={styles.fieldLabel}>Key Contact Person <span style={{ color: "red" }}>*</span></label>
          <div className={styles.fieldContent}>
            <Form.Item
              name={['contactInfo', 'keyContactPerson']}
              rules={[{ required: true, message: "Please enter the key contact person" }]}
            >
              <Input
                placeholder="Please enter the key contact person"
                style={{ width: "500px", height: "50px", fontFamily: "Nunito Sans", fontSize: "16px" }}
              />
            </Form.Item>
          </div>
        </div>

        {/* Preferred Contact Method */}
        <div className={styles.fieldContainer}>
          <label className={styles.fieldLabel}>Preferred Contact Method <span style={{ color: "red" }}>*</span></label>
          <div className={styles.fieldContent}>
            <Form.Item
              name={['contactInfo', 'preferredContactMethod']}
              rules={[{ required: true, message: "Please select the preferred contact method" }]}
            >
              <SelectWithInput
                inputOptions={["Phone Call", "Email", "WeChat", "Others"]}
                style={{ width: "500px", height: "50px" }}
                placeholder="Please select your preferred contact method"
                mode="multiple" onChange={function (selectedValues: string[]): void {
                  form.setFieldValue(['contactInfo', 'preferredContactMethod'], selectedValues)
                }} />
            </Form.Item>
          </div>
        </div>

        {/* Contact Information */}
        <div className={styles.fieldContainer}>
          <label className={styles.fieldLabel}>Contact Information <span style={{ color: "red" }}>*</span></label>
          <div className={styles.fieldContent}>
            <Form.Item
              name={['contactInfo', 'contactInformation']}
              rules={[{ required: true, message: "Please enter the contact information" }]}
            >
              <Input
                placeholder="Please enter the contact information"
                style={{ width: "500px", height: "50px", fontFamily: "Nunito Sans", fontSize: "16px" }}
              />
            </Form.Item>
          </div>
        </div>

        {/* Terms Agreement */}
        <div className={styles.terms}>
          <span className={styles.heading}>
            Regarding the handling of personal information
          </span>
          <span className={styles.desc}>
            The personal information you enter will be properly managed in accordance with our personal information protection policy. For more information, please read "About the protection of personal information” and apply after agreeing.
          </span>
        </div>

        {/* Submit Button */}
        <div className={styles.footer}>
          <Form.Item>
            <Button htmlType="submit" className={styles.submit}>
              Submit
            </Button>
          </Form.Item>
          <Form.Item>
            <Button htmlType="reset" className={styles.submit}>Reset</Button>
          </Form.Item>


        </div>
      </Form>
    </div>
  );
};

export default BuyerDetail;