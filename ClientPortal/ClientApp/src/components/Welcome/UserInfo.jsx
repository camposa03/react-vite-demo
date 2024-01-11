import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./Welcome.module.css";
import DisplayField from "./DisplayField";
import { textAlign } from "@mui/system";
// eslint-disable-next-line react/prop-types
const UserInfo = ({ user }) => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} md={6}>
        <Typography className={styles.columnHeader} variant="h6">
          My Information
        </Typography>
        <DisplayField label="Name" value={user.name} />
        <DisplayField label="Email" value={user.email} />
        <DisplayField label="Age" value={user.age} />
        <DisplayField label="SSN" value={user.ssn} />
      </Grid>

      <Grid item xs={12} md={6} >
        <Typography
          className={styles.columnHeader}
          sx={{ textAlign: "right" }}
          variant="h6"
        >
          {" "}
          <Link to="/profile">Edit Profile</Link>
        </Typography>

        <DisplayField label="Veteran/Active Duty/Military Family Status" value={user.vaStatus} />
        <DisplayField label="Date of Birth" value={user.dob} />
        <DisplayField label="Username" value={user.username} />
        <DisplayField label="Preferred Method of Communication" value={user.communicationMethod} />
      </Grid>
    </Grid>
  );
};

export default UserInfo;
