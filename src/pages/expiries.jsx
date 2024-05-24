

import React, { useState, useRef } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import SignatureCanvas from 'react-signature-canvas';

export function Expiry() {
  const [formData, setFormData] = useState({
    demandeDate: '',
    dernierDotationDate: '',
    kilometrage: '',
    index: '',
    beneficiare: '',
    genre: '',
    fonction: '',
    structure: '',
    typeVehicule: '',
    immatriculation: '',
  });

  const [signature, setSignature] = useState(null);
  const sigCanvas = useRef({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
    console.log(signature); 
  };

  const clearSignature = () => {
    sigCanvas.current.clear();
    setSignature(null);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>confirmation carb</h2>
      <h2> Véhicule De Service</h2>
      <h3>Espace Réservé au Demandeur</h3>
      <TextField
        label="Date d’établissement de la demande"
        type="date"
        name="demandeDate"
        value={formData.demandeDate}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
        style={{ marginBottom: '20px', width: '300px' }}
      />
      <TextField
        label="Date de la dernier dotation en carburant"
        type="date"
        name="dernierDotationDate"
        value={formData.dernierDotationDate}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
        style={{ marginBottom: '20px', width: '300px' }}
      />
      <TextField
        label="Kilometrage (distance parcourue)"
        type="text"
        name="kilometrage"
        value={formData.kilometrage}
        onChange={handleChange}
        style={{ marginBottom: '20px', width: '300px' }}
      />
      <TextField
        label="Index"
        type="text"
        name="index"
        value={formData.index}
        onChange={handleChange}
        style={{ marginBottom: '20px', width: '300px' }}
      />
      <div style={{ marginBottom: '20px', width: '300px' }}>
        
        <TextField
          label="Beénificiare"
          type="text"
          name="beneficiare"
          value={formData.beneficiare}
          onChange={handleChange}
          style={{ marginBottom: '10px', width: '100%' }}
        />
        <TextField
          label="Mme/Mr"
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          style={{ marginBottom: '10px', width: '100%' }}
        />
        <TextField
          label="Fonction"
          type="text"
          name="fonction"
          value={formData.fonction}
          onChange={handleChange}
          style={{ marginBottom: '10px', width: '100%' }}
        />
        <TextField
          label="Structure d 'attache"
          type="text"
          name="structure"
          value={formData.structure}
          onChange={handleChange}
          style={{ marginBottom: '10px', width: '100%' }}
        />
      </div>
      <FormControl style={{ marginBottom: '20px', width: '300px' }}>
        <InputLabel>Type de véhicule</InputLabel>
        <Select
          value={formData.typeVehicule}
          onChange={handleChange}
          name="typeVehicule"
        >
          <MenuItem value="Véhicule essence">Véhicule essence</MenuItem>
          <MenuItem value="Véhicule essence/GPL">Véhicule essence/GPL</MenuItem>
          <MenuItem value="Venicule gasoil">Venicule gasoil</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Immatriculation du Véhicule"
        type="text"
        name="immatriculation"
        value={formData.immatriculation}
        onChange={handleChange}
        style={{ marginBottom: '20px', width: '300px' }}
      />

      {/* Signature*/}
      <div style={{ marginBottom: '20px', width: '300px' }}>
        <h3>Signature du Demandeur</h3>
        <SignatureCanvas
          ref={sigCanvas}
          penColor='black'
          canvasProps={{
            width: 300, 
            height: 200,
            className: 'signatureCanvas'
          }}
          onEnd={() => setSignature(sigCanvas.current.toDataURL())}
        />
        <Button onClick={clearSignature} style={{ marginTop: '10px' }}>Effacer la signature</Button>
      </div>

      
      {/* Print */}
      <Button onClick={handlePrint} variant="contained" color="secondary" style={{ marginBottom: '20px', width: '300px' }}>Imprimer</Button>
      
      {/* Submit  */}
      <Button type="submit" variant="contained" color="primary" style={{ width: '300px' }}>Soumettre</Button>
    </form>
  );
}
