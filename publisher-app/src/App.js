
import { useState } from 'react'
import './App.css'
import Header from './components/Header'

import Button from '@mui/material/Button'
import logo from './bookville_logo.png'
import Footer from "./Footer"
//import PublisherBookForm from "./PublisherBookForm"
import { BiblioshareAPI } from "./apis/BiblioshareAPI"
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
                <Routes>
                    <Route path="/" />
                    <Route path="/freehand" element={<Freehand />} />

                    <Route path="/publisher" element={<PublisherBrand />}>
                        <Route path=":id" element={<PublisherBrand />} />
                    </Route>
                </Routes>

            <Header/>
        <div className="publisher">
              <form id="ean" onSubmit={getBookDetails} >
                      <input type="text" placeholder="Enter EAN" onChange={(e) => setEan(e.target.value)} ></input>
                      <Button type="submit" variant="contained">Get ONIX Data</Button>
            </form>
             {/*<PublisherBookForm />*/}


              <div class="form-seperator">LPG Member Info</div>
              <div>
                        {/*console.log("Here = " +book.SupplyDetail.Price)*/}

                {book.hasOwnProperty('Publisher')
                    ? <div>Publisher: {book.Publisher.PublisherName._text}</div>
                    : <div>Publisher: None Available</div>
                }

                {book.hasOwnProperty('Imprint')
                    ? <div>ImprintName: {book.Imprint.ImprintName._text}</div>
                    : <div>ImprintName: None Available</div>
                }
                


                <div class="form-seperator">{book && <div>{book.Title.TitleText._text}</div>}
                </div>
                        <div>ISBN = { ean } </div>
             {error && <p>{error}</p>}
                {book.hasOwnProperty('Subtitle')
                            ? <div>Subtitle: {book.Subtitle._text}</div>
                            : <div>Subtitle: None Available</div>
                }
                {book && <div>By</div>}
                {book && <div>{book.Contributor.PersonName._text}</div>}


                        
               {book.hasOwnProperty('OtherText')
                            ? <div>Main Description: {book.OtherText[0].Text._text}</div>
                            : <div>Main Description: None Available</div>
                }

                

               
                {book.hasOwnProperty('SupplyDetail')
                    ? <div>Price: {book.SupplyDetail.Price[0].PriceAmount._text}</div>
                    : <div>Price: None Available</div>
                }

                {book && <div>Product Form Details: {book.ProductFormDetail._text}</div>}
                {book.hasOwnProperty('BASICMainSubject')
                    ? <div>BASICMainSubject: {book.BASICMainSubject._text}</div> 
                    : <div>BASICMainSubject: None Available</div>
                }

               {book.hasOwnProperty('MediaFile')
                    ? <div>Cover: <img src={book.MediaFile.MediaFileLink._text} /></div>
                    : <div>Cover: None Available</div>
                }
        
               {book.hasOwnProperty('SupplyDetail')
                   ? <div>Price: {book.SupplyDetail.Price[0].PriceAmount._text}</div>
                   : <div>Price: None Available</div>
               }

                        

                
                {book &&
                    <div id="checkbox-section">
                        <Checkbox
                            label="Apply For Enhancement"
                            value={checked}
                            onChange={handleChange}
                        />
                    </div>
                }
                </div>
                <div id="debug-section">
                    <p>Below here is for debugging</p>
                    <p>Valid EAN: 9781550819113</p>
                    <p>Fall On Your Knees: 9780394281780</p>
                    <p>In-Valid EAN: 9781550819117</p>
                </div>  
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
