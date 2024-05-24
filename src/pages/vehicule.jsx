
// import React, { useContext, useEffect, useState } from "react";
// import { Box, Typography, Button, Autocomplete, TextField } from "@mui/material";
// import { DataGrid } from '@mui/x-data-grid';
// import { AuthContext } from "../context/authContext.jsx";
// import { useNavigate } from "react-router-dom";

// export function Vehicule() {
//   const [vehicules, setVehicules] = useState([]);
//   const [filteredVehicules, setFilteredVehicules] = useState([]);
//   const [searchValue, setSearchValue] = useState('');
//   const authContext = useContext(AuthContext);
//   const navigate= useNavigate()

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
//         // pour rendre matriule howa id 
//         const rows = data.map((vehicule, index) => ({
//           ...vehicule,
//           id: vehicule.matricule || index,
//         }));
//         setVehicules(rows);
//         setFilteredVehicules(rows); 
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     fetchVehicules();
//   }, [authContext.session.token]);

//   const handleSearchChange = (event, newValue) => {
//     setSearchValue(newValue);
//     // Filter vehicles based on search value
//     const filtered = vehicules.filter(vehicule => {
//       return vehicule.matricule.toLowerCase().includes(newValue.toLowerCase());
//     });
//     setFilteredVehicules(filtered);
//   };

//   // fiche button
//   const columns = [
//     {
//       field: "matricule",
//       headerName: "Matricule",
//       width: 200,
//       renderCell: (params) => (
//         <Box display="flex" alignItems="center">
//           <Typography>{params.value}</Typography> {/* afficher matricule */}
//           <Button
//             variant="contained"
//             size="small"
//             style={{ marginLeft: 16 }}
//             tabIndex={params.hasFocus ? 0 : -1}
//             onClick={() => handleButtonClick(params.row)}
//           >
//             fiche
//           </Button>
//         </Box>
//       ),
//     },
//     { field: "service", headerName: "Service", width: 150 },
//     { field: "marque", headerName: "Marque", width: 100 },
//     { field: "model", headerName: "Model", width: 100 },
//     { field: "carburant", headerName: "Carburant", width: 100 },
//   ];


//   const handleButtonClick = (row) => {
//     navigate("/app/ficheVehicule/"+row._id) 
//     console.log("button clicke:", row);
//   };

//   return (
//     <div>
//       <Box marginBottom={2}>
//         <Autocomplete
//           value={searchValue}
//           onChange={handleSearchChange}
//           options={vehicules.map((vehicule) => vehicule.matricule)}
//           renderInput={(params) => (
//             <TextField
//               {...params}
//               label="Search Matricule"
//               variant="outlined"
//             />
//           )}
//         />
//       </Box>
//       <div style={{ height: 500, width: "70%" }}>
//         <DataGrid
//           rows={filteredVehicules}
//           columns={columns}
//           pageSize={5}
//           checkboxSelection
//           getRowId={(row) => row.id} 
//         />
//       </div>
//     </div>
//   );
// }

import React, { useContext, useEffect, useState } from "react";
import { Box, Typography, Button, Autocomplete, TextField } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { AuthContext } from "../context/authContext.jsx";
import { useNavigate } from "react-router-dom";

export function Vehicule() {
  const [vehicules, setVehicules] = useState([]);
  const [filteredVehicules, setFilteredVehicules] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

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
        const rows = data.map((vehicule, index) => ({
          ...vehicule,
          id: vehicule.matricule || index,
        }));
        setVehicules(rows);
        setFilteredVehicules(rows);
      } catch (error) {
        console.log(error);
      }
    }
    fetchVehicules();
  }, [authContext.session.token]);

  const handleSearchChange = (event, newValue) => {
    setSearchValue(newValue);
    const filtered = vehicules.filter(vehicule => {
      return vehicule.matricule.toLowerCase().includes(newValue.toLowerCase());
    });
    setFilteredVehicules(filtered);
  };

  const handleButtonClick = (event, row) => {
    event.stopPropagation(); 
    navigate("/app/ficheVehicule/" + row._id);
    console.log("button clicked:", row);
  };

  const columns = [
    {
      field: "matricule",
      headerName: "Matricule",
      width: 200,
      renderCell: (params) => (
        <Box display="flex" alignItems="center">
          <Typography>{params.value}</Typography>
          <Button
            variant="contained"
            size="small"
            style={{ marginLeft: 16 }}
            tabIndex={params.hasFocus ? 0 : -1}
            onClick={(event) => handleButtonClick(event, params.row)}
          >
            fiche
          </Button>
        </Box>
      ),
    },
    { field: "service", headerName: "Service", width: 150 },
    { field: "marque", headerName: "Marque", width: 100 },
    { field: "model", headerName: "Model", width: 100 },
    { field: "carburant", headerName: "Carburant", width: 100 },
  ];

  return (
    <div>
      <Box marginBottom={2}>
        <Autocomplete
          value={searchValue}
          onChange={handleSearchChange}
          options={vehicules.map((vehicule) => vehicule.matricule)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search Matricule"
              variant="outlined"
            />
          )}
        />
      </Box>
      <div style={{ height: 500, width: "90%" }}>
        <DataGrid
          rows={filteredVehicules}
          columns={columns}
          pageSize={5}
          checkboxSelection
          getRowId={(row) => row.id}
        />
      </div>
    </div>
  );
}
