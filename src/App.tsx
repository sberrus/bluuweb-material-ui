import { Button, Link, ButtonGroup, Container, Typography } from "@mui/material";
import AcUnitSharpIcon from "@mui/icons-material/AcUnitSharp";

const App = () => {
	return (
		<Container maxWidth="md" sx={{ marginBottom: "3em" }}>
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

			{/* makeStyle */}
			<Typography variant="h2">makeStyle()</Typography>
			<p></p>

			{/*  */}
			<Button>Boton predeterminado</Button>
			<Button>Boton personalizado</Button>
			{/*  */}
		</Container>
	);
};

export default App;
