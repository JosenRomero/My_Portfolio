
import { Container, Row } from 'react-bootstrap';

import { useTranslation } from 'react-i18next';

import { projects } from '../data';

import Project from './Project';

import Tada from 'react-reveal/Tada';

const Projects = () => {

    const { t } = useTranslation();

    return(
        <section id="projects">
            <Container>
                <Row>
                    <Tada>
                        <h3 className="text-center mb-5">{ t("myProjects") }</h3>
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