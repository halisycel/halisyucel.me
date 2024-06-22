import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import { Routes } from "./routes";

export default function App() {
	return (
		<MantineProvider>
			<Routes />
		</MantineProvider>
	);
}
