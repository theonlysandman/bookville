import React from "react";
import {useParams} from "react-router-dom";
import "./Header.css";
import Header from "./Header";
import Footer from "./Footer";
import Grid from "@mui/material/Grid";
import "./SearchStyles.css";

export default function SearchError({ean}) {
  const {id} = useParams();

  return (
    <>
      <div className="error-msg">
        <Grid container spacing={12}>
          <Grid container item xs={4} direction="column"></Grid>
          <Grid container item xs={4} direction="column">
            <div id="error-msg">
              <h2>ISBN Error! We are sorry!</h2>
              We had an error with <b>{ean}</b> but don't worry we are working
              on it.
              <br />
              Click here to <a href="/search">try another</a>, remember you can
              nominate up to five books.
            </div>
          </Grid>
          <Grid container item xs={4} direction="column"></Grid>
        </Grid>
      </div>
    </>
  );
}
