import React ,{useState} from 'react'
import CancellationText from './Cancellation Text/CancellationText'
import CancellationForm from './Cancellation Form/CancellationForm';
import CancellationHolder from '../../UI/CancellationHolder';
import CancellationLetter from './Cancellation Letter/CancellationLetter';
import Icon from '../../UI/Icon'
import {Grid} from '@mui/material';
function Cancellation() {


//   const[userData,setUserData]=useState({ firstName: '[First Name*]',
//   lastName: '[Last Name*]',
//   postalCode: '[Postal Code*]',
//   houseNumber: '[House No*]',
//   residence: '[Residence*]',
//   street: '[Street*]',
//   email: '[E-Mail*]',
//   iban: '[IBAN*]',
//   review: '[Review]',
 
// });

const [userData, setUserData] = useState({});

  function handleUserChange(formData){
      setUserData(formData)
  }



  return (
  <CancellationHolder>
    <CancellationText/>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
      <CancellationForm  onUserChange={handleUserChange}  />
      </Grid>
      <Grid item xs={12} md={6}>
        <CancellationLetter data={userData} />
        <Icon/>
      </Grid>
    </Grid>
    </CancellationHolder>
    
  )
}

export default Cancellation