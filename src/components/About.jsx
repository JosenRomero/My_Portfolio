
import { Container, Row, Col, Button } from 'react-bootstrap';

import Icon from '@mdi/react';
import { mdiGithub, mdiInstagram, mdiEmail  } from '@mdi/js';

import Fade from 'react-reveal/Fade';

import { useTranslation } from 'react-i18next';

const About = () => {

    const { t } = useTranslation();

    return(
        <section id="about">
            <Container>
                <Row>
                    <h3 className="text-center mb-5">{ t('about.title')}</h3>
                    <Col className="my-4">
                        <Fade bottom>
                            <div className="d-flex">
                                <p className="mx-auto">
                                    { t('about.p1')}<br />
                                    <br />
                                    <span className="text-muted">{ t('about.email')}</span> romerojosemanuel@hotmail.com<br />
                                    <span className="text-muted">{ t('about.country')}</span> El Salvador<br />
                                    <span className="text-muted">{ t('about.city')}</span> Santiago de María<br />
                                </p>
                            </div>
                            <div className="mt-1">
                                <Button href="https://github.com/JosenRomero" className="m-1 ms-0" variant="outline-secondary" target="_blank">
                                    <Icon path={mdiGithub} size={1}/>
                                </Button>
                                <Button href="mailto:romerojosemanuel@hotmail.com" className="m-1" variant="outline-secondary">
                                    <Icon path={mdiEmail} size={1}/>
                                </Button>
                                <Button href="https://www.instagram.com/josen._.romero/" className="m-1" variant="outline-secondary" target="_blank">
                                    <Icon path={mdiInstagram} size={1}/>
                                </Button>
                            </div>
                        </Fade>
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