import { useLocation } from "react-router-dom";
import SideBar from "../SideBar";
import { Box, Grid } from "@mui/material";
import styles from "./Welcome.module.css";
import { Link } from "react-router-dom";
import { Container } from "@mui/system";
import UserInfo from "./UserInfo";
import UserApplications from "./UserApplications";
function Welcome() {
  const location = useLocation();
  const name = location?.state?.name || "Guest";
  const applications = [
    {
      name: "American Heart Association HeartCorps",
      created: "12/09/2023",
      lastModified: "12/11/2023",
      status: "Incomplete",
    },
    {
      name: "American Heart Association HeartCorps",
      created: "12/09/2023",
      lastModified: "12/11/2023",
      status: "Incomplete",
    },
    {
      name: "American Heart Association HeartCorps",
      created: "12/09/2023",
      lastModified: "12/11/2023",
      status: "Incomplete",
    },
  ];
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30,
    ssn: "***-**-****",
    vaStatus: "active",
    dob: "02/02/1972",
    username: "jdoe",
    phone: "915-562-5554",
    communicationMethod: "email",
    address: {
      street: "123 Main St",
      city: "Anytown",
      zipCode: "12345",
    },
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} container direction="column">
          <Box className={styles.userProfile}>
            <strong>
              Please Complete{" "}
              <Link to="/profile" className={styles.profileLink}>
                User Profile
              </Link>
            </strong>
          </Box>
          {/* <SideBar /> */}
        </Grid>
        <Container>
          <Grid xs={12} sm={6} md={6} container direction="column">
            <h2 className={styles.label}>Welcome {name} </h2>
            <p className={styles.label}>
              Welcome to the My AmeriCorps website for applicants, candidates,
              members, and alumni. This site presents information that will help
              you before, during and after your service. Please be sure that all
              of your contact information is up-to-date.
            </p>
          </Grid>
        </Container>

        <Container className={styles.container}>
          <Grid sm={12} md={12} container className={styles.label}>
            <UserInfo user={user} />
          </Grid>
        </Container>
        <Container className={styles.container}>
          <Grid sm={12} md={12} container className={styles.label}>
            <UserApplications apps={applications} />
          </Grid>
        </Container>
      </Grid>
    </>
  );
}

export default Welcome;
