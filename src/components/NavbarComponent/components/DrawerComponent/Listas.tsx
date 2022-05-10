import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const Listas = () => {
	const sections = ["Inbox", "Starred", "Send email", "Drafts"];
	return (
		<>
			<List>
				{sections.map((section, idx) => (
					<ListItem button key={section}>
						<ListItemIcon>{idx % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
						<ListItemText primary={section} />
					</ListItem>
				))}
			</List>
		</>
	);
};

export default Listas;
