import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button'
import logo from './bookville_logo.png'
import Footer from "./Footer"
//import PublisherBookForm from "./PublisherBookForm"
import { BiblioshareAPI } from ".//apis/BiblioshareAPI"
import { Route, Routes } from "react-router-dom"
import { Freehand } from "./Freehand"
import { PublisherBrand } from "./PublisherBrand"

import { useParams } from "react-router-dom"


function App() {

    //example url https://www.biblioshare.org/BNCServices/BNCServices.asmx/ONIX?Token=he7ke8hocc4tds1b&EAN=9781550819113
    //axios.get('https://www.biblioshare.org/BNCServices/BNCServices.asmx/ONIX?token=he7ke8hocc4tds1b')
    //    .then(res)

    //& EAN=${ encodeURIComponent(request_data.EAN)
    //const convert = require("xml-js");
    const [book, setBook] = useState('')
    const [error , setError] = useState('')
    const [ean, setEan] = useState('')

    const { id } = useParams() 
    console.log("Know id?")
    console.log(id)
    var convert = require('xml-js');


    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };


    const request_data = { token: "he7ke8hocc4tds1b", EAN: "9781550819113" };
    const quote_url = 'https://api.quotable.io/random';
    const biblioshare_url = 'https://www.biblioshare.org/BNCServices/BNCServices.asmx/ONIX';
    const url = biblioshare_url;

    const getBookDetails = (event: FormEvent) => { 
        event.preventDefault();
        console.log(ean)
        BiblioshareAPI.getBookDetails("he7ke8hocc4tds1b", ean)
        .then(res => {
            var book_json = convert.xml2json(res, { compact: true, spaces: 4 });

            console.log("got JS response")
            const book_json_parsed = JSON.parse(book_json)
            console.log(book_json_parsed)

            if (book_json_parsed.Product) {
                console.log("product found")
                console.log(book_json_parsed.Product.Title.TitleText)
                setBook(book_json_parsed.Product)
                setError("")
            } else { 
                console.log("invalid EAN")
                setError("Invalid EAN! What are you a hacker?")
                setBook("")
      
            }
            

        }).catch(err => {
                console.log(err);
         })
    }
    return (
    <>

            <div className="App">
            <header className="App-header">
                    <img src={logo} alt="logo" class="logo" />
                    <Routes>
                        <Route path="/" />
                        <Route path="/freehand" element={<Freehand />} />

                        <Route path="/publisher" element={<PublisherBrand />}>
                            <Route path=":id" element={<PublisherBrand />} />
                        </Route>
                    </Routes>
                    {id && <p>{id} choose your books! </p>}
            </header>
        <div className="publisher">
              <form id="ean" onSubmit={getBookDetails} >
                      <input type="text" placeholder="Enter EAN" onChange={(e) => setEan(e.target.value)} ></input>
                      <Button type="submit" variant="contained">Get ONIX Data</Button>
            </form>
             {/*<PublisherBookForm />*/}
                </div>

              {error && <p>{error}</p> }
                {book && <p>Pleae confirm the details for the book you are submitting:</p> }
                {book && <div>{book.Title.TitleText._text}</div>}
                {book && <div>By</div>}
                {book && <div>{book.Contributor.PersonName._text}</div>}
                {book.RecordSourceName && <div>Published By: {book.Imprint.ImprintName._text}</div>}
                {book && <div>Product Form Details: {book.ProductFormDetail._text}</div>}
                {book && <div>Price: {book.SupplyDetail.Price[0].PriceAmount._text} {book.SupplyDetail.Price[0].CurrencyCode._text}</div> }

                {book &&
                    <div id="checkbox-section">
                        <Checkbox
                            label="Apply For Enhancement"
                            value={checked}
                            onChange={handleChange}
                        />
                    </div>
                }
                <div id="debug-section">
                    <p>Below here is for debugging</p>
                    <p>Valid EAN: 9781550819113</p>
                    <p>Fall On Your Knees: 9780394281780</p>
                    <p>In-Valid EAN: 9781550819117</p>
                </div>  
            </div>
        </>

  );
}

const Checkbox = ({ label, value, onChange }) => {
    return (
        <label>
            <input type="checkbox" checked={value} onChange={onChange} />
            {label}
        </label>
    );
};

export default App;


//git remote set-url origin https://exampleuser:b8c28127***63gu56b2d@github.com/exampleuser/exampleproject.git



//<Footer />
//https://theonlysandman:b8c28127***63gu56b2d@github.com/exampleuser/exampleproject.git
