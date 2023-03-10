import React from "react";
import { useParams } from "react-router-dom"
import "./Header.css";
import Button from "@mui/material/Button";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer"
import Grid from "@mui/material/Grid";
import "./SearchStyles.css";

export default function Success({ getBookDetails, setEan, ean }) {
    const { id } = useParams()


    return (
        <>
            <Header />

            <div id="success-msg">
          <Grid container spacing={12}>
              <Grid container item xs={4} direction="column">
                </Grid>
              <Grid container item xs={4} direction="column">
                        <div id="success-msg">
                            Success! You have submitted your book for nomination.
                            <br />
                            Click here to <a href="/search/">submit another book</a>, remember you can nominate up to five books.
                </div>
                </Grid>
              <Grid container item xs={4} direction="column">
                </Grid>

            </Grid>
            </div>
            </>
        )
}
