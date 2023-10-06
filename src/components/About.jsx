
function About({aboutRef}) {
  return(
    <div ref={aboutRef} className="flex flex-col justify-center items-center py-12">
      <div className="w-[700px]">
        <div>
          <div className="mb-6">
            <h3>
              About Me
            </h3>
          </div>
          <div className="space-y-2 mb-4">
            <p>
              Hello! I'm a recent graduate from Wilfrid Laurier University's Business Administration and Computer Science double degree program. 
              My educational journey has equipped me with a unique blend of skills that allows me to seamlessly bridge the worlds of business and technology.
            </p>
            <p>
              One thing I've learned is that in the world of technology, learning never stops. 
              I'm on an endless quest to acquire knowledge and stay ahead of the curve. 
              The dynamic nature of technology, from software engineering to machine learning and data analysis, 
              keeps me motivated to expand my skill set and embrace new challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
