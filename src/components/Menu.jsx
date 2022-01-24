
import { Navbar, Nav, Container } from 'react-bootstrap'

const Menu = () => {

    return(
        <Navbar expand="lg" fixed="top" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/">JosenRomero</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
    
}

export default Menu;