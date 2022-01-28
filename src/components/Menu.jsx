
import { Navbar, Nav, Container } from 'react-bootstrap';

const Menu = () => {

    return(
        <Navbar expand="lg" fixed="top" bg="dark" variant="dark" collapseOnSelect>
            <Container fluid>
                <Navbar.Brand href="/">JosenRomero</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/#home" eventKey={1}>Home</Nav.Link>
                        <Nav.Link href="/#about" eventKey={2}>About</Nav.Link>
                        <Nav.Link href="/#projects" eventKey={3}>Projects</Nav.Link>
                        <Nav.Link href="/#skills" eventKey={4}>Skills</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
    
}

export default Menu;