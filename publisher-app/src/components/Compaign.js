import React from 'react';
import { Typography, Grid, FormControlLabel, FormGroup, Checkbox, Divider } from '@mui/material';
import { Button } from "@mui/material";
function Compaign() {
    return (
        <div>
            <Divider
                orientation="horizontal"
                variant="middle"
                sx={{
                    width: "90%",
                    height: "2px",
                    backgroundColor: "#B31D0C",
                    margin: "0 auto",
                    textAlign: "left",
                    marginBottom: "10px",
                }}
            />
            <Grid container alignItems="center" spacing={3}
                sx={{
                    paddingLeft: "50px",
                    width: "80%",
                }}
            >
                {/* col 1 */}
                <Grid item xs={3}>
                    <Typography variant="h6" align="center"
                        sx={{
                            color: "#B31D0C",
                            fontWeight: "bold"
                        }}
                    >
                        Campaign Enrollment
                    </Typography>
                </Grid>

                {/* col 2 */}
                <Grid item xs={3}>
                    <Typography variant="h6" align="center">
                        All Zones
                    </Typography>
                    <FormControlLabel
                        control={<Checkbox
                            sx={{
                                borderRadius: '50%',
                                '&.Mui-checked': {
                                    color: '#fff',
                                    backgroundColor: '#B31D0C',
                                },
                            }}
                        />}
                        shape="rounded"
                        label="$80"
                        labelPlacement="bottom"
                    />
                </Grid>

                {/* col 3 */}
                <Grid item xs={6}>
                    <Typography variant="h6" align="center"
                        sx={{
                            borderRadius: '50%',
                            '&.Mui-checked': {
                                color: '#fff',
                                backgroundColor: '#B31D0C',
                            },
                        }}>
                        Enhancement(s)
                    </Typography>
                    <FormGroup row>
                        <FormControlLabel
                            control={<Checkbox sx={{
                                borderRadius: '50%',
                                '&.Mui-checked': {
                                    color: '#fff',
                                    backgroundColor: '#B31D0C',
                                },
                            }} />}
                            label="Zone 1"
                            labelPlacement="start"
                        />
                        <FormControlLabel
                            control={<Checkbox sx={{
                                borderRadius: '50%',
                                '&.Mui-checked': {
                                    color: '#fff',
                                    backgroundColor: '#B31D0C',
                                },
                            }} />}
                            label="Zone 2"
                            labelPlacement="start"
                        />
                        <FormControlLabel
                            control={<Checkbox sx={{
                                borderRadius: '50%',
                                '&.Mui-checked': {
                                    color: '#fff',
                                    backgroundColor: '#B31D0C',
                                },
                            }} />}
                            label="Zone 3"
                            labelPlacement="start"
                        />
                        <FormControlLabel
                            control={<Checkbox sx={{
                                borderRadius: '50%',
                                '&.Mui-checked': {
                                    color: '#fff',
                                    backgroundColor: '#B31D0C',
                                },
                            }} />}
                            label="Zone 4"
                            labelPlacement="start"
                        />
                        <FormControlLabel
                            control={<Checkbox sx={{
                                borderRadius: '50%',
                                '&.Mui-checked': {
                                    color: '#fff',
                                    backgroundColor: '#B31D0C',
                                },
                            }} />}
                            label="Zone 5"
                            labelPlacement="start"
                        />
                    </FormGroup>
                </Grid>
            </Grid>

                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#FF0000",
                        color: "#FFFFFF",
                        cursor: "pointer",
                        "&:hover": {
                            backgroundColor: "#FF3333",
                        },
                        marginBottom: "10px",
                        marginTop: "10px",
                        borderRadius: "10px",
                    }}
                >
                    Submit
                </Button>
        </div>
    );
}

export default Compaign;
