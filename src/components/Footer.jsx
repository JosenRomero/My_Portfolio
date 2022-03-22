
import { Container } from 'react-bootstrap';

import { useTranslation } from 'react-i18next';

const Footer = () => {

    const { t } = useTranslation();

    return(
        <footer className="bg-dark text-white mt-5">
            <Container className="text-center p-2">
                <p>{ t("footer") }</p>
            </Container>
        </footer>
    );
    
}

export default Footer;