
// import {
//   AppBar,
//   Box,
//   IconButton,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
// } from "@mui/material";
// import { Outlet, useLocation, useNavigate } from "react-router-dom";
// import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
// import Avatar from "@mui/material/Avatar";
// import Badge from "@mui/material/Badge";
// import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
// import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
// import { useState, useEffect } from "react";
// import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
// import DirectionsCarRoundedIcon from '@mui/icons-material/DirectionsCarRounded';
// import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';

// const MENUS = [
//   {
//     label: "Dashboard",
//     url: "/app/dashboard",
//     icon: <DashboardRoundedIcon></DashboardRoundedIcon>
//   },
//   {
//     label: "Utilisateurs",
//     url: "/app/users",
//     icon: <PeopleRoundedIcon></PeopleRoundedIcon>
//   },
//   {
//     label: "vehicule",
//     url: "/app/vehicule",
//     icon:<DirectionsCarRoundedIcon></DirectionsCarRoundedIcon>
//   },
//   {
//     label: "demandeVehicule",
//     url: "/app/demande",
//     icon:<DirectionsCarRoundedIcon></DirectionsCarRoundedIcon>
//   },
//   {
//     label: " maintencance",
//     url: "/app/maintenance",
//     icon:<DirectionsCarRoundedIcon></DirectionsCarRoundedIcon>
//   },
//   {
//     label: " ficheVehicule",
//     url: "/app/ficheVehicule",
//     icon:<DirectionsCarRoundedIcon></DirectionsCarRoundedIcon>
//   },
// ];

// export const DashboardLayout = () => {
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const handleBeforePrint = () => {
//       setOpen(false); // Close the sidebar before printing
//     };

//     window.onbeforeprint = handleBeforePrint;

//     return () => {
//       window.onbeforeprint = null; // Clean up the event listener
//     };
//   }, []);

//   return (
//     <>
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar color="background" elevation={1} position="relative">
//           <Box
//             sx={{
//               py: "8px",
//               px: "32px",
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//             }}
//           >
//             <IconButton
//               onClick={() => setOpen(!open)}
//               size="large"
//               color="inherit"
//               sx={{
//                 border: "1px solid #3332",
//                 borderRadius: 4,
//               }}
//             >
//               <MenuRoundedIcon sx={{ fontsize: 32 }} color="action" />
//             </IconButton>
//             <img src="/logo.svg" alt="logo" height={48} />
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 1,
//               }}
//             >
//               <IconButton
//                 size="large"
//                 color="inherit"
//                 sx={{
//                   border: "1px solid #3332",
//                   borderRadius: 4,
//                 }}
//               >
//                 <Badge badgeContent={4} color="primary">
//                   <NotificationsRoundedIcon color="action"></NotificationsRoundedIcon>
//                 </Badge>
//               </IconButton>
//               <IconButton
//                 size="large"
//                 color="inherit"
//                 sx={{
//                   border: "1px solid #3332",
//                   borderRadius: 4,
//                 }}
//               >
//                 <AccountCircleRoundedIcon color="action"></AccountCircleRoundedIcon>
//               </IconButton>
//             </Box>
//           </Box>
//         </AppBar>
//       </Box>
//       <Box sx={{ display: "flex" }}>
//         {/*side bar*/}
//         <Box
//           sx={{
//             bgcolor: (theme) => theme.palette.background.paper,
//             borderRight: "1px solid #3332",
//             height: "100vh",
//             width: open ? 240 : 0,
//             transition: "all 0.3s ease",
//             overflow: "hidden",
//           }}
//         >
//           {MENUS.map((m) => {
//             return (
//               <ListItem key={m.label} disablePadding
//               sx={{bgcolor: location.pathname.startsWith(m.url)? "#3332" : ""}}>
//                 <ListItemButton 
//                 onClick={()=>{
//                     navigate(m.url)
//                 }}>
//                   <ListItemIcon>
//                    {m.icon}
//                   </ListItemIcon>
//                   <ListItemText primary={m.label} />
//                 </ListItemButton>
//               </ListItem>
//             );
//           })}
//         </Box>

//         <Box
//           sx={{
//             // bgcolor: "blue",
//             flexGrow: 1,
//           }}
//         >
//           <Outlet />
//         </Box>
//       </Box>
//     </>
//   );
// };



import {
  AppBar,
  Box,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import { useState, useEffect } from "react";
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import DirectionsCarRoundedIcon from '@mui/icons-material/DirectionsCarRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';

const MENUS = [
  {
    label: "Dashboard",
    url: "/app/dashboard",
    icon: <DashboardRoundedIcon></DashboardRoundedIcon>
  },
  {
    label: "Utilisateurs",
    url: "/app/users",
    icon: <PeopleRoundedIcon></PeopleRoundedIcon>
  },
  {
    label: "vehicule",
    url: "/app/vehicule",
    icon:<DirectionsCarRoundedIcon></DirectionsCarRoundedIcon>
  },
  {
    label: "Attribution Vehicule",
    url: "/app/attribution",
    icon:<DirectionsCarRoundedIcon></DirectionsCarRoundedIcon>
  },
  {
    label: " Chauffeurs",
    url: "/app/chauffeurs",
    icon: <DirectionsCarRoundedIcon></DirectionsCarRoundedIcon>,
  },

  {
    label: " Maintencance",
    url: "/app/maintenance",
    icon:<DirectionsCarRoundedIcon></DirectionsCarRoundedIcon>
  },
  {
    label: " Fiche Vehicule",
    url: "/app/ficheVehicule",
    icon:<DirectionsCarRoundedIcon></DirectionsCarRoundedIcon>
  },
  {
    label: " Recharge Carburant",
    url: "/app/carburant",
    icon:<DirectionsCarRoundedIcon></DirectionsCarRoundedIcon>
  },
  {
    label: " Reparation Garage",
    url: "/app/reparationGarage",
    icon:<DirectionsCarRoundedIcon></DirectionsCarRoundedIcon>
  },
];
export const DashboardLayout = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    const handleBeforePrint = () => {
      setOpen(false); // Close the sidebar before printing
    };


    window.onbeforeprint = handleBeforePrint;


    return () => {
      window.onbeforeprint = null; // Clean up the event listener
    };
  }, []);


  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar color="background" elevation={1} position="fixed">
          <Box
            sx={{
              py: "8px",
              px: "32px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IconButton
              onClick={() => setOpen(!open)}
              size="large"
              color="inherit"
              sx={{
                border: "1px solid #3332",
                borderRadius: 4,
              }}
            >
              <MenuRoundedIcon sx={{ fontsize: 32 }} color="action" />
            </IconButton>
            <img src="/logo.svg" alt="logo" height={48} />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <IconButton
                size="large"
                color="inherit"
                sx={{
                  border: "1px solid #3332",
                  borderRadius: 4,
                }}
              >
                <Badge badgeContent={4} color="primary">
                  <NotificationsRoundedIcon color="action"></NotificationsRoundedIcon>
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                color="inherit"
                sx={{
                  border: "1px solid #3332",
                  borderRadius: 4,
                }}
              >
                <AccountCircleRoundedIcon color="action"></AccountCircleRoundedIcon>
              </IconButton>
            </Box>
          </Box>
        </AppBar>
      </Box>
      <Box sx={{ display: "flex" ,paddingTop: '64px', flexGrow: 1 }}>
        {/*side bar*/}
        <Box
          sx={{
            bgcolor: (theme) => theme.palette.background.paper,
            borderRight: "1px solid #3332",
            height: "100vh",
            width: open ? 240 : 0,
            transition: "all 0.3s ease",
            overflow: "hidden",
          }}
        >
          {MENUS.map((m) => {
            return (
              <ListItem key={m.label} disablePadding
              sx={{bgcolor: location.pathname.startsWith(m.url)? "#3332" : ""}}>
                <ListItemButton
                onClick={()=>{
                    navigate(m.url)
                }}>
                  <ListItemIcon>
                   {m.icon}
                  </ListItemIcon>
                  <ListItemText primary={m.label} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </Box>


        <Box
          sx={{
            // bgcolor: "blue",
            flexGrow: 1,
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
};




