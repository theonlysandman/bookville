import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Box from "@mui/material/Box";

//import PublisherBookForm from "./PublisherBookForm"
import { BiblioshareAPI } from "./apis/BiblioshareAPI";
import { Route, Routes } from "react-router-dom";
import { Freehand } from "./Freehand";
import { PublisherBrand } from "./PublisherBrand";

import { useParams } from "react-router-dom";

import LPGMembers from "./components/LPGMembers";
import Section1 from "./components/Section1";
import Compaign from "./components/Compaign";

function App() {
    const [book, setBook] = useState("");
    const [error, setError] = useState("");
    const [ean, setEan] = useState("");

    const { id } = useParams();
    console.log("Know id?");
    console.log(id);
    var convert = require("xml-js");

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

    const getBookDetails = (event) => {
        event.preventDefault();
        console.log(ean);
        BiblioshareAPI.getBookDetails("he7ke8hocc4tds1b", ean)
            .then((res) => {
                var book_json = convert.xml2json(res, { compact: true, spaces: 4 });

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
            <Box className="App">
                <Routes>
                    <Route path="/" />
                    <Route path="/freehand" element={<Freehand />} />
                    <Route path="/publisher" element={<PublisherBrand />}>
                        <Route path=":id" element={<PublisherBrand />} />
                    </Route>
                </Routes>

                <Header />
                <LPGMembers />
                <Section1 />
                <Compaign />

                {/* <div id="isbn-search">
                    <form id="ean" onSubmit={getBookDetails} >
                        <input type="text" placeholder="Enter EAN" onChange={(e) => setEan(e.target.value)} ></input>
                        <Button type="submit" variant="contained">Get ONIX Data</Button>
                    </form>
                </div>

                <div id="error-messages">
                    {error && <p>{error}</p>}
                </div> */}

                {/* Title 1 Code */}
                
            </Box>
        </>
    );
}

export default App;

//git remote set-url origin https://exampleuser:b8c28127***63gu56b2d@github.com/exampleuser/exampleproject.git

//<Footer />
//https://theonlysandman:b8c28127***63gu56b2d@github.com/exampleuser/exampleproject.git
