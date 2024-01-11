import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import EngineeringIcon from "@mui/icons-material/Engineering";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import PaymentsIcon from "@mui/icons-material/Payments";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
// eslint-disable-next-line react/prop-types
export default function ListingCard({ title }) {
  return (
    <div className="listing-card">
      <Grid container rowSpacing={3} columnSpacing={{ xs: 2, sm: 4, md: 0 }}>
        <Grid xs={2} sm={12} md={2} sx={{ borderRight: 1, borderColor: "gray" }}>
          <strong className="black-font">Status</strong>
          <br></br>
          <FavoriteBorderIcon />

          <FiberNewIcon className="green-icon" />
          <AccessTimeIcon className="red-icon" />
          <hr></hr>
          <strong className="black-font">My Matches</strong>
          <br></br>
          <FiberNewIcon className="green-icon" />
          <PaymentsIcon className="green-icon" />
          <FiberNewIcon className="green-icon" />
          <FiberNewIcon className="green-icon" />
        </Grid>

        <Grid xs={6} md={8}>
          <h2 className="black-font">{title}</h2>
          <h3 className="gray-font">
            Americorps State / National | 07/31/2023 - 06/30/2024
          </h3>
          <Button
            startIcon={<AssignmentIndIcon />}
            variant="outlined"
            className="card-button"
          >
            Requirements
          </Button>
          <Button
            startIcon={<EngineeringIcon />}
            variant="outlined"
            className="card-button"
          >
            Duties
          </Button>
          <Button
            className="card-button"
            startIcon={<PaymentsIcon />}
            variant="outlined"
          >
            Benefits
          </Button>
        </Grid>

        <Grid xs={2} md={2} sx={{ borderLeft: 1, borderColor: "gray" }}>
          <Button
            style={{ margin: "5px", marginTop: "2.5rem", borderRadius: "20px" }}
            className="card-button"
            variant="contained"
            
          >
            Apply Now
          </Button>
          <Button
             className="card-button"
            variant="outlined"
          >
            Add to List
          </Button>
          <Button
           className="card-button"
            variant="outlined"
          >
            View More
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
