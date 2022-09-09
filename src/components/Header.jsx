
import { Container, Row, Col, Button } from 'react-bootstrap';

import { useTranslation } from 'react-i18next';

import { useContext } from 'react';
import { ThemeContext } from '../context/theme-context';

import Fade from 'react-reveal/Fade';

import pdf from '../assets/resume.pdf';
import { mdiTrayArrowDown } from '@mdi/js'; 
import Icon from '@mdi/react';

const Header = () => {

    const { t } = useTranslation();

    const { theme } = useContext(ThemeContext);

    return(
        <header id="home" className={`bg-${theme}`}>
            <Container>
                <Row>
                    <Fade bottom>
                        <Col className="text-center">
                            <h1>{ t('header.p1')} <span className={'d-md-inline-flex d-block'}>José Romero</span></h1>
                            <p>{ t('header.p2')}</p>
                            <Button href={pdf} variant="primary" target="_blank">
                                <Icon path={mdiTrayArrowDown} color={"#fff"} size={1} />
                                <span className='ms-2'>Resume</span>
                            </Button>
                        </Col>
                    </Fade>
                </Row>
            </Container>
        </header>
    );
    
}

export default Header;