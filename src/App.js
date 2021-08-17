import './App.css';
import Toolbar from './Toolbar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Works from './Works';
import Foter from './Foter';
function App() {
  return (
    <div className="App">
    <Toolbar></Toolbar>
    <Home></Home>
    <About></About>
    <Skills></Skills>
    <Works></Works>

    <Foter></Foter>
    </div>
  );
}

export default App;
