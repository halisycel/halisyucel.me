import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import { Routes } from "./routes";
import lightTheme from "./themes/light";

export default function App() {
	return (
		<MantineProvider theme={lightTheme}>
			<Routes />
		</MantineProvider>
	);
}
