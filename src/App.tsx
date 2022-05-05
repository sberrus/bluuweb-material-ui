import { Button, Link, ButtonGroup, Container, Typography } from "@mui/material";
import Header from "./components/Header/Header";
import MuiComponents from "./components/MuiComponents/MuiComponents";
import MuiCreateTheme from "./components/MuiCreateTheme/MuiCreateTheme";
import MuiIcons from "./components/MuiIcons/MuiIcons";
import MuiMakeStyles from "./components/MuiMakeStyles/MuiMakeStyles";
import MuiTypography from "./components/MuiTypography/MuiTypography";

const App = () => {
	return (
		<Container maxWidth="md" sx={{ marginBottom: "3em" }}>
			<Header />
			<MuiComponents />
			<MuiIcons />
			<MuiTypography />
			<MuiMakeStyles />
			<MuiCreateTheme />
		</Container>
	);
};

export default App;
