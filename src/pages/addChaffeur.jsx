import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/authContext.jsx";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";


import Paper from "@mui/material/Paper";


export function AddChauffeur() {
  const authContext = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();


  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fonction, setFonction] = useState("");


  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/chauffeurs/${id}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            "session-token": authContext.session.token,
          },
        }
      );
      const data = await res.json();
      if (res.ok) {
        setfirstName(data.firstName);
        setLastName(data.lastName);
        setFonction(data.fonction);
      } else {
        alert(data.message);
      }
    }
    if (authContext.session && id != "new") {
      fetchData();
    }
  }, [id, authContext.session]);


  async function handleSubmit(e) {
    e.preventDefault();
    const url =
      id == "new"
        ? `${import.meta.env.VITE_BACKEND_URL}/chauffeurs`
        : `${import.meta.env.VITE_BACKEND_URL}/chauffeurs/${id}`;
    const res = await fetch(url, {
      method: id == "new" ? "POST" : "PUT",
      headers: {
        "Content-type": "application/json",
        "session-token": authContext.session.token,
      },
      body: JSON.stringify({
        firstName,
        lastName,
        fonction,
      }),
    });


    const data = await res.json();


    if (res.ok) {
      alert("success");
      console.log(data);
      navigate("/app/chauffeurs");
    } else {
      alert(`failed to add or modify chauffeur: ${data.message}`);
    }
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        minHeight: "100vh",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Typography variant="h4" align="center">
        AJOUTER CHAUFFEUR
      </Typography>


      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
          minWidth: 300,
          padding: 2,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxWidth: "100%",
          width: 460,
        }}
      >
        <TextField
          name="firstName"
          label="fistName"
          variant="outlined"
          fullWidth
          required
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
        />


        <TextField
          name="lastName"
          label="lastName"
          variant="outlined"
          fullWidth
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />


        <TextField
          name="fonction"
          label="function"
          variant="outlined"
          fullWidth
          required
          value={fonction}
          onChange={(e) => setFonction(e.target.value)}
        />


        <Button type="submit" variant="contained" color="primary" fullWidth>
          SAUVGARDER
        </Button>
      </Paper>
    </Box>
  );
}
