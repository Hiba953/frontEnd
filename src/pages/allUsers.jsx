

// import React, { useState, useEffect, useContext } from "react";
// import { DataGrid } from "@mui/x-data-grid";
// import { Typography, Box, Button } from "@mui/material";
// import { AuthContext } from "../context/authContext";
// import { Link, useNavigate } from "react-router-dom";

// export function AllUsers() {
//   const [rows, setRows] = useState([]);
//   const authContext = useContext(AuthContext);
//   const navigate = useNavigate();

//   // Function to handle deletion of a user
//   const handleDeleteUser = async (id) => {
//     try {
//       const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users/${id}`, {
//         method: "DELETE",
//         headers: {
//           "Content-type": "application/json",
//           "session-token": authContext.session.token,
//         },
//       });
//       if (res.ok) {
//         // Remove the deleted user from the rows state
//         setRows(rows.filter((user) => user.id !== id));
//       } else {
//         console.log("Failed to delete user:", res.statusText);
//       }
//     } catch (error) {
//       console.log("Error deleting user:", error);
//     }
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users`, {
//           headers: {
//             "Content-type": "application/json",
//             "session-token": authContext.session.token,
//           },
//         });
    
//         if (!res.ok) {
//           throw new Error(`Failed to fetch users: ${res.statusText}`);
//         }
    
//         const data = await res.json();
//         // Check if data.users is defined before mapping over it
//         if (data.users) {
//           setRows(
//             data.users.map((user) => {
//               return { ...user, createdBy: user.createdBy?.username };
//             })
//           );
//         } else {
//           console.error("No users data received");
//         }
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };
    

//     if (authContext.session) fetchData();
//   }, [authContext.session]);

//   const columns = [
//     { field: "username", headerName: "NOM D'UTILISATEUR", width: 150, editable: false },
//     { field: "role", headerName: "ROLE", width: 150, editable: false },
//     { field: "title", headerName: "TITRE", width: 150, editable: false },
//     { field: "createdBy", headerName: "AJOUTEE PAR", width: 150, editable: false },
//     {
//       field: "action",
//       headerName: "ACTIONS",
//       width: 200,
//       editable: false,
//       sortable: false,
//       renderCell: (params) => (
//         <div>
//           <Button
//             variant="contained"
//             component={Link}
//             to={`/app/users/${params.id}`}
//           >
//             MODIFIER
//           </Button>
//           <Button
//             variant="contained"
//             color="error"
//             onClick={() => handleDeleteUser(params.id)}
//           >
//             SUPPRIMER
//           </Button>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <Box sx={{ padding: 4, boxSizing: "border-box" }}>
//       <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
//         <Typography variant="h4">UTILISATEUR</Typography>
//         <Button
//           variant="contained"
//           onClick={() => navigate("/app/users/new")}
//         >
//           ADD USER
//         </Button>
//       </Box>
//       <DataGrid rows={rows} columns={columns} pageSize={5} editMode="rows" />
//     </Box>
//   );
// }



import React, { useState, useEffect, useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Typography, Box, Button } from "@mui/material";
import { AuthContext } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";

export function AllUsers() {
  const [rows, setRows] = useState([]);
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const handleDeleteUser = async (id) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          "session-token": authContext.session.token,
        },
      });
      if (res.ok) {
        // Remove user m row
        setRows(rows.filter((user) => user.id !== id));
      } else {
        console.log("Failed to delete user:", res.statusText);
      }
    } catch (error) {
      console.log("Error deleting user:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users`, {
          headers: {
            "Content-type": "application/json",
            "session-token": authContext.session.token,
          },
        });
    
        if (!res.ok) {
          throw new Error(`Failed to fetch users: ${res.statusText}`);
        }
    
        const data = await res.json();
        // Check ida data.users is defined before madiri map
        if (data.users) {
          setRows(
            data.users.map((user) => {
              return { ...user, createdBy: user.createdBy?.username };
            })
          );
        } else {
          console.error("No users data received");
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    

    if (authContext.session) fetchData();
  }, [authContext.session]);

  const columns = [
    { field: "username", headerName: "NOM D'UTILISATEUR", width: 150, editable: false },
    { field: "role", headerName: "ROLE", width: 150, editable: false },
    { field: "title", headerName: "TITRE", width: 150, editable: false },
    { field: "createdBy", headerName: "AJOUTEE PAR", width: 150, editable: false },
    {
      field: "action",
      headerName: "ACTIONS",
      width: 200,
      editable: false,
      sortable: false,
      renderCell: (params) => (
        <div>
          <Button
            variant="contained"
            component={Link}
            to={`/app/users/${params.id}`}
          >
            MODIFIER
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleDeleteUser(params.id)}
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
        <Typography variant="h4">UTILISATEUR</Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/app/users/new")}
        >
          ADD USER
        </Button>
      </Box>
      <DataGrid rows={rows} columns={columns} pageSize={5} editMode="rows" />
    </Box>
  );
}
