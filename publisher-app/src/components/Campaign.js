import React from "react";
import {
  Typography,
  Grid,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";
import {Button} from "@mui/material";
import {Box} from "@mui/system";

export default function Campaign({
  submitNomination,
  setzoneCheckboxes,
  zoneCheckboxes,
}) {
  return (
    <div className="zones-section">
      <Box className="publisher">
        <Box
          sx={{
            color: "white",
            mt: 4,
            mb: 2,
            ml: "60px",
          }}>
            <Typography
              variant="h5"
              sx={{
                color: "white",
                backgroundColor: "#737373",
                p: 2,
                borderRadius: 1,
                mb: 2,
                textAlign: "left",
              }}>
            Zone Specific Enhancement 
          </Typography>
          <Grid container spacing={4} >
            <Grid container item xs={12} direction="column" sx={{ pl: '40', color: '#000', }}>
              You may also nominate this title for zone specific enhancement which includes dedicated digital ads and a larger profile in the print catalog. You may nominate for enhancement for multiple zones.
            </Grid>
        <Grid
              sx={{ pl: '40', color: '#000', }} 
          container
          item
          xs={12}
          align="center"
          direction="column"
        >
          <FormGroup>
            <Grid
              container
              xs={12}
              itemAlign="center"
              direction="column"
            >
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                          borderRadius: "50%",
                          backgroundColor: "#FFF"
                    }}
                    onChange={(e) =>
                      setzoneCheckboxes({
                        ...zoneCheckboxes,
                        zone1: e.target.checked,
                      })
                    }
                  />
                }
                label="Zone 1 - Yukon ($50)"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      borderRadius: "50%",
                      backgroundColor: "#FFF"
                    }}
                    onChange={(e) =>
                      setzoneCheckboxes({
                        ...zoneCheckboxes,
                        zone2: e.target.checked,
                      })
                    }
                  />
                }
                label="Zone 2 - Northern Alberta ($50)"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      borderRadius: "50%",
                      backgroundColor: "#FFF"
                    }}
                    onChange={(e) =>
                      setzoneCheckboxes({
                        ...zoneCheckboxes,
                        zone3: e.target.checked,
                      })
                    }
                  />
                }
                label="Zone 3 - Prince Albert, SK ($50)"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      borderRadius: "50%",
                      backgroundColor: "#FFF"
                    }}
                    onChange={(e) =>
                      setzoneCheckboxes({
                        ...zoneCheckboxes,
                        zone4: e.target.checked,
                      })
                    }
                  />
                }
                label="Zone 4 - Georgina ON ($50)"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      borderRadius: "50%",
                      backgroundColor: "#FFF"
                    }}
                    onChange={(e) =>
                      setzoneCheckboxes({
                        ...zoneCheckboxes,
                        zone5: e.target.checked,
                      })
                    }
                  />
                }
                label="Zone 5 - Northern Newfoundland & Labrador ($50)"
              />
            </Grid>
          </FormGroup>

      </Grid>
          </Grid>

        </Box>
      </Box>


      <Grid container direction="column">



     
      </Grid>
      <Box
        sx={{
          mt: 2,
          mb: 6,
          display: "flex",
          width: "100%",
          justifyContent: "center",
        }}>
        <Button
          type="submit"
          onClick={submitNomination}
          variant="contained"
          sx={{borderRadius: "10px"}}        >
          Submit Nomination
        </Button>
      </Box>
    </div>
  );
}

/*
 *         <header className="Header">
            <img src={require("../assets/bookville_logo.png")} className="Logo" alt="Bookville Logo" />
            <nav className="Nav">
                <a href="/">Home</a>
                <a href="/publishers">Publishers </a>
                <a href="/about">About</a>
            </nav>
        </header>
*/
