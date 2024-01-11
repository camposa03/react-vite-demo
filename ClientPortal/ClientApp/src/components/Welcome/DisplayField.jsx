import { Grid, Typography } from "@mui/material";
import styles from "./Welcome.module.css"

// eslint-disable-next-line react/prop-types
const DisplayField = ({ label, value }) => {
  return (
    <Typography>
    <strong>{label}</strong><div>{value}</div>
  </Typography>
  );
};

export default DisplayField;
