import { Container, Row } from "react-bootstrap"
import { useTranslation } from "react-i18next"

const NotFoundPage = () => {
	const { t } = useTranslation()

	return (
		<Container className="notFoundPage">
			<Row className="w-100 text-center">
				<h5>{t("not_found_page")}</h5>
			</Row>
		</Container>
	)
}

export default NotFoundPage
