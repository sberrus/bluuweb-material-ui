import { Container, Grid, Typography } from "@mui/material";

const MuiGrid = () => {
	const containerStyle = {
		border: "5px solid #000",
		textAlign: "center",
	};
	const itemStyle = {
		height: "5em",
		border: "1px solid red",
	};

	return (
		<>
			<Typography variant="h2">MuiGrid</Typography>
			<p>Aprendiendo a usar grid en MUI</p>
			<p>
				Similar a como se trabaja con los grid de Bootstrap. Es básicamente un componente para declarar un
				componente padre como flex container que se comporte como un grid de 12 columnas.
			</p>
			<p>
				El componente <i>Grid</i> tiene que especificar mediante props si es un <i>item</i> o si es un{" "}
				<i>container</i>. siendo esos los respectivos props <i>item, container</i>
			</p>
			<Container style={{ marginTop: "2em" }}>
				<Grid container columnSpacing={3} rowSpacing={3} style={containerStyle}>
					<Grid item xs={12} md={6} lg={4} style={itemStyle}>
						xs 12
					</Grid>
					<Grid item xs={12} md={6} lg={4} style={itemStyle}>
						xs 6
					</Grid>
					<Grid item xs={12} md={6} lg={4} style={itemStyle}>
						xs 6
					</Grid>
					<Grid item xs={12} md={6} lg={4} style={itemStyle}>
						xs 4
					</Grid>
					<Grid item xs={12} md={6} lg={4} style={itemStyle}>
						xs 4
					</Grid>
					<Grid item xs={12} md={6} lg={4} style={itemStyle}>
						xs 4
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default MuiGrid;
