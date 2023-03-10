import { Box } from "@mui/system"
import { Grid, TextField, Typography } from "@mui/material"
import placeholder from "../../src/assets/logo-placeholder.png"
import { Divider } from "@mui/material"

const LPGMembers = () => {
  return (

      <Box
          sx={{
              width: "90%",
              color: "white",
              mt: 4,
              ml: "60px",
          }}
      >
          
          <Typography
              variant="h5"
              sx={{
                  color: "white",
                  backgroundColor: "#737373",
                  p: 2,
                  borderRadius: 1,
                  mb: 2,
                  textAlign: "left",
              }}
          >
              LPG MEMBER INFORMATION
          </Typography>

          {/* make a Grid with inputs publishers, Imprint, Your name, Email */}
          <Grid container spacing={2}>
              <Grid container item xs={6} direction="column">
                  <TextField label="Publisher" sx={{
                      mb: 2,
                      backgroundColor: "#B31D0C",                        
                  }} />
                  <TextField label="Imprint" sx={{
                      mb: 2,
                      backgroundColor: "#B31D0C",
                  }} />

                  <TextField
                      label="Your Name"
                      type={"text"}
                      sx={{
                          mb: 2,
                          backgroundColor: "#B31D0C",
                          color: "white",
                      }}
                      inputProps={{
                          style: { color: "white", backgroundColor: "#B31D0C" }
                      }}
                  />

                  <TextField label="Email"
                      type={"email"}
                      sx={{
                      mb: 2,
                      backgroundColor: "#B31D0C",
                      color: "white",
                  }} />
              </Grid>

              <Grid container item xs={6} direction="column">
                  {/* add image here */}
                  <img src={placeholder} alt="placeholder" />
              </Grid>
          </Grid>
          <Divider
              orientation="horizontal"
              variant="middle"
              sx={{
                  width: "100%",
                  height: "2px",
                  backgroundColor: "#B31D0C",
                  margin: "0 auto",
                  textAlign: "left",
                  marginTop: "20px",
              }}
          />
      </Box>

  )
}

export default LPGMembers