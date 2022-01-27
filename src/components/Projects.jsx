
import { Container, Row } from 'react-bootstrap';

import { projects } from '../data';

import Project from './Project';

const Projects = () => {

    return(
        <section id="projects">
            <Container>
                <Row>
                    <h3 className="text-center mb-5">Projects</h3>
                    { projects.map((project) => {   
                        return (
                            <Project project={project} />
                        );    
                    })}
                </Row>
            </Container>
        </section>
    );
    
}

export default Projects;