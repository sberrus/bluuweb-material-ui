import { Button, Link, ButtonGroup, Container, Typography } from "@mui/material";
import Header from "./components/Header/Header";
import MuiComponents from "./components/MuiComponents/MuiComponents";
import MuiCreateTheme from "./components/MuiCreateTheme/MuiCreateTheme";
import MuiDrawer from "./components/MuiDrawer/MuiDrawer";
import MuiIcons from "./components/MuiIcons/MuiIcons";
import MuiMakeStyles from "./components/MuiMakeStyles/MuiMakeStyles";
import MuiTypography from "./components/MuiTypography/MuiTypography";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";

const App = () => {
	return (
		<>
			<NavbarComponent />
			<Container>
				<Header />
				<MuiComponents />
				<MuiIcons />
				<MuiTypography />
				<MuiMakeStyles />
				<MuiCreateTheme />
				<MuiDrawer />
			</Container>
		</>
	);
};

export default App;
