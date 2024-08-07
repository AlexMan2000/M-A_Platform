
import React, { useState } from 'react';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { useIntl } from "react-intl";
import { useAppDispatch } from "@/store/rootHooks";
import { useSelector } from "react-redux";
import { selectGlobalState, setLocale } from "@/store/slice/globalSlice/globalSlice";
import { styled } from '@mui/system';

const CustomFormControl = styled(FormControl)({
  '& .MuiOutlinedInput-root': {
    transition: "border-color 0.3s ease-in-out",
    '& fieldset': {
      borderColor: '#ccc',
    },
    '&:hover fieldset': {
      transition: "border-color 0.3s ease-in-out",
      borderColor: '#12837b',
    },
    '&.Mui-focused fieldset': {
      transition: "border-color 0.3s ease-in-out",
      borderColor: '#12837b',
    },
  },
  '& .MuiInputLabel-outlined.Mui-focused': {
    color: '#12837b',
  },
});


const CustomMenuItem = styled(MenuItem)({
 '&.Mui-selected': {
    backgroundColor: '#12837b !important', // Ensure the custom color is applied
    color: '#fff !important', // Ensure the text color is white
    
    '&:hover': {
      backgroundColor: '#12837b !important', // Ensure the hover color remains the same
    },
  },
});

const LanguageSwitcher = () => {

  const dispatch = useAppDispatch();
  const intl = useIntl();
  const {locale} = useSelector(selectGlobalState)
  const [language, setLanguage] = useState<string>(locale);

  const handleChange = (event) => {
    const newLocale = event.target.value;
    setLanguage(newLocale)
    // Handle change
    dispatch(setLocale({locale: newLocale}))
  };

  return (
    <CustomFormControl variant="outlined" size="small">
      <InputLabel id="language-select-label">Language</InputLabel>
      <Select
        labelId="language-select-label"
        id="language-select"
        value={language}
        onChange={handleChange}
        label="Language"
        sx={{
          fontSize: "10px",
          width: "100px",
          height: "35px"
        }}
      >
        <CustomMenuItem value="zh">中文</CustomMenuItem>
        <CustomMenuItem value="en">English</CustomMenuItem>
        <CustomMenuItem value="malay">Malay</CustomMenuItem>
      </Select>
    </CustomFormControl>
  );
};

export default LanguageSwitcher;
