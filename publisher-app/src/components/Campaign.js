import React from "react";
import {
  Typography,
  Grid,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Divider,
} from "@mui/material";
import {Button} from "@mui/material";
import {Box} from "@mui/system";

export default function Campaign({
  book,
  submitNomination,
  setzoneCheckboxes,
  zoneCheckboxes,
}) {
  return (
    <div className="zones-section">
      <Grid
        container
        alignItems="top"
        spacing={3}
        sx={{
          paddingLeft: "60px",
          //   width: "80%",
        }}>
        {/* col 1 */}
        <Grid item xs={6}>
          <Typography
            variant="h6"
            align="left"
            sx={{
              color: "#B31D0C",
              fontWeight: "bold",
            }}>
            Campaign Enrollment
          </Typography>
          <Typography variant="h6" align="left">
            All Zones
          </Typography>

          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  borderRadius: "50%",
                  //   "&.Mui-checked": {
                  //     color: "#fff",
                  //     backgroundColor: "#B31D0C",
                  //   },
                }}
                onChange={(e) =>
                  setzoneCheckboxes({
                    ...zoneCheckboxes,
                    enrollment: e.target.checked,
                  })
                }
              />
            }
            shape="rounded"
            label="$80"
            // labelPlacement="bottom"
          />
        </Grid>

        {/* col 2 */}
        <Grid
          container
          item
          xs={6}
          direction="column"
          //   sx={{
          //     ml: 20,
          //   }}
        >
          <FormGroup>
            <Grid container item direction="column">
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      borderRadius: "50%",
                      //   "&.Mui-checked": {
                      //     color: "#fff",
                      //     backgroundColor: "#B31D0C",
                      //   },
                    }}
                    onChange={(e) =>
                      setzoneCheckboxes({
                        ...zoneCheckboxes,
                        zone1: e.target.checked,
                      })
                    }
                  />
                }
                label="Zone 1 - Rural Central Ontario"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      borderRadius: "50%",
                      //   "&.Mui-checked": {
                      //     color: "#fff",
                      //     backgroundColor: "#B31D0C",
                      //   },
                    }}
                    onChange={(e) =>
                      setzoneCheckboxes({
                        ...zoneCheckboxes,
                        zone2: e.target.checked,
                      })
                    }
                  />
                }
                label="Zone 2 - Northern Alberta"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      borderRadius: "50%",
                      //   "&.Mui-checked": {
                      //     color: "#fff",
                      //     backgroundColor: "#B31D0C",
                      //   },
                    }}
                    onChange={(e) =>
                      setzoneCheckboxes({
                        ...zoneCheckboxes,
                        zone3: e.target.checked,
                      })
                    }
                  />
                }
                label="Zone 3 -Northern Saskatchewan"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      borderRadius: "50%",
                      //   "&.Mui-checked": {
                      //     color: "#fff",
                      //     backgroundColor: "#B31D0C",
                      //   },
                    }}
                    onChange={(e) =>
                      setzoneCheckboxes({
                        ...zoneCheckboxes,
                        zone4: e.target.checked,
                      })
                    }
                  />
                }
                label="Zone 4 - Rural Central Ontario"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      borderRadius: "50%",
                      //   "&.Mui-checked": {
                      //     // color: "#fff",
                      //     // backgroundColor: "#B31D0C",
                      //   },
                    }}
                    onChange={(e) =>
                      setzoneCheckboxes({
                        ...zoneCheckboxes,
                        zone5: e.target.checked,
                      })
                    }
                  />
                }
                label="Zone 5 - Rural Newfoundland & Labrador"
              />
            </Grid>
          </FormGroup>
        </Grid>
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
          sx={{borderRadius: "10px"}}
          // sx={{
          // 	// backgroundColor: "#FF0000",
          // 	color: "#FFFFFF",
          // 	cursor: "pointer",
          // 	"&:hover": {
          // 		backgroundColor: "#FF3333"
          // 	},
          // 	marginBottom: "10px",
          // 	marginTop: "10px",
          // 	borderRadius: "10px"
          // }}
        >
          Submit
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
