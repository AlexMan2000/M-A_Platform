import styles from "./AcquisitionPage.module.less"
import { useState } from "react";

import { Checkbox, FormControl, FormControlLabel, Grid, ListItemText, MenuItem, Radio, RadioGroup, Select, TextField } from "@mui/material";


// M&A Strategy
const options = [
  "Business Succession: Acquiring profitable businesses with stable cash flow to ensure smooth transition and ongoing management.",
  "Revenue Boosting: Acquiring companies to increase sales and market share.",
  "Portfolio-Building: Acquiring companies to enhance or diversify the existing portfolio.",
  "Market Expansion: Acquiring companies to enter new markets or geographic areas.",
  "Cost-Cutting: Mergers or acquisitions aimed at reducing operational costs and increasing efficiency.",
  "Horizontal Integration: Merging with or acquiring competitors to increase market power.",
  "Vertical Integration: Merging with or acquiring suppliers or distributors to control the supply chain.",
  "Divestiture Options: Acquiring companies with the potential to sell parts of the business in the future to mitigate risk.",
  "Turnaround Acquisition: Acquiring distressed companies with the intention of restructuring and improving their performance.",
  "Other (please specify):"
];


const AcquisitionPage = () => {
  const [region, setRegion] = useState('');
  const [currency, setCurrency] = useState('');
  const [dealSize, setDealSize] = useState('');
  const [companyType, setCompanyType] = useState('');
  const [industry, setIndustry] = useState('');
  const [turnover, setTurnover] = useState('');


  const [selectedMAOptions, setSelectedMAOptions] = useState<any>([]);

  const [contactMethod, setContactMethod] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Acquisition Needs (Domestic/Cross-border) </div>
      <form onSubmit={handleSubmit} className={styles.form}>
      

        <div className={styles.subform1}>
          <div className={styles.heading}>1. Acquisition Needs</div>
          {/*Desired Industry And Business Field*/}
          <Grid className={styles.fieldContainer} container spacing={2} alignItems="center" style={{ marginBottom: '16px' }}>
            <Grid className={styles.fieldLabel} item xs={4}>
              <label className={styles.label}>Desired Industry and Business Field {""}
              <span style={{ color: 'red', marginLeft: '2px' }}>*</span></label>
            </Grid>
            <Grid item 
              xs={8}>
              <TextField
                style={{width: "500px", color:"rgba(76, 78, 100, 0.38)"}} 
                required
                type="email"
                placeholder="Please enter your desired industry and field"
                variant="outlined" 
              />
            </Grid>
          </Grid>
          {/*Desired Region*/}
          <Grid className={styles.fieldContainer} container spacing={2} alignItems="center" style={{ marginBottom: '16px' }}>
            <Grid className={styles.fieldLabel} item xs={4}>
              <label className={styles.label}>Desired Region {""}
              <span style={{ color: 'red', marginLeft: '2px' }}>*</span></label>
            </Grid>
            <Grid item xs={8}>
              <FormControl margin="normal" required>
                <Select 
                  style={{width: "500px"}} 
                  value={region} 
                  displayEmpty
                  onChange={(e) => setRegion(e.target.value)}
                  renderValue={(selected) => {
                    if (selected === "") {
                      return <span style={{ color: 'rgba(76, 78, 100, 0.38)' }}>Please select all the regions</span>;
                    }
                    return <span style={{ color: 'black' }}>{selected}</span>;
                  }} 
                  >
                  <MenuItem value="East China">East China</MenuItem>
                  <MenuItem value="South China">South China</MenuItem>
                  <MenuItem value="North China">North China</MenuItem>
                  <MenuItem value="Central China">SoutCentralh China</MenuItem>
                  <MenuItem value="China (Other Regions)">China (Other Regions)</MenuItem>
                  <MenuItem value="Overseas ( Europe / America )">Overseas ( Europe / America )</MenuItem>
                  <MenuItem value="Overseas ( Japan / Korea)">Overseas ( Japan / Korea)</MenuItem>
                  <MenuItem value="Overseas ( South East Asia)">Overseas ( South East Asia)</MenuItem>
                  <MenuItem value="Overseas ( Other Regions)">Overseas ( Other Regions)</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          {/*Preferred Deal Size*/}
          <Grid className={styles.fieldContainer} container spacing={2} alignItems="center" style={{ marginBottom: '16px' }}>
            <Grid className={styles.fieldLabel} item xs={4}>
              <label className={styles.label}>Preferred Deal Size {""}
              <span style={{ color: 'red', marginLeft: '2px' }}>*</span>
              </label>
            </Grid>
            <Grid item xs={8}>
              <FormControl component="fieldset" margin="normal" required>
                <RadioGroup 
                  value={dealSize} 
                  onChange={(e) => setDealSize(e.target.value)} 
                  row
                  style={{width: "800px"}} 
                  >
                  <FormControlLabel value="<100M" control={<Radio />} label="Less than 100 million" />
                  <FormControlLabel value="100M-500M" control={<Radio />} label="100 million to 500 million" />
                  <FormControlLabel value="500M-1B" control={<Radio />} label="500 million to 1 billion" />
                  <FormControlLabel value="1B-2B" control={<Radio />} label="1 billion to 2 billion" />
                  <FormControlLabel value=">2B" control={<Radio />} label="More than 2 billion" />
                  <FormControlLabel value="undecided" control={<Radio />} label="Undecided" />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
          {/*Currency*/}
          <Grid className={styles.fieldContainer} container spacing={2} alignItems="center" style={{ marginBottom: '16px' }}>
            <Grid className={styles.fieldLabel} item xs={4}>
              <label className={styles.label}>Currency {""}
              <span style={{ color: 'red', marginLeft: '2px' }}>*</span></label>
            </Grid>
            <Grid item xs={8}>
              <FormControl fullWidth margin="normal" required>
                <Select 
                  value={currency} 
                  displayEmpty
                  onChange={(e) => setCurrency(e.target.value)}
                  style={{width: "500px"}} 
                  renderValue={(selected) => {
                    if (selected === "") {
                      return <span style={{ color: 'rgba(76, 78, 100, 0.38)' }}>Please select your currency</span>;
                    }
                    return <span style={{ color: 'black' }}>{selected}</span>;
                  }}               >
                  <MenuItem value="USD">USD</MenuItem>
                  <MenuItem value="RMB">RMB</MenuItem>
                  <MenuItem value="HKD">HKD</MenuItem>
                  <MenuItem value="TWD">TWD</MenuItem>
                  <MenuItem value="SGD">SGD</MenuItem>
                  <MenuItem value="JPY">JPY</MenuItem>
                  <MenuItem value="Other">Other (please specify)</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </div>
     
        
        <div className={styles.heading}>2. Company Info</div>
        {/*Your Company Type*/}
        <Grid className={styles.fieldContainer} container spacing={2} alignItems="center" style={{ marginBottom: '16px' }}>
            <Grid className={styles.fieldLabel} item xs={4}>
              <label className={styles.label}>Your company type</label>
            </Grid>
            <Grid item xs={8}>
              <FormControl margin="normal" required>
                <Select 
                  style={{width: "500px"}} 
                  value={companyType} 
                  displayEmpty
                  onChange={(e) => setCompanyType(e.target.value)}
                  renderValue={(selected) => {
                    if (selected === "") {
                      return <span style={{ color: 'rgba(76, 78, 100, 0.38)' }}>Please select one type for your company</span>;
                    }
                    return <span style={{ color: 'black' }}>{selected}</span>;
                  }} 
                  >
                  <MenuItem value="Private Equity Fund (PE)">Private Equity Fund (PE)</MenuItem>
                  <MenuItem value="Search Fund">Search Fund</MenuItem>
                  <MenuItem value="Corporate">Corporate</MenuItem>
                  <MenuItem value="Public Company">Public Company</MenuItem>
                  <MenuItem value="Family Office">Family Office</MenuItem>
                  <MenuItem value="Financial Sponsor">Financial Sponsor</MenuItem>
                  <MenuItem value="Others">Other (please specify): __________</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        {/*Industry and business field*/}
        <Grid className={styles.fieldContainer} container spacing={2} alignItems="center" style={{ marginBottom: '16px' }}>
          <Grid className={styles.fieldLabel} item xs={4}>
            <label className={styles.label}>Industry And Business Field</label>
          </Grid>
          <Grid item xs={8}>
            <FormControl margin="normal" required>
              <Select 
                style={{width: "500px"}} 
                value={industry} 
                displayEmpty
                onChange={(e) => setIndustry(e.target.value)}
                renderValue={(selected) => {
                  if (selected === "") {
                    return <span style={{ color: 'rgba(76, 78, 100, 0.38)' }}>Select the main industry and business field </span>;
                  }
                  return <span style={{ color: 'black' }}>{selected}</span>;
                }} 
                >
                <MenuItem value="IT Communication">IT Communication</MenuItem>
                <MenuItem value="Professional Services">Professional Services</MenuItem>
                <MenuItem value="Retail">Retail</MenuItem>
                <MenuItem value="Real Estate">Real Estate</MenuItem>
                <MenuItem value="Food & Beverage">Food & Beverage</MenuItem>
                <MenuItem value="Education">Education</MenuItem>
                <MenuItem value="Others">Others</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        {/* Your compnay's turnover level*/}
        <Grid className={styles.fieldContainer} container spacing={2} alignItems="center" style={{ marginBottom: '16px' }}>
          <Grid className={styles.fieldLabel} item xs={4}>
            <label className={styles.label}>Your Company's Turnover Level
            </label>
          </Grid>
          <Grid item xs={8}>
            <FormControl component="fieldset" margin="normal" required>
              <RadioGroup 
                value={turnover} 
                onChange={(e) => setTurnover(e.target.value)} 
                row
                style={{width: "800px"}} 
                >
                <FormControlLabel value="Less than 50 million" control={<Radio />} label="Less than 50 million" />
                <FormControlLabel value="50 million to 500 million" control={<Radio />} label="50 million to 500 million" />
                <FormControlLabel value="More than 500 million" control={<Radio />} label="More than 500 million" />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>

        {/* Currency */}
        <Grid className={styles.fieldContainer} container spacing={2} alignItems="center" style={{ marginBottom: '16px' }}>
          <Grid className={styles.fieldLabel} item xs={4}>
            <label className={styles.label}>Currency {""}
            <span style={{ color: 'red', marginLeft: '2px' }}>*</span></label>
          </Grid>
          <Grid item xs={8}>
            <FormControl fullWidth margin="normal" required>
              <Select 
                value={currency} 
                displayEmpty
                onChange={(e) => setCurrency(e.target.value)}
                style={{width: "500px"}} 
                renderValue={(selected) => {
                  if (selected === "") {
                    return <span style={{ color: 'rgba(76, 78, 100, 0.38)' }}>Please select your currency</span>;
                  }
                  return <span style={{ color: 'black' }}>{selected}</span>;
                }}               >
                <MenuItem value="USD">USD</MenuItem>
                <MenuItem value="RMB">RMB</MenuItem>
                <MenuItem value="HKD">HKD</MenuItem>
                <MenuItem value="TWD">TWD</MenuItem>
                <MenuItem value="SGD">SGD</MenuItem>
                <MenuItem value="JPY">JPY</MenuItem>
                <MenuItem value="Other">Other (please specify)</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        {/* Company's Location */}
        <Grid className={styles.fieldContainer} container spacing={2} alignItems="center" style={{ marginBottom: '16px' }}>
          <Grid className={styles.fieldLabel} item xs={4}>
            <label className={styles.label}>Company's Location</label>
          </Grid>
          <Grid item xs={8}>
            <TextField
              style={{width: "500px", color:"rgba(76, 78, 100, 0.38)"}} 
              required
              placeholder="Please enter your company's address"
              variant="outlined" 
            />
          </Grid>
        </Grid>

        {/* M&A Location */}
        <Grid className={styles.fieldContainer} container spacing={2} alignItems="center" style={{ marginBottom: '16px' }}>
          <Grid className={styles.fieldLabel} item xs={4}>
            <label className={styles.label}>M&A Strategy {""}
            <span style={{ color: 'red', marginLeft: '2px' }}>*</span></label>
          </Grid>
          <Grid item xs={8}>
          <FormControl fullWidth style={{ marginTop: '16px' }}>            <Select
              multiple
              displayEmpty
              value={selectedMAOptions}
              style={{width: "500px"}}
              onChange={(event) => {
                const value = event.target.value;
                setSelectedMAOptions(typeof value === 'string' ? value.split(',') : value);
              }}
              renderValue={(selected) => 
              {
                if (selected.length == 0) {
                  return <span style={{ color: 'rgba(76, 78, 100, 0.38)' }}>Please select all that apply</span>;
                }
                return <span style={{ color: 'black' }}>{selected.join(",")}</span>;
              }
              }
            >
              {options.map((option) => (
                <MenuItem key={option} value={option}>
                  <Checkbox checked={selectedMAOptions.indexOf(option) > -1} />
                  <ListItemText primary={option} />
                </MenuItem>
              ))}
            </Select>
    </FormControl>
          </Grid>
        </Grid>



        <div className={styles.heading}>3. Contact Info</div>
        {/*Department*/}
        <Grid className={styles.fieldContainer} container spacing={2} alignItems="center" style={{ marginBottom: '16px' }}>
          <Grid className={styles.fieldLabel} item xs={4}>
            <label className={styles.label}>Department</label>
          </Grid>
          <Grid item xs={8}>
            <TextField
              style={{width: "500px", color:"rgba(76, 78, 100, 0.38)"}} 
              required
              placeholder="Please enter your department name"
              variant="outlined" 
            />
          </Grid>
        </Grid>
        {/*Position*/}
        <Grid className={styles.fieldContainer} container spacing={2} alignItems="center" style={{ marginBottom: '16px' }}>
          <Grid className={styles.fieldLabel} item xs={4}>
            <label className={styles.label}>Position</label>
          </Grid>
          <Grid item xs={8}>
            <TextField
              style={{width: "500px", color:"rgba(76, 78, 100, 0.38)"}} 
              required
              placeholder="Please enter your position"
              variant="outlined" 
            />
          </Grid>
        </Grid>
        {/*Key Contact Person*/}
        <Grid className={styles.fieldContainer} container spacing={2} alignItems="center" style={{ marginBottom: '16px' }}>
          <Grid className={styles.fieldLabel} item xs={4}>
            <label className={styles.label}>Key Contact Person {""}
            <span style={{ color: 'red', marginLeft: '2px' }}>*</span></label>
          </Grid>
          <Grid item xs={8}>
            <TextField
              style={{width: "500px", color:"rgba(76, 78, 100, 0.38)"}} 
              required
              placeholder="Please enter the name or title here"
              variant="outlined" 
            />
          </Grid>
        </Grid>
        {/*Preferred Contact Method*/}
        <Grid className={styles.fieldContainer} container spacing={2} alignItems="center" style={{ marginBottom: '16px' }}>
          <Grid className={styles.fieldLabel} item xs={4}>
            <label className={styles.label}>Preferred Contact Method {""}
            <span style={{ color: 'red', marginLeft: '2px' }}>*</span></label>
          </Grid>
          <Grid item xs={8}>
            <FormControl fullWidth margin="normal" required>              
              <Select 
                value={contactMethod} 
                displayEmpty
                style={{width: "500px"}}
                onChange={(e) => setContactMethod(e.target.value)}
                renderValue={(selected) => {
                  if (selected === "") {
                    return <span style={{ color: 'rgba(76, 78, 100, 0.38)' }}>Please choose your preferred contact methods</span>;
                  }
                  return <span style={{ color: 'black' }}>{selected}</span>;
                }} 
                >
                <MenuItem value="Phone Call">Phone Call</MenuItem>
                <MenuItem value="Email">Email</MenuItem>
                <MenuItem value="WeChat">WeChat</MenuItem>
                <MenuItem value="Others">Others</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        {/*Contact Information*/}
        <Grid className={styles.fieldContainer} container spacing={2} alignItems="center" style={{ marginBottom: '16px' }}>
          <Grid className={styles.fieldLabel} item xs={4}>
            <label className={styles.label}>Contact Information {""}
            <span style={{ color: 'red', marginLeft: '2px' }}>*</span></label>
          </Grid>
          <Grid item xs={8}>
            <TextField
              style={{width: "500px", color:"rgba(76, 78, 100, 0.38)"}} 
              required
              placeholder="Please enter the contact info"
              variant="outlined" 
            />
          </Grid>
        </Grid>
        <div className={styles.terms}>
          <span className={styles.heading}>Regarding the handling of personal information</span>
          <span className={styles.desc}>
            The personal information you enter will be properly managed in accordance with our personal information protection policy. For more information, please read "About the protection of personal information” and apply after agreeing.
          </span>
          <div className={styles.checkbox}>
            <Checkbox 
              checked={agreed} 
              style={{paddingLeft: "0px"}}
              onChange={(event) => {
                setAgreed(event.target.checked);
              }}/>   
            <div className={styles.text}>Agree to the protection of personal information <span style={{ color: 'red', marginLeft: '2px' }}>*</span></div>
          </div>
        </div>
        <button 
          className={styles.submit}
          type="submit" 

          >
          Submit
        </button>
        <div className={styles.footer}>
        We will automatically send an application acceptance confirmation email to the email address you entered.
        </div>
      </form>
  </div>
  );
};

export default AcquisitionPage;