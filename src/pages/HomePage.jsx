
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const HomePage = () => {

    return(
        <>
            <Header />
            <About />
            <hr class="col-md-10 offset-md-1" />
            <Projects />
            <hr class="col-md-10 offset-md-1" />
            <Skills />
        </>
    );
}

export default HomePage;