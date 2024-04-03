import { Container } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { useContext } from "react"

import { ThemeContext } from "../context/theme-context"

const Footer = () => {
	const { t } = useTranslation()

	const { theme } = useContext(ThemeContext)

	return (
		<footer className={`bg-${theme} mt-5 pt-3`}>
			<Container className="text-center p-2">
				<p>{t("footer")}</p>
			</Container>
		</footer>
	)
}

export default Footer
