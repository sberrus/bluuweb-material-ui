import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const MuiBox = () => {
	return (
		<>
			<Typography variant="h2">Box en mui</Typography>
			<p>Los box son cajas especiales de mui que nos permiten trabajar con los estilos de forma especial</p>
			<Box color="primary.main">Caja 1</Box>
			<Box color="primary.contrastText" bgcolor={"primary.main"}>
				Caja 2
			</Box>
			<Box m={3} color="primary.contrastText" bgcolor={"primary.main"}>
				Caja 3
			</Box>
			<p>
				En las nuevas versiones de MUI se recomienda mejor utilizar la prop{" "}
				<b>
					<i>sx</i>
				</b>{" "}
				que nos permite indicarle css personalizado
			</p>
			<Box
				sx={{
					background: "black",
					color: "red",
					padding: 1,
				}}
			>
				caja css personalizado
			</Box>
		</>
	);
};

export default MuiBox;
