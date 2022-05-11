import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Container, Hidden } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerComponent from "./components/DrawerComponent/DrawerComponent";

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
			<Container maxWidth={false}>
				<Toolbar disableGutters>
					<Hidden mdUp>
						<DrawerComponent>
							<MenuIcon />
						</DrawerComponent>
					</Hidden>
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
