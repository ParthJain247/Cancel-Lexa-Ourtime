import React from 'react';
import { Typography, styled, useThemeProps } from '@mui/material';

const BlurredText = styled(Typography)`
  filter: blur(5px); /* Adjust the blur intensity as needed */
`;

const BlurText = (props) => {
  return (
    <BlurredText variant="h6">
        {props.children}
      </BlurredText>
  );
};

export default BlurText;