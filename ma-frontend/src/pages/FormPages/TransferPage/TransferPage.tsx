import { useState } from "react";
import styles from "./TransferPage.module.less"
import { Checkbox, FormControl, FormControlLabel, Grid, MenuItem, Radio, RadioGroup, Select, TextField } from "@mui/material";


const TransferPage = () => {
  const [industry, setIndustry] = useState('');
  const [turnover, setTurnover] = useState('');
  const [currency, setCurrency] = useState('');
  const [contactMethod, setContactMethod] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Transfer, Sale and Business Succession </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        {/*Your Company's Name*/}
        <Grid className={styles.fieldContainer} container spacing={2} alignItems="center" style={{ marginBottom: '16px' }}>
          <Grid className={styles.fieldLabel} item xs={4}>
            <label className={styles.label}>Your Company's Name {""}
            <span style={{ color: 'red', marginLeft: '2px' }}>*</span></label>
          </Grid>
          <Grid item 
            xs={8}>
            <TextField
              style={{width: "500px", color:"rgba(76, 78, 100, 0.38)"}} 
              required
              type="email"
              placeholder="johnDoe@gmail.com"
              variant="outlined" 
            />
          </Grid>
        </Grid>
        {/*Industry And Business Field*/}
        <Grid className={styles.fieldContainer} container spacing={2} alignItems="center" style={{ marginBottom: '16px' }}>
          <Grid className={styles.fieldLabel} item xs={4}>
            <label className={styles.label}>Industry And Business Field {""}
            <span style={{ color: 'red', marginLeft: '2px' }}>*</span></label>
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
                    return <span style={{ color: 'rgba(76, 78, 100, 0.38)' }}>Select an industry</span>;
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
        {/*Your Company's Turnover Level*/}
        <Grid className={styles.fieldContainer} container spacing={2} alignItems="center" style={{ marginBottom: '16px' }}>
          <Grid className={styles.fieldLabel} item xs={4}>
            <label className={styles.label}>Your Company's Turnover Level {""}
            <span style={{ color: 'red', marginLeft: '2px' }}>*</span>
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
        {/*Your Company's Location*/}
        <Grid className={styles.fieldContainer} container spacing={2} alignItems="center" style={{ marginBottom: '16px' }}>
          <Grid className={styles.fieldLabel} item xs={4}>
            <label className={styles.label}>Your Company's Location {""}
            <span style={{ color: 'red', marginLeft: '2px' }}>*</span></label>
          </Grid>
          <Grid item xs={8}>
            <TextField
              style={{width: "500px", color:"rgba(76, 78, 100, 0.38)"}} 
              required
              placeholder="Please enter your company’s location"
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
        {/*Preferred Contact Information*/}
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
              placeholder="Please enter the contact Info"
              variant="outlined" 
            />
          </Grid>
        </Grid>
        {/*Content of Inquiry*/}
        <Grid className={styles.fieldContainer} container spacing={2} alignItems="center" style={{ marginBottom: '16px' }}>
          <Grid className={styles.fieldLabel} item xs={4}>
            <label className={styles.label}>Content of Inquiry</label>
          </Grid>
          <Grid item xs={8}>
            <TextField
              style={{width: "500px", color:"rgba(76, 78, 100, 0.38)"}} 
              fullWidth
              required
              margin="normal"
              placeholder="Please enter the contents of the consultation."
              multiline
              rows={4}
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

export default TransferPage;