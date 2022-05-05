import { Typography } from "@mui/material";
import React from "react";

const MuiTypography = () => {
	return (
		<>
			{/* Typography */}
			<Typography variant="h2">Typography</Typography>
			<p>
				Este componente nos permite renderizar elementos de texto de forma que funcione la manera más eficiente y
				sin problemas dentro del layout.
			</p>
			<p>
				Lo que nos permite es acceder a las configuraciones globales del framework, haciendo que el trabajar con
				temas diferentes sea mucho más sencillo y eficiente. Para que no tengamos que escribir código innecesario
				dentro de nuestra app.{" "}
			</p>
			<p>
				En la documentación aparece la api de manera con todos los elementos que podemos modificar dentro de esta.
			</p>

			{/*  */}
			<Typography variant="h1" color="initial">
				Renderizando un h1
			</Typography>
			<Typography variant="h2" color="danger">
				Renderizando un h2
			</Typography>
			<Typography variant="h3" color="initial">
				Renderizando un h3
			</Typography>
			{/*  */}

			<p>
				Este componente contiene los props necesarios para poder trabajar de una forma más moderna con los
				componentes
			</p>
		</>
	);
};

export default MuiTypography;
