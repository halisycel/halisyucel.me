import { Container } from "@mantine/core";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
	return (
		<Container>
			<Outlet />
		</Container>
	);
}
