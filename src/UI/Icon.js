import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Icon() {
  return (
    <div style={{ display: 'flex' ,paddingTop:'5%'}}>
      <FacebookRoundedIcon sx={{  width: '15vw', color: 'blue', marginLeft: '-6vw' }} />
      <TwitterIcon sx={{  width: '15vw', color: 'blue', marginLeft: '-6vw' }} />
      <LinkedInIcon sx={{  width: '15vw', color: 'blue', marginLeft: '-6vw' }} />
      <WhatsAppIcon sx={{  width: '15vw', color: 'green', marginLeft: '-6vw' }} />
    </div>
  )
}

export default Icon