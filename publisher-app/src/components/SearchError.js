import React from "react";
import {Link, useParams} from "react-router-dom";
// import "./Header.css";
import Grid from "@mui/material/Grid";
import "./SearchStyles.css";

export default function SearchError({ean}) {
  const {id} = useParams();

  return (
    <>
      <div className="error-msg">
        <Grid container>
          {/* <Grid container item xs={3} direction="column"></Grid> */}
          <Grid container item xs={12} direction="column">
            <div id="error-msg">
              <h2>ISBN Error! We are sorry!</h2>
              We had an error with <b>{ean}</b> but don't worry we are working
              on it.
              <br />
              Click here to <Link to="/search">try another</Link>
              {/* <a href="/search">try another</a> */}, remember you can
              nominate up to five books.
            </div>
          </Grid>
          {/* <Grid container item xs={4} direction="column"></Grid> */}
        </Grid>
      </div>
    </>
  );
}
