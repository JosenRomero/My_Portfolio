
import { Container, Row, Col } from 'react-bootstrap';

import { skills } from '../data';

import Icon from '@mdi/react';

import Zoom from 'react-reveal/Zoom';

const Skills = () => {

    return(
        <section id="skills">
            <Zoom>
                <Container>
                    <Row className="text-center">
                        <h3 className="mb-5">My Skills</h3>
                        { skills.map((skill, i) => {
                            return (
                                <Col xs={6} sm={4} md={3} key={i}>
                                    <Icon path={skill[0]} color={skill[1]} size={3} />
                                    <p>{skill[2]}</p>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </Zoom>
        </section>
    );

}

export default Skills;