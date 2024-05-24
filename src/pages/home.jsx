
import React, { useState, useEffect, useContext } from "react";
import { Typography, Box, Paper, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Grid } from "@mui/material";
import { PieChart, Pie, Cell } from 'recharts';
import { AuthContext } from "../context/authContext";
import { Navigate, useNavigate ,Link} from "react-router-dom";
import { AllChauffeurs } from "./allChauffeurs";

export function Home() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [transactionData, setTransactionData] = useState({});
  const [vehicleData, setVehicleData] = useState({});
  const [driverData, setDriverData] = useState({});
  const [alertData, setAlertData] = useState({});
  const [carburantTotal, setCarburantTotal] = useState(0);
  const [chauffeurCount, setChauffeurCount] = useState(0);

  useEffect(() => {
    fetchData('/users', setUserData);
    fetchData('/transactions', setTransactionData);
    fetchData('/vehicles', setVehicleData);
    fetchData('/drivers', setDriverData);
    fetchData('/alerts', setAlertData);
    fetchCarburantTotal();
    fetchChauffeurCount();
  }, []);

  const fetchData = (endpoint, setData) => {
    fetch(endpoint)
      .then(response => response.json())
      .then(data => setData(data));
  };

  const fetchCarburantTotal = () => {
    fetch('/carburantTotal')
      .then(response => response.json())
      .then(data => setCarburantTotal(data.totalMontant));
  };

  const fetchChauffeurCount = () => {
    fetch('/chauffeurs/count')
      .then(response => response.json())
      .then(data => setChauffeurCount(data.totalChauffeurs));
  };

  if (!authContext.user || Date.now() > new Date(authContext.session?.validUntil).getTime()) {
    authContext.setAuth(null, null);
    return <Navigate to="/" />;
  }

  const renderRectangularStatistic = (value, label, color, onClick) => {
    return (
      <Paper
        onClick={onClick}
        sx={{
          width: "100%",
          height: "150px",
          backgroundColor: color,
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          padding: "20px",
          cursor: "pointer",
        }}
      >
        <Typography variant="h6">{label}</Typography>
        <Typography variant="h5">{value}</Typography>
      </Paper>
    );
  };

  const pieChartData = [
    { name: 'Carburant', value: 35 },
    { name: 'Maintenance', value: 40 },
    { name: 'GPL', value: 5 },
    { name: 'Contrôle Technique', value: 20 },
  ];

  const tableData = [
    { id: 1, category: 'Carburant', amount: `${carburantTotal} DA` },
    { id: 2, category: 'Gpl', amount: '13431323 DA' },
    { id: 3, category: 'Assurances', amount: '76445345 DA' },
    { id: 4, category: 'Chaine Distribution', amount: '2542444 DA' },
    { id: 5, category: 'Controle Technique', amount: '254894 DA' },
    { id: 6, category: 'Reparation', amount: '254476894 DA' },
  ];

  // Function to update chauffeur count
  const handleChauffeurCountChange = (count) => {
    setChauffeurCount(count);
  };

  return (
    <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#f0f0f0",
      padding: "20px",
    }}
  >
      <Grid container spacing={2} sx={{ width: "100%", maxWidth: "1200px" }}>
        <Grid item xs={12} sm={6} md={3}>
          {renderRectangularStatistic(vehicleData.panneCount, "Véhicules en Panne", "#1976d2", () => navigate('/VehiculesEnPanne'))}
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          {renderRectangularStatistic(alertData.count, "Alertes", "#d32f2f", () => navigate('/alertes'))}
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          {renderRectangularStatistic(chauffeurCount, "Chauffeurs", "#ffb300", () => navigate('/app/chauffeurs'))}
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          {renderRectangularStatistic(transactionData.totalSpent, "Dépenses Totales", "#388e3c", () => navigate('/depenses'))}
        </Grid>

        <Grid item xs={12} md={6}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Catégorie</TableCell>
                  <TableCell align="right">Dépense</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.category}
                    </TableCell>
                    <TableCell align="right">{row.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
            <PieChart width={400} height={400}>
              <Pie
                data={pieChartData}
                cx={200}
                cy={200}
                outerRadius={120}
                fill="#8884d8"
                label
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={['#0088FE', '#00C49F', '#FFBB28', '#FF8042'][index % 4]} />
                ))}
              </Pie>
            </PieChart>
          </Box>
        </Grid>
      </Grid>

      
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
      <AllChauffeurs onChauffeurCountChange={handleChauffeurCountChange} />
      
      
    </Box>
  );
}
