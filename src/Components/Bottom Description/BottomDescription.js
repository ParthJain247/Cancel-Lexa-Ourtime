import React from 'react'
import { Box,Typography} from '@mui/material'

import background from '../../Assets/Images/landscape-desktop.svg'






function BottomDescription() {
  return (
    <>
    <img style={{objectFit:'fill',width:'100%',height:'20vw'}} src={background} alt='mountain'/>
    <Box
      sx={{
        backgroundColor: '#E6EFFF' ,
        marginTop:'-10px'
      }}
    >
    <div style={{paddingLeft:'15%',paddingRight:'15%' ,paddingTop:'5%',paddingBottom:'5%'}}>
      <Typography variant="h4" component="h2">
    Cancel Ourtime
      </Typography>
      <Typography padding={1} variant="body1" component="p">
       <strong> Dating site manager Meetic has set up a new dating site after Lexamore and Lexa, aimed at bringing young people over fifty together. It is a new part, but the operation is almost the same. You can create a profile on Ourtime for free with which you can see which singles can be found on Ourtime. You can use so-called sweethearts, with which you can make it clear to the other person that you are interested. If the other person has mutual interest, you will be on each other's list.</strong>
      </Typography>
      <br/>
      <Typography variant="h4" component="h2">
        Cost Ourtime
      </Typography>
      <Typography padding={1} variant="body1" component="p" gutterBottom>
        Of course, it doesn't stop there and you want to talk to the singles you find interesting. Ourtime knows this, and that is why a subscription comes into play. Only with that subscription, you can send messages to the singles who have piqued your interest. In principle, a monthly subscription is always the same price, but you can get the price per month slightly lower by committing to a longer period. For example, do you know that it will probably take 3 or 6 months before you have hooked up with a nice partner? Then take advantage of the Lexa Ourtime discount and pay less per month.
      </Typography>
      <br/>
      <Typography variant="h4" component="h2">
        Advantages of online dating
      </Typography>
      <Typography padding={1} variant="body1" component="p">
        Now that you've seen the costs, you may be wondering why you would choose online dating. The reason is actually very simple, namely: the enormous choice. If you go to the pub for an evening, you often don't even see that many people you like and moreover you don't know anything about them. Thanks to the profiles on dating sites such as Ourtime, you see a face and you immediately have an overview of someone's character. Very useful to decide if that person might be interesting for you. You can also find people who normally cannot be found in the pub. You might not have come across them at all otherwise! In this way you significantly increase your own chances and hopefully you will soon find your soul mate.
      </Typography>
      <br/>
      <Typography variant="h4" component="h2">
        Beware of the dating scammer
      </Typography>
      <Typography padding={1} variant="body1" component="p">
        Of course dating isn't all fun and it's not all roses. The risk of online dating is that someone can pretend to be different than he or she really is. A few kilos lighter, a little younger or even a completely different person. That is why it is wise to always watch out for a dating scammer. These scammers often mean evil. For example, they are after your money or even worse. That is why it is wise to always first make a video call via media such as Skype, WhatsApp or Zoom. This way you can see whether the photo corresponds to reality. It is also very important to trust your gut. If something seems too good to be true, then - no matter how sad - it often is.
      </Typography>
      <br/>
      <Typography variant="h4" component="h2">
        Cancel Ourtime
      </Typography>
      <Typography padding={1} variant="body1" component="p">
        Have you found your soul mate or are you doing casual dating and do you like it all that way? You can cancel your subscription with Ourtime by indicating this in your profile or by using the cancellation letter from 123cancel. Your cancellation letter is completely tailored to Ourtime and all important information is present. You only have to fill in your own details, so that Ourtime knows who wants to cancel the subscription. This data is then loaded into the cancellation letter, after which you can download it for freecan download and send to Ourtime. You can also leave the sending of the cancellation letter to 123op terminate. For a small fee, we will then ensure that the cancellation letter reaches Ourtime, so that they cancel your subscription and you can enjoy (not) dating.
      </Typography>
    </div>
     
    </Box>
    </>
  )
}

export default BottomDescription
