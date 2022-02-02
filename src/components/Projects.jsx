
import { Container, Row } from 'react-bootstrap';

import { projects } from '../data';

import Project from './Project';

import Tada from 'react-reveal/Tada';

const Projects = () => {

    return(
        <section id="projects">
            <Container>
                <Row>
                    <Tada>
                        <h3 className="text-center mb-5">Projects</h3>
                    </Tada>
                    { projects.map((project, i) => {   
                        return (
                            <Project project={project} key={i} />
                        );    
                    })}
                </Row>
            </Container>
        </section>
    );
    
}

export default Projects;