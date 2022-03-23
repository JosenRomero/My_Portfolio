
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';

import { mdiTranslate } from '@mdi/js'; 
import Icon from '@mdi/react';

import { useTranslation } from 'react-i18next';

const Menu = () => {

    const { t, i18n } = useTranslation();

    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
    }

    return(
        <Navbar expand="lg" fixed="top" bg="dark" variant="dark" collapseOnSelect>
            <Container fluid>
                <Navbar.Brand href="/">JosenRomero</Navbar.Brand>
                <Dropdown>
                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                        <Icon path={mdiTranslate} color={"#ffffff"} size={1}/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu align={{ lg: 'start' }}>
                        <Dropdown.ItemText>{ t("menu.language") }</Dropdown.ItemText>
                        <Dropdown.Divider />
                        <Dropdown.Item as="button" className={i18n.resolvedLanguage === 'es' ? "bg-secondary text-light" : ""} onClick={changeLanguage} value='es'>Español</Dropdown.Item>
                        <Dropdown.Item as="button" className={i18n.resolvedLanguage === 'en' ? "bg-secondary text-light" : ""} onClick={changeLanguage} value='en'>English</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/#home" eventKey={1}>{ t("menu.home") }</Nav.Link>
                        <Nav.Link href="/#about" eventKey={2}>{ t("menu.about") }</Nav.Link>
                        <Nav.Link href="/#projects" eventKey={3}>{ t("menu.projects") }</Nav.Link>
                        <Nav.Link href="/#skills" eventKey={4}>{ t("menu.skills") }</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
    
}

export default Menu;