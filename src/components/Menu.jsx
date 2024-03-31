
import { Navbar, Nav, Container, Dropdown, Button } from 'react-bootstrap';

import { useTranslation } from 'react-i18next';

import { useContext } from 'react';
import { ThemeContext } from '../context/theme-context';

import { IconSunny, IconMoon, IconTranslate } from '../Icons/Icons';

const Menu = () => {

    const { t, i18n } = useTranslation();

    const { dark, theme, toggle } = useContext(ThemeContext);

    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
    }

    const changeTheme = () => toggle();

    return(
        <Navbar expand="md" fixed="top" bg={theme} variant={theme} collapseOnSelect>
            <Container fluid>
                <Navbar.Brand href="/">JosenRomero</Navbar.Brand>
                <Button variant="transparent" onClick={changeTheme}>
                    { dark ? <IconSunny /> : <IconMoon /> }
                </Button>
                <Dropdown className="ms-2">
                    <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                        <IconTranslate color={dark ? "#fff" : "#212529"} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu align={{ md: 'start' }}>
                        <Dropdown.ItemText>{ t("menu.language") }</Dropdown.ItemText>
                        <Dropdown.Divider />
                        <Dropdown.Item as="button" className={i18n.resolvedLanguage === 'es' ? "bg-secondary text-light" : ""} onClick={changeLanguage} value='es'>Español</Dropdown.Item>
                        <Dropdown.Item as="button" className={i18n.resolvedLanguage === 'en' ? "bg-secondary text-light" : ""} onClick={changeLanguage} value='en'>English</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav id={`nav-link-${theme}`} className="ms-auto">
                        <Nav.Link href="/#home">{ t("menu.home") }</Nav.Link>
                        <Nav.Link href="/#about">{ t("menu.about") }</Nav.Link>
                        <Nav.Link href="/#projects">{ t("menu.projects") }</Nav.Link>
                        <Nav.Link href="/#skills">{ t("menu.skills") }</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
    
}

export default Menu;