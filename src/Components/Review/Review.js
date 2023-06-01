import React ,{useState}from 'react'
import ReviewsContainer from '../../UI/ReviewsContainer'
import ReviewForm from './Review Form/ReviewForm'
import PostedReviews from './Posted Reviews/PostedReviews'


import reviews from './Posted Reviews/Dummy';

function Review() {
const[data,setData]=useState(reviews);
  const handleSubmit=(formData)=>{
    setData((prevData) => [formData, ...prevData]);
  }



  return (
    <ReviewsContainer>
        <ReviewForm  onSubmit={handleSubmit}  />
        
        <PostedReviews reviewData={data} />
    </ReviewsContainer>
  )
}

export default Review