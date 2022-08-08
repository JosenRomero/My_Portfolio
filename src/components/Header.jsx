
import { Container, Row, Col, Button } from 'react-bootstrap';

import { useTranslation } from 'react-i18next';

import { useContext } from 'react';
import { ThemeContext } from '../context/theme-context';

import Fade from 'react-reveal/Fade';

import pdf from '../assets/resume.pdf';

const Header = () => {

    const { t } = useTranslation();

    const { theme } = useContext(ThemeContext);

    return(
        <header id="home" className={`bg-${theme}`}>
            <Container>
                <Row>
                    <Fade bottom>
                        <Col className="text-center">
                            <h1 class="fw-bold">{ t('header.p1')}</h1>
                            <p>{ t('header.p2')}</p>
                            <p>{ t('header.p3')}</p>
                            <Button href={pdf} className="me-2" variant="primary" target="_blank">
                                Resume
                            </Button>
                        </Col>
                    </Fade>
                </Row>
            </Container>
        </header>
    );
    
}

export default Header;