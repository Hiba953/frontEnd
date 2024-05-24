
import React, { useContext, useEffect, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { AuthContext } from "../context/authContext.jsx";
import { useNavigate, useParams } from "react-router-dom";

export function EditUser() {
  const authContext = useContext(AuthContext);
  const {id} = useParams()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    async function fetchData(){
    const res = await fetch (`${import.meta.env.VITE_BACKEND_URL}/users/${id}`,{
      method : "GET",
      headers :{
        "Content-type": "application/json",
        "session-token": authContext.session.token
      }
    })
    const data = await res.json()
    if(res.ok){
      setUsername(data.user.username)
      setRole(data.user.role)
      setTitle(data.user.title)
    }else {
      alert(data.message)
    }

    }
    if(authContext.session && id!= "new"){
      fetchData()
    }

  },[id,authContext.session])
  async function handleSubmit(e) {
    e.preventDefault();
    const url = id =='new'?`${import.meta.env.VITE_BACKEND_URL}/users`:`${import.meta.env.VITE_BACKEND_URL}/users/${id}`
    const res = await fetch(url, {
      method: id == "new"? "POST" : "PUT",
      headers: {
        "Content-type": "application/json",
        "session-token": authContext.session.token,
      },
      body: JSON.stringify({
        username,
        password,
        role,
        title,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("success");
      console.log(data);
      navigate("/app/users");
    } else {
      alert(`failed to add or modify user: ${data.message}`);
    }
    const handleDeleteUser = async (userId) => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "session-token": authContext.session.token,
          },
        });
        
        if (res.ok) {
          // Remove the deleted user from the rows state
          setRows((prevRows) => prevRows.filter((user) => user.id !== userId));
          console.log("User deleted successfully");
        } else {
          console.error("Failed to delete user");
        }
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    };
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
        {id == "new" ? "AJOUTER UTILISATEUR" : "MODIFIER UTILISATEUR"}
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
          name="username"
          label="username"
          variant="outlined"
          fullWidth
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextField
          name="password"
          label="password"
          variant="outlined"
          fullWidth
          required = {id == "new"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <TextField
          name="role"
          label="role"
          variant="outlined"
          fullWidth
          required
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <TextField
          name="title"
          label="title"
          variant="outlined"
          fullWidth
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Button type="submit" variant="contained" color="primary" fullWidth>
          SAUVGARDER
        </Button>
      </Paper>
    </Box>
  );
}
