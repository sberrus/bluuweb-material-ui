// React
import React, { useState } from "react";

// MUI Components
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

// Icons
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { IconButton } from "@mui/material";

const DrawerComponent = (props: any) => {
	const [show, setShow] = useState<boolean>(false);
	const sections = ["Inbox", "Starred", "Send email", "Drafts"];

	const toggleDrawer = () => (event: React.KeyboardEvent | React.MouseEvent) => {
		if (
			event.type === "keydown" &&
			((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
		) {
			return;
		}

		setShow(!show);
	};

	return (
		<div>
			<IconButton color="inherit" className={props.className} onClick={toggleDrawer()}>
				{props.children}
			</IconButton>
			<Drawer anchor={"left"} open={show} onClose={toggleDrawer()}>
				<Box role="presentation" onClick={toggleDrawer()} onKeyDown={toggleDrawer()}>
					<List>
						{sections.map((section, idx) => (
							<ListItem button key={section}>
								<ListItemIcon>{idx % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
								<ListItemText primary={section} />
							</ListItem>
						))}
					</List>
				</Box>
			</Drawer>
		</div>
	);
};

export default DrawerComponent;
