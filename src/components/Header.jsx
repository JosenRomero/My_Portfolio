
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {

    return(
        <header id="home" className="bg-dark text-white">
            <Container>
                <Row>
                    <Col className="text-center">
                        <h1>Hi, I'm José Romero</h1>
                        <p>I'm a JavaScript Developer</p>
                        <p>Based in Central America.</p>
                    </Col>
                </Row>
            </Container>
        </header>
    );
    
}

export default Header;