
import { Container, Row, Col, Button } from 'react-bootstrap';

import { useTranslation } from 'react-i18next';

import { useContext } from 'react';
import { ThemeContext } from '../context/theme-context';

import Zoom from 'react-reveal/Zoom';

import pdf from '../assets/resume.pdf';
import { mdiTrayArrowDown } from '@mdi/js'; 
import Icon from '@mdi/react';

import SocialMedia from './SocialMedia';

const Header = () => {

    const { t } = useTranslation();

    const { theme } = useContext(ThemeContext);

    return(
        <header id="home" className={`bg-${theme}`}>
            <Container>
                <Row>
                    <Col className="text-center">
                        <Zoom>
                            <h1>{ t('header.p1')} <span className={'d-md-inline-flex d-block'}>José Romero</span></h1>
                            <p className="fw-light">{ t('header.p2')}</p>
                        </Zoom>
                        <Button href={pdf} variant="primary" target="_blank">
                            <Icon path={mdiTrayArrowDown} color={"#fff"} size={1} />
                            <span className='ms-2'>{ t('header.p3') }</span>
                        </Button>
                    </Col>
                    <SocialMedia />
                </Row>
            </Container>
        </header>
    );
    
}

export default Header;