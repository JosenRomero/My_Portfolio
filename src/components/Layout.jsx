
import Menu from './Menu';
import Footer from './Footer';

const Layout = ({children}) => {

    return(
        <div id="principal">
            <Menu />
            {children}
            <Footer />
        </div>
    );

}

export default Layout;