import { Link, Typography } from "@mui/material";
import React from "react";

const Header = () => {
	return (
		<>
			{/* Main TItle */}
			<Typography variant="h1">Material UI con Bluuweb</Typography>
			<p>
				Material UI es un framework para React que nos permite trabajar de manera más sencilla y de manera
				modularizada con componentes, siguiendo los estilos de{" "}
				<Link underline="none" href="https://material.io/design" rel="noreferrer" target="_BLANK">
					{"Material Design"}
				</Link>{" "}
				de Google.
			</p>
		</>
	);
};

export default Header;
