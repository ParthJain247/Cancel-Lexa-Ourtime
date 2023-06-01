import React, { useState } from 'react';
import { Box, Typography, Grid, IconButton, Rating, Pagination } from '@mui/material';
// import { format } from 'date-fns';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';



  const PostedReviews = (props) => {

    const reviews=props.reviewData;

    const reviewsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(reviews.length / reviewsPerPage);
    const startIndex = (currentPage - 1) * reviewsPerPage;
    const endIndex = startIndex + reviewsPerPage;
  
    // const handlePrevPage = () => {
    //   setCurrentPage((prevPage) => prevPage - 1);
    // };
  
    // const handleNextPage = () => {
    //   setCurrentPage((prevPage) => prevPage + 1);
    // };
  
    return (
      <Box sx={{ borderRadius: '25px', marginTop: '10px', width: '50%', mx: 'auto' }}>
      <Typography variant="h3" sx={{ color: '#0D1C47' ,paddingTop:'5%'}}>Reviews</Typography>
        <Typography variant="h5" sx={{ color: '#4B5563' ,paddingBottom:'5%'}}>What customers say about Lexa Ourtime</Typography>
        {reviews.slice(startIndex, endIndex).map((review) => (
          <Box key={review.id} sx={{ backgroundColor: 'white',borderRadius:'15px', padding: '16px', marginBottom: '16px' }}>
            <Grid container spacing={2} alignItems="center">
              
              <Grid item xs={9} sx={{ }} >
              <div style={{display:'flex',gap:10}}><AccountCircleOutlinedIcon/><Typography variant="h5">{review.fullName}</Typography></div>
                
                <div style={{display:'flex',gap:10}}><LocationOnOutlinedIcon/>
                <Typography variant="body2" color="textSecondary">
                 {review.residence}
                </Typography></div>
                
                
                {/* <Typography variant="body2" color="textSecondary">
                  {format(review.datePosted, 'MMMM dd, yyyy')}
                </Typography> */}
              </Grid>
            </Grid>
            <hr/>
            <Box display="flex" alignItems="center" mt={1}>
              <Rating name={`rating-${review.id}`} value={review.rating} readOnly />
            </Box>
  
            <Typography variant="body2" mt={2}>
              {review.content}
            </Typography>
            <hr/>
            <Box display="flex" alignItems="center" mt={2}>
              <ThumbUpOutlinedIcon style={{color:'grey'}}/>
              <Typography variant="body2" color="textSecondary" ml={1}>
                {review.likes}
              </Typography>
              <IconButton size="small" color="primary" ml={2}></IconButton>
            </Box>
          </Box>
        ))}
        {/* <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
          <Button variant="outlined" disabled={currentPage === 1} onClick={handlePrevPage}>
            Previous
          </Button>
          <Button variant="outlined" disabled={currentPage === totalPages} onClick={handleNextPage}>
            Next
          </Button>
        </Box> */}
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '16px',paddingTop:'50px',paddingBottom:'50px' }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(event, page) => setCurrentPage(page)}
            variant="outlined"
            shape="rounded"
            color="primary"
            size="large"
            showFirstButton showLastButton
          />
        </Box>
      </Box>
    );
  };
  
  export default PostedReviews;