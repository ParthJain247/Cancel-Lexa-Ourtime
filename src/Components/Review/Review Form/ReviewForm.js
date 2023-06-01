import React, { useReducer,useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Typography,
  Box,
  Rating,
  TextField,
  Button,
  Grid,
  Divider,
  Alert
} from '@mui/material';

// Define the initial state
const initialState = {
  rating: 0,
  fullname: '',
  email: '',
  residence: '',
  experience: '',
};

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_RATING':
      return { ...state, rating: action.payload };
    case 'SET_FULLNAME':
      return { ...state, fullname: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_RESIDENCE':
      return { ...state, residence: action.payload };
    case 'SET_EXPERIENCE':
      return { ...state, experience: action.payload };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
};

const ReviewForm = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const[formValid,setformValid]=useState(true);
  const handleRatingChange = (event, value) => {
    dispatch({ type: 'SET_RATING', payload: value });
  };

  const handleChange = (event, fieldName) => {
    dispatch({ type: fieldName, payload: event.target.value });
  };
  const resetForm = () => {
    dispatch({ type: 'SET_RATING', payload: 0 });
    dispatch({ type: 'SET_FULLNAME', payload: '' });
    dispatch({ type: 'SET_EMAIL', payload: '' });
    dispatch({ type: 'SET_RESIDENCE', payload: '' });
    dispatch({ type: 'SET_EXPERIENCE', payload: '' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.rating !== 0 && state.fullname.trim() !== '' && state.email.trim() !== '' && state.residence.trim() !== '' && state.experience.trim() !== '') {
      console.log('Form submitted');
  
      //unique ID
      const id = uuidv4();
      // const currentDate = new Date().toISOString().slice(0, 10);
      // const [year, month, day] = currentDate.split('-');
      const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth();
const day = currentDate.getDate();


      // Create a new review object with the ID and form data
      const review = {
        id: id,
        datePosted: `new Date(${year}, ${month}, ${day})`,
        rating: state.rating,
        fullName: state.fullname,
        email: state.email,
        residence: state.residence,
        likes:0,
        content: state.experience,
      };
  
      setformValid(true);
      console.log(review);
      props.onSubmit(review);
      resetForm();
    } else {
      setformValid(false);
      console.log('Form has errors');
    }
  };

  return (
    <Box sx={{marginTop:'4vw'}} maxWidth={700} margin="auto" padding={2} bgcolor="#f5f5f5" borderRadius={4}>
      <Typography variant="h6" align="center" gutterBottom>
        Write a review about Lexa Ourtime
      </Typography>
      <Divider />

      <Box mt={2} mb={2}>
        <Typography variant="subtitle1" gutterBottom>
          Rate your experience*
        </Typography>
        <Rating
          name="rating"
          value={state.rating}
          onChange={handleRatingChange}
          size="large"
        />
      </Box>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              value={state.fullname}
              onChange={(e) => handleChange(e, 'SET_FULLNAME')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={state.email}
              onChange={(e) => handleChange(e, 'SET_EMAIL')}
            />
          </Grid>
        </Grid>

        <TextField
          label="Residence"
          variant="outlined"
          fullWidth
          margin="normal"
          value={state.residence}
          onChange={(e) => handleChange(e, 'SET_RESIDENCE')}
        />

        <TextField
          label="Share your experience"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={state.experience}
          onChange={(e) => handleChange(e, 'SET_EXPERIENCE')}
        />
{!formValid && <Alert severity="error">Please fill all the values!</Alert>}
        <Button variant="contained" color="primary" type="submit"  sx={{
             marginTop:'1vw',
              backgroundColor: '#E57C23',
              color: 'white',
              '&:hover': {
                backgroundColor: '#FC4F00',
                
                color: '#F8F1F1',
              },
            }}>
          Post Review
        </Button>
      </form>

      <Typography variant="body2" sx={{ marginTop: '16px' }}>
        * = required fields
      </Typography>
    </Box>
  );
};

export default ReviewForm;