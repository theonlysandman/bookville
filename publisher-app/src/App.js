import {useEffect, useState} from "react";
import "./App.css";
import Results from "./components/Results";
import Search from "./components/Search";
import Success from "./components/Success";
import SearchError from "./components/SearchError";

import {useNavigate} from "react-router-dom";
import {Route, Routes} from "react-router-dom";
import {Freehand} from "./Freehand";
import {BiblioshareAPI} from "./apis/BiblioshareAPI";

import {useParams} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  var convert = require("xml-js");

  const [book, setBook] = useState("");
  const [ean, setEan] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {id} = useParams();
  
  const getBookDetails = (ean) => {
    console.log(ean);
    BiblioshareAPI.getBookDetails("he7ke8hocc4tds1b", ean)
      .then((res) => {
        var options = { compact: true, spaces: 4, alwaysArray: true  };
        const book_json_parsed = JSON.parse(convert.xml2json(res, options));
          
        if (book_json_parsed.Product) {
          setBook(book_json_parsed.Product[0]);
          setError("");
        } else {
          console.log("invalid EAN");
          setError("Invalid EAN! What are you a hacker?");
          setBook("");
          navigate("/searcherror/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="App">
        <Header />
        <div className="main-container">
          <Routes>
            <Route
              path="/"
              element={
                <Search
                  getBookDetails={getBookDetails}
                  setEan={setEan}
                  ean={ean}
                />
              }
            />
            <Route path="/success" element={<Success />} />
            <Route path="/searcherror" element={<SearchError ean={ean} />} />
            <Route
              path="/search"
              element={
                <Search
                  getBookDetails={getBookDetails}
                  setEan={setEan}
                  ean={ean}
                />
              }
            />
            <Route
              path="/results/:id"
              element={
                <Results
                  getBookDetails={getBookDetails}
                  setEan={setEan}
                  book={book}
                />
              }
            />
            <Route path="/freehand" element={<Freehand />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

//git remote set-url origin https://exampleuser:b8c28127***63gu56b2d@github.com/exampleuser/exampleproject.git

//https://theonlysandman:b8c28127***63gu56b2d@github.com/exampleuser/exampleproject.git
