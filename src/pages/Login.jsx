// import {Box, Button, TextField, Typography} from '@mui/material';
// import Paper from '@mui/material/Paper';
// import { useState } from 'react';


// export function Login(){
//     const [username, setUsername] = useState("")
//     const [password, setPassword] = useState("")
     


//     return(
//         <Box 
//             sx={{
//                 display: "flex",
//                 flexDirection :'column',
//                 alignItems:"center",
//                 gap :4,
//                 minHeight :" 100vh",
//                 justifyContent:"center",
//                 px :2

//             }}>
//             <img src='/logo.svg' alt="logo" height={150}/>
//             <Paper 
//             component={"form"}
//             onSubmit={async (e)=>{
//                 e.preventDefault();
//                 const res= await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/login`,{
//                     method : "POST",
//                     headers :{
//                         "content-type" : "application/json"
//                     },
//                     body : JSON.stringify({
//                         username,
//                         password
//                     })



//                 })
//                 const data = await res.json()
//                 if(res.ok){
//                     alert("connexion reussie")
//                 } else {
//                     console.log(e,"cant log in ")
//                 }

//             }} 
//                 sx={{
//                     minWidth: 300,
//                     padding: 2,
//                     textAlign: 'center',
//                     display: 'flex',
//                     flexDirection : 'column',
//                     gap : 2,
//                     maxWidth : "100%" ,
//                     width: 460,
//                 }}>
//                 <Typography 
                   
//                     variant="h4" 
//                     color ="primary"
//                     letterSpacing={2}
//                     fontWeight={700}>
//                      S'identifier
//                 </Typography>
//                 <TextField 
//                     required
//                     variant='outlined' 
//                     fullWidth 
//                     label ="Nom D'utilisataur" 
//                     type='text'
//                     value={username}
//                     onChange={(e)=>{setUsername(e.target.value)}}/>

//                 <TextField 
//                     required
//                     variant='outlined' 
//                     fullWidth 
//                     label ="Mot de passe" 
//                     type='password'
//                     value={password}
//                     onChange={(e)=>{setPassword(e.target.value)}}/>
//                 <Button 
//                     type='submit'
//                     sx={{
//                         mt : 2,
//                         py : 2

//                     }}
//                     variant='contained'
//                     color='primary'
//                     fullWidth>
//                         se connecter
//                     </Button>
                

//             </Paper>

//         </Box>
//     )
// }


import { Box, Button, TextField, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useContext(AuthContext);

  if (authContext.user) {
    return <Navigate to="/app/dashboard"></Navigate>;
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        minHeight: " 100vh",
        justifyContent: "center",
        px: 2,
      }}
    >
      <img src="/logo.svg" alt="logo" height={150} />
      <Paper
        component={"form"}
        onSubmit={async (e) => {
          e.preventDefault();
          const res = await fetch(
            `${import.meta.env.VITE_BACKEND_URL}/auth/login`,
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({
                username,
                password,
              }),
            }
          );
          const data = await res.json();
          if (res.ok) {
            alert("connexion reussie");
            authContext.setAuth(data.user, data.session);
          } else {
            alert(data.message);
          }
        }}
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
        <Typography
          variant="h4"
          color="primary"
          letterSpacing={2}
          fontWeight={700}
        >
          S'identifier
        </Typography>
        <TextField
          required
          variant="outlined"
          fullWidth
          label="Nom D'utilisataur"
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <TextField
          required
          variant="outlined"
          fullWidth
          label="Mot de passe"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          type="submit"
          sx={{
            mt: 2,
            py: 2,
          }}
          variant="contained"
          color="primary"
          fullWidth
        >
          se connecter
        </Button>
      </Paper>
    </Box>
  );
}