
import { BrowserRouter as Router, Route, Routes }  from 'react-router-dom';

import Layout from '../components/Layout';

import HomePage from '../pages/HomePage';

const AppRouter = () => {

    return (
        <Router>
            <Layout>
                <Routes>
                    
                    <Route path="/" element={ <HomePage /> } />
                    
                </Routes>
            </Layout>
        </Router>
    );

}

export default AppRouter;