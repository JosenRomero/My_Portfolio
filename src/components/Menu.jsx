
import { Navbar, Nav, Container, Dropdown, Button } from 'react-bootstrap';

import { mdiTranslate } from '@mdi/js'; 
import Icon from '@mdi/react';

import { useTranslation } from 'react-i18next';

import { useContext } from 'react';
import { ThemeContext } from '../context/theme-context';

import { mdiWhiteBalanceSunny } from '@mdi/js'; 
import { mdiWeatherNight } from '@mdi/js'; 

import { useScrollspy } from '../hooks/useScrollspy';

const Menu = () => {

    const { t, i18n } = useTranslation();

    const { dark, theme, toggle } = useContext(ThemeContext);

    const { addActiveClass } = useScrollspy(["home", "about", "projects", "skills"], 50);

    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
    }

    const changeTheme = () => toggle();

    return(
        <Navbar expand="md" fixed="top" bg={theme} variant={theme} collapseOnSelect>
            <Container fluid>
                <Navbar.Brand href="/">JosenRomero</Navbar.Brand>
                <Button variant="transparent">
                    <Icon path={dark ? mdiWhiteBalanceSunny : mdiWeatherNight} color={dark ? "#f0db4f" : "#212529"} size={1} onClick={changeTheme} />
                </Button>
                <Dropdown className="ms-2">
                    <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                        <Icon path={mdiTranslate} color={dark ? "#fff" : "#212529"} size={1}/>
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
                        <Nav.Link className={addActiveClass("home")} href="/#home" eventKey={1}>{ t("menu.home") }</Nav.Link>
                        <Nav.Link className={addActiveClass("about")} href="/#about" eventKey={2}>{ t("menu.about") }</Nav.Link>
                        <Nav.Link className={addActiveClass("projects")} href="/#projects" eventKey={3}>{ t("menu.projects") }</Nav.Link>
                        <Nav.Link className={addActiveClass("skills")} href="/#skills" eventKey={4}>{ t("menu.skills") }</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
    
}

export default Menu;