import styles from "./Welcome.module.css";
import ListingCard from "../Listingcard";
import { Grid, Typography } from "@mui/material";
import DisplayField from "./DisplayField";

const UserApplications = ({ apps }) => {
  return (
    <>
      <Grid container md={12}>
        <Grid item md={12}>
          <Typography className={styles.columnHeader} variant="h6">
            Applications
          </Typography>
        </Grid>
        <Grid item direction={"column"} md={3}>
          <DisplayField label="Name" value={apps[0].name}></DisplayField>
        </Grid>
        <Grid item direction={"column"} md={3}>
          <DisplayField label="Created" value={apps[0].created}></DisplayField>
        </Grid>
        <Grid item direction={"column"} md={3}>
          <DisplayField label="Last Modified" value={apps[0].lastModified}></DisplayField>
        </Grid>
        <Grid item direction={"column"} md={3}>
          <DisplayField label="Status" value={apps[0].status}></DisplayField>
        </Grid>
      </Grid>
      <ListingCard title="American Heart Association HeartCorps" />
    </>
  );
};

export default UserApplications;
