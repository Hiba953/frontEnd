// import {useParams} from 'react-router-dom'
// import React, { useContext, useEffect, useState } from "react";

// import { AuthContext } from "../context/authContext.jsx";

// export  function FicheVehicule() {
//   const{id}=useParams()
//   const [vehicule, setVehicule] = useState(null);
//   const authContext = useContext(AuthContext);

//   useEffect(() => {
//     async function fetchVehicules() {
//       try {
//         const response = await fetch(
//           `${import.meta.env.VITE_BACKEND_URL}/vehicule/${id}`,
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
        
//         setVehicule(data);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     fetchVehicules();
//   }, [authContext.session.token,id]);
//   return (

// <div>vehiculeFiche{JSON.stringify(vehicule)} </div>
//   )
// }


import { useParams } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { Typography, Paper, Box } from '@material-ui/core';

import { AuthContext } from '../context/authContext.jsx';

export function FicheVehicule() {
  const { id } = useParams();
  const [vehicule, setVehicule] = useState(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    async function fetchVehicules() {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/vehicule/${id}`, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            'session-token': authContext.session.token,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch vehicles');
        }
        const data = await response.json();

        setVehicule(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchVehicules();
  }, [authContext.session.token, id]);

  return (
    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
      <Paper style={{ margin: '20px', padding: '0px', maxWidth: '250px' }}>
        <Typography variant="h1" style={{ fontSize: '24px', marginBottom: '16px' }}>
          Vehicule Fiche
        </Typography>
        {/* // <div>vehiculeFiche{JSON.stringify(vehicule)} </div> */}

        <div style={{ fontSize: '16px', lineHeight: '1.5', color: '#333', marginTop: '16px' }}>
          {vehicule && (
            <>
              <div>Service: {vehicule.service}</div>
              <div>Marque: {vehicule.marque}</div>
              <div>Model: {vehicule.model}</div>
              <div>Matricule: {vehicule.matricule}</div>
              <div>Carburant: {vehicule.carburant}</div>
              <div>Kilometrage: {vehicule.km}</div>
              <div>Etat: {vehicule.etat}</div>
              <div>Quota: {vehicule.quota}</div>
            </>
          )}
        </div>
      </Paper>
    </Box>
  );
}
