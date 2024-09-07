import { Title, createTheme } from "@mantine/core";

const lightTheme = createTheme({
	white: "#f9f7f3",
	components: {
		Title: Title.extend({
			defaultProps: {
				ff: `"Spectral", serif`,
			},
		}),
	},
});

export default lightTheme;
