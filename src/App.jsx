

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { AuthProvider } from './context/authContext';
import { DashboardLayout } from './layout/dashboard-layout';
import { Login } from './pages/Login';
import { Home } from './pages/home';
import { EditUser } from './pages/addUser';
import { Vehicule } from './pages/vehicule'; 
import { Maintenance } from './pages/maintenance';
import { AllUsers } from './pages/allUsers';
import { AuthGuard } from './component/authgarde';
import { Carburant } from './pages/carburant';
import { AttribuerVehicule } from './pages/attributionVehicule';
import { FicheVehicule } from './pages/ficheVehicule';
import { ReparationGarage } from './pages/reparationGarage';
import { ControleTechnique } from './pages/controleTechnique';
import { AddChauffeur } from './pages/addChaffeur';
import { AllChauffeurs } from './pages/allChauffeurs';

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2556A2",
    },
    secondary: {
      main: "#00AA5B",
    },
    background: {
      default: "#f9f8ff",
    },
  },
  typography: {
    fontFamily: 'Rubik',
  },
});

function App() {
  return (
    <>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/app" element={ <AuthGuard><DashboardLayout /></AuthGuard>}>
              <Route path="dashboard" element={<Home />} />
              <Route path="users/:id" element={<EditUser />} />
              <Route path="users" element={<AllUsers />} />
              <Route path="vehicule" element={<Vehicule />} />
              <Route path="attribution" element={<AttribuerVehicule />} />  
              <Route path="ficheVehicule/:id" element={<FicheVehicule />} />  
             <Route path="ren/:type" element={<ControleTechnique />} /> 
             <Route path="maintenance" element={<Maintenance />} /> 
             <Route path="carburant" element={<Carburant />} />
             <Route path="reparationGarage" element={<ReparationGarage />} /> 
             <Route path="chauffeurs" element={<AllChauffeurs />} />
            <Route path="chauffeurs/:id" element={<AddChauffeur />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
