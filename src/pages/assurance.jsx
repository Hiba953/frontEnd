import React, { useRef } from 'react';
import { Typography, Paper, TextField, Button, Box } from '@mui/material';
import SignatureCanvas from 'react-signature-canvas';

export function Assurance() {
  const signatureServiceRef = useRef();
  const signatureGarageRef = useRef();

  const clearSignatureService = () => {
    signatureServiceRef.current.clear();
  };

  const clearSignatureGarage = () => {
    signatureGarageRef.current.clear();
  };

  const saveSignatureService = () => {
    const signatureImage = signatureServiceRef.current.toDataURL();
    console.log(signatureImage); 
  };

  const saveSignatureGarage = () => {
    const signatureImage = signatureGarageRef.current.toDataURL();
    console.log(signatureImage); 
  };

  return (
    <Paper style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <Typography variant="h5" align="center">DO ALGER OUEST</Typography>
      <Typography variant="h6" align="center">DEPARTEMENT PATRIMOINE ET MOYENS</Typography>
      <Typography variant="subtitle1" align="center">SERVICE MOYENS GENEREAUX</Typography>
      <Typography variant="subtitle2" align="center" style={{ marginBottom: '20px' }}>FICHE D'ADMISSION DE VEHICULE</Typography>

      <TextField label="N°" fullWidth variant="outlined" style={{ marginBottom: '10px' }} />
      <Box style={{ marginBottom: '10px' }}>
        <Typography>Date d'Entrées</Typography>
        <input type="date" style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px' }} />
      </Box>
      <TextField label="Marque du véhicule" fullWidth variant="outlined" style={{ marginBottom: '10px' }} />
      <TextField label="Service utilisateur" fullWidth variant="outlined" style={{ marginBottom: '10px' }} />
      <TextField label="Pannes déclarées" multiline rows={4} fullWidth variant="outlined" style={{ marginBottom: '10px' }} />
      <TextField label="Pannes réparées" multiline rows={4} fullWidth variant="outlined" style={{ marginBottom: '10px' }} />

      {/* Signature  */}
      <Typography variant="h5" align="center" style={{ marginBottom: '10px' }}>Signatures</Typography>
      <Box display="flex" justifyContent="space-between" marginBottom="10px">
        <Box>
          <Typography variant="body1" align="center" style={{ marginBottom: '10px' }}> Signature du service</Typography>
          <SignatureCanvas ref={signatureServiceRef} canvasProps={{ width: 250, height: 150, style: { border: '1px solid black' } }} />
          <Button variant="outlined" onClick={clearSignatureService} style={{ marginTop: '10px' }}>Effacer la signature</Button>
          <Button variant="contained" onClick={saveSignatureService} style={{ marginTop: '10px' }}>Enregistrer la signature</Button>
        </Box>
        <Box>
          <Typography variant="body1" align="center" style={{ marginBottom: '10px' }}>Signature du garage</Typography>
          <SignatureCanvas ref={signatureGarageRef} canvasProps={{ width: 250, height: 150, style: { border: '1px solid black' } }} />
          <Button variant="outlined" onClick={clearSignatureGarage} style={{ marginTop: '10px' }}>Effacer la signature</Button>
          <Button variant="contained" onClick={saveSignatureGarage} style={{ marginTop: '10px' }}>Enregistrer la signature</Button>
        </Box>
      </Box>

    </Paper>
  );
}
