import React from "react";
import { useParams } from "react-router-dom"
import logo from '../assets/bookville_logo.png'
import { Divider } from "@mui/material";
import Box from '@mui/material/Box';

export default function Header() {
    const { id } = useParams()
    console.log("Know id?")
    console.log(id)

    return (
        <header className="App-header">
            <img src={logo} alt="logo" className="logo" />
            {id && <p>{id} choose your books! </p>}

            {/* implement hr with material ui */}
            <Divider
                orientation="horizontal"
                variant="middle"
                sx={{
                    width: "90%",
                    height: "2px",
                    backgroundColor: "#B31D0C",
                    margin: "0 auto",
                    textAlign: "left",
                }}
            />

            <Box id="subheader" sx={{ textAlign: "left", margin: "0 auto", width: "90%" }}>
                <h1 style={
                    {
                        marginLeft: "50px",
                    }
                } >
                    Publisher{" "}
                    <span
                        style={{
                            color: "#B31D0C",
                            fontWeight: "bold",
                            padding: "0 5px",
                            margin: "0 5px",
                        }}
                    >
                        Title
                    </span>
                    Nominations
                </h1>
                <Box id="subheader-text">
                    <Box
                        // left aligned text
                        sx={{
                            textAlign: "left",
                            width: "100%",
                            margin: "0 auto",
                        }}
                    >
                        Welcome (publisher place holder) as a LPG member you may nominate up to 5 titles for enrolment in the campaign, 
                        appearing in the print and digital catalogs in all geographic zones. For each title nominated, you may also
                        optionally selected for zone enhancements, a larger print and digital presence in a single or combination of
                        zones.
                    </Box>
                </Box>
            </Box>
        </header>
    )
}
