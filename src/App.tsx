import { Container, Hidden } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Header from "./components/Header/Header";
import MuiBox from "./components/MuiBox/MuiBox";
import MuiBreakpoints from "./components/MuiBreakpoints/MuiBreakpoints";
import MuiComponents from "./components/MuiComponents/MuiComponents";
import MuiCreateTheme from "./components/MuiCreateTheme/MuiCreateTheme";
import MuiDrawer from "./components/MuiDrawer/MuiDrawer";
import MuiDrawerEstatico from "./components/MuiDrawerEstatico/MuiDrawerEstatico";
import MuiIcons from "./components/MuiIcons/MuiIcons";
import MuiMakeStyles from "./components/MuiMakeStyles/MuiMakeStyles";
import MuiTypography from "./components/MuiTypography/MuiTypography";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		display: "flex",
	},
}));

const App = () => {
	const styles = useStyles();

	return (
		<>
			<div id="main" className={styles.mainContainer}>
				<Hidden mdDown>
					<MuiDrawerEstatico />
				</Hidden>
				<Container
					maxWidth={false}
					disableGutters
					sx={{
						marginBottom: "3em",
					}}
				>
					<NavbarComponent />
					<Container maxWidth={false}>
						<Header />
						<MuiComponents />
						<MuiIcons />
						<MuiTypography />
						<MuiMakeStyles />
						<MuiCreateTheme />
						<MuiDrawer />
						<MuiBreakpoints />
						<MuiBox />
					</Container>
				</Container>
			</div>
		</>
	);
};

export default App;
