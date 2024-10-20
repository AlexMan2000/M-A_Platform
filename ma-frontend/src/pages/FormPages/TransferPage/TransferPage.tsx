import { useState } from "react";
import { Form, Input, Checkbox, Button } from "antd";
import styles from "./TransferPage.module.less";
import SelectWithInput from "@/commons/components/forms/SelectWithInput";

const TransferPage = () => {
  const [form] = Form.useForm();
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (values: any) => {
    console.log("Form Values:", values);
  };

  const handleFailValidation = (values: any) => {
    console.log("Submit Failed:", values);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Transfer, Sale and Business Succession</div>

      <Form
        form={form}
        onFinish={handleSubmit}
        onFinishFailed={handleFailValidation}
        layout="vertical"
        className={styles.form}
      >

        {/* Motivations For Selling */}
        <div className={styles.fieldContainer}>
          <label className={styles.fieldLabel}>
            Motivations for Selling <span style={{ color: 'red' }}>*</span>
          </label>
          <Form.Item
            name="motivations"
            rules={[{ required: true, message: "Please aelect at least one motivation" }]}
          >
            <SelectWithInput
                inputOptions={[
                  {
                    value: "Business Succession",
                    label: "Business Succession",
                    desc: "transitioning ownership to ensure continuity and stability."
                  },
                  {
                    value: "Retirement",
                    label: "Retirement",
                    desc: "planning for personal retirement and exiting the business."
                  },
                  {
                    value: "Change Of Priorities",
                    label: "Change Of Priorities",
                    desc: "shifting focus to new opportunities or personal goals outside the business."
                  },
                  {
                    value: "Financial Gain",
                    label: "Financial Gain",
                    desc: "maximizing the financial return on investment."
                  },
                  {
                    value: "Market Conditions",
                    label: "Market Conditions",
                    desc: "taking advantage of favorable market conditions for selling."
                  },
                  {
                    value: "Strategic Partnerships",
                    label: "Strategic Partnerships",
                    desc: "seeking synergies through a merger or acquisition."
                  }]}
                style={{ width: "500px", height: "50px" }}
                placeholder="Please select your motivations for selling"
                mode="multiple" onChange={function (selectedValues: string[]): void {
                  form.setFieldValue(['motivations'], selectedValues)
                }} />
          </Form.Item>
        </div>

        {/* Your Company's Name */}
        <div className={styles.fieldContainer}>
          <label className={styles.fieldLabel}>
            Your Company's Name <span style={{ color: 'red' }}>*</span>
          </label>
          <Form.Item
            name="companyName"
            rules={[{ required: true, message: "Please enter your company's name" }]}
          >
            <Input placeholder="Please enter your company’s name"
              style={{ width: '500px', height: "50px", fontFamily: "Nunito Sans", fontSize: "16px" }} />
          </Form.Item>
        </div>

        {/* Industry and Business Field */}
        <div className={styles.fieldContainer}>
          <label className={styles.fieldLabel}>
            Industry and Business Field <span style={{ color: 'red' }}>*</span>
          </label>
          <Form.Item
            name="industry"
            rules={[{ required: true, message: "Please select your industry" }]}
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
                form.setFieldValue("industry", selectedValues)
              }} />
          </Form.Item>
        </div>

        {/* Turnover Level */}
        <div className={styles.fieldContainer}>
          <label className={styles.fieldLabel}>
            Your Company's Turnover Level <span style={{ color: 'red' }}>*</span>
          </label>
          <Form.Item
            name="turnover"
            rules={[{ required: true, message: "Please select your turnover level" }]}
          >
            <SelectWithInput
              inputOptions={[
                { value: "<50M", label: "Less than 50 million" },
                { value: "50M-500M", label: "50 million to 500 million" },
                { value: ">500M", label: "More than 500 million" },
              ]}
              style={{ width: "500px", height: "50px" }}
              placeholder="Please select all the regions"
              mode="multiple" onChange={function (selectedValues: string[]): void {
                form.setFieldValue("turnover", selectedValues)
              }} />
          </Form.Item>
        </div>

        {/* Currency */}
        <div className={styles.fieldContainer}>
          <label className={styles.fieldLabel}>
            Currency <span style={{ color: 'red' }}>*</span>
          </label>
          <Form.Item
            name="currency"
            rules={[{ required: true, message: "Please select your currency" }]}
          >
            <SelectWithInput
              inputOptions={["USD", "RMB", "HKD", "TWD", "SGD", "JPY"]}
              style={{ width: "500px", height: "50px" }}
              placeholder="Please select the currency"
              mode="multiple" onChange={function (selectedValues: string[]): void {
                form.setFieldValue(['acquisitionNeeds', 'currency'], selectedValues)
              }} />
          </Form.Item>
        </div>

        {/* Company's Location */}
        <div className={styles.fieldContainer}>
          <label className={styles.fieldLabel}>
            Your Company's Location <span style={{ color: 'red' }}>*</span>
          </label>
          <Form.Item
            name="companyLocation"
            rules={[{ required: true, message: "Please enter your company's location" }]}
          >
            <Input
              placeholder="Please enter your company’s location"
              style={{ width: '500px', height: "50px", fontFamily: "Nunito Sans", fontSize: "16px" }}
            />
          </Form.Item>
        </div>

        {/* Key Contact Person */}
        <div className={styles.fieldContainer}>
          <label className={styles.fieldLabel}>
            Key Contact Person <span style={{ color: 'red' }}>*</span>
          </label>
          <Form.Item
            name="keyContactPerson"
            rules={[{ required: true, message: "Please enter the key contact person" }]}
          >
            <Input
              placeholder="Please enter the name or title here"
              style={{ width: '500px', height: "50px", fontFamily: "Nunito Sans", fontSize: "16px" }}
            />
          </Form.Item>
        </div>

        {/* Preferred Contact Method */}
        <div className={styles.fieldContainer}>
          <label className={styles.fieldLabel}>
            Preferred Contact Method <span style={{ color: 'red' }}>*</span>
          </label>
          <Form.Item
            name="contactMethod"
            rules={[{ required: true, message: "Please choose your preferred contact method" }]}
          >
            <SelectWithInput
              inputOptions={["Phone Call", "Email", "WeChat", "Others"]}
              style={{ width: "500px", height: "50px" }}
              placeholder="Please select your preferred contact method"
              mode="multiple" onChange={function (selectedValues: string[]): void {
                form.setFieldValue("contactMethod", selectedValues)
              }} />
          </Form.Item>
        </div>

        {/* Contact Information */}
        <div className={styles.fieldContainer}>
          <label className={styles.fieldLabel}>
            Contact Information <span style={{ color: 'red' }}>*</span>
          </label>
          <Form.Item
            name="contactInformation"
            rules={[{ required: true, message: "Please enter the contact information" }]}
          >
            <Input
              placeholder="Please enter the contact info"
              style={{ width: '500px', height: "50px", fontFamily: "Nunito Sans", fontSize: "16px" }}
            />
          </Form.Item>
        </div>

        {/* Content of Inquiry */}
        <div className={styles.fieldContainer}>
          <label className={styles.fieldLabel}>Content of Inquiry</label>
          <Form.Item name="inquiryContent">
            <Input.TextArea
              placeholder="Please enter the contents of the consultation."
              style={{ width: '500px', fontFamily: "Nunito Sans", fontSize: "16px" }}
              rows={4}
            />
          </Form.Item>
        </div>

        {/* Terms Agreement */}
        <div className={styles.terms}>
          <span className={styles.heading}>
            Regarding the handling of personal information
          </span>
          <span className={styles.desc}>
            The personal information you enter will be properly managed in accordance with our personal information protection policy. For more information, please read "About the protection of personal information” and apply after agreeing.
          </span>
          <div className={styles.checkbox}>
          <Form.Item
              name={['agreed']}
              rules={[{ required: true, message:"Must click" }]}
              valuePropName="checked"
            >
              <Checkbox
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}

              /></Form.Item>
            <div className={styles.text}>
              Agree to the protection of personal information
              <span style={{ color: "red", marginLeft: "2px" }}>*</span>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className={styles.footer}>
          <Form.Item>
            <Button htmlType="submit" className={styles.submit}>
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default TransferPage;
