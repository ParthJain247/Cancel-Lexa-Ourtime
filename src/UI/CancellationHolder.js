import React from 'react'
import {Grid,Container} from '@mui/material'
function CancellationHolder(props) {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={10} md={8}>
      <Container maxWidth="lg" sx={{ paddingTop: '10px' ,paddingBottom:'10%'}}>{props.children}
      </Container>
      </Grid>
    </Grid>
  )
}

export default CancellationHolder
