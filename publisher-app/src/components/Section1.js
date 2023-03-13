import {Box} from "@mui/system";
import { Grid, TextField, TextareaAutosize, Typography} from "@mui/material";
import {FormControlLabel, FormGroup} from "@mui/material";
import { Checkbox, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import "../App.css";

export default function Section1({
  book,
  setzoneDetailCheckboxes,
  zoneDetailCheckboxes,
  setSplash,
  setShortDesc,
  setPubNotes,
}) {

  function removeHtmlTags(str) {
    return str.replace(/&lt;.*?&gt;/g, "");
  }

  const styles = theme => ({
    input: {
      "& input.Mui-disabled": {
        color: "green"
      }
    }
  });

  const CustomDisableInput = styled(TextField)(() => ({
    ".MuiInputBase-input.Mui-disabled": {
      WebkitTextFillColor: "#000",
      color: "#000"
    }
  }));

  const CustomDisableInputArea = styled(TextareaAutosize)(() => ({
    ".MuiInputBase-input.Mui-disabled": {
      WebkitTextFillColor: "#000",
      color: "#000",
      backgroundColor: "#ECECEC"
    }
  }));


  return (
    <Box className="publisher">
      <Box
        sx={{
          width: "90%",
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
          Here is the information we found related to your title.
        </Typography>


        <Box class="form-section">
          <Grid container spacing={4} >

            <Grid container item xs={6} direction="column">
              {/* grid to show the ISBN, Pub Year and Price in a row */}
                <CustomDisableInput
                  disabled
                  label="ISBN"
                  // sx={{ mr: 4 }}
                  value={
                    book.hasOwnProperty("RecordReference")
                      ? book?.RecordReference[0]._text
                      : ""
                  }
                />
            </Grid>
            <Grid container item xs={6} direction="column">
            </Grid>

              {/* grid to show the ISBN, Pub Year and Price in a row */}
              <Grid container item xs={6} direction="column">
                <CustomDisableInput
                  disabled
                  label="Title"
                  // sx={{ mr: 4 }}
                  value={
                    book.hasOwnProperty("Title") ? book?.Title[0]?.TitleText[0]._text : "" 
                  }
                />
              </Grid>
            <Grid container item xs={6} direction="column">
            </Grid>

            <Grid container item direction="column">
              {/* grid to show the ISBN, Pub Year and Price in a row */}
              <Grid container item xs={6} direction="column">
                <CustomDisableInput
                  disabled
                  label="Subtitle"
                  // sx={{ mr: 4 }}
                  value={
                    book.hasOwnProperty("Title")
                      ? book?.Title[0].Subtitle[0]?._text
                      : ""
                  }
                />
              </Grid>
            </Grid>


            <Grid container item direction="column">
              {/* grid to show the ISBN, Pub Year and Price in a row */}
              <Grid container item xs={12} direction="row">
                <CustomDisableInput
                  disabled
                  label="Pub Year"
                  sx={{mr: 4}}
                  value={
                    book.hasOwnProperty("PublicationDate")
                      ? book?.PublicationDate[0]?._text[0]?.slice(0, 4)
                      : ""
                  }
                />
                <CustomDisableInput
                  disabled
                  label="Price"
                  sx={{ mr: 4 }}
                  value={
                     book.hasOwnProperty("SupplyDetail")
                        ? book?.SupplyDetail[0]?.Price[0]
                            ?.PriceAmount[0]?._text[0]
                        : ""
                    }
                />
              </Grid>
            </Grid>

            <Grid container item xs={12} direction="column">
              {/* Grid for contributor(s) and HomeTown to show in a single line  */}
              <Grid container item xs={12} direction="column">
                <CustomDisableInput
                  disabled
                  label="Contributor(s)"
                  sx={{mr: 6}}
                  value={
                    book.hasOwnProperty("Contributor")
                      ? book?.Contributor[0].PersonName[0]._text
                      : ""
                  }
                />
                {/* <TextField label="HomeTown" sx={{ mr: 4 }} />*/}
              </Grid>
            </Grid>

            <Grid container item xs={12} direction="column">
              {/* Grid for contributor(s) and HomeTown to show in a single line  */}
              <Grid container item xs={12} direction="column">
                <CustomDisableInput
                  disabled
                  label="Contributor(s) Award"
                  sx={{ mr: 6 }}
                  value={
                    book.hasOwnProperty("Prize")
                      ?  book?.Prize[0].PrizeName[0]._text  
                      : ""
                  }
                />
                {/* <TextField label="HomeTown" sx={{ mr: 4 }} />*/}
              </Grid>
            </Grid>


            <Grid container item xs={6} direction="column">
              <CustomDisableInput
                disabled
                label="Subject (BISAC) "
                value={
                  book.hasOwnProperty("MainSubject")
                    ? book?.MainSubject[0]?.SubjectHeadingText[0]?._text
                    : "No data found"
                }
              />
            </Grid>

            <Grid container item xs={12} direction="column">
              <CustomDisableInputArea
                disabled
                label="Main Description"
                sx={{mb: 2}}
                value={
                  book.hasOwnProperty("OtherText")
                    ? removeHtmlTags(book.OtherText[0].Text[0]._text[0])
                    : ""
                }
              />
            </Grid>

            <Grid container item xs={12} direction="column">
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
                Please provide us with a little more information about your title.
              </Typography>
            </Grid>

            <Grid container item xs={12} direction="column">
              <TextField
                required
                className="editable"
                label="Splash Line - Max 100 Characters"
                inputProps={{ maxLength: 100 }}
                onChange={(e) => setSplash(e.target.value)}
              />
            </Grid>

            <Grid container item xs={12} direction="column">
              <TextareaAutosize
                className="editable"
                label="Short Description  - Max 350 Characters"
                maxLength={350}
                minRows={3}
                placeholder="Short Description - Max 350 Characters"
                onChange={(e) => setShortDesc(e.target.value)}
              />
            </Grid>

          </Grid>
        </Box>

        {/* Box for checkboxes */}
        <Box
          sx={{
            width: "90%",
            color: "black",
          }}>


          <Box className="publisher">
            <Box
              sx={{
                width: "90%",
                color: "white",
                mt: 4,
                mb: 2,
              }}>
              <Grid container spacing={4} >
                <Grid container item xs={12} direction="column" sx={{ pl: '40', color: '#000', }}>
                  Please select relevant zones and explain the relevance in the Additional Publisher Notes section below.
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
                              setzoneDetailCheckboxes({
                                ...zoneDetailCheckboxes,
                                zone1: e.target.checked,
                              })
                            }
                          />
                        }
                        label="Zone 1 - Has Yukon Relevance"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              borderRadius: "50%",
                              backgroundColor: "#FFF"
                            }}
                            onChange={(e) =>
                              setzoneDetailCheckboxes({
                                ...zoneDetailCheckboxes,
                                zone2: e.target.checked,
                              })
                            }
                          />
                        }
                        label="Zone 2 - Has Northern Alberta Relevance"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              borderRadius: "50%",
                              backgroundColor: "#FFF"
                            }}
                            onChange={(e) =>
                              setzoneDetailCheckboxes({
                                ...zoneDetailCheckboxes,
                                zone3: e.target.checked,
                              })
                            }
                          />
                        }
                        label="Zone 3 - Has Prince Albert, SK "
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              borderRadius: "50%",
                              backgroundColor: "#FFF"
                            }}
                            onChange={(e) =>
                              setzoneDetailCheckboxes({
                                ...zoneDetailCheckboxes,
                                zone4: e.target.checked,
                              })
                            }
                          />
                        }
                        label="Zone 4 - Has Georgina ON "
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              borderRadius: "50%",
                              backgroundColor: "#FFF"
                            }}
                            onChange={(e) =>
                              setzoneDetailCheckboxes({
                                ...zoneDetailCheckboxes,
                                zone5: e.target.checked,
                              })
                            }
                          />
                        }
                        label="Zone 5 - Has Northern Newfoundland & Labrador Relevance"
                      />
                    </Grid>
                  </FormGroup>

                </Grid>
                <Grid container item xs={12} direction="column">
                  <TextareaAutosize
                    maxLength={1000}
                    minRows={3}
                    placeholder="Additional Publisher Notes- Max 1000 Characters"
                    label="Additional Publisher Notes"
                    sx={{ mb: 2 }}
                    className="editable"
                    onChange={(e) => setShortDesc(e.target.value)}
                    onChange={(e) => setPubNotes(e.target.value)}
                  />
                </Grid>
              </Grid>

            </Box>
          </Box>

          <Grid
            container
            spacing={4}
            sx={{
              color: "black",
              mt: 4,
              ml: 2,
            }}>
              <Grid container item xs={12} direction="column">
                {/*  <Typography variant="h6" sx={{ mb: 1 }}>*/}
                {/*      Additional Location Relevance*/}
                {/*  </Typography>*/}
                {/*  <Typography variant="p" sx={{*/}
                {/*      mb: 2,*/}
                {/*      textAlign: "left",*/}
                {/*  }}>*/}
                {/*      (check all that apply)*/}
                {/*  </Typography>*/}
                {/*  <FormControlLabel control={<Checkbox sx={{*/}
                {/*    borderRadius: '50%',*/}
                {/*    '&.Mui-checked': {*/}
                {/*        color: '#fff',*/}
                {/*        backgroundColor: '#B31D0C',*/}
                {/*    },*/}
                {/*}} />} label="Contributor"*/}
                {/*  />*/}
                {/*  <FormControlLabel*/}
                {/*      control={<Checkbox sx={{*/}
                {/*    borderRadius: '50%',*/}
                {/*    '&.Mui-checked': {*/}
                {/*        color: '#fff',*/}
                {/*        backgroundColor: '#B31D0C',*/}
                {/*    },*/}
                {/*}} />}*/}
                {/*      label="Theme"*/}
                {/*  />*/}
                {/*  <FormControlLabel*/}
                {/*      control={<Checkbox sx={{*/}
                {/*    borderRadius: '50%',*/}
                {/*    '&.Mui-checked': {*/}
                {/*        color: '#fff',*/}
                {/*        backgroundColor: '#B31D0C',*/}
                {/*    },*/}
                {/*}} />}*/}
                {/*      label="Subject"*/}
                {/*  />*/}
              </Grid>
          </Grid>
        </Box>

        {/* End of Box- Checkbox */}
      </Box>
    </Box>
  );
}
