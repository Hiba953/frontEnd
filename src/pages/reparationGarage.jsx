import React, { useContext, useEffect, useState } from "react";
import {
  Typography,
  Paper,
  TextField,
  Button,
  Box,
  Autocomplete,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export function ReparationGarage() {
  const [piece, setPiece] = useState("");
  const [entryDate, setEntryDate] = useState(null);
  const [exitDate, setExitDate] = useState(null);
  const [panneDeclaree, setPanneDeclaree] = useState("");
  const [panneReparee, setPanneReparee] = useState("");
  const [montant, setMontant] = useState("");
  const [selectedVehicule, setSelectedVehicule] = useState(null);
  const [vehicules, setVehicules] = useState([]);
  const [selectedPieces, setSelectedPieces] = useState([]); // New state to store selected pieces and their amounts
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

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
        setSelectedVehicule(data[0] || null);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    }
    fetchVehicules();
  }, []);

  const handleSelection = (event, newValue) => {
    setSelectedVehicule(newValue);
  };

  const handlePieceSelection = (event, newValue) => {
    if (newValue) {
        let pieceExists = false;
        selectedPieces.forEach(selectedPiece => {
            if (selectedPiece.piece == newValue) {
                pieceExists = true;
            }
        });

        if (!pieceExists) {
            setSelectedPieces([...selectedPieces, { piece: newValue, amount: 0 }]);
        }
    }
    setPiece(newValue);
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/reparationGarage`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            "session-token": authContext.session.token,
          },
          body: JSON.stringify({
            vehicule: selectedVehicule?._id || "",
            pieces: selectedPieces, 
            entryDate,
            exitDate,
            panneDeclaree,
            panneReparee,
            montant,
            repairDate: new Date(),
          }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        alert("Reparation added successfully");
        navigate("/");
      } else {
        alert(`Failed to add reparation: ${data.message}`);
      }
    } catch (error) {
      console.error("Error adding reparation:", error);
      alert("Failed to add reparation. Please try again later.");
    }
  };

  const pieces = [
    "Plaquette de frein AV", "Disque de frein AV",
    "Ferodo frein AR", "Tombour AR", "Flexible de frein",
    "Etrier de frein AV", "Câble de frein", "Liquide de frein",
    "Maitre-cylindre", "Bloc ABS", "Bras de frein a main",
    "Cerveau de frein", "Moteur Essuie glace ",
    "Comodo ", "Nemane", "boite fusible BSM", "boite fusible BSI",
    "bougies d'allumage", "capteur de cliquetis",
    "Capteur de position du papillon.", "Capteur PMH",
    "Capteur position d’arbre à cames.", "Flotteur",
    "Sonde lambda", "Sonde de température de liquide de refroidissement",
    "Faisceau d’allumage", "Ventilateur", "Sonde de pression d’huile",
    "Mano d'huile", "Demarreur ", "Alternateur", "Pompe carburant ",
    "Double clé ", "Kit mémoire", "Essuie glace",
    "Monte glace", "Serrure de porte ", "Batterie",
    "Scanner voiture", "\"Appareil de commande,gestion moteur\"",
    "Débimétre", "Circuit électrique du moteur",
    "Electricité générale", "Filtre à air", "Filtre à Gasoil",
    "Filtre à huile", "Huile moteur", "Bouchon vidange",
    "Kit de distribution", "Pompe à eau", "Courroie Alternateur",
    "Poulie tendeur de courroie d’accessoire",
    "Culasse complete", "Joint de culasse", "Injecteur",
    "Rampe injecteur", "Port support moteur", "Pompe d'injection",
    "Circuit  tuyau Gasoil", "Mano Pression Gasoil",
    "Soupape d’admission", "Soupape d’échappement",
    "Guide de soupape/jointéglage", "Joint collecteur d’admission",
    "Boitier papillon", "Arbre à cames", "Pignon arbre a came",
    "Pompe a vide ", "Pipe a thermostat", "Pipe d'eau",
    "Vase d'eau", "Radiateur d'eau", "Radiateur chauffage",
    "Bouchon liquide refroidissement", "Durite de refroidissement",
    "poussoir d'eau", "Glaciol", "Vilebrequin", "pignon vilebrequin",
    "Coussinet de vilebrequin", "Joint spi de vilebrequin",
    "Coussinet de bielle", "Pompe a lhuile ", "Carter d’huile",
    "Refroidisseur d'huile ", "jauge d'huile ",
    "Jeu de joints d’étanchéité carter de vilebrequin",
    "Piston", "Segments de pistons", "Bloc moteur complet",
    "Poulie damper", "Kit embrayage", "Volant moteur ",
    "Guide butée", "Fourchette embrayage ", "Cable levier  vitesse",
    "Boite a vitesse", "Huile boite a vitesse",
    "Support de boite a vitesse", "Port support boite",
    "Support moteur", "Support huit", "moteur clim",
    "Filtre a polen (clim)", "Gaz clim", "Circuit flixsible clim",
    "Radiateur clim", "Echappement AR ", "Ligne echappement ",
    "Joints de collecteur d’échappement", "Catalyseur",
    "Nettoyage block", "Roulement de roues", "Biellette de barre stabilisatrice",
    "Bars de suspension", "Rotule de direction",
    "Rotule de suspension", "Moyeu de roue", "Amortisseurs AV",
    "Tasseau amortisseur ", "Roulement amortisseur ",
    "Ressort d’amortisseur", "Triangle", "Cremaillére",
    "Lambo Cremaillére", "Flexible assiste", "Croisillon",
    "Soufflet de Cremaillere", "Berceau", "Faux berceau",
    "Fusée", "Cardon", "Monchon Cardon", "Amartisseur AR",
    "Essieu AR", "Jambe Essieu AR", "Géométrie des trains roulants.",
    "Optique anti brouillard", "Support anti brouillard",
    "Armature AV", "traverse AV", "Support par choc ",
    "Tirette capot", "Sigle", "Spoiler par choc",
    "Capot", "aile ", "Par choc AV simple", "Par choc avec peinture ",
    "par choc AR", "Calandre", "Grue par choc ", "Phare AV",
    "Feu AR", "Lampe phare", "Port lampe AR", "Porte AV droite",
    "Porte AV gauche", "Porte l'atérale droite",
    "Porte l'atérale gauche", "Porte AR droite",
    "Port AR gauche", "Cache poussiere AV", "cache poussiere AR",
    "Passage au marbre", "Air Bag volant", "Air Bag passager",
    "Bouteille lave glace", "Moteur lave glace ",
    "Serrure capot", "Poigne exterieur", "Poignet interieur ",
    "Rétroviseur ", "Pare brise AV", "Lunette AR",
    "Vitre AV", "Vitre AR", "Jante en fer", "Jante en alliage",
    "Lustrages", "Carrousserie ", "Lavage Auto", "Dépannage Auto"

  ]
  
  return (
    <Paper style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <Typography variant="h4" align="center">
        Reparation Garage
      </Typography>
      <form onSubmit={handleSubmit}>
        <Autocomplete
          value={selectedVehicule}
          onChange={handleSelection}
          options={vehicules}
          getOptionLabel={(option) => option.matricule}
          renderInput={(params) => (
            <TextField {...params} label="Select Vehicle" variant="outlined" />
          )}
          style={{ marginBottom: "20px" }}
        />

        <Box style={{ marginBottom: "20px" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Entry Date"
                value={entryDate}
                onChange={(date) => setEntryDate(date)}
                renderInput={(props) => (
                  <TextField {...props} variant="outlined" fullWidth />
                )}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Box>
        <Box style={{ marginBottom: "20px" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Exit Date"
                value={exitDate}
                onChange={(date) => setExitDate(date)}
                renderInput={(props) => (
                  <TextField {...props} variant="outlined" fullWidth />
                )}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Box>
        <TextField
          value={panneDeclaree}
          onChange={(e) => setPanneDeclaree(e.target.value)}
          label="Panne Declaree"
          fullWidth
          variant="outlined"
          style={{ marginBottom: "20px" }}
        />
        <TextField
          value={panneReparee}
          onChange={(e) => setPanneReparee(e.target.value)}
          label="Panne Reparee"
          fullWidth
          variant="outlined"
          style={{ marginBottom: "20px" }}
        />

        <Autocomplete
          value={piece}
          onChange={handlePieceSelection}
          options={pieces}
          renderInput={(params) => (
            <TextField {...params} label="Piece" variant="outlined" />
          )}
          style={{ marginBottom: "20px" }}
        />

        <ul>
          {selectedPieces.map((selectedPiece, index) => (
            <li key={index}>
              {selectedPiece.piece}
              <TextField

                label="Montant"
                variant="outlined"
                style={{ marginLeft: '10px', width: '100px' }} 
              />
               {/* <TextField
               
                label="quantite"
                variant="outlined"
                style={{ marginLeft: '10px', width: '100px' }} 
              /> */}
            </li>
          ))}
        </ul>

        <TextField
          value={montant}
          onChange={(e) => setMontant(e.target.value)}
          label="Montant"
          fullWidth
          variant="outlined"
          required
          style={{ marginBottom: "20px" }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </Paper>
  );

}
