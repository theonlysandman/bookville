import { Box } from "@mui/system";
import { Grid, TextField, Typography } from "@mui/material";
import { FormControlLabel, FormGroup } from "@mui/material";
import { Checkbox } from "@mui/material";
import { Divider } from "@mui/material";

export default function Section1({ book }) { 

    function removeAngleBrackets(str) {
        var str1 = str.replace(/&lt;p&gt;/g, "");
        var str2 = str1.replace(/&lt;strong&gt;/g, "");
        var str3 = str2.replace(/&lt;\/strong&gt;/g, "");
        var str4 = str3.replace(/&lt;\/p&gt;/g, "");
        var str5 = str4.replace(/&lt;br&gt;/g, "");
        var str6 = str5.replace(/&lt;\/?em&gt;/g, "");
        var str7 = str6.replace(/&lt;\/b&gt;/g, "");
        var str8 = str7.replace(/&lt;b&gt;/g, "");
        

        return str8;
    }
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
                  {
                      book.hasOwnProperty("Title")
                          ? book?.Title?.TitleText._text
                          : ""
                  }
              </Typography>

              <Box class="form-section">
                  <Grid container spacing={4}>
                      <Grid container item direction="column">
                          {/* grid to show the ISBN, Pub Year and Price in a row */}
                          <Grid container item xs={12} direction="row">
                              <TextField label="Pub Year" sx={{ mr: 4 }} value={
                                  book.hasOwnProperty(
                                      "PublicationDate"
                                  )
                                      ? book?.PublicationDate?._text?.slice(
                                          0,
                                          4
                                      )
                                      : ""
                              } />
                              {/*<TextField label="Price" sx={{ mr: 4 }} value={*/}
                              {/*    book.hasOwnProperty("SupplyDetail")*/}
                              {/*        ? book?.SupplyDetail?.Price[0]*/}
                              {/*            ?.PriceAmount?._text*/}
                              {/*        : ""*/}
                              {/*} />*/}
                          </Grid> 
                      </Grid>

                      {/*<Grid container item xs={12} direction="column">*/}
                          {/*<TextField label="Book Title" sx={{ mb: 2 }} />*/}
                      {/*    <TextField label="Subtitle" sx={{ mb: 2 }} value={*/}
                      {/*        book.hasOwnProperty("Subtitle")*/}
                      {/*            ? book?.Subtitle?._text*/}
                      {/*            : ""*/}
                      {/*    } />*/}
                      {/*</Grid>*/}

                      <Grid container item xs={12} direction="column">
                          {/* Grid for contributor(s) and HomeTown to show in a single line  */}
                          <Grid container item xs={12} direction="row">
                              <TextField label="Contributor(s)" sx={{ mr: 6 }} value={
                                  book.hasOwnProperty("Contributor")
                                      ? book?.Contributor?.PersonName?._text
                                      : ""
                              } />
                             {/* <TextField label="HomeTown" sx={{ mr: 4 }} />*/}
                          </Grid>
                      </Grid>

                      <Grid container item xs={6} direction="column">
                          <TextField label="Subject (BISAC) " value={
                              book.hasOwnProperty("MainSubject")
                                  ? book?.MainSubject
                                      ?.SubjectHeadingText
                                      ?._text
                                  : "No data found"
                          } />
                      </Grid>

                      <Grid container item xs={12} direction="column">
                          <TextField label="Main Description" sx={{ mb: 2 }} value={
                              book.hasOwnProperty("OtherText")
                                  ? removeAngleBrackets(
                                      book.OtherText[0].Text
                                          ._text
                                  )
                                  : ""
                          } />

                      </Grid>

                      <Divider
                          orientation="horizontal"
                          variant="middle"
                          sx={{
                              width: "100%",
                              height: "2px",
                              backgroundColor: "#FFCCCB",
                              margin: "0 auto 40px",
                              textAlign: "left",
                              marginTop: "20px"
                          }}
                      />


                      <Grid container item xs={12} direction="column">
                          <TextField
                              className="editable"
                              label="Short Description"
                          />
                      </Grid>

                      <Grid container item xs={12} direction="column">
                          {<TextField
                              label="Additional Publisher Notes"
                              sx={{ mb: 2 }}
                              className="editable"
                          />}
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

                      </div>


                  </Grid>
              </Box>

              {/* End of Box- Checkbox */}

          </Box>
          
      </Box>

  )
}

