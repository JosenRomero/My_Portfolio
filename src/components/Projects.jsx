import { Container, Row, Button } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { AttentionSeeker } from "react-awesome-reveal"

import { projects } from "../data"
import Project from "./Project"
import { IconOpenInNew } from "../Icons/Icons"

const Projects = () => {
	const { t } = useTranslation()

	return (
		<section id="projects">
			<Container>
				<Row>
					<AttentionSeeker effect={"tada"} triggerOnce>
						<h3 className="text-center mb-5">{t("myProjects")}</h3>
					</AttentionSeeker>
					{projects.map((project, i) => {
						return <Project project={project} index={i} key={i} />
					})}
					<div className="text-center">
						<Button
							href={"https://github.com/JosenRomero"}
							className="my-5"
							variant="primary"
							target="_blank"
						>
							<IconOpenInNew />
							<span className="ms-2">{t("more_rojects")}</span>
						</Button>
					</div>
				</Row>
			</Container>
		</section>
	)
}

export default Projects
