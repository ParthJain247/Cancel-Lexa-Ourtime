import React, { useState, useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import PencilAnimation from '../../../UI/Pencil Animation/PencilAnimation';
import { Typography,Alert } from '@mui/material';

import classes from './Signature.module.css'

function Signature() {
  const [modalOpen, setModalOpen] = useState(false);
  const [signatureDataURL, setSignatureDataURL] = useState(null);
  const signatureRef = useRef();
  const [canRetry, setCanRetry] = useState(false);

  const handleCanvasClick = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSignatureDataURL(null);
    signatureRef.current.clear(); // Clear the signature canvas
    setCanRetry(true); // Allow the user to retry
  };

  const handleSaveSignature = () => {
    if (signatureRef.current.isEmpty()) {
      // No signature is drawn
      return;
    }

    const dataURL = signatureRef.current.toDataURL();
    setSignatureDataURL(dataURL);
    setModalOpen(false);
    setCanRetry(true); // Allow the user to retry
  };

  const handleRetrySignature = () => {
    setSignatureDataURL(null);
    setCanRetry(false); // Prevent the user from retrying until they've saved a new signature
    setModalOpen(true);
  };





  return (
    <div>
      <div className="signature-container">
        {signatureDataURL ? (
          <div>
            <img
              src={signatureDataURL}
              alt="Signature"
              className="signature-image"
            />
            {canRetry && (
              <Button variant="contained" onClick={handleRetrySignature}>
                Retry Signature
              </Button>
            )}
          </div>
        ) : (
          <div className={classes.inactiveCanvas} onClick={handleCanvasClick}>
          <PencilAnimation/>
            
          </div>
        )}
      </div>
      <Modal open={modalOpen} onClose={handleModalClose}>
        <div className={classes.modalContent}>
        <div className={classes.textHolder}>
        <Typography variant="h3" align="center">
        Sign a signature
        </Typography>
        </div>
        <div className={classes.canvas}>
          <SignatureCanvas
            ref={signatureRef}
            canvasProps={{ width: 400, height: 200 }}
            penColor="black"
            backgroundColor="white"
           
          /></div>
          <br/>
          <Alert severity="info">Enter your name to create a signature based on your name</Alert>
          <br/>
          <div className={classes.buttonContainer}>
            <Button variant="contained" sx={{
        backgroundColor: '#E57C23',color:'white',
        '&:hover': {
          backgroundColor: '#864913',color:'white'
        },
      }}  onClick={handleSaveSignature}>
              Save
            </Button>
            
            <Button variant="contained" sx={{
        backgroundColor: 'white',color:'#E57C23',
        '&:hover': {
          backgroundColor: '#E57C23',color:'white'
        },
      }} onClick={handleModalClose}>
              Close
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Signature;