import { Col, Card } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { useContext } from "react"

import { ThemeContext } from "../context/theme-context"
import ColButton from "./ColButton"

const Project = ({ project, index }) => {
	const { t } = useTranslation()
	const { theme } = useContext(ThemeContext)

	return (
		<Col md={6}>
			<Card className={"mb-4 shadow-sm"} bg={theme}>
				<Card.Img className={project.imageSmall ? "imgSmall" : ""} src={project.image} />
				<Card.Body>
					<Card.Title>{project.title}</Card.Title>
					<hr />
					<div className="d-flex">
						<div className="ms-auto d-flex gap-2">
							{project.programming_language.map((item, i) => {
								return (
									<div className="iconSmall" key={i}>
										<item.icon />
									</div>
								)
							})}
						</div>
					</div>
					<div className="mt-3">
						<p>{t(`project_descriptions.${index}`)}</p>
					</div>
				</Card.Body>
				<Card.Footer className="p-3 d-grid gap-2">
					<ColButton
						link={project.view_code}
						btn_variant={"outline-secondary"}
						text={t("buttons.view_code")}
					/>
					<ColButton link={project.open_project.link} text={t(`buttons.${project.open_project.text}`)} />
				</Card.Footer>
			</Card>
		</Col>
	)
}

export default Project
