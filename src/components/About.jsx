
import { Container, Row, Col, Button } from 'react-bootstrap';

const About = () => {

    return(
        <section id="about">
            <Container>
                <Row>
                    <h3 className="text-center">About me</h3>
                    <Col className="my-4">
                        <div class="ms-3">
                            <p>
                                My name is José Romero.<br />
                                I am a self-taught JavaScript Developer.<br />
                                I like working with new tools and technologies<br />
                                and I am currently learning jest.<br />
                            </p>
                            <p>
                                <span class="text-muted">Email:</span> romerojosemanuel@hotmail.com<br />
                                <span class="text-muted">Country:</span> El Salvador<br />
                                <span class="text-muted">City:</span> Santiago de María<br />
                            </p>
                        </div>
                        <div class="ms-3">
                            <Button href="https://github.com/JosenRomero" className="me-1" variant="outline-secondary" target="_blank">
                                Github
                            </Button>
                            <Button href="https://www.instagram.com/josen._.romero/" className="me-1" variant="outline-secondary" target="_blank">
                                Instagram
                            </Button>
                            <Button href="mailto:romerojosemanuel@hotmail.com" className="me-1" variant="outline-secondary">
                                Email
                            </Button>
                        </div>
                    </Col>
                    <Col >
                        <img id="myPhoto" src="images/myPhoto_20211230.png" alt="josenromero" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
    
}

export default About;