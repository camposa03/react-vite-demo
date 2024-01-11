import ListingCard from "../components/ListingCard";
import { Grid, Tab, Tabs } from "@mui/material";
export default function Search() {
  return (
    <div>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 2, sm: 4, md: 0 }} marginTop={2}>
        <Grid xs={12} sm={12} md={2} className="black-font">
          Search Manager
        </Grid>

        <Grid xs={12} sm={12} md={8}>
          <Grid xs={12}>
            <Tabs
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
            >
              <Tab label="Search Results" />
              <Tab label="Recommended" />
              <Tab label="Near Me" />
            </Tabs>
          </Grid>
          <Grid xs={12} md={12}>
            <ListingCard title="American Heart Association HeartCorps" />
            <ListingCard title="AmeriCorps Instruction Support Team" />
            <ListingCard title="AmeriCorps Member Math Fellow" />
            <ListingCard title="AmeriCorps Instruction Support Team" />
            <ListingCard title="American Heart Association HeartCorps" />
            <ListingCard title="American Heart Association HeartCorps" />
            <ListingCard title="American Heart Association HeartCorps" />
            <ListingCard title="American Heart Association HeartCorps" />
            <ListingCard title="American Heart Association HeartCorps" />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
