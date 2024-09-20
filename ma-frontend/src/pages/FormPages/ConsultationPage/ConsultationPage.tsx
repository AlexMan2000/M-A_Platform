import { useState } from "react";
import styles from "./ConsultationPage.module.less"
import {FormControl, Grid, MenuItem,Select, TextField } from "@mui/material";


const ConsultationPage = () => {
    const [contactMethod, setContactMethod] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission
    };
  
    return (
      <div className={styles.container}>
        <div className={styles.title}>Please feel free to contact us</div>
        <form onSubmit={handleSubmit} className={styles.form}>
          {/*Your Company's Name*/}
          <Grid className={styles.fieldContainer} container spacing={2} alignItems="center" style={{ marginBottom: '16px' }}>
            <Grid className={styles.fieldLabel} item xs={4}>
              <label className={styles.label}>Company's Name {""}
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
          {/*Contact Interest*/}
          <Grid className={styles.fieldContainer} container spacing={2} alignItems="center" style={{ marginBottom: '16px' }}>
            <Grid className={styles.fieldLabel} item xs={4}>
              <label className={styles.label}>Contact of Interest {""}
              <span style={{ color: 'red', marginLeft: '2px' }}>*</span></label>
            </Grid>
            <Grid item xs={8}>
              <TextField
                style={{width: "500px", color:"rgba(76, 78, 100, 0.38)"}} 
                required
                placeholder="Please enter the contact of interest"
                variant="outlined" 
              />
            </Grid>
          </Grid>
          {/*Content of Inquiry*/}
          <Grid className={styles.fieldContainer} container spacing={2} alignItems="center" style={{ marginBottom: '16px' }}>
            <Grid className={styles.fieldLabel} item xs={4}>
              <label className={styles.label}>Content of Inquiry <span style={{ color: 'red', marginLeft: '2px' }}>*</span></label>
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
          <button 
            className={styles.submit}
            type="submit" 
  
            >
            Submit
          </button>
        </form>
    </div>
    );
};

export default ConsultationPage;