import { Typography } from "@mui/material";
import NavbarMenu from "../NavbarComponent/components/DrawerComponent/DrawerComponent";

const MuiDrawer = () => {
	return (
		<>
			<Typography variant="h2" color="dark">
				Drawer (Navbar lateral)
			</Typography>
			<p>
				El drawer es un componente de MUI que nos permite crear un navegador para nuestra app de manera sencilla.
			</p>
			<NavbarMenu />
		</>
	);
};

export default MuiDrawer;
