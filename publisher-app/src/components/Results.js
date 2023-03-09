import React from "react";
import { useState, useEffect } from "react"
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { useParams } from "react-router-dom"
import "./Header.css";
import Header from "./Header";
import Campaign from "./Campaign"
import Section1 from "./Section1"
import LPGMembers from "./LPGMembers"


export default function Result({ getBookDetails, setEan, book }) {
    const { id } = useParams()
    console.log("Know id?")
	console.log(id)

	const [error, setError] = useState("");
	

	useEffect(() => {
		getBookDetails(id);
	}, []);

	console.log("the book", book);


	function removeHTMLTags(str) {
		return str.replace(/<[^>]*>/g, "");
	}

	function removeAngleBrackets(str) {
		var str1 = str.replace(/&lt;p&gt;/g, "");
		var str2 = str1.replace(/&lt;strong&gt;/g, "");
		var str3 = str2.replace(/&lt;\/strong&gt;/g, "");
		var str4 = str3.replace(/&lt;\/p&gt;/g, "");
		var str5 = str4.replace(/&lt;br&gt;/g, "");
		var str6 = str5.replace(/&lt;\/?em&gt;/g, "");
		return str6;
	}

	const submitNomination = (event) => {
		alert(book.Barcode._text);
		console.log(book.Barcode._text);
	}

	return (
        <>
			<Header />

			<LPGMembers book={book} />
			<Section1 book={book} />
			<Campaign /> 





			<div id="error-messages">{error && <p>{error}</p>}</div>

            </>
        )
}


/*
 *         <header className="Header">
            <img src={require("../assets/bookville_logo.png")} className="Logo" alt="Bookville Logo" />
            <nav className="Nav">
                <a href="/">Home</a>
                <a href="/publishers">Publishers </a>
                <a href="/about">About</a>
            </nav>
        </header>
*/