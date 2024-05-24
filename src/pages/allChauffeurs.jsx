import React, { useState, useEffect, useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Typography, Box, Button } from "@mui/material";
import { AuthContext } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";


export function AllChauffeurs({ onChauffeurCountChange }) {
  const [rows, setRows] = useState([]);
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();


  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/chauffeurs/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
            "session-token": authContext.session.token,
          },
        }
      );
      if (res.ok) {
        setRows(rows.filter((chauffeur) => chauffeur._id !== id));
        // Call the callback function to notify the count change
        onChauffeurCountChange(rows.length - 1);
      } else {
        console.log("Failed to delete chauffeur:", res.statusText);
      }
    } catch (error) {
      console.log("Error deleting user:", error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/chauffeurs`,
          {
            headers: {
              "Content-type": "application/json",
              "session-token": authContext.session.token,
            },
          }
        );


        if (!res.ok) {
          throw new Error(`Failed to fetch chauffeurs: ${res.statusText}`);
        }


        const data = await res.json();
        if (data.chauffeurs) {
          setRows(
            data.chauffeurs.map((chauffeur) => {
              return { ...chauffeur, id: chauffeur._id };
            })
          );
          // Call the callback function to notify the count change
          onChauffeurCountChange(data.chauffeurs.length);
        } else {
          console.error("No data received");
        }
      } catch (error) {
        console.error("Error fetching chauffeurs:", error);
      }
    };


    if (authContext.session) fetchData();
  }, [authContext.session]);

  const columns = [
    { field: "firstName", headerName: "NOM", width: 150, editable: false },
    { field: "lastName", headerName: "PRENOM", width: 150, editable: false },
    { field: "fonction", headerName: "FONCTION", width: 150, editable: false },
    {
      field: "action",
      headerName: "ACTIONS",
      maxwidth: 200,
      editable: false,
      sortable: false,
      renderCell: (params) => (
        <div>
          {/* <Button
            variant="contained"
            component={Link}
            to={`/app/chauffeurs/${params.id}`}
          >
            MODIFIER
          </Button> */}
          <Button
            variant="contained"
            color="error"
            onClick={() => handleDelete(params.id)}
          >
            SUPPRIMER
          </Button>
        </div>
      ),
    },
  ];
  return (
    <Box sx={{ padding: 4, boxSizing: "border-box" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="h4">CHAUFFEURS</Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/app/chauffeurs/new")}
        >
          AJOUTER
        </Button>
      </Box>
      <DataGrid rows={rows} columns={columns} pageSize={5} editMode="rows" />
    </Box>
  );
}
