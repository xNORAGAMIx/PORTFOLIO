import Banner from './component/Banner';
import NavbarHome from './component/NavbarHome';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Skills from './component/Skills';
import Projects from './component/Projects';

function App() {
  return (
    <div className="App">
      <NavbarHome/>
      <Banner/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
