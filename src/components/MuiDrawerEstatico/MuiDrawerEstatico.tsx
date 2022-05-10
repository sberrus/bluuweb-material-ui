import { Divider, Drawer } from "@mui/material";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Listas from "../NavbarComponent/components/DrawerComponent/Listas";

// Definimos el width del drawer para controlarlo de mejor manera.
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPapper: { width: drawerWidth },
	toolbar: theme.mixins.toolbar,
}));

const MuiDrawerEstatico = () => {
	const styles = useStyles();
	return (
		<Drawer className={styles.drawer} variant="permanent" classes={{ paper: styles.drawerPapper }}>
			<div className={styles.toolbar}></div>
			<Divider />
			<Listas />
		</Drawer>
	);
};

export default MuiDrawerEstatico;
