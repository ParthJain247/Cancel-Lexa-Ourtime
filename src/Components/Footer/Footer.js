import React from 'react'
import classes from './Footer.module.css'
import logo from '../../Assets/Images/logo.svg'
import { Container, Grid, Typography, Link ,Box} from '@mui/material'


const footerStyles = {
  root: {
    backgroundColor: '#f5f5f5',
    padding: '16px',
  },
  row: {
    marginBottom: '16px',
  },
  link: {
    marginRight: '16px',
    color: '#fff',
  },
};



function Footer() {
  return (
    <Box  sx={{
        backgroundColor: '#E6EFFF' 
      }}>
    <div className={classes.content}>
    <footer>
  <Container style={{ padding: '5%' }}>
    <Grid container spacing={4}>
      <Grid item xs={12} sm={3}>
        <div style={{ display: 'flex' }}>
          <img style={{ width: '2vw' }} src={logo} alt='logo' />
          <img style={{ width: '10vw' }} src='https://www.123opzeggen.nl/img/common/logo/logo-text-only.svg' alt="Company Logo" />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <Link style={footerStyles.link} href="#"><strong>General cancellation letter</strong></Link>
          <Link style={footerStyles.link} href="#"><strong>Contact</strong></Link>
        </div>
      </Grid>

      <Grid item xs={12} sm={3}>
        <Typography style={footerStyles.link} variant="subtitle1"><strong>Most Canceled</strong></Typography>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Link style={footerStyles.link} href="#">Luxplus</Link>
          <Link style={footerStyles.link} href="#">FNV</Link>
          <Link style={footerStyles.link} href="#">Lexa Ourtime</Link>
          <Link style={footerStyles.link} href="#">Postcode Lottery</Link>
          <Link style={footerStyles.link} href="#">Best tip</Link>
          <Link style={footerStyles.link} href="#">KWF Cancer Control</Link>
          <Link style={footerStyles.link} href="#">Assistance dog in the Netherlands</Link>
          <Link style={footerStyles.link} href="#">Chubb</Link>
          <Link style={footerStyles.link} href="#">Friends lottery</Link>
          <Link style={footerStyles.link} href="#">Senior Discount Card</Link>
        </div>
      </Grid>

      <Grid item xs={12} sm={3}>
        <Typography style={footerStyles.link} variant="subtitle1"><strong>Popular Categories</strong></Typography>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Link style={footerStyles.link} href="#">Charities</Link>
          <Link style={footerStyles.link} href="#">Lotteries</Link>
          <Link style={footerStyles.link} href="#">Media</Link>
          <Link style={footerStyles.link} href="#">Sport</Link>
          <Link style={footerStyles.link} href="#">Insurances</Link>
          <Link style={footerStyles.link} href="#">Living</Link>
        </div>
      </Grid>

      <Grid item xs={12} sm={3}>
        <Typography style={footerStyles.link} variant="subtitle1"><strong>Information</strong></Typography>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Link style={footerStyles.link} href="#">Homepage</Link>
          <Link style={footerStyles.link} href="#">Categories</Link>
          <Link style={footerStyles.link} href="#">Frequently Asked Questions</Link>
          <Link style={footerStyles.link} href="#">Glossary</Link>
          <Link style={footerStyles.link} href="#">Contact</Link>
          <Link style={footerStyles.link} href="#">Logo</Link>
          <Link style={footerStyles.link} href="#">Blog</Link>
          <Link style={footerStyles.link} href="#">Terms and Conditions</Link>
          <Link style={footerStyles.link} href="#">Privacy Declaration</Link>
          <Link style={footerStyles.link} href="#">Right of Withdrawal</Link>
          <Link style={footerStyles.link} href="#">Notice and Takedown</Link>
          <Link style={footerStyles.link} href="#">Sitemap</Link>
        </div>
      </Grid>
    </Grid>
  </Container>
</footer>
    </div></Box>

  )
}

export default Footer