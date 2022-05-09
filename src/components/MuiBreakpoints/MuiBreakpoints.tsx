import React from "react";
import Typography from "@mui/material/Typography";
import { Hidden, useMediaQuery } from "@mui/material";

const MuiBreakpoints = () => {
	const matches = useMediaQuery("(min-width:600px)");
	return (
		<div>
			<Typography variant="h2">Trabajando con Breakpoints (useMediaQuery())</Typography>
			<p>MUI nos ofrece herramientas para trabajar con layouts responsivos más complejos de manera correcta.</p>
			<p>
				El hook useMediaQuery utiliza la API matchMedia de fondo para poder utilizar esta lógica dentro de los
				componentes, de manera que si queremos que un componente solo sea visible tomando en cuenta estas
				caracteristicas podemos hacerlo utilizando este hook.
			</p>
			<div>
				El contenedor es mayor a 600px? <b>{matches ? "verdadero" : "falso"}</b>
			</div>

			<Typography variant="h2">Hidden</Typography>
			<p>
				Hidden es un componente especial de MUI que nos permite ocultar un elemento dependiendo del breakpoint del
				dispositivo al que estemos haciendo uso.
			</p>

			<p>
				En el siguiente ejemplo podremos observar que hay dos elementos Hidden con reglas que solo mostrarán su
				contenido dependiendo de el tamaño de las pantallas donde queremos que se vean.
			</p>
			<Hidden smDown>
				<Typography variant="h4" color="primary">
					Este elemento solo puede verse en pantallas grandes.
				</Typography>
			</Hidden>
			<Hidden smUp>
				<Typography variant="h4" color="primary">
					Este elemento solo puede verse en pantallas pequeñas.
				</Typography>
			</Hidden>

			{/* Una de las caracteristicas imporatntes es si quremos que un elemento solo se esconda en un breakpoint en especifico como en el siguiente ejemplo que solo se esconderá si el breakpoint es lg */}
			<Hidden only="md">
				<Typography variant="h4" color="primary">
					Este elemento solo se oculta en pantallas md.
				</Typography>
			</Hidden>

			{/* Lo mismo ocurre si solo deseamos que se oculte en ciertos breakpoints definidos */}
			<Hidden only={["xs", "md"]}>
				<Typography variant="h4" color="primary">
					Este elemento se ocultará en pantallas md y xl.
				</Typography>
			</Hidden>
		</div>
	);
};

export default MuiBreakpoints;
