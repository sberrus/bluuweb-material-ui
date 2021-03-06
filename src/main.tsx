import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Creamos un theme para poder usar makeStyles*
const theme = createTheme({
	typography: {
		h1: { fontSize: "3em" },
		h2: { fontSize: "2.5em" },
		h3: { fontSize: "2em" },
		h4: { fontSize: "1.5em" },
	},
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		{/* Make styles ya no esta disponible en la version 5 de MUI, pero para continuar con el curso debemos realizar una configuración previa. Makestyles utiliza el defaultTheme, pero en la versión 5 ya esto no esta disponible. Lo cual debemos usar el theme provider para evitar este problema. */}

		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
