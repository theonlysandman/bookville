import React from "react";
import {useState, useEffect} from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Footer from "./Footer";

import {useParams} from "react-router-dom";
import "./Header.css";
// import Header from "./Header";
import Campaign from "./Campaign";
import Section1 from "./Section1";
import LPGMembers from "./LPGMembers";
import emailjs from "@emailjs/browser";
import {useNavigate} from "react-router-dom";

export default function Result({getBookDetails, setEan, book}) {
  const {id} = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [splash, setSplash] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [pubNotes, setPubNotes] = useState("");

  const [zoneCheckboxes, setzoneCheckboxes] = useState({
    zone1: false,
    zone2: false,
    zone3: false,
    zone4: false,
    zone5: false,
  });

  const [zoneDetailCheckboxes, setzoneDetailCheckboxes] = useState({
    zone1: false,
    zone2: false,
    zone3: false,
    zone4: false,
    zone5: false,
  });

  const navigate = useNavigate();

  function resultsRedirect(ean) {
    navigate(`/success/${ean}`);
  }

  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    console.log(event.target.your);
  };

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

  const submitNomination = () => {
    console.log("here we should send an email");
    // console.log(e.target);
    // e.preventDefault();

    // Here we should get the values from the form
    // and send them to emailjs
    console.log("book", book);

    // Construct the email subject and body
    const emailSubject = `LPG Book Nomination: ${book?.Title[0]?.TitleText._text}`;
    
    console.log("book ", book?.Title[0]?.TitleText._text);
    const templateParams = {
      name: name,
      email: email,
      subject: emailSubject,
      book_title: book?.Title[0]?.TitleText[0]._text,
      zone1Checkbox: zoneCheckboxes?.zone1,
      zone2Checkbox: zoneCheckboxes?.zone2,
      zone3Checkbox: zoneCheckboxes?.zone3,
      zone4Checkbox: zoneCheckboxes?.zone4,
      zone5Checkbox: zoneCheckboxes?.zone5,
      enrollmentCheckbox: zoneCheckboxes?.enrollment,
      splash_line: splash,
      short_desc: shortDesc,
      pub_notes: pubNotes,
      zone1DetailCheckbox: zoneDetailCheckboxes?.zone1,
      zone2DetailCheckbox: zoneDetailCheckboxes?.zone2,
      zone3DetailCheckbox: zoneDetailCheckboxes?.zone3,
      zone4DetailCheckbox: zoneDetailCheckboxes?.zone4,
      zone5DetailCheckbox: zoneDetailCheckboxes?.zone5,
    };

    // Send the email
    emailjs
      .send(
        "service_828erdg",
        "template_gwo9djb",
        templateParams,
        "-ajVzYm2FgRIQHhAT"
      )
      .then(
        (result) => {
          navigate("/success");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div id="resultsPage">
        <form onSubmit={handleSubmit}>
          <LPGMembers book={book} setEmail={setEmail} setName={setName} />
          <Section1
            book={book}
            setzoneDetailCheckboxes={setzoneDetailCheckboxes}
            zoneDetailCheckboxes={zoneDetailCheckboxes}
            setSplash={setSplash}
            setShortDesc={setShortDesc}
            setPubNotes={setPubNotes}
          />
          <Campaign
            book={book}
            submitNomination={submitNomination}
            setzoneCheckboxes={setzoneCheckboxes}
            zoneCheckboxes={zoneCheckboxes}
          />
        </form>
      </div>

      <div id="error-messages">{error && <p>{error}</p>}</div>
    </>
  );
}
