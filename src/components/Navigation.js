import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"
import { useContext } from "react"
import { Link } from "react-router-dom"
import UserContext from "../utils/UserContext"

export default function Navigation() {
  const { logout, user } = useContext(UserContext)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#2E3B55" }}>
        <Toolbar>
          {user ? (
            <Link to="/login" style={{ textDecoration: "none", color: "#aaa", fontWeight: 800 }} onClick={logout}>
              <Button color="inherit" style={{ fontWeight: 600 }}>
                logout
              </Button>
            </Link>
          ) : (
            <>
              <Link to="/login" style={{ textDecoration: "none", color: "#aaa", fontWeight: 800 }}>
                <Button color="inherit" style={{ fontWeight: 600 }}>
                  Login
                </Button>
              </Link>
              <Link to="/signup" style={{ textDecoration: "none", color: "#aaa", fontWeight: 800 }}>
                <Button color="inherit" style={{ fontWeight: 600 }}>
                  Signup
                </Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
