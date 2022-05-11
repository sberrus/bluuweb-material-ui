// React
import React, { useState } from "react";

// MUI Components
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// Icons
import { Divider, IconButton } from "@mui/material";
import Listas from "./Listas";
import { makeStyles } from "@mui/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	toolbar: theme.mixins.toolbar,
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPapper: { width: drawerWidth },
}));

const DrawerComponent = (props: any) => {
	const [show, setShow] = useState<boolean>(false);

	const toggleDrawer = () => (event: React.KeyboardEvent | React.MouseEvent) => {
		if (
			event.type === "keydown" &&
			((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
		) {
			return;
		}

		setShow(!show);
	};

	const styles = useStyles();

	return (
		<div>
			<IconButton color="inherit" className={props.className} onClick={toggleDrawer()}>
				{props.children}
			</IconButton>
			<Drawer
				anchor={"left"}
				open={show}
				onClose={toggleDrawer()}
				className={styles.drawer}
				classes={{ paper: styles.drawerPapper }}
			>
				<div className={styles.toolbar}></div>
				<Divider />
				<Box role="presentation" onClick={toggleDrawer()} onKeyDown={toggleDrawer()}>
					<Listas />
				</Box>
			</Drawer>
		</div>
	);
};

export default DrawerComponent;
