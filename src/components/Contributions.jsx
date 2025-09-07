import { useContext } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { AttentionSeeker } from "react-awesome-reveal"
import { ThemeContext } from "../context/theme-context"
import ColButton from "./ColButton"
import { useTranslation } from "react-i18next"
import { contributions } from "../data"

const Contributions = () => {
  const { t } = useTranslation()
  const { theme } = useContext(ThemeContext)

  return (
    <section id="contributions">
      <Container>
        <Row>
          <AttentionSeeker effect={"tada"} triggerOnce>
            <h3 className="text-center mb-5">{t("contributions_title")}</h3>
          </AttentionSeeker>

          { contributions.map((contribution, i) => {
            return (
              <Col key={i} xs={12} xl={10} className="mx-auto">
                <Card className={"mb-4 p-2"} bg={theme}>
                  <Card.Body>
                    <Card.Title>{contribution.title}</Card.Title>
                    <Card.Text className="mt-4" as={"div"}>
                      <ul>
                        {contribution.proyects.map((number, k) => {
                          return <li key={k}>{t(`contributions_descriptions.${number}`)}</li>
                        })}
                      </ul>
                    </Card.Text>
                    <ColButton
                      link={contribution.link}
                      col_className=""
                      btn_className="float-end"
                      text={t("contribution_btn")}
                    />
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default Contributions