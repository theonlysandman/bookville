import React from "react";
import { useParams } from "react-router-dom"
import "./Header.css";
import Button from "@mui/material/Button";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer"
import Grid from "@mui/material/Grid";
import "./SearchStyles.css";

export default function Search({ getBookDetails, setEan, ean }) {
    const { id } = useParams()
	const navigate = useNavigate();


    console.log("Know id?")
    console.log(id);



    function resultsRedirect(ean) {
        navigate(`/results/${ean}`);
    }

    return (
        <>
            <Header />

            <div id="search_box">
          <Grid container spacing={12}>
              <Grid container item xs={4} direction="column">
                </Grid>
              <Grid container item xs={4} direction="column">
                <div id="isbn-search">
                    <form id="ean" onSubmit={ () => resultsRedirect(ean)}>
                        <input
                            type="text"
                            placeholder="Enter ISBN"
                            onChange={(e) => setEan(e.target.value)}
                        ></input>
                        <Button type="submit" variant="contained">
                            Get ONIX Data
                        </Button>

                        <div id="no-isbn">No ISBN, no problem email Alex. </div>
                    </form>
                </div>
                </Grid>
              <Grid container item xs={4} direction="column">
                </Grid>

            </Grid>
            </div>
            </>
        )
}
