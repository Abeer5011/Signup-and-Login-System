import { Box, Button, TextField } from "@mui/material"
import { useContext } from "react"
import Navigation from "../components/Navigation"
import UserContext from "../utils/UserContext"

export default function Login() {
  const { login, setLoginEmail, setLoginPassword } = useContext(UserContext)
  return (
    <>
      <Navigation />
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100,
        }}
      >
        <div
          style={{ border: "solid 2px #d8e2dc", padding: "60px", borderRadius: "25px", boxShadow: "5px 10px #8888" }}
        >
          <div>
            <TextField required id="outlined-required" label="Email" onChange={e => setLoginEmail(e.target.value)} />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={e => setLoginPassword(e.target.value)}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Button variant="outlined" color="info" onClick={login}>
              login
            </Button>
          </div>
        </div>
      </Box>
    </>
  )
}
