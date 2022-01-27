
import { Container } from 'react-bootstrap';

import { mdiHeart } from '@mdi/js'; 
import Icon from '@mdi/react';

const Footer = () => {

    return(
        <footer className="bg-dark text-white mt-5">
            <Container className="text-center p-2">
                <h4>José Romero</h4>
                <p>
                    Made with <Icon path={mdiHeart} color={'white'} size={1} /> in Central America.
                </p>
            </Container>
        </footer>
    );
    
}

export default Footer;