import { useEffect } from "react";
import NewHeader from "./pages/new_header";
import { initAnalytics } from "./lib/analytics";

export default function App() {
	useEffect(() => {
		initAnalytics();
	}, []);

	return <NewHeader />;
}
