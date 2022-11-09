import { Button, TextField } from "@mui/material"
import { Box } from "@mui/system"
import { useContext } from "react"
import Navigation from "../components/Navigation"
import UserContext from "../utils/UserContext"

export default function Signup() {
  const { signup, setEmail, setPassword, setFirstName, setLastName, set_confirm_password } = useContext(UserContext)

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
            <TextField
              required
              id="outlined-required"
              label="First name"
              onChange={e => setFirstName(e.target.value)}
            />
            <TextField required id="outlined-required" label="Last name" onChange={e => setLastName(e.target.value)} />
          </div>

          <div>
            <TextField required id="outlined-required" label="Email" onChange={e => setEmail(e.target.value)} />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div>
            <TextField
              id="outlined-password-input"
              label="confirm Password"
              type="password"
              autoComplete="current-password"
              onChange={e => set_confirm_password(e.target.value)}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Button variant="outlined" color="info" onClick={signup}>
              signup
            </Button>
          </div>
        </div>
      </Box>
    </>
  )
}
