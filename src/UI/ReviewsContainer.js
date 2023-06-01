import React from 'react'
import {Box} from '@mui/material';
function ReviewsContainer(props) {
  return (
   
    <Box
      sx={{
        
        backgroundColor: '#89D5D5', 
        padding: '16px', 
      }}
    >
     {props.children}
    </Box>
    
 
  )
}

export default ReviewsContainer