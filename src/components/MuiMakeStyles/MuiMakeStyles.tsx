import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

// Antes que nada hay que recalcar que en la versión 5 de MUI ya no se utiliza makestyles. Pero si se puede compatibilizar realizando una serie de configuracioens previas
// Primero hay que instalar el paquete @mui/styles. Y en el directorio raiz hay que definir un theme predeterminado para poder hacer uso del makeStyles.

const useStyle = makeStyles({
	botonPersonalizado: {
		// Al igual que el uso en CSS el uso de la kw !imporant no es recomendado pero para este ejemplo especifico lo haremos
		backgroundColor: "#000 !important",
		color: "red !important",
	},
});

const MuiMakeStyles = () => {
	const classes = useStyle();

	return (
		<>
			{/* makeStyle */}
			<Typography variant="h2">makeStyle()</Typography>

			{/*  */}
			<Button>Boton predeterminado</Button>
			<Button className={classes.botonPersonalizado}>Boton personalizado</Button>
			{/*  */}
		</>
	);
};

export default MuiMakeStyles;
