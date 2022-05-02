import { Button, Link, ButtonGroup, Icon, SvgIcon, IconButton, Container } from "@mui/material";
import AcUnitSharpIcon from "@mui/icons-material/AcUnitSharp";

const App = () => {
	return (
		<Container maxWidth="md">
			<h1>Aprendiendo MaterialUi</h1>
			<p>
				Material UI es un framework para React que nos permite trabajar de manera más sencilla y de manera
				modularizada con componentes, siguiendo los estilos de{" "}
				<Link underline="none" href="https://material.io/design" rel="noreferrer" target="_BLANK">
					{"Material Design"}
				</Link>{" "}
				de Google.
			</p>

			<h2>Importando componentes</h2>
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
				<ButtonGroup variant="text" color="primary">
					<Button variant="contained" disableElevation>
						hola
					</Button>
					<Button variant="outlined">hola</Button>
					<Button variant="text">hola</Button>
				</ButtonGroup>
			</div>
			<p>
				Al igual que con ReactBootstrap, la documentación oficial de MaterialUi contiene componentes prediseñados
				que podemos usar de manera gratuita debido a que cuenta con la licencia MIT.
			</p>
			<h2>Usando los Iconos de MaterialUI</h2>
			<p>
				Los iconos de Material UI On incorporados como SVG permitiendo que los tiempos de carga sean mucho mejores y
				mejorando asi el rendimiento de nuestras apps.
			</p>
			<p>Como son componentes podemos pasarle props que nos permitan modificar el comportamiento de nuestra app.</p>

			<h3>Formas para importar Iconos de MaterialUi</h3>
			<p>
				La forma principal para llamar a los iconos es llamandolo como un componente. Esto nos permite utilizar
				ciertas caracteristicas del componente como veremos a continuación.
			</p>

			<h4>Llamando a Icono</h4>
			<AcUnitSharpIcon />

			<h3>Modificando colores</h3>
			<p>Los colores se pueden modificar mediante la prop "color"</p>
			<AcUnitSharpIcon color="primary" />
			<AcUnitSharpIcon color="action" />
			<AcUnitSharpIcon color="error" />

			<h3>Modificando tamaño</h3>
			<p>El tamaño se modifica mediante la prop fontSize</p>
			<AcUnitSharpIcon fontSize="large" />
			<AcUnitSharpIcon fontSize="medium" />
			<AcUnitSharpIcon fontSize="small" />
			<AcUnitSharpIcon fontSize="inherit" />

			<h5>SX en general.</h5>
			<p>
				La prop sx es el equivalente a la prop style pero optimizada para los componentes de MaterialUI. Recibe un
				objeto con las confguraciones de igual manera a como trabajamos con la prop style de react.
				<br />
				Esta prop funciona con todos los componentes de MaterialUI.
			</p>

			<AcUnitSharpIcon sx={{ fontSize: "5em" }} />

			<h3>Comportamiento para los botones</h3>
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
		</Container>
	);
};

export default App;
