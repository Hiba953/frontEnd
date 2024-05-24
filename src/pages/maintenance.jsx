import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export function Maintenance() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
       {/* <Button component={Link} to="/app/Carburant" sx={{ bgcolor: '#ffab91', p: 2, m: 2, width: 200, height: 200 }}>
        <Typography variant="h5" textAlign="center">Recharge Carburant </Typography>
      </Button> */}
      <Button component={Link} to="/app/ren/gpl" sx={{ bgcolor: '#ffcc80', p: 2, m: 2, width: 200, height: 200 }}>
  <Typography variant="h5" textAlign="center">GPL </Typography>
    </Button> 
      <Button component={Link} to="/app/ren/assurance" sx={{ bgcolor: '#b2dfdb', p: 2, m: 2, width: 200, height: 200 }}>
        <Typography variant="h5" textAlign="center">Assurance </Typography>
      </Button>
      <Button component={Link} to="/app/ren/controleTechnique" sx={{ bgcolor: '#ffab91', p: 2, m: 2, width: 200, height: 200 }}>
        <Typography variant="h5" textAlign="center">Controle Technique </Typography>
      </Button>
      <Button component={Link} to="/app/ren/chaineDistribution" sx={{ bgcolor: '#c5cae9', p: 2, m: 2, width: 200, height: 200 }}>
        <Typography variant="h5" textAlign="center">Chaine Distribution </Typography>
      </Button>
     
    </Box>
  );
};
