// const [formData, setFormData] = useState({
  //   demandeDate: '',
  //   dernierDotationDate: '',
  //   index: '',
  //   beneficiare: '',
  //   genre: '',
  //   fonction: '',
  //   structure: '',
  //   typeVehicule: '',
  // });

  // const [signature, setSignature] = useState(null);
  // const sigCanvas = useRef({});

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
    
  //   console.log(formData);
  //   console.log(signature); 
  // };

  // const clearSignature = () => {
  //   sigCanvas.current.clear();
  //   setSignature(null);
  // };

  // const handlePrint = () => {
  //   window.print();
  // };

  // return (
  //   <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  //     <h2>Demande De vehicule </h2>
  //     <h3>Espace Réservé au Demandeur</h3>
  //     <TextField
  //       label="Date d’établissement de la demande"
  //       type="date"
  //       name="demandeDate"
  //       value={formData.demandeDate}
  //       onChange={handleChange}
  //       InputLabelProps={{
  //         shrink: true,
  //       }}
  //       style={{ marginBottom: '20px', width: '300px' }}
  //     />
     
  //     <TextField
  //       label="Index"
  //       type="text"
  //       name="index"
  //       value={formData.index}
  //       onChange={handleChange}
  //       style={{ marginBottom: '20px', width: '300px' }}
  //     />
  //     <div style={{ marginBottom: '20px', width: '300px' }}>
        
  //       <TextField
  //         label="Beénificiare"
  //         type="text"
  //         name="beneficiare"
  //         value={formData.beneficiare}
  //         onChange={handleChange}
  //         style={{ marginBottom: '10px', width: '100%' }}
  //       />
  //       <TextField
  //         label="Mme/Mr"
  //         type="text"
  //         name="genre"
  //         value={formData.genre}
  //         onChange={handleChange}
  //         style={{ marginBottom: '10px', width: '100%' }}
  //       />
  //       <TextField
  //         label="Fonction"
  //         type="text"
  //         name="fonction"
  //         value={formData.fonction}
  //         onChange={handleChange}
  //         style={{ marginBottom: '10px', width: '100%' }}
  //       />
  //       <TextField
  //         label="Structure d 'attache"
  //         type="text"
  //         name="structure"
  //         value={formData.structure}
  //         onChange={handleChange}
  //         style={{ marginBottom: '10px', width: '100%' }}
  //       />
  //     </div>
      
      
  //     <div style={{ marginBottom: '20px', width: '300px' }}>
  //       <h3>Signature du Demandeur</h3>
  //       <SignatureCanvas
  //         ref={sigCanvas}
  //         penColor='black'
  //         canvasProps={{
  //           width: 300, 
  //           height: 200,
  //           className: 'signatureCanvas'
  //         }}
  //         onEnd={() => setSignature(sigCanvas.current.toDataURL())}
  //       />
  //       <Button onClick={clearSignature} style={{ marginTop: '10px' }}>Effacer la signature</Button>
  //     </div>

      
  //     <Button onClick={handlePrint} variant="contained" color="secondary" style={{ marginBottom: '20px', width: '300px' }}>Imprimer</Button>
      
  //     <Button type="submit" variant="contained" color="primary" style={{ width: '300px' }}>Soumettre</Button>
  //   </form>
  // );
  import React, { useState } from 'react';
  import { TextField, Box, Button } from '@mui/material';
  
  export function AttribuerVehicule() {
    const [data, setData] = useState({
      marque: '',
      matricule: '',
      nom: '',
      prenom: '',
      fonction: '',
      permis: '',
      adress: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setData({ ...data, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(data);
    };
  
    const handlePrint = () => {
      window.print();
    };
  
    return (
      <>
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
            marginBottom: '10px'
          }}
        >
          <h1>Attribution de véhicule</h1>
          <h2>Véhicule x Marque y effectué à z</h2>
  
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <TextField
              label="MARQUE"
              type="text"
              name="marque"
              value={data.marque}
              onChange={handleChange}
              style={{ marginBottom: '20px', width: '300px' }}
            />
            <TextField
              label="MATRICULE"
              type="text"
              name="matricule"
              value={data.matricule}
              onChange={handleChange}
              style={{ marginBottom: '20px', width: '300px', marginLeft: '20px' }}
            />
          </Box>
          <h3>service</h3>
          <TextField
            label="NOM"
            type="text"
            name="nom"
            value={data.nom}
            onChange={handleChange}
            style={{ marginBottom: '20px', width: '300px' }}
          />
          <TextField
            label="PRENOM"
            type="text"
            name="prenom"
            value={data.prenom}
            onChange={handleChange}
            style={{ marginBottom: '20px', width: '300px' }}
          />
          <TextField
            label="FONCTION"
            type="text"
            name="fonction"
            value={data.fonction}
            onChange={handleChange}
            style={{ marginBottom: '20px', width: '300px' }}
          />
          <TextField
            label="PERMIS"
            type="text"
            name="permis"
            value={data.permis}
            onChange={handleChange}
            style={{ marginBottom: '20px', width: '300px' }}
          />
          <TextField
            label="ADRESSE"
            type="text"
            name="adress"
            value={data.adress}
            onChange={handleChange}
            style={{ marginBottom: '20px', width: '300px' }}
          />
          {/* Print */}
          <Button
            onClick={handlePrint}
            variant="contained"
            color="secondary"
            style={{ marginBottom: '20px', width: '300px' }}
          >
            Imprimer
          </Button>
  
  
          {/* Submit  */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ width: '300px' }}
          >
            Soumettre
          </Button>
        </form>
      </>
    );
  }
  



