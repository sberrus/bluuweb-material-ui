//MUI Components
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// Theme utils
import { createTheme, ThemeProvider } from "@mui/material";

// Colors utils
import { purple } from "@mui/material/colors";

// Para este ejemplo crearé el theme en este componente, pero la práctia ideal es crear un archivo separado donde se encuentre toda la configuració del theme.
const theme = createTheme({
	palette: {
		primary: {
			// De esta forma podemos cambiar los colores de los componentes dentro del theme que estemos configurando.
			main: "#000",
			contrastText: "yellow",
		},
		secondary: {
			// También podemos usar la paleta de colores recomendados a trávez de la utilidad colors. Esto nos ayuda a modificar de manera más sencilla y con los colores recomendados de MUI en nuestra app.
			main: purple[500],
			contrastText: purple[50],
		},
	},
});

const MuiCreateTheme = () => {
	return (
		<ThemeProvider theme={theme}>
			{/*        ^^^^^^^^^^^^^ Para poder usar un theme tenemos que arropar a los componentes que lo vayan a consumir dentro de un <ThemeProvider>{children}</ThemeProvider> de forma que pueda acceder a la configuración del theme que vayamos a definir.*/}
			{/* Ahora todos los hijos del ThemeProvider podran acceder a la configuración del theme. */}
			<Typography variant="h2" color="default">
				Create Theme
			</Typography>
			<p>
				MUI nos provee una forma sencilla de trabajar con los themes. Esto nos permite usar los componentes del
				framework y luego modificar sus estilos a todos usando el theme.
			</p>
			<p>
				Mui consta de una serie de herramientas para modificar los estilos predeterminados del Framework y poder
				modificar los temas de manera más sencilla.
			</p>

			<Button variant="contained" color="primary">
				Hola
			</Button>
			<Button variant="contained" color="secondary">
				Hola
			</Button>
		</ThemeProvider>
	);
};

export default MuiCreateTheme;
