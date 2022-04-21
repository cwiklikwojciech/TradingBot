import './App.css';
import { Routes, Route } from "react-router-dom";
import Menu from './Components/Navigation/Menu';
import Home from './Components/Home/Home';
import Markets from './Components/Markets/Markets'
import Capitalization from './Components/Capitalization/Capitalization'
import About from './Components/About/About'

function App() {
  return (
    <>
    <div className="bg-slate-800 h-screen">
      <main>
        <Menu/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/markets" element={<Markets />} />
            <Route path="/capitalization" element={<Capitalization />} />
            <Route path="/about" element={<About />} />
          </Routes>
      </main>
    </div>
    </>
  );
}

export default App;
