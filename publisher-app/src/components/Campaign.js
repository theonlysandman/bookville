import React from "react";
import {
	Typography,
	Grid,
	FormControlLabel,
	FormGroup,
	Checkbox,
	Divider
} from "@mui/material";
import { Button } from "@mui/material";

export default function Campaign({ book, submitNomination }) {
	var templateParams = {
		to_name: "Alex",
		from_name: "Sandy",
		book_title: "Fall On Your Knees!"
	};
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
					marginBottom: "10px"
				}}
			/>
			<Grid
				container
				alignItems="center"
				spacing={3}
				sx={{
					paddingLeft: "50px",
					width: "80%"
				}}
			>
				{/* col 1 */}
				<Grid item xs={6}>
					<Typography
						variant="h6"
						align="center"
						sx={{
							color: "#B31D0C",
							fontWeight: "bold"
						}}
					>
						Campaign Enrollment
					</Typography>
					<Typography variant="h6" align="center">
						All Zones
					</Typography>
					<FormControlLabel
						control={
							<Checkbox
								sx={{
									borderRadius: "50%",
									"&.Mui-checked": {
										color: "#fff",
										backgroundColor: "#B31D0C"
									}
								}}
							/>
						}
						shape="rounded"
						label="$80"
						labelPlacement="bottom"
					/>
				</Grid>

				{/* col 2 */}
				<Grid
					container
					item
					xs={6}
					direction="column"
					sx={{
						ml: 20
					}}
				>
					<FormGroup>
						<Grid container item direction="column">
							<FormControlLabel
								control={
									<Checkbox
										sx={{
											borderRadius: "50%",
											"&.Mui-checked": {
												color: "#fff",
												backgroundColor: "#B31D0C"
											}
										}}
									/>
								}
								label="Zone 1 - Rural Central Ontario"
							/>
							<FormControlLabel
								control={
									<Checkbox
										sx={{
											borderRadius: "50%",
											"&.Mui-checked": {
												color: "#fff",
												backgroundColor: "#B31D0C"
											}
										}}
									/>
								}
								label="Zone 2 - Northern Alberta"
							/>
							<FormControlLabel
								control={
									<Checkbox
										sx={{
											borderRadius: "50%",
											"&.Mui-checked": {
												color: "#fff",
												backgroundColor: "#B31D0C"
											}
										}}
									/>
								}
								label="Zone 3 -Northern Saskatchewan"
							/>

							<FormControlLabel
								control={
									<Checkbox
										sx={{
											borderRadius: "50%",
											"&.Mui-checked": {
												color: "#fff",
												backgroundColor: "#B31D0C"
											}
										}}
									/>
								}
								label="Zone 4 - Rural Central Ontario"
							/>
							<FormControlLabel
								control={
									<Checkbox
										sx={{
											borderRadius: "50%",
											"&.Mui-checked": {
												color: "#fff",
												backgroundColor: "#B31D0C"
											}
										}}
									/>
								}
								label="Zone 5 - Rural Newfoundland & Labrador"
							/>
						</Grid>
					</FormGroup>
				</Grid>
			</Grid>

			<Button
				type="submit"
				onClick={() => submitNomination(templateParams)}
				variant="contained"
				sx={{
					backgroundColor: "#FF0000",
					color: "#FFFFFF",
					cursor: "pointer",
					"&:hover": {
						backgroundColor: "#FF3333"
					},
					marginBottom: "10px",
					marginTop: "10px",
					borderRadius: "10px"
				}}
			>
				Submit
			</Button>
		</div>
	);
}

/*
 *         <header className="Header">
            <img src={require("../assets/bookville_logo.png")} className="Logo" alt="Bookville Logo" />
            <nav className="Nav">
                <a href="/">Home</a>
                <a href="/publishers">Publishers </a>
                <a href="/about">About</a>
            </nav>
        </header>
*/
