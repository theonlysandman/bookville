import { Box } from "@mui/system";
import { Grid, TextField, Typography } from "@mui/material";
import placeholder from "../../src/assets/logo-placeholder.png";
import { Divider } from "@mui/material";
import { Image, StyleSheet, Dimensions } from "react-native";

export default function LPGMembers({ book, setEmail, setName }) {
	const win = Dimensions.get("window");

	const styles = StyleSheet.create({
		image: {
			flex: 1,
			alignSelf: "stretch",
			width: win.width,
			height: win.height
		}
	});

	return (
		<Box
			sx={{
				width: "90%",
				color: "white",
				mt: 4,
				ml: "60px"
			}}
		>
			<div id="sub-header">
				<h1>Publisher Title Nomination</h1>
				<div id="subheader-text">
					Welcome{" "}
					<b>
						{book.hasOwnProperty("Publisher")
							? book?.Publisher?.PublisherName?._text
							: ""}{" "}
					</b>
					as a LPG member you may nominate up to 5 titles for
					enrolment in the campaign, appearing in the print and
					digital catalogs in all geographic zones. For each title
					nominated, you may also optionally selected for zone
					enhancements, a larger print and digital presence in a
					single or combination of zones.
				</div>
				<div>
					To review the complete campaign information package{" "}
					<a
						target="_blank"
						href="https://www.canva.com/design/DAFaLB6VK7o/5FBLBalIbdUwA9O9gZecJw/view?utm_content=DAFaLB6VK7o&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu#1"
					>
						CLICK HERE
					</a>
				</div>
				"
			</div>

			<Typography
				variant="h5"
				sx={{
					color: "white",
					backgroundColor: "#737373",
					p: 2,
					borderRadius: 1,
					mb: 2,
					textAlign: "left"
				}}
			>
				LPG MEMBER INFORMATION
			</Typography>

			{/* make a Grid with inputs publishers, Imprint, Your name, Email */}
			<Grid container spacing={2}>
				<Grid container item xs={6} direction="column">
					<TextField
						label="Publisher"
						sx={{ mb: 2 }}
						value={
							book.hasOwnProperty("Publisher")
								? book?.Publisher?.PublisherName?._text
								: ""
						}
					/>
					<TextField
						label="Imprint"
						sx={{ mb: 2 }}
						value={
							book.hasOwnProperty("Imprint")
								? book?.Imprint?.ImprintName?._text
								: ""
						}
					/>
					<TextField
						name="your"
						label="Your Name"
						sx={{ mb: 2 }}
						onChange={(e) => setName(e.target.value)}
					/>
					<TextField
						label="Email"
						sx={{ mb: 2 }}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Grid>

				<Grid container item xs={2} direction="column">
					{/* add image here */}
					<Image
						style={styles.image}
						resizeMode={"contain"} /* <= changed  */
						alt="Missing Cover"
						source={
							book.hasOwnProperty("MediaFile")
								? book?.MediaFile?.MediaFileLink?._text
								: ""
						}
					/>
				</Grid>
			</Grid>
			<Divider
				orientation="horizontal"
				variant="middle"
				sx={{
					width: "100%",
					height: "2px",
					backgroundColor: "#B31D0C",
					margin: "0 auto",
					textAlign: "left",
					marginTop: "20px"
				}}
			/>
		</Box>
	);
}
