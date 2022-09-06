
import { Col, Button } from 'react-bootstrap';

const ColButton = ({link, text, col_className = "d-grid gap-2", btn_className = "", btn_variant = "primary"}) => {

    if(!link || link === "") return <></>
  
    return(
        <Col className={col_className}>
            <Button href={link} className={btn_className} variant={btn_variant} target="_blank">
                {text}
            </Button>
        </Col>  
    );

}

export default ColButton;