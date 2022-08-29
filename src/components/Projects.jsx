
import { Container, Row, Button } from 'react-bootstrap';

import { useTranslation } from 'react-i18next';

import { projects } from '../data';

import Project from './Project';

import Tada from 'react-reveal/Tada';

import { mdiOpenInNew } from '@mdi/js'; 
import Icon from '@mdi/react';

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
                    <div className="text-center">
                        <Button href={'https://github.com/JosenRomero'} className="my-3" variant="primary" target="_blank">
                            <Icon path={mdiOpenInNew} color={"#fff"} size={1} />
                            <span className='ms-2'>More Projects</span>
                        </Button>
                    </div>
                </Row>
            </Container>
        </section>
    );
    
}

export default Projects;