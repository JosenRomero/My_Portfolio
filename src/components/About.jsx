import { Container, Row, Col } from "react-bootstrap"
import { Fade } from "react-awesome-reveal"
import { useTranslation } from "react-i18next"

const About = () => {
	const { t } = useTranslation()

	return (
		<section id="about">
			<Container>
				<Row>
					<h3 className="text-center mb-5">{t("about.title")}</h3>
					<Col md={6} className="itemsCenter">
						<Fade direction="up" triggerOnce>
							<div>
								<p>{t("about.p1")}</p>
								<p>{t("about.p2")}</p>
							</div>
						</Fade>
					</Col>
					<Col md={6} className="itemsCenter mt-5 mt-md-0">
						<img id="myPhoto" src="images/myPhoto_20211230.png" alt="josenromero" />
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default About
