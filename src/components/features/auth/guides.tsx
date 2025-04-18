import { Container, Typography, Box } from '@mui/material';
import React from 'react';

interface GuidesProps {
  title: string;
  description: string;
}

export const Guides: React.FC<GuidesProps> = ({ title, description }) => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {' '}
      {/* Use sx prop for styling */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </Box>
      {/* You can add more content specific to guides here */}
      <Box>
        <Typography variant="h6">Guide Section 1</Typography>
        <Typography variant="body2">Details about the first guide...</Typography>
      </Box>
    </Container>
  );
};
