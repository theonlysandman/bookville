
import { useState } from 'react'
import './App.css'
import Header from './components/Header'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'


import logo from './bookville_logo.png'
import Footer from "./Footer"
//import PublisherBookForm from "./PublisherBookForm"
import { BiblioshareAPI } from "./apis/BiblioshareAPI"
import { Route, Routes } from "react-router-dom"
import { Freehand } from "./Freehand"
import { PublisherBrand } from "./PublisherBrand"

import { useParams } from "react-router-dom"


import placeholder from './assets/bookville_logo.png'


function App() {

    const [book, setBook] = useState('')
    const [error , setError] = useState('')
    const [ean, setEan] = useState('')

    const { id } = useParams() 
    console.log("Know id?")
    console.log(id)
    var convert = require('xml-js');

    function removeHTMLTags(str) {
        return str.replace(/<[^>]*>/g, '');
    }

    function removeAngleBrackets(str) {
        var str1 = str.replace(/&lt;p&gt;/g, '');
        var str2 = str1.replace(/&lt;strong&gt;/g, '');
        var str3 = str2.replace(/&lt;\/strong&gt;/g, '');
        var str4 = str3.replace(/&lt;\/p&gt;/g, '');
        var str5 = str4.replace(/&lt;br&gt;/g, '');
        var str6 = str5.replace(/&lt;\/?em&gt;/g, '');
        return str6
    }


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

                <Header />

                <div><h1>Publisher Title Nomination</h1></div>
                <div class="form-seperator">LPG Member Info</div>
                <Grid container spacing={2} >
                    <Grid container item xs={6} direction="column" >
                        <TextField label="Publisher" value=""/>
                        <TextField label="Imprint"/>
                        <TextField label="Your Name" />
                        <TextField label="Your Email" />
                    </Grid>
                    <Grid container item xs={6} direction="column" >
                        <img src="assests/logo-placeholder.png}" />
                    </Grid>
                </Grid>

            <div className="publisher">
                    <div class="form-seperator">{book ? <div>{book.Title.TitleText._text }</div> : <div>Title not set</div>}</div>
                    <div>
                        <div class="form-section">
                           <Grid container spacing={14} >
                                <Grid container item xs={6} direction="column" >
                                    <TextField label="Subtitle" value="My creepy subtitle" />
                                    <TextField label="Publication Year" />
                                    <TextField label="Contributors" />
                                </Grid>
                                <Grid container item xs={6} direction="column">
                                        <TextField label="ISBN" />
                                        <TextField label="Price" />
                                        <TextField label="Contributors Hometown" />
                                </Grid>
                            </Grid>
                     </div>              

                        <div class="form-section">
                            <Grid container spacing={4} >
                                <Grid container item xs={12} direction="column" >
                                    <TextField label="Main Description" />
                                    <TextField label="Short Description" />
                                </Grid>
                            </Grid>
                        </div>

                        <div class="form-section">
                            <Grid container spacing={14} >
                                <Grid container item xs={6} direction="column" >
                                    <TextField label="Subject (BISAC) :" />
                                </Grid>
                                <Grid container item xs={6} direction="column">
                                    <TextField label="Region (BISAC)" />
                                </Grid>
                            </Grid>
                        </div>

                        <div class="form-section">
                            <Grid container spacing={14} >
                                <Grid container item xs={4} direction="column" >
                                    <span>Additional Location Relevance</span><br /><span>(Check all that apply)</span>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Contributor" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Theme" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Subject" />
                                    </FormGroup>
                                </Grid>
                                <Grid container item xs={4} direction="column">
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Zone 1 -- Rural Yukon & NWT" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Zone 2 -- Northern Alberta" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Zone 3 -- Northern Saskatchewan" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Zone 4 -- - Rural Central Ontario" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Zone 5 -- Rural Newfoundland & Labrador" />
                                    </FormGroup>
                                </Grid>
                            </Grid>
                        </div>
                        <div class="paid-form-section">
                            <Grid container spacing={14} >
                                <Grid container item xs={6} direction="column" >
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Campaign Enrollment" />
                                    </FormGroup>
                                </Grid>
                                <Grid container item xs={6} direction="column">
                                    <span>Enhancement(s) $50 per zone</span>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Zone 1" labelPlacement="start" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Zone 2" labelPlacement="start" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Zone 3" labelPlacement="start" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Zone 4" labelPlacement="start" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Zone 5" labelPlacement="start" />
                                    </FormGroup>
                                </Grid>
                            </Grid>
                        </div>
                        <div>
                            <Button variant="contained">Submit Request</Button>
                        </div>

                        <form id="ean" onSubmit={getBookDetails} >
                            <input type="text" placeholder="Enter EAN" onChange={(e) => setEan(e.target.value)} ></input>
                            <Button type="submit" variant="contained">Get ONIX Data</Button>
                        </form>


                {book.hasOwnProperty('Imprint')
                    ? <div>ImprintName: {book.Imprint.ImprintName._text}</div>
                    : <div>ImprintName: None Available</div>
                }
               </div> 
                    <div class="form-seperator">{book && <div>Title</div>}



               
                <div>ISBN = { ean } </div>
                {error && <p>{error}</p>}
                {book.hasOwnProperty('Subtitle')
                            ? <div>Subtitle: {book.Subtitle._text}</div>
                            : <div>Subtitle: None Available</div>
                }
                {book && <div>By</div>}
                {book && <div>{book.Contributor.PersonName._text}</div>}

                        {book.hasOwnProperty('OtherText')

                        }

                        
               {book.hasOwnProperty('OtherText')
                            ? <div>Main Description: {removeAngleBrackets(book.OtherText[0].Text._text)}</div>
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


export default App;


//git remote set-url origin https://exampleuser:b8c28127***63gu56b2d@github.com/exampleuser/exampleproject.git



//<Footer />
//https://theonlysandman:b8c28127***63gu56b2d@github.com/exampleuser/exampleproject.git
