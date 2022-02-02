
import { Container, Row, Col } from 'react-bootstrap';

import Fade from 'react-reveal/Fade';

const Header = () => {

    return(
        <header id="home" className="bg-dark text-white">
            <Container>
                <Row>
                    <Fade bottom>
                        <Col className="text-center">
                            <h1>Hi, I'm José Romero</h1>
                            <p>I'm a JavaScript Developer</p>
                            <p>Based in Central America.</p>
                        </Col>
                    </Fade>
                </Row>
            </Container>
        </header>
    );
    
}

export default Header;