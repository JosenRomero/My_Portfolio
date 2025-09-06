import { Navbar, Nav, Container, Dropdown, Button, Offcanvas } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { useContext } from "react"

import { ThemeContext } from "../context/theme-context"
import { IconSunny, IconMoon, IconTranslate } from "../Icons/Icons"
import ItemLink from "./ItemLink"

const Menu = () => {
	const { t, i18n } = useTranslation()

	const { dark, theme, toggle } = useContext(ThemeContext)

	const changeLanguage = (e) => {
		i18n.changeLanguage(e.target.value)
	}

	const changeTheme = () => toggle()

	return (
		<Navbar expand="md" fixed="top" bg={theme} variant={theme} collapseOnSelect>
			<Container>
				<Button id="iconSunny" variant="transparent" onClick={changeTheme}>
					{dark ? <IconSunny /> : <IconMoon />}
				</Button>
				<Dropdown className="ms-2">
					<Dropdown.Toggle variant="transparent" id="dropdown-basic">
						<IconTranslate color={dark ? "#fff" : "#212529"} />
					</Dropdown.Toggle>
					<Dropdown.Menu align={{ md: "start" }}>
						<Dropdown.ItemText>{t("menu.language")}</Dropdown.ItemText>
						<Dropdown.Divider />
						<Dropdown.Item
							as="button"
							className={i18n.resolvedLanguage === "es" ? "bg-secondary text-light" : ""}
							onClick={changeLanguage}
							value="es"
						>
							Español
						</Dropdown.Item>
						<Dropdown.Item
							as="button"
							className={i18n.resolvedLanguage === "en" ? "bg-secondary text-light" : ""}
							onClick={changeLanguage}
							value="en"
						>
							English
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<Navbar.Toggle aria-controls="offcanvasNavbar-expand-xl" />
				<Navbar.Offcanvas id="offcanvasNavbar-expand-xl" data-bs-theme={theme}>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title>
							Portfolio | José Romero
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body id={`nav-link-${theme}`}>
						<Nav as={"ul"} className="ms-auto">
							<ItemLink to="home">{t("menu.home")}</ItemLink>
							<ItemLink to="about">{t("menu.about")}</ItemLink>
							<ItemLink to="projects">{t("menu.projects")}</ItemLink>
							<ItemLink to="contributions">{t("menu.open_source")}</ItemLink>
							<ItemLink to="skills">{t("menu.skills")}</ItemLink>
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	)
}

export default Menu
