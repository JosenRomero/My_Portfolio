import { Container, Row, Col } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { Zoom } from "react-awesome-reveal"

import { skills } from "../data"

const Skills = () => {
	const { t } = useTranslation()

	return (
		<section id="skills">
			<Zoom triggerOnce>
				<Container>
					<Row className="text-center">
						<h3 className="mb-5">{t("mySkills")}</h3>
						{skills.map((skill, i) => {
							return (
								<Col className="mb-3" xs={6} sm={4} md={3} key={i}>
									<div className="iconBig">
										<skill.icon />
									</div>
									<p className="mt-2">{skill.name}</p>
								</Col>
							)
						})}
					</Row>
				</Container>
			</Zoom>
		</section>
	)
}

export default Skills
