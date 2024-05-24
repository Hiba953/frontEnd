import React, {useState, useRef } from 'react';
import { Typography, MenuItem ,Paper, TextField, Button, Box,Grid } from '@mui/material';
import SignatureCanvas from 'react-signature-canvas';

export function Gpl({ onSubmit }) {
  const [dateRenouvellement, setDateRenouvellement] = useState("");
  const [kilometrage, setKilometrage] = useState("");
  const [etatBouteille, setEtatBouteille] = useState("");
  const [observations, setObservations] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({ dateRenouvellement, kilometrage, etatBouteille, observations });
  };

  return (
      <Box>
          <Typography variant="h6">Formulaire de renouvellement de bouteille de gaz GPL</Typography>
          <br /><form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                      <TextField
                          label="Date de renouvellement"
                          type="date"
                          value={dateRenouvellement}
                          onChange={(e) => setDateRenouvellement(e.target.value)}
                          required
                          fullWidth
                      />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                      <TextField
                          label="Kilométrage"
                          type="number"
                          value={kilometrage}
                          onChange={(e) => setKilometrage(e.target.value)}
                          required
                          fullWidth
                      />
                  </Grid>
                  <Grid item xs={12}>
                      <TextField
                          label="État de la bouteille"
                          select
                          value={etatBouteille}
                          onChange={(e) => setEtatBouteille(e.target.value)}
                          required
                          fullWidth
                      >
                          <MenuItem value="Bon">Bon</MenuItem>
                          <MenuItem value="Endommagé">Endommagé</MenuItem>
                          <MenuItem value="Vide">Vide</MenuItem>
                      </TextField>
                  </Grid>
                  <Grid item xs={12}>
                      <TextField
                          label="Observations"
                          multiline
                          value={observations}
                          onChange={(e) => setObservations(e.target.value)}
                          fullWidth
                      />
                  </Grid>
              </Grid>
              <Box mt={2}>
                  <Button type="submit" variant="contained" color="primary">
                      Soumettre
                  </Button>
              </Box>
          </form>
      </Box>
  );
}


