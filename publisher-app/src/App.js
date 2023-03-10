import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import {TextField} from "@mui/material";

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

                <Box id="isbn-search"
                    sx={{
                        width: "90%",
                        color: "white",
                        mt: 4,
                        ml: "60px",
                    }}
                >
                    <form id="ean" onSubmit={getBookDetails} >
                        <TextField type="text" placeholder="Enter EAN" onChange={(e) => setEan(e.target.value)}
                            sx={{
                                p: 2,
                                width: "50%",
                                color: "white",
                                border: "none",
                                borderRadius: "5px",
                                fontSize: "1.2rem",
                                "&:focus": {
                                    outline: "none",
                                },
                            }}
                            
                        ></TextField>
                        <Button type="submit" variant="contained"
                            sx={{
                                p: 2,
                                mt: 2,
                                backgroundColor: "#B31D0C",
                                fontWeight: "bold",
                                fontSize: "16px"
                            }}
                        >Get ONIX Data</Button>
                    </form>
                </Box>

                <div id="error-messages">
                    {error && <p>{error}</p>}
                </div>

                {/* Title 1 Code */}

                <LPGMembers />
                <Section1 />
                <Compaign />
                
            </Box>
        </>
    );
}

export default App;

//git remote set-url origin https://exampleuser:b8c28127***63gu56b2d@github.com/exampleuser/exampleproject.git

//<Footer />
//https://theonlysandman:b8c28127***63gu56b2d@github.com/exampleuser/exampleproject.git
