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
					<Col className="itemsCenter">
						<Fade direction="up" triggerOnce>
							<div className="d-flex">
								<p className="mx-auto">
									{t("about.p1")}
									<br />
									<br />
									<span className="fw-light">{t("about.email")}</span> romerojosemanuel@hotmail.com
									<br />
									<span className="fw-light">{t("about.country")}</span> El Salvador
									<br />
									<span className="fw-light">{t("about.city")}</span> Santiago de María
									<br />
								</p>
							</div>
						</Fade>
					</Col>
					<Col className="itemsCenter mt-5 mt-md-0">
						<img id="myPhoto" src="images/myPhoto_20211230.png" alt="josenromero" />
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default About
