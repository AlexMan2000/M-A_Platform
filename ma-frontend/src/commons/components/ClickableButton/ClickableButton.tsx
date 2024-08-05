import React from 'react';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

interface buttonInfo {
    text: string;
    img: string;
    underline?: string;
}


const ButtonContainer = styled(Button)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '2px',
  backgroundColor: '#12837b',
  borderRadius: '10px',
  cursor: 'pointer',
  alignSelf: 'flex-end',
  padding: '3px',
  userSelect: 'none',
  width: '250px',
  height: '80px',
  transition: 'background-color 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: '#16a399',
  },
}));

const UpperContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  flex: 1,
  padding: '3px',
  justifyContent: 'space-between',
  height: '50px',
  lineHeight: "50px",
  
}));

const UnderContainer = styled(Box)(({ theme }) => ({
  height: '30px',
  lineHeight: '20px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'center',
}));

const ButtonText = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  width: '80%',
  fontSize: '15px', // Adjust as needed for the under container
}));

const ButtonImage = styled('img')({
  width: '25px',
  height: '25px',
});

const ClickableButton = ({text, img, underline}:buttonInfo) => (
  <ButtonContainer>
    <UpperContainer>
      <ButtonText>{text}</ButtonText>
      <ButtonImage src={img} alt="icon" />
    </UpperContainer>
    {underline &&<UnderContainer>
      <ButtonText>{underline}</ButtonText>
    </UnderContainer>}
  </ButtonContainer>
);

export default ClickableButton;
