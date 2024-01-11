import { Grid } from "@mui/material";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <>
      <NavBar />
      <Grid container justifyContent="space-between" rowSpacing={0} columnSpacing={{ xs: 8, sm: 2, md:2 }}>
        <Grid item xs={12} md={12}>
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
}
