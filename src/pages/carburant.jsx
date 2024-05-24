

// import React, { useState, useRef } from 'react';
// import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
// import SignatureCanvas from 'react-signature-canvas';

// export function Carburant() {
//   const [formData, setFormData] = useState({
//     demandeDate: '',
//     dernierDotationDate: '',
//     kilometrage: '',
//     index: '',
//     beneficiare: '',
//     genre: '',
//     fonction: '',
//     structure: '',
//     typeVehicule: '',
//     immatriculation: '',
//     gestionPlatformNaftal: '',
//     soldeRestant: '',
//     montantRechargeChiffre: '',
//     montantRechargeLettre: '',
//     nombreBonADoter: '',
//     numeroSerieDuAu: '',
//   });

//   const [signature, setSignature] = useState(null);
//   const sigCanvas = useRef({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     console.log(formData);
//     console.log(signature); 
//   };

//   const clearSignature = () => {
//     sigCanvas.current.clear();
//     setSignature(null);
//   };

//   const handlePrint = () => {
//     window.print();
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//       <h2>damande de carburant</h2>
//       <h2> Véhicule De Service</h2>
//       <h3>Espace Réservé au Demandeur</h3>
//       <TextField
//         label="Date d’établissement de la demande"
//         type="date"
//         name="demandeDate"
//         value={formData.demandeDate}
//         onChange={handleChange}
//         InputLabelProps={{
//           shrink: true,
//         }}
//         style={{ marginBottom: '20px', width: '300px' }}
//       />
//       <TextField
//         label="Date de la dernier dotation en carburant"
//         type="date"
//         name="dernierDotationDate"
//         value={formData.dernierDotationDate}
//         onChange={handleChange}
//         InputLabelProps={{
//           shrink: true,
//         }}
//         style={{ marginBottom: '20px', width: '300px' }}
//       />
//       <TextField
//         label="Kilometrage (distance parcourue)"
//         type="text"
//         name="kilometrage"
//         value={formData.kilometrage}
//         onChange={handleChange}
//         style={{ marginBottom: '20px', width: '300px' }}
//       />
//       <TextField
//         label="Index"
//         type="text"
//         name="index"
//         value={formData.index}
//         onChange={handleChange}
//         style={{ marginBottom: '20px', width: '300px' }}
//       />
//       <div style={{ marginBottom: '20px', width: '300px' }}>
        
//         <TextField
//           label="Beénificiare"
//           type="text"
//           name="beneficiare"
//           value={formData.beneficiare}
//           onChange={handleChange}
//           style={{ marginBottom: '10px', width: '100%' }}
//         />
//         <TextField
//           label="Mme/Mr"
//           type="text"
//           name="genre"
//           value={formData.genre}
//           onChange={handleChange}
//           style={{ marginBottom: '10px', width: '100%' }}
//         />
//         <TextField
//           label="Fonction"
//           type="text"
//           name="fonction"
//           value={formData.fonction}
//           onChange={handleChange}
//           style={{ marginBottom: '10px', width: '100%' }}
//         />
//         <TextField
//           label="Structure d 'attache"
//           type="text"
//           name="structure"
//           value={formData.structure}
//           onChange={handleChange}
//           style={{ marginBottom: '10px', width: '100%' }}
//         />
//       </div>
//       <FormControl style={{ marginBottom: '20px', width: '300px' }}>
//         <InputLabel>Type de véhicule</InputLabel>
//         <Select
//           value={formData.typeVehicule}
//           onChange={handleChange}
//           name="typeVehicule"
//         >
//           <MenuItem value="Véhicule essence">Véhicule essence</MenuItem>
//           <MenuItem value="Véhicule essence/GPL">Véhicule essence/GPL</MenuItem>
//           <MenuItem value="Venicule gasoil">Venicule gasoil</MenuItem>
//         </Select>
//       </FormControl>
//       <TextField
//         label="Immatriculation du Véhicule"
//         type="text"
//         name="immatriculation"
//         value={formData.immatriculation}
//         onChange={handleChange}
//         style={{ marginBottom: '20px', width: '300px' }}
//       />

//       {/* hna la Signature*/}
//       <div style={{ marginBottom: '20px', width: '300px' }}>
//         <h3>Signature du Demandeur</h3>
//         <SignatureCanvas
//           ref={sigCanvas}
//           penColor='black'
//           canvasProps={{
//             width: 300, 
//             height: 200,
//             className: 'signatureCanvas'
//           }}
//           onEnd={() => setSignature(sigCanvas.current.toDataURL())}
//         />
//         <Button onClick={clearSignature} style={{ marginTop: '10px' }}>Effacer la signature</Button>
//       </div>

      
//       {/* z3ma print mais ca marche pas  */}
//       <Button onClick={handlePrint} variant="contained" color="secondary" style={{ marginBottom: '20px', width: '300px' }}>Imprimer</Button>
      
//       {/* Submit  */}
//       <Button type="submit" variant="contained" color="primary" style={{ width: '300px' }}>Soumettre</Button>
//       <h2>Confirmation de carburant</h2>
//       <h2> Véhicule De Service</h2>
//       <h3>Espace Réservé au Demandeur</h3>
   
//       {/*vol2 t3 service hada" */}
//       <TextField
//         label="Gestion via Plateforme NAFTAL"
//         type="text"
//         name="gestionPlatformNaftal"
//         value={formData.gestionPlatformNaftal}
//         onChange={handleChange}
//         style={{ marginBottom: '20px', width: '300px' }}
//       />
//       <TextField
//         label="Solde Restant"
//         type="text"
//         name="soldeRestant"
//         value={formData.soldeRestant}
//         onChange={handleChange}
//         style={{ marginBottom: '20px', width: '300px' }}
//       />
//       <TextField
//         label="Montant Recharge (en chiffre)"
//         type="text"
//         name="montantRechargeChiffre"
//         value={formData.montantRechargeChiffre}
//         onChange={handleChange}
//         style={{ marginBottom: '20px', width: '300px' }}
//       />
//       <TextField
//         label="Montant Recharge (en lettre)"
//         type="text"
//         name="montantRechargeLettre"
//         value={formData.montantRechargeLettre}
//         onChange={handleChange}
//         style={{ marginBottom: '20px', width: '300px' }}
//       />
//       <TextField
//         label="Nombre de Bon à Doter"
//         type="text"
//         name="nombreBonADoter"
//         value={formData.nombreBonADoter}
//         onChange={handleChange}
//         style={{ marginBottom: '20px', width: '300px' }}
//       />
//       <TextField
//         label="Numéro de Série du au"
//         type="text"
//         name="numeroSerieDuAu"
//         value={formData.numeroSerieDuAu}
//         onChange={handleChange}
//         style={{ marginBottom: '20px', width: '300px' }}
//       />
      
//       <div style={{ marginBottom: '20px', width: '300px' }}>
//         <h3>Signature du service</h3>
//         <SignatureCanvas
//           ref={sigCanvas}
//           penColor='black'
//           canvasProps={{
//             width: 300, 
//             height: 200,
//             className: 'signatureCanvas'
//           }}
//           onEnd={() => setSignature(sigCanvas.current.toDataURL())}
//         />
//         <Button onClick={clearSignature} style={{ marginTop: '10px' }}>Effacer la signature</Button>
//       </div>

      
//       {/* z3ma print mais ca marche pas  */}
//       <Button onClick={handlePrint} variant="contained" color="secondary" style={{ marginBottom: '20px', width: '300px' }}>Imprimer</Button>
      
//       {/* Submit  */}
//       <Button type="submit" variant="contained" color="primary" style={{ width: '300px' }}>Soumettre</Button>
//     </form>
//   );
// }

// import React, { useContext, useEffect, useState } from "react";
// import { Typography, Paper, Select, MenuItem, TextField, Button, Box, Autocomplete } from "@mui/material";
// import { useNavigate, useParams } from "react-router-dom";
// import { AuthContext } from "../context/authContext";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import dayjs from 'dayjs';

// const CARB_TYPE = {
//   ess: "ESS",
//   esp: "ESP",
//   gpl: "GPL",
//   go: "GO",
// };

// export function Carburant() {
//   const [chauffeur, setChauffeur] = useState("");
//   const [km, setKm] = useState("");
//   const [montant, setMontant] = useState("");
//   const [rechargedate, setRechargedate] = useState(null);
//   const [carburantType, setCarburantType] = useState("");
//   const authContext = useContext(AuthContext);
//   const [vehicules, setVehicules] = useState([]);
//   const [selectedVehicule, setSelectedVehicule] = useState([""]);
//   const [vehicule, setVehicule] = useState(null);

//   useEffect(() => {
//     async function fetchVehicules() {
//       try {
//         const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/vehicule`, {
//           method: "GET",
//           headers: {
//             "Content-type": "application/json",
//             "session-token": authContext.session.token,
//           },
//         });
//         if (!response.ok) {
//           throw new Error("Failed to fetch vehicles");
//         }
//         const data = await response.json();
//         setVehicules(data);
//         setSelectedVehicule(data[0]?.matricule);
//         setVehicule(data[0]);
//       } catch (err) {
//         console.log(err);
//       }
//     }
//     fetchVehicules();
//   }, []);

//   const handleSelection = (event, newValue) => {
//     if (!newValue) return;
//     setSelectedVehicule(newValue);
//     const selected = vehicules.find((vehicule) => {
//       return vehicule.matricule.toLowerCase().includes(newValue.split(" ")[0].toLowerCase());
//     });
//     setVehicule(selected);
//   };

//   const handleChange = (event) => {
//     setCarburantType(event.target.value);
//   };

//   async function handleSubmit() {
//     try {
//       const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/rechargeCarburant`, {
//         method: "POST",
//         headers: {
//           "Content-type": "application/json",
//           "session-token": authContext.session.token,
//         },
//         body: JSON.stringify({
//           chauffeur: chauffeur,
//           // ._id,
//           vehicule: vehicule._id,
//           type: carburantType,
//           dateRecharge: rechargedate,
//           km: km,
//           montant: montant,
//         }),
//       });
//       const data = await res.json();
//       if (res.ok) {
//         alert("Recharge successful");
//         console.log(data);
//       } else {
//         alert(`Failed to recharge: ${data.message}`);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Failed to recharge");
//     }
//   }

//   return (
//     <Paper style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
//       <Typography variant="subtitle1" align="center">
//        Recharge de carburant
//       </Typography>
     
//       <Autocomplete
//         sx={{ mb: 2 }}
//         value={selectedVehicule}
//         onChange={handleSelection}
//         options={vehicules.map(
//           (vehicule) => `${vehicule.matricule} ${vehicule.marque} ${vehicule.model}  `
//         )}
//         renderInput={(params) => (
//           <TextField {...params} label="Select vehicule" variant="outlined" />
//         )}
//       />
//       <TextField
//         value={chauffeur}
//         onChange={(e) => setChauffeur(e.target.value)}
//         label="Chauffeur"
//         fullWidth
//         variant="outlined"
//         style={{ marginBottom: "10px" }}
//       />
//        <Box style={{ marginBottom: "10px" }}>
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//           <DemoContainer components={["DatePicker"]}>
//             <DatePicker sx={{ width: "100%" }}
//              label="Date de recharge"
//              value={rechargedate}
//              onChange={(e) => setRechargedate(e)}
//               />
//           </DemoContainer>
//         </LocalizationProvider>
//       </Box>
//       <TextField
//         value={km}
//         onChange={(e) => setKm(e.target.value)}
//         label="Kilométrage"
//         multiline
//         rows={1}
//         fullWidth
//         variant="outlined"
//         style={{ marginBottom: "10px" }}
//       />
//       <TextField
//         value={montant}
//         onChange={(e) => setMontant(e.target.value)}
//         label="Montant"
//         multiline
//         rows={1}
//         fullWidth
//         variant="outlined"
//         style={{ marginBottom: "10px" }}
//       />
//       {/* <Typography variant="h6" align="center">
//        Carburant Type
//       </Typography> */}
//       <Select
//         value={carburantType}
//         onChange={handleChange}
//         fullWidth
//         label="Carburant Type"
//       >
//         <MenuItem value="">Select</MenuItem>
//         {Object.values(CARB_TYPE).map((type) => (
//           <MenuItem key={type} value={type}>
//             {type}
//           </MenuItem>
//         ))}
//       </Select>
//       <Button
//         type="submit"
//         variant="contained"
//         color="primary"
//         sx={{ margin: "auto" }}
//         onClick={handleSubmit}
//       >
//         Soumettre
//       </Button>
//     </Paper>
//   );
// }



// Carburant Component
import React, { useContext, useEffect, useState } from "react";
import { Typography, Paper, Select, MenuItem, TextField, Button, Box, Autocomplete } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from 'dayjs';

const CARB_TYPE = {
  ess: "ESS",
  esp: "ESP",
  gpl: "GPL",
  go: "GO",
};

export function Carburant() {
  const [chauffeur, setChauffeur] = useState("");
  const [km, setKm] = useState("");
  const [montant, setMontant] = useState("");
  const [rechargedate, setRechargedate] = useState(null);
  const [carburantType, setCarburantType] = useState("");
  const authContext = useContext(AuthContext);
  const [vehicules, setVehicules] = useState([]);
  const [selectedVehicule, setSelectedVehicule] = useState([""]);
  const [vehicule, setVehicule] = useState(null);

  useEffect(() => {
    async function fetchVehicules() {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/vehicule`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            "session-token": authContext.session.token,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch vehicles");
        }
        const data = await response.json();
        setVehicules(data);
        setSelectedVehicule(data[0]?.matricule);
        setVehicule(data[0]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchVehicules();
  }, []);

  const handleSelection = (event, newValue) => {
    if (!newValue) return;
    setSelectedVehicule(newValue);
    const selected = vehicules.find((vehicule) => {
      return vehicule.matricule.toLowerCase().includes(newValue.split(" ")[0].toLowerCase());
    });
    setVehicule(selected);
  };

  const handleChange = (event) => {
    setCarburantType(event.target.value);
  };

  async function handleSubmit() {
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/rechargeCarburant`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "session-token": authContext.session.token,
        },
        body: JSON.stringify({
          chauffeur: chauffeur,
          vehicule: vehicule._id,
          type: carburantType,
          dateRecharge: rechargedate,
          km: km,
          montant: montant,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Recharge successful");
        console.log(data);

        // Update total montant in the backend
        await fetch(`${import.meta.env.VITE_BACKEND_URL}/updateTotalMontant`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            "session-token": authContext.session.token,
          },
          body: JSON.stringify({ montant: montant }),
        });
      } else {
        alert(`Failed to recharge: ${data.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to recharge");
    }
  }

  return (
    <Paper style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <Typography variant="subtitle1" align="center">
        Recharge de carburant
      </Typography>

      <Autocomplete
        sx={{ mb: 2 }}
        value={selectedVehicule}
        onChange={handleSelection}
        options={vehicules.map(
          (vehicule) => `${vehicule.matricule} ${vehicule.marque} ${vehicule.model}`
        )}
        renderInput={(params) => (
          <TextField {...params} label="Select vehicule" variant="outlined" />
        )}
      />
      <TextField
        value={chauffeur}
        onChange={(e) => setChauffeur(e.target.value)}
        label="Chauffeur"
        fullWidth
        variant="outlined"
        style={{ marginBottom: "10px" }}
      />
      <Box style={{ marginBottom: "10px" }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              sx={{ width: "100%" }}
              label="Date de recharge"
              value={rechargedate}
              onChange={(e) => setRechargedate(e)}
            />
          </DemoContainer>
        </LocalizationProvider>
      </Box>
      <TextField
        value={km}
        onChange={(e) => setKm(e.target.value)}
        label="Kilométrage"
        multiline
        rows={1}
        fullWidth
        variant="outlined"
        style={{ marginBottom: "10px" }}
      />
      <TextField
        value={montant}
        onChange={(e) => setMontant(e.target.value)}
        label="Montant"
        multiline
        rows={1}
        fullWidth
        variant="outlined"
        style={{ marginBottom: "10px" }}
      />
      <Select
        value={carburantType}
        onChange={handleChange}
        fullWidth
        label="Carburant Type"
      >
        <MenuItem value="">Select</MenuItem>
        {Object.values(CARB_TYPE).map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ margin: "auto" }}
        onClick={handleSubmit}
      >
        Soumettre
      </Button>
    </Paper>
  );
}
  