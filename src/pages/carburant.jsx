
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
  