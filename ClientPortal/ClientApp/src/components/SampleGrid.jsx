import ListingCard from "../components/ListingCard";
import { Grid } from "@mui/material";
export default function SampleGrid() {
  return (
    <>
      <Grid container spacing={2} marginTop={1}>
        <Grid item xs={12} sm={6} md={4} container direction="column">
          <Grid item xs />
          item 1
          <Grid item xs />
          item 2
        </Grid>
        <Grid item xs={12} sm={6} md={4} container direction="column">
          <Grid item xs />
          item 3
          <Grid item xs />
          item 4
        </Grid>

        <Grid item xs={12} sm={6} md={4} container direction="column">
          <Grid item xs />
          Item 5
          <Grid item xs />
          Item 6
        </Grid>
        <Grid item xs />
      </Grid>
    </>
  );
}
