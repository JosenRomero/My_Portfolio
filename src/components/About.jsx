
import { Container, Row, Col, Button } from 'react-bootstrap';

import Icon from '@mdi/react';
import { mdiGithub, mdiInstagram, mdiEmail  } from '@mdi/js';

const About = () => {

    return(
        <section id="about">
            <Container>
                <Row>
                    <h3 className="text-center">About me</h3>
                    <Col className="my-4">
                        <div className="ms-3">
                            <p>
                                My name is José Romero.<br />
                                I am a self-taught JavaScript Developer.<br />
                                I like working with new tools and technologies<br />
                                and I am currently learning jest.<br />
                            </p>
                            <p>
                                <span className="text-muted">Email:</span> romerojosemanuel@hotmail.com<br />
                                <span className="text-muted">Country:</span> El Salvador<br />
                                <span className="text-muted">City:</span> Santiago de María<br />
                            </p>
                        </div>
                        <div className="ms-3">
                            <Button href="https://github.com/JosenRomero" className="me-1" variant="outline-secondary" target="_blank">
                                <Icon path={mdiGithub} size={1}/>
                                Github
                            </Button>
                            <Button href="https://www.instagram.com/josen._.romero/" className="me-1" variant="outline-secondary" target="_blank">
                                <Icon path={mdiInstagram} size={1}/>
                                Instagram
                            </Button>
                            <Button href="mailto:romerojosemanuel@hotmail.com" className="me-1" variant="outline-secondary">
                                <Icon path={mdiEmail} size={1}/>
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