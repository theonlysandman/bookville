import React from "react";
import { useParams } from "react-router-dom"
import "./Header.css";
import Button from "@mui/material/Button";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer"



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
				<div id="debug-section">
						<p>Below here is for debugging</p>
						<p>Valid EAN: 9781550819113</p>
						<p>Fall On Your Knees: 9780394281780</p>
						<p>In-Valid EAN: 9781550819117</p>
				</div>

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
            <Footer />
            </>
        )
}
