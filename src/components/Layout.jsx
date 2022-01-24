
import Menu from './Menu';

const Layout = ({children}) => {

    return(
        <>
            <Menu />

            {children}

            <div>footer</div>
        </>
    );

}

export default Layout;