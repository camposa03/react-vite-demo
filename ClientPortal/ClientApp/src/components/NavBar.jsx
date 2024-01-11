import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import logo from "../assets/ac-logo.svg";
export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="nav-bar">
        <Toolbar>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            className="americorps-logo"
            sx={{ flexGrow: 1 }}
          >
            <Link to="/">
              <img className="app-bar-logo" src={logo}></img>
            </Link>
          </Typography>
          <Button
            style={{ borderRadius: "20px", marginRight: "1rem" }}
            variant="contained"
          >
            <Link className="login-button" to="/signup">
              Sign Up
            </Link>
          </Button>
          <Button color="inherit">
            {" "}
            <Link className="login-button" to="/login">
              Log in
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
