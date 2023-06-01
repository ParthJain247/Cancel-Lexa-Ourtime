import React from 'react';
import Signature from '../Signature/Signature';
import image from '../../../Assets/Images/Cancel_Background.JPG'
import logo from '../../../Assets/Images/logo.svg'
import BlurText from '../../../UI/BlurText';
import { Typography, Container,Box } from '@mui/material';
import classes from './CancellationLetter.module.css'

const CancellationLetter = (props) => {
  return (
    <Container maxWidth="sm" sx={{backgroundImage: `url(${image})`,position:'relative'}} style={{backgroundColor:'yellow',borderRadius:'15px',paddingTop:'4%',paddingBottom:'4%'}}>
    
      <Box  
        display="flex"
        >
        <img className={classes.img} src='https://www.123opzeggen.nl/img/cancellation/guaranteed-blue-240x240.png' alt='garuntee'/>
      <Typography variant="h6" style={{color:'#F97B22',paddingBottom:'10px'}}>
        <strong>100% Cancellation Guarantee</strong>
      </Typography></Box>
      <Box  
       sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '4vw',
        
      }}
        ><img src={logo} style={{width:'3vw'}} alt='Company Logo'/></Box>
      
      <Box
        p={2}
        mt={2}
        display="flex"
        flexDirection="column"
      
      >
        <Typography variant="body1"  gutterBottom>
          Lexa Ourtime
        </Typography>
        
         <BlurText>Address company</BlurText> 
       
        <Typography variant="body1"  gutterBottom>
          1001 EV Amsterdam
        </Typography>
        <br/>
        <Typography variant="body1"  gutterBottom>
          {props.data.residence}, 5/30/2023
        </Typography>
        <Typography variant="body1"  gutterBottom>
          Subject: Termination agreement Lexa Ourtime
        </Typography>
        <br/>
        <Typography variant="body1"  gutterBottom>
          Ir/Madam,
        </Typography>
        <br/>
        <Typography variant="body1"  gutterBottom>
          I would like to inform you that I do not wish to continue my current membership.
          Therefore, I kindly ask you to cancel the membership immediately or on the next due date after the date, with due observance of any mandatory notice period.
        </Typography>
        <br/>
        <Typography variant="body1" gutterBottom>
          In order to handle the cancellation correctly, an overview of my details is given below:
        </Typography>
        <br/>
        <Typography variant="body1"><strong>First name:</strong> {props.data.firstName}</Typography>
      <Typography variant="body1"><strong>Last name:</strong> {props.data.lastName}</Typography>
      <Typography variant="body1"><strong>E-mail:</strong> {props.data.email}</Typography>
      <Typography variant="body1"><strong>Address:</strong> {props.data.street}, {props.data.houseNumber}</Typography>
      <Typography variant="body1"><strong>Postal Code:</strong> {props.data.postalCode}</Typography>
      <Typography variant="body1"><strong>Residence:</strong> {props.data.residence}</Typography>
      <br/>
        <Typography variant="body1"  gutterBottom>
          I request you to act in accordance with the agreement up to the date of cancellation and to terminate the direct debit mandate.
          I also no longer wish to receive addressed mail for advertising purposes.
        </Typography>
        <br/>
        <Typography variant="body1"  gutterBottom>
          I would like to receive confirmation of the termination of the agreement.
          You can send this confirmation by post to the above address.
        </Typography>
        <br/>
        <Typography variant="body1"  gutterBottom>
          Yours sincerely
        </Typography>
        <br/>
        {/* <Box display="flex" alignItems="center" mt={2}>
          <img src="https://www.123opzeggen.nl/img/cancellation/signature-box.svg" alt="Signature logo" width="30" height="30" loading="lazy" />
        </Box> */}
        <Signature/>
        <Typography variant="body1" align="center">
        {props.data.firstName} {props.data.lastName}
        </Typography>
      </Box>
    </Container>
  );
};

export default CancellationLetter;