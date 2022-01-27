
import { BrowserRouter as Router, Route, Routes }  from 'react-router-dom';

import Layout from '../components/Layout';

import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';

const AppRouter = () => {

    return (
        <Router>
            <Layout>
                <Routes>
                    
                    <Route path="/" element={ <HomePage /> } />

                    <Route path="*" element={ <NotFoundPage />} />
                    
                </Routes>
            </Layout>
        </Router>
    );

}

export default AppRouter;