import { Grid, Typography } from "@mui/material";

const MuiGrid = () => {
	const Item = ({ children }) => <div>{children}</div>;
	return (
		<>
			<Typography variant="h2">MuiGrid</Typography>
			<p>Aprendiendo a usar grid en MUI</p>
			<p>
				Similar a como se trabaja con los grid de Bootstrap. Es básicamente un componente para declarar un
				componente padre como flex container.
			</p>
			<Grid container columnSpacing={3} rowSpacing={3}>
				<Grid item xs={6}>
					Elemento #1
				</Grid>
				<Grid item xs={6}>
					Elemento #2
				</Grid>
				<Grid item xs={6}>
					Elemento #3
				</Grid>
				<Grid item xs={6}>
					Elemento #4
				</Grid>
			</Grid>
		</>
	);
};

export default MuiGrid;
