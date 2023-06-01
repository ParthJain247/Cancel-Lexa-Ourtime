import React, { useEffect, useReducer,useState } from 'react';
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
  Container,
  Grid,
} from '@mui/material';

const initialState = {
  firstName: '',
  lastName: '',
  postalCode: '',
  houseNumber: '',
  residence: '',
  street: '',
  email: '',
  iban: '',
  review: '',
  errors: {
    firstName: '',
    lastName: '',
    postalCode: '',
    houseNumber: '',
    residence: '',
    street: '',
    email: '',
    iban: '',
  },
};

function formReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'UPDATE_ERRORS':
      return { ...state, errors: action.errors };
    default:
      return state;
  }
}

const CancellationForm = (props) => {
  const [formData, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (field, value) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };
  
  useEffect(()=>{
    props.onUserChange(formData);
  },[props,formData])

  const validateForm = () => {
    const errors = {};

    // Validation checks
    if (!formData.firstName) {
      errors.firstName = 'First name is required';
    }

    if (!formData.lastName) {
      errors.lastName = 'Last name is required';
    }

    if (!formData.postalCode) {
      errors.postalCode = 'Postal code is required';
    }

    if (!formData.houseNumber) {
      errors.houseNumber = 'House number is required';
    }

    if (!formData.residence) {
      errors.residence = 'Residence is required';
    }

    if (!formData.street) {
      errors.street = 'Street is required';
    }

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }

    if (!formData.iban) {
      errors.iban = 'IBAN is required';
    }

    dispatch({ type: 'UPDATE_ERRORS', errors });

    return Object.keys(errors).length === 0; // Return true if there are no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, continue with submission
      console.log(formData);
    } else {
      // Form is invalid, handle the errors
      console.log('Form contains errors');
    }
  };

const[finalAmount,setFinalAmount]=useState(6.95);
const[isChecked,setIsChecked]=useState(false);
const handleCheckBox=()=>{
  setIsChecked(!isChecked);
    
}
useEffect(()=>{if(isChecked)  setFinalAmount(10.90);
  else setFinalAmount(6.95)},[isChecked])

  return (
    <Container
      maxWidth="sm"
      style={{
        background: `linear-gradient(7deg, #FFF 26%, transparent 26.1%),
    linear-gradient(-7deg, #FFF 26%, transparent 26.1%),
    linear-gradient(7deg, #F2F6FC 39%, transparent 39.1%),
    linear-gradient(-7deg, #F2F6FC 39%, #EBEEF2 39.1%)`,
        borderRadius: '15px',
        paddingTop: '4%',
        paddingBottom: '4%',
        boxShadow: '0px 2px 2px #4f4f4f',
      }}
    >
      <Typography variant="h6">Step 1: Fill in your details</Typography>
      <hr />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
              fullWidth
              margin="normal"
              style={{ backgroundColor: 'white' }}
              error={!!formData.errors.firstName}
              helperText={formData.errors.firstName}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
              fullWidth
              margin="normal"
              style={{ backgroundColor: 'white' }}
              error={!!formData.errors.lastName}
              helperText={formData.errors.lastName}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
              label="Postal Code"
              name="postalCode"
              value={formData.postalCode}
              onChange={(e) => handleChange('postalCode', e.target.value)}
              fullWidth
              margin="normal"
              style={{ backgroundColor: 'white' }}
              error={!!formData.errors.postalCode}
              helperText={formData.errors.postalCode}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="House Number"
              name="houseNumber"
              value={formData.houseNumber}
              onChange={(e) => handleChange('houseNumber', e.target.value)}
              fullWidth
              margin="normal"
              style={{ backgroundColor: 'white' }}
              error={!!formData.errors.houseNumber}
              helperText={formData.errors.houseNumber}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Residence"
              name="residence"
              value={formData.residence}
              onChange={(e) => handleChange('residence', e.target.value)}
              fullWidth
              margin="normal"
              style={{ backgroundColor: 'white' }}
              error={!!formData.errors.residence}
              helperText={formData.errors.residence}
            />
          </Grid>
        </Grid>
        <TextField
          label="Street"
          name="street"
          value={formData.street}
          onChange={(e) => handleChange('street', e.target.value)}
          fullWidth
          margin="normal"
          style={{ backgroundColor: 'white' }}
          error={!!formData.errors.street}
          helperText={formData.errors.street}
        />
        <TextField
          label="E-mail"
          name="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          fullWidth
          margin="normal"
          style={{ backgroundColor: 'white' }}
          error={!!formData.errors.email}
          helperText={formData.errors.email}
        />
        <TextField
          label="IBAN"
          name="iban"
          value={formData.iban}
          onChange={(e) => handleChange('iban', e.target.value)}
          fullWidth
          margin="normal"
          style={{ backgroundColor: 'white' }}
          error={!!formData.errors.iban}
          helperText={formData.errors.iban}
        />
        <TextField
          label="Optional Review"
          name="review"
          value={formData.review}
          onChange={(e) => handleChange('review', e.target.value)}
          multiline
          rows={4}
          fullWidth
          margin="normal"
          style={{ backgroundColor: 'white' }}
        />
        <FormControlLabel
          control={
            <Checkbox
              name="noLongerNeeded"
              checked={formData.noLongerNeeded}
              onChange={(e) =>
                handleChange('noLongerNeeded', e.target.checked)
              }
            />
          }
          label="I no longer want to receive advertising from Lexa Ourtime"
        />

        <div style={{ height: 50 }}></div>

        <Typography variant="h6">Step 2: Choose your shipping method</Typography>

        <FormControlLabel
          control={<Checkbox name="sendmyCancellation" />}
          label="Send my Cancellation                    6.95"
        />
        <Typography variant="body1">
          On working days before 4.30 pm, shipped today! You will receive a
          confirmation of sending the cancellation letter by e-mail.
        </Typography>
        <br />
        <br />
        <div style={{ backgroundColor: 'white', width: '100%' }}>
          <FormControlLabel
            control={<Checkbox name="byPost" onChange={handleCheckBox} />}
            label={
    <span>
      I would like to receive the cancellation letter by post 
      <strong style={{color:'cyan'}}>  +3.95</strong>
    </span>
  }
          />
          <FormControlLabel
            control={<Checkbox name="termsAndConditions" />}
            label={<span>
      I agree to the  <strong style={{color:'cyan'}}> terms and conditions</strong>
    </span>}
          />
           <br />
           <br />
          <Typography variant="body1">
            If I send my cancellation, I agree to a one-off payment of<strong> {finalAmount}</strong>
          </Typography>
          <br />
          <Button
            sx={{
              width: '100%',
              backgroundColor: '#E57C23',
              color: 'white',
              '&:hover': {
                backgroundColor: '#FC4F00',
                width: '101%',
                color: '#F8F1F1',
              },
            }}
            variant="contained"
            color="primary"
            type="submit"
          >
            <strong>Send my Cancellation</strong>
          </Button>
          <br />
          <br />
          <Typography variant="body1">
            This site is protected by reCAPTCHA and Google <strong style={{color:'cyan'}}>privacy statement </strong>
             and <strong style={{color:'cyan'}}>general terms and conditions apply</strong>
          </Typography>
        </div>
      </form>
    </Container>
  );
};

export default CancellationForm;