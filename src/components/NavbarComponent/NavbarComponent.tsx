import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Container, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";

const useStyles = makeStyles({
	menuButton: {
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
				<Toolbar>
					<IconButton color="inherit" aria-label="menu" className={classes.menuButton}>
						<MenuIcon />
					</IconButton>
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
