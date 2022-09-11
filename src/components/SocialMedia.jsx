
import { Button } from 'react-bootstrap';

import Icon from '@mdi/react';
import { mdiGithub, mdiInstagram, mdiEmail  } from '@mdi/js';

const SocialMedia = () => {

    return(
        <div className="socialMedia">
            <Button href="https://github.com/JosenRomero" className="m-1" variant="outline-secondary" target="_blank">
                <Icon path={mdiGithub} size={1}/>
            </Button>
            <Button href="mailto:romerojosemanuel@hotmail.com" className="m-1" variant="outline-secondary">
                <Icon path={mdiEmail} size={1}/>
            </Button>
            <Button href="https://www.instagram.com/josen._.romero/" className="m-1" variant="outline-secondary" target="_blank">
                <Icon path={mdiInstagram} size={1}/>
            </Button>
        </div>
    );

}

export default SocialMedia;