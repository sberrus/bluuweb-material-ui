import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Container, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import NavbarMenu from "./components/DrawerComponent/DrawerComponent";

const useStyles = makeStyles({
	menuButton: {
		color: "#fff",
		marginRight: "30px",
	},
	title: {
		flexGrow: 1,
	},
});

const NavbarComponent = () => {
	const classes = useStyles();

	return (
		<AppBar position="sticky" color="primary">
			<Container>
				<Toolbar disableGutters>
					<NavbarMenu>
						<MenuIcon />
					</NavbarMenu>
					<Typography variant="h6" className={classes.title}>
						Hellow
					</Typography>
					<Button variant="contained" color={"primary"}>
						{" "}
						Login
					</Button>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default NavbarComponent;
