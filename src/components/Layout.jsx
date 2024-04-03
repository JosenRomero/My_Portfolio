import { useContext } from "react"

import { ThemeContext } from "../context/theme-context"
import Menu from "./Menu"
import Footer from "./Footer"

const Layout = ({ children }) => {
	const { theme } = useContext(ThemeContext)

	return (
		<div id="principal" className={`theme-${theme}`}>
			<Menu />
			{children}
			<Footer />
		</div>
	)
}

export default Layout
