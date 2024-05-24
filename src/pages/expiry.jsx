// import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { AuthContext } from "../context/authContext.jsx";

// export function Expiry() {
//   const { id } = useParams();
// const 
//   useEffect(() => {
//     async function fetchExpiry() {
//       try {
//         const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/expiries/${id}`, {
//           method: "GET",
//           headers: {
//             "Content-type": "application/json",
//             "session-token": authContext.session.token,

//           },
//         });
//         if (!response.ok) {
//           throw new Error("Failed to fetch expiry");
//         }
//         const data = await response.json();
//       } catch(e) {
//         console.log(e,"Error fetching expiry");
//       }
//     }

//     fetchExpiry();
//   }, [i]);

//   return (
//     <div>
//       {expiry}
//     </div>
//   );
// }
