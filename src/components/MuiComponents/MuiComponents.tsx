import { Button, ButtonGroup, Typography } from "@mui/material";
import React from "react";

const MuiComponents = () => {
	return (
		<>
			{/* Componentes */}
			<Typography variant="h2">Importando componentes</Typography>
			<p>
				Al trabajar con React, los componentes se trabajan de forma similar a como se trabaja con otras librerias
				modularizadas como React-Bootstrap; el cual nos ofrece un set de componentes ya con los estilos de Bootstrap
				pero, siendo estos ya modularizados y adaptables para que nosotros podamos modificar sus estilos y
				comportamiento.
			</p>
			<div style={{ textAlign: "center" }}>
				<div>
					<small>Componente importado</small>
				</div>

				{/*  */}
				<ButtonGroup variant="text" color="primary">
					<Button variant="contained" disableElevation>
						hola
					</Button>
					<Button variant="outlined">hola</Button>
					<Button variant="text">hola</Button>
				</ButtonGroup>
				{/*  */}
			</div>

			<p>
				Al igual que con ReactBootstrap, la documentación oficial de MaterialUi contiene componentes prediseñados
				que podemos usar de manera gratuita debido a que cuenta con la licencia MIT.
			</p>
		</>
	);
};

export default MuiComponents;
