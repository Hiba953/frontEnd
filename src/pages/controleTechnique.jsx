// import React, { useContext, useEffect, useRef, useState } from "react";
// import {
//   Typography,
//   Paper,
//   TextField,
//   Button,
//   Box,
//   Autocomplete,
// } from "@mui/material";
// import SignatureCanvas from "react-signature-canvas";
// import { AuthContext } from "../context/authContext";
// import { Assurance } from "./assurance";
// import { ChaineDistribution } from "./chaineDistribution";
// import { useParams } from "react-router-dom";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// // relie a la facon quon va faie routing
// const EXPIRY_TYPE = {
//   assurance: "ASSURANCE",
//   controleTechnique: "CONTROLE_TECHNIQUE",
//   chaineDistribution: "CHAINE_DISTRIBUTION",
//   gpl: "GPL",
// };
// const EXPIRY_TITLE = {
//   assurance: "renouvellemnt d'assurance",
//   controleTechnique: "controle technique",
//   chaineDistribution: "renouvellemnt des chaines de distributions",
//   gpl: "controle gpl",
// };
// export function ControleTechnique() {
//     const[entrydate,setEntrydate]=useState('')
//     const[expirydate,setExpirydate]=useState('')

//   const [num, setNum] = useState("");
//   const[km,setKm]= useState("");
//   const[expiryKm,setExpiryKm]= useState("")
//   const[montant,setMontant]= useState("")
//   const { type } = useParams();
//   const title = EXPIRY_TITLE[type];
//   const authContext = useContext(AuthContext);
//   const [vehicules, setVehicules] = useState([]);
//   const [selectedVehicule, setSelectedVehicule] = useState([""]);
//   const [vehicule, setVehicule] = useState(null);
//   console.log(vehicule);
//   useEffect(() => {
//     async function fetchVehicules() {
//       try {
//         const response = await fetch(
//           `${import.meta.env.VITE_BACKEND_URL}/vehicule`,
//           {
//             method: "GET",
//             headers: {
//               "Content-type": "application/json",
//               "session-token": authContext.session.token,
//             },
//           }
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch vehicles");
//         }
//         const data = await response.json();
//         setVehicules(data);
//         setSelectedVehicule(data[0].matricule);
//       } catch (err) {
//         console.log(err);
//       }
//     }
//     fetchVehicules();
//   }, []);

//   const handleSelection = (event, newValue) => {
//     if(!newValue) 
//         return;
//     setSelectedVehicule(newValue);
//     const selected = vehicules.find((vehicule) => {
//       return vehicule.matricule
//         .toLowerCase()
//         .includes(newValue.split(" ")[0].toLowerCase());
//     });
//     setVehicule(selected);
//   };


  

//   return (
//     <Paper style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
//       <Typography variant="h5" align="center">
//         {vehicule?.service || ""}
//       </Typography>
//       <Typography variant="h6" align="center">
//         DEPARTEMENT PATRIMOINE ET MOYENS
//       </Typography>
//       <Typography variant="subtitle1" align="center">
//         SERVICE MOYENS GENEREAUX
//       </Typography>
//       <Typography
//         variant="subtitle2"
//         align="center"
//         style={{ marginBottom: "20px" }}
//       >
//         {title}{" "}
//       </Typography>
//       <Autocomplete

//         sx={{ mb: 2 }}
//         value={selectedVehicule}
//         onChange={handleSelection}
//         options={vehicules.map(
//           (vehicule) =>
//             `${vehicule.matricule} ${vehicule.marque} ${vehicule.model}  `
//         )}
//         renderInput={(params) => (
//           <TextField {...params} label="select vehicule" variant="outlined" />
//         )}
//       />
//       <TextField
//         value={num}
//         onChange={(e) => setNum(e.target.value)}
//         label="N°"
//         fullWidth
//         variant="outlined"
//         style={{ marginBottom: "10px" }}
//       />

//       <Box style={{ marginBottom: "10px" }}>
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//           <DemoContainer components={["DatePicker"]}>
//             <DatePicker sx={{ width: "100%" }}
//              label=" date dentree"
//             //  value={entrydate}
//             //  onChange={(e) => setEntrydate(e.target.value)}
//               />
//           </DemoContainer>
//         </LocalizationProvider>
//       </Box>
//       <TextField
//        value={km}
//        onChange={(e) => setKm(e.target.value)}
//         label="km"
//         multiline
//         rows={1}
//         fullWidth
//         variant="outlined"
//         style={{ marginBottom: "10px" }}
//       />
//       <Box style={{ marginBottom: "10px", width: "100%" }}>
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//           <DemoContainer components={["DatePicker"]}>
//             <DatePicker 
//             //  value={expirydate}
//             //  onChange={(e) => setExpirydate(e.target.value)} 
//              sx={{ width: "100%" }} label=" expiry date" />
//           </DemoContainer>
//         </LocalizationProvider>
//       </Box>

//       <TextField
//        value={expiryKm}
//        onChange={(e) => setExpiryKm(e.target.value)}
//         label="expiry km"
//         multiline
//         rows={1}
//         fullWidth
//         variant="outlined"
//         style={{ marginBottom: "10px" }}
//       />
//       <TextField
//        value={montant}
//        onChange={(e) => setMontant(e.target.value)}
//         label="montant"
//         multiline
//         rows={1}
//         fullWidth
//         variant="outlined"
//         style={{ marginBottom: "10px" }}
//       />

//       <Button
//         type="submit"
//         variant="contained"
//         color="primary"
//         sx={{ margin: "auto" }}
//       >
//         {" "}
//         soumettre{" "}
//       </Button>
//     </Paper>
//   );
// }







import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Typography,
  Paper,
  TextField,
  Button,
  Box,
  Autocomplete,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { Assurance } from "./assurance";
import { ChaineDistribution } from "./chaineDistribution";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from 'dayjs';
// relie a la facon quon va faie routing
const EXPIRY_TYPE = {
  assurance: "ASSURANCE",
  controleTechnique: "CONTROLE_TECHNIQUE",
  chaineDistribution: "CHAINE_DISTRIBUTION",
  gpl: "GPL",
};
const EXPIRY_TITLE = {
  assurance: "renouvellemnt d'assurance",
  controleTechnique: "controle technique",
  chaineDistribution: "renouvellemnt des chaines de distributions",
  gpl: "controle gpl",
};
export function ControleTechnique() {
    const[entrydate,setEntrydate]=useState(null)
    const[expirydate,setExpirydate]=useState(null)

  const [ref, setRef] = useState("");
  const[km,setKm]= useState("");
  const[expiryKm,setExpiryKm]= useState("")
  const[montant,setMontant]= useState("")
  const { type } = useParams();
  const navigate = useNavigate();
  const title = EXPIRY_TITLE[type];
  const authContext = useContext(AuthContext);
  const [vehicules, setVehicules] = useState([]);
  const [selectedVehicule, setSelectedVehicule] = useState([""]);
  const [vehicule, setVehicule] = useState(null);
  console.log(vehicule);
  useEffect(() => {
    async function fetchVehicules() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/vehicule`,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              "session-token": authContext.session.token,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch vehicles");
        }
        const data = await response.json();
        setVehicules(data);
        setSelectedVehicule(data[0].matricule);
        setVehicule(data[0]);
      } catch (e) {
        console.log(e);
      }
    }
    fetchVehicules();
  }, []);


  const handleSelection = (event, newValue) => {
    if(!newValue) 
        return;
    setSelectedVehicule(newValue);
    const selected = vehicules.find((vehicule) => {
      return vehicule.matricule
        .toLowerCase()
        .includes(newValue.split(" ")[0].toLowerCase());
    });
    setVehicule(selected);
  };
  async function handleSubmit() {
    
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/expiries`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "session-token": authContext.session.token,
        },
        body: JSON.stringify({
          vehicule: vehicule._id,
          ref: ref,
          entryDate: entrydate,
          km: km,
          expiryDate: expirydate,
          expiryKm: expiryKm,
          montant: montant,
          type:EXPIRY_TYPE[type], 
        }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("added successfully");
        console.log(data);
          navigate("/app/ficheVehicule/"+vehicule._id)
      } else {
        alert(`failed to fill the form: ${data.message}`);      }
    
  }

  return (
    <Paper style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <Typography variant="h5" align="center">
        {vehicule?.service || ""}
      </Typography>
      <Typography variant="h6" align="center">
        DEPARTEMENT PATRIMOINE ET MOYENS
      </Typography>
      <Typography variant="subtitle1" align="center">
        SERVICE MOYENS GENEREAUX
      </Typography>
      <Typography
        variant="subtitle2"
        align="center"
        style={{ marginBottom: "20px" }}
      >
        {title}{" "}
      </Typography>
      <Autocomplete

        sx={{ mb: 2 }}
        value={selectedVehicule}
        onChange={handleSelection}
        options={vehicules.map(
          (vehicule) =>
            `${vehicule.matricule} ${vehicule.marque} ${vehicule.model}  `
        )}
        renderInput={(params) => (
          <TextField {...params} label="select vehicule" variant="outlined" />
        )}
      />
      <TextField
        value={ref}
        onChange={(e) => setRef(e.target.value)}
        label="N°"
        fullWidth
        variant="outlined"
        style={{ marginBottom: "10px" }}
      />

      <Box style={{ marginBottom: "10px" }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker sx={{ width: "100%" }}
             label=" date dentree"

             value={entrydate}
             onChange={(e) => setEntrydate(e)}
              />
          </DemoContainer>
        </LocalizationProvider>
      </Box>
      <TextField
       value={km}
       onChange={(e) => setKm(e.target.value)}
        label="km"
        multiline
        rows={1}
        fullWidth
        variant="outlined"
        style={{ marginBottom: "10px" }}
      />
      <Box style={{ marginBottom: "10px", width: "100%" }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker 
         
             value={expirydate}
             onChange={(e) => setExpirydate (e)} 
             sx={{ width: "100%" }} label=" expiry date" />
          </DemoContainer>
        </LocalizationProvider>
      </Box>

      <TextField
       value={expiryKm}
       onChange={(e) => setExpiryKm(e.target.value)}
        label="expiry km"
        multiline
        rows={1}
        fullWidth
        variant="outlined"
        style={{ marginBottom: "10px" }}
      />
      <TextField
       value={montant}
       onChange={(e) => setMontant(e.target.value)}
        label="montant"
        multiline
        rows={1}
        fullWidth
        variant="outlined"
        style={{ marginBottom: "10px" }}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ margin: "auto" }}
        onClick={handleSubmit}
      >
        {" "}
        soumettre{" "}
      </Button>
    </Paper>
  );
}