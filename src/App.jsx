import React, { useRef, useEffect } from 'react';
import Nav from './components/Nav';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import fixedNav from './utils/fixedNav';

function App() {

  // Create refs for child components
  const placeholderRef = useRef(null);
  const navRef = useRef(null);
  const landingRef = useRef(null);

  // useEffect to listen for nav & landing mounting
  useEffect(() => {
    return fixedNav(placeholderRef, navRef, landingRef);    
  }, []);

  return (
    <div>
      <div ref={placeholderRef}></div>
      <Nav elementRef={navRef}/>
      <Landing elementRef={landingRef}/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
  
}

export default App
