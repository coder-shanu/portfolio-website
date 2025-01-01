import React from 'react';
import './App.css';
import Navbar from './component/navbar';
import Home from './component/home';
import './index.css';
import About from './component/About';
import Projects from './component/projects';
import Skills from './component/Skills';
import Contact from './component/contact';
function App() {
    return (
       <div className='app'>
     
       <Navbar/>
        <Home/>
        <Skills/>
        <About/>
        <Projects/>
       <Contact/>
       </div> 
    );
}
 export default App;
// Example Home component, replace or extend with your own components
