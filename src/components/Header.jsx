
import { Container, Row, Col } from 'react-bootstrap';

import { useTranslation } from 'react-i18next';

import Fade from 'react-reveal/Fade';

const Header = () => {

    const { t } = useTranslation();

    return(
        <header id="home" className="bg-dark text-white">
            <Container>
                <Row>
                    <Fade bottom>
                        <Col className="text-center">
                            <h1>{ t('header.p1')}</h1>
                            <p>{ t('header.p2')}</p>
                            <p>{ t('header.p3')}</p>
                        </Col>
                    </Fade>
                </Row>
            </Container>
        </header>
    );
    
}

export default Header;