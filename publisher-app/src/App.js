import { useState } from "react"
import "./App.css";
import Results from "./components/Results";
import Search from "./components/Search"
import Success from "./components/Success"


import { Route, Routes  } from "react-router-dom";
import { Freehand } from "./Freehand";
import { PublisherBrand } from "./PublisherBrand";
import { BiblioshareAPI } from "./apis/BiblioshareAPI";

import { useParams } from "react-router-dom";


// import placeholder from "./assets/bookville_logo.png";

function App() {
	const [book, setBook] = useState("");

	const [ean, setEan] = useState("");

	const [error, setError] = useState("");

	const { id } = useParams();
	console.log("Know id?");
	console.log(id);
	var convert = require("xml-js");



	const getBookDetails = (ean) => {
		
		console.log(ean);
		BiblioshareAPI.getBookDetails("he7ke8hocc4tds1b", ean)
			.then((res) => {
				var book_json = convert.xml2json(res, {
					compact: true,
					spaces: 4
				});

				console.log("got JS response");
				const book_json_parsed = JSON.parse(book_json);
				console.log(book_json_parsed);

				if (book_json_parsed.Product) {
					console.log("product found");
					console.log(book_json_parsed.Product.Title.TitleText);
					setBook(book_json_parsed.Product);
					setError("");
				} else {
					console.log("invalid EAN");
					setError("Invalid EAN! What are you a hacker?");
					setBook("");
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<div classNameName="App">
				<Routes>
					<Route path="/" element={<Search getBookDetails={getBookDetails} setEan={setEan} ean={ean} />} />
					<Route path="/success" element={<Success />} />
					<Route path="/search" element={<Search getBookDetails={getBookDetails} setEan={setEan} ean={ean} />} />
					<Route path="/results/:id" element={<Results getBookDetails={getBookDetails} setEan={setEan} book={book} />} />
					<Route path="/freehand" element={<Freehand />} />
				</Routes>

				</div>
		</>
	);
}

export default App;

//git remote set-url origin https://exampleuser:b8c28127***63gu56b2d@github.com/exampleuser/exampleproject.git

//<Footer />
//https://theonlysandman:b8c28127***63gu56b2d@github.com/exampleuser/exampleproject.git
