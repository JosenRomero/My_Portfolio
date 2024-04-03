import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

import "./i18n/i18nConfig"

import { ThemeProvider } from "./context/theme-context"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</React.StrictMode>
)
