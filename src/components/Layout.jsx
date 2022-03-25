
import Menu from './Menu';
import Footer from './Footer';

import { useContext } from 'react';
import { ThemeContext } from '../context/theme-context';

const Layout = ({children}) => {

    const { theme } = useContext(ThemeContext);

    return(
        <div id="principal" className={`theme-${theme}`}>
            <Menu />
            {children}
            <Footer />
        </div>
    );

}

export default Layout;