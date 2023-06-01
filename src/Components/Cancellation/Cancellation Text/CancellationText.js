import React from 'react'
import StarRatingField from '../../../UI/StarRatingField';
import {  Typography,Box,Grid } from '@mui/material';
function CancellationText() {
  return (
    
        
          <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{marginBottom:'5%'}}>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex',paddingTop:'10vw', justifyContent: 'center', alignItems: 'center' }}>
                <img src="https://www.123opzeggen.nl/media/cache/100x100/media/cancellation/7474-lexa-ourtime-1604667726.jpg" alt="Lexa Outtime" />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4" component="h1" align="center">
                Cancel Lexa Ourtime
              </Typography>
              <StarRatingField/>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" align="center">
                Have you found a new love or do you want to give another website a chance? You can cancel Ourtime by using the cancellation letter from 123op terminate. Fill in your details, choose the shipping option and let 123cancel arrange the rest for you. Thanks to our 100% cancellation guarantee, you can be sure that the cancellation letter will end up in the right place, so that Ourtime can cancel your subscription.
              </Typography>
            </Grid>
          </Grid>
        
      
  )
}

export default CancellationText