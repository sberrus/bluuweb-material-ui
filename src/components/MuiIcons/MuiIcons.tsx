import { Button, Typography } from "@mui/material";
import React from "react";
import AcUnitSharpIcon from "@mui/icons-material/AcUnitSharp";

const MuiIcons = () => {
	return (
		<>
			{/* Iconos */}
			<Typography variant="h2">Iconos de Material UI</Typography>
			<p>
				Los iconos de Material UI On incorporados como SVG permitiendo que los tiempos de carga sean mucho mejores y
				mejorando asi el rendimiento de nuestras apps.
			</p>
			<p>Como son componentes podemos pasarle props que nos permitan modificar el comportamiento de nuestra app.</p>

			<Typography variant="h3">Formas para importar Iconos de MaterialUi</Typography>
			<p>
				La forma principal para llamar a los iconos es llamandolo como un componente. Esto nos permite utilizar
				ciertas caracteristicas del componente como veremos a continuación.
			</p>

			<Typography variant="h4">Llamando a Icono</Typography>
			<AcUnitSharpIcon />

			<Typography variant="h3">Modificando colores</Typography>
			<p>Los colores se pueden modificar mediante la prop "color"</p>
			<AcUnitSharpIcon color="primary" />
			<AcUnitSharpIcon color="action" />
			<AcUnitSharpIcon color="error" />

			<Typography variant="h3">Modificando tamaño</Typography>
			<p>El tamaño se modifica mediante la prop fontSize</p>
			<AcUnitSharpIcon fontSize="large" />
			<AcUnitSharpIcon fontSize="medium" />
			<AcUnitSharpIcon fontSize="small" />
			<AcUnitSharpIcon fontSize="inherit" />

			<Typography variant="h5">SX en general.</Typography>
			<p>
				La prop sx es el equivalente a la prop style pero optimizada para los componentes de MaterialUI. Recibe un
				objeto con las confguraciones de igual manera a como trabajamos con la prop style de react.
				<br />
				Esta prop funciona con todos los componentes de MaterialUI.
			</p>

			<AcUnitSharpIcon sx={{ fontSize: "5em" }} />

			<Typography variant="h3">Comportamiento para los botones</Typography>
			<p>
				Con los botones hay un comportamiento especial debido a que estos pueden recibir un icono como prop el cual
				renderizará dentro del boton.
				<br />
				Esto nos permite trabajar de mejor forma con Material ademas de evitar comportamientos extraños.
			</p>
			<Button variant="contained" disableElevation startIcon={<AcUnitSharpIcon />}>
				Enfriar pensamientos
			</Button>
			<Button variant="contained" disableElevation endIcon={<AcUnitSharpIcon />}>
				Enfriar pensamientos
			</Button>
			<Button variant="contained" disableElevation startIcon={<AcUnitSharpIcon />} endIcon={<AcUnitSharpIcon />}>
				Enfriar pensamientos
			</Button>
		</>
	);
};

export default MuiIcons;
