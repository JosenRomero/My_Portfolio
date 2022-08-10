
import { Row, Col, Card, Button } from 'react-bootstrap';

import Icon from '@mdi/react';

import { useContext } from 'react';
import { ThemeContext } from '../context/theme-context';

const Project = ({project}) => {

    const { theme } = useContext(ThemeContext);

    return(
        <Col md={6}>

            <Card className={`bg-${theme} mb-4 shadow-sm`}>
                { (project.imageSmall)
                    ? <Card.Img className="imgSmall" src={project.image} /> 
                    : <Card.Img src={project.image} />
                }
                <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <hr />
                    <div className="d-flex">
                        <div className="ms-auto">
                            { project.programming_language.map((icon, i)=> {
                                return(
                                    <Icon path={icon[0]} color={icon[1]} size={1} key={i} />
                                );
                            })}
                        </div>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <Row className="my-2">
                        <Col xs={12} sm={4} md={12} lg={4}>
                            <p>View code: </p>
                        </Col>
                        <Col xs={12} sm={8} md={12} lg={8}>
                            <Button href={project.view_code.frontend} className="me-2" variant="outline-secondary" target="_blank">
                                Frontend
                            </Button>
                            { (project.view_code.backend !== "") &&
                                <Button href={project.view_code.backend} className="me-2" variant="outline-secondary" target="_blank">
                                    Backend
                                </Button>
                            }
                        </Col>
                    </Row>
                    { (project.open_project !== "") &&
                        <Col className="d-grid gap-2">
                            <Button href={project.open_project} variant="primary" target="_blank">
                                Live Demo
                            </Button>
                        </Col>
                    }
                    { (project.download_apk) &&
                        <Col className="d-grid gap-2">
                            <Button href={project.download_apk} variant="primary" target="_blank">
                                Download Demo
                            </Button>
                        </Col> 
                    }
                </Card.Footer>
            </Card>

        </Col>
    );
    
}

export default Project;