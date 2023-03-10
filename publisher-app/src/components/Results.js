import React from "react";
import { useState, useEffect } from "react"
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Footer from "./Footer"


import { useParams } from "react-router-dom"
import "./Header.css";
import Header from "./Header";
import Campaign from "./Campaign"
import Section1 from "./Section1"
import LPGMembers from "./LPGMembers"
import emailjs from '@emailjs/browser';


export default function Result({ getBookDetails, setEan, book }) {
    const { id } = useParams()
    
	const [error, setError] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		alert(`Handle Submit`);
		console.log(event.target);
		console.log(event.target.your);
	}

	useEffect(() => {
		getBookDetails(id);
	}, []);


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
		var str7 = str6.replace(/&lt;div&gt;/g, "");

		return str7;
	}

	const submitNomination = (e, templateParams) => {
		console.log("here we should send an email");
		console.log(e.target);
		e.preventDefault();
	//	emailjs.send('service_828erdg', 'template_gwo9djb', templateParams, '-ajVzYm2FgRIQHhAT')
	//		.then((result) => {
	//			console.log(result.text);
	//		}, (error) => {
	//			console.log(error.text);
	//		});
	};

	return (
        <>
			<Header />
			<form onSubmit={handleSubmit}>>
				<LPGMembers book={book} />
				<Section1 book={book} />
				<Campaign book={book} submitNomination={submitNomination} /> 
			</form>
			<Footer />
			<div id="error-messages">{error && <p>{error}</p>}</div>

            </>
        )
}
