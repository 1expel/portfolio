import React, { useRef, useEffect } from 'react';
import Nav from './components/Nav';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import fixedNav from './utils/fixedNav';
import activeLinkNav from './utils/activeLinkNav';

function App() {

  // Create refs for child components
  const placeholderRef = useRef(null);
  const navRef = useRef(null);
  const linksRef = useRef(null);
  const landingRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);

  // useEffect to listen for nav & landing mounting
  useEffect(() => {
    activeLinkNav(navRef, linksRef, landingRef, aboutRef, projectsRef, skillsRef);
    return fixedNav(placeholderRef, navRef, landingRef);    
  }, []);

  return (
    <div>
      <div ref={placeholderRef}></div>
      <Nav navRef={navRef} linksRef={linksRef}/>
      <Landing landingRef={landingRef}/>
      <About aboutRef={aboutRef}/>
      <Projects projectsRef={projectsRef}/>
      <Skills skillsRef={skillsRef}/>
      <Contact/>
    </div>
  );
  
}

export default App
