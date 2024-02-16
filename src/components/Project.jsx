
import { Row, Col, Card } from 'react-bootstrap';

import { useTranslation } from 'react-i18next';

import { useContext } from 'react';
import { ThemeContext } from '../context/theme-context';

import ColButton from './ColButton';

const Project = ({project, index}) => {

    const { t } = useTranslation();
    const { theme } = useContext(ThemeContext);

    return(
        <Col md={6}>

            <Card className={`bg-${theme} mb-4 shadow-sm`}>
                <Card.Img className={(project.imageSmall) ? "imgSmall" : ""} src={project.image} /> 
                <Card.Body className={(theme == "dark") ? "text-light" : "text-dark"}>
                    <Card.Title>{project.title}</Card.Title>
                    <hr />
                    <div className="d-flex">
                        <div className="ms-auto d-flex gap-2">
                            { project.programming_language.map((item, i)=> {
                                return(
                                    <div className="iconSmall" key={i}>
                                        <item.icon />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="mt-3">
                        <p>{ t(`project_descriptions.${index}`) }</p>
                    </div>
                </Card.Body>
                <Card.Footer className="p-3">
                    <Row className="my-2">
                        <ColButton 
                            link={project.view_code.frontend}
                            col_className={(project.view_code.backend !== "") ? "d-grid gap-2 col-6" : "d-grid gap-2"}
                            btn_className={(project.view_code.backend !== "") ? "me-2" : ""}
                            btn_variant={"outline-secondary"}
                            text={"Frontend"}
                        />
                        <ColButton 
                            link={project.view_code.backend} 
                            col_className={"d-grid gap-2 col-6"}
                            btn_variant={"outline-secondary"}
                            text={"Backend"} 
                        />
                    </Row>
                    <ColButton link={project.open_project} text={"Live Demo"} />
                    <ColButton link={project.download_apk} text={"Download Demo"} />
                </Card.Footer>
            </Card>

        </Col>
    );
    
}

export default Project;