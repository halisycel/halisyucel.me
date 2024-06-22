import { Routes as BaseRoutes, BrowserRouter, Route } from "react-router-dom";
import AppLayout from "../layouts/app";

import { paths } from "./Routes.paths.ts";
import Home from "./home";

export default function Routes() {
	return (
		<BrowserRouter>
			<BaseRoutes>
				<Route element={<AppLayout />}>
					<Route path={paths.home} element={<Home />} />
				</Route>
			</BaseRoutes>
		</BrowserRouter>
	);
}
