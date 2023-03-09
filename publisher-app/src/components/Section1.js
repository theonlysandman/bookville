import { Box } from "@mui/system";
import { Grid, TextField, Typography } from "@mui/material";
import { FormControlLabel, FormGroup } from "@mui/material";
import { Checkbox } from "@mui/material";
// import { withStyles } from "@mui/styles";
const Section1 = () => {
  return (
      <Box className="publisher">
          
          <Box
              sx={{
                  width: "90%",
                  color: "white",
                  mt: 4,
                  mb: 2,
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
                  TITLE # 1
              </Typography>

              <Box class="form-section">
                  <Grid container spacing={4}>
                      <Grid container item direction="column">
                          {/* grid to show the ISBN, Pub Year and Price in a row */}
                          <Grid container item xs={12} direction="row">
                              <TextField label="ISBN" sx={{ mr: 4 }} />
                              <TextField label="Pub Year" sx={{ mr: 4 }} />
                              <TextField label="Price" sx={{ mr: 4 }} />
                          </Grid>
                      </Grid>

                      <Grid container item xs={12} direction="column">
                          <TextField label="Book Title" sx={{ mb: 2 }} />
                          <TextField label="Subtitle" sx={{ mb: 2 }} />
                      </Grid>

                      <Grid container item xs={12} direction="column">
                          {/* Grid for contributor(s) and HomeTown to show in a single line  */}
                          <Grid container item xs={12} direction="row">
                              <TextField label="Contributor(s)" sx={{ mr: 4 }} />
                              <TextField label="HomeTown" sx={{ mr: 4 }} />
                          </Grid>
                      </Grid>

                      <Grid container item xs={12} direction="column">
                          <TextField label="Main Description" sx={{ mb: 2 }} />
                          <TextField label="Short Description" />
                      </Grid>

                      <Grid container item xs={6} direction="column">
                          <TextField label="Subject (BISAC) " />
                      </Grid>

                      <Grid container item xs={6} direction="column">
                          <TextField label="Region (BISAC)" sx={{ mb: 2 }} />
                      </Grid>

                  </Grid>
              </Box>

              {/* Box for checkboxes */}
              <Box sx={{
                  width: "90%",
                  color: "black",
              }} >
                  <Grid container spacing={4} sx={{
                      color: "black",
                      mt: 4,
                      ml: 2,
                  }} >
                      <div>
                          <Grid container item xs={12} direction="column">
                              <Typography variant="h6" sx={{ mb: 1 }}>
                                  Additional Location Relevance
                              </Typography>
                              <Typography variant="p" sx={{
                                  mb: 2,
                                  textAlign: "left",
                              }}>
                                  (check all that apply)
                              </Typography>
                              <FormControlLabel control={<Checkbox sx={{
                                borderRadius: '50%',
                                '&.Mui-checked': {
                                    color: '#fff',
                                    backgroundColor: '#B31D0C',
                                },
                            }} />} label="Contributor"
                              />
                              <FormControlLabel
                                  control={<Checkbox sx={{
                                borderRadius: '50%',
                                '&.Mui-checked': {
                                    color: '#fff',
                                    backgroundColor: '#B31D0C',
                                },
                            }} />}
                                  label="Theme"
                              />
                              <FormControlLabel
                                  control={<Checkbox sx={{
                                borderRadius: '50%',
                                '&.Mui-checked': {
                                    color: '#fff',
                                    backgroundColor: '#B31D0C',
                                },
                            }} />}
                                  label="Subject"
                              />
                          </Grid>

                      </div>

                      <div>
                          <Grid container item xs={12} direction="column"
                              sx={
                                  {
                                      ml: 20,
                                  }
                              }
                          >
                              <FormGroup>
                                  <Grid container item direction="column">
                                      <FormControlLabel
                                          control={<Checkbox sx={{
                                borderRadius: '50%',
                                              '&.Mui-checked': {
                                                color: '#fff',
                                                backgroundColor: '#B31D0C',
                                },
                            }} />}
                                          label="Zone 1 - Rural Central Ontario"
                                      />
                                      <FormControlLabel
                                          control={<Checkbox sx={{
                                borderRadius: '50%',
                                '&.Mui-checked': {
                                    color: '#fff',
                                    backgroundColor: '#B31D0C',
                                },
                            }} />}
                                          label="Zone 2 - Northern Alberta"
                                      />
                                      <FormControlLabel
                                          control={<Checkbox sx={{
                                borderRadius: '50%',
                                '&.Mui-checked': {
                                    color: '#fff',
                                    backgroundColor: '#B31D0C',
                                },
                            }} />}
                                          label="Zone 3 -Northern Saskatchewan"
                                      />

                                      <FormControlLabel
                                          control={<Checkbox sx={{
                                borderRadius: '50%',
                                '&.Mui-checked': {
                                    color: '#fff',
                                    backgroundColor: '#B31D0C',
                                },
                            }} />}
                                          label="Zone 3 - Rural Central Ontario"
                                      />
                                      <FormControlLabel
                                          control={<Checkbox sx={{
                                borderRadius: '50%',
                                '&.Mui-checked': {
                                    color: '#fff',
                                    backgroundColor: '#B31D0C',
                                },
                            }} />}
                                          label="Zone 4 - Rural Central Ontario"
                                      />
                                      <FormControlLabel
                                          control={<Checkbox sx={{
                                borderRadius: '50%',
                                '&.Mui-checked': {
                                    color: '#fff',
                                    backgroundColor: '#B31D0C',
                                },
                            }} />}
                                          label="Zone 5 - Rural Newfoundland & Labrador"
                                      />
                                  </Grid>

                              </FormGroup>
                          </Grid>
                      </div>

                  </Grid>
              </Box>

              {/* End of Box- Checkbox */}

          </Box>
          
      </Box>

  )
}

export default Section1