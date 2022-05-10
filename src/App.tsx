import { Container } from "@mui/material";
import Header from "./components/Header/Header";
import MuiBreakpoints from "./components/MuiBreakpoints/MuiBreakpoints";
import MuiComponents from "./components/MuiComponents/MuiComponents";
import MuiCreateTheme from "./components/MuiCreateTheme/MuiCreateTheme";
import MuiDrawer from "./components/MuiDrawer/MuiDrawer";
import MuiDrawerEstatico from "./components/MuiDrawerEstatico/MuiDrawerEstatico";
import MuiIcons from "./components/MuiIcons/MuiIcons";
import MuiMakeStyles from "./components/MuiMakeStyles/MuiMakeStyles";
import MuiTypography from "./components/MuiTypography/MuiTypography";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";

const App = () => {
	return (
		<>
			<NavbarComponent />
			<Container
				sx={{
					marginBottom: "3em",
				}}
			>
				<Header />
				<MuiComponents />
				<MuiIcons />
				<MuiTypography />
				<MuiMakeStyles />
				<MuiCreateTheme />
				<MuiDrawer />
				<MuiBreakpoints />
				<MuiDrawerEstatico />
			</Container>
		</>
	);
};

export default App;
