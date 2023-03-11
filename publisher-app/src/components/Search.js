import React from "react";
import {useParams} from "react-router-dom";
import "./Header.css";
import Button from "@mui/material/Button";
import Header from "./Header";
import {useNavigate} from "react-router-dom";
import Footer from "./Footer";
import Grid from "@mui/material/Grid";
import "./SearchStyles.css";
import {TextField} from "@mui/material";

export default function Search({getBookDetails, setEan, ean, isEanVaild}) {
  const {id} = useParams();
  const navigate = useNavigate();

  console.log("Know id?");
  console.log(id);
  console.log(isEanVaild, "isEanVaild");

  function resultsRedirect(ean) {
    navigate(`/results/${ean}`);
  }

  return (
    <>
      <div id="search_box" className="search-box">
        <Grid container spacing={12}>
          <Grid container item xs={4} direction="column"></Grid>
          <Grid container item xs={4} direction="column">
            <div id="isbn-search">
              <form id="ean" onSubmit={() => resultsRedirect(ean)}>
                <TextField
                  //   id="outlined-basic"
                  label="ISBN"
                  variant="outlined"
                  fullWidth
                  type="text"
                  placeholder="Enter ISBN"
                  onChange={(e) => setEan(e.target.value)}
                  sx={{mb: 2}}
                  helperText="ISBN Ex: 012345678912"
                />
                {/* <input
                  type="text"
                  placeholder="Enter ISBN"
                  onChange={(e) => setEan(e.target.value)}></input> */}
                <Button type="submit" variant="contained" sx={{mb: 2}}>
                  Get ONIX Data
                </Button>

                <div id="no-isbn">No ISBN, no problem email Alex. </div>
              </form>
            </div>
          </Grid>
          <Grid container item xs={4} direction="column"></Grid>
        </Grid>
      </div>
    </>
  );
}
