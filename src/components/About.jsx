
function About() {
  return(
    <div className="flex flex-col justify-center items-center min-h-[90vh]">
      <h1>accordian for coursework?</h1>
      <div className="w-[700px] space-y-4">
        <div>
          <div className="mb-6">
            <h3>
              About Me
            </h3>
          </div>
          <div className="">
            <p className="mb-2">
              Hello! I'm a recent graduate from Wilfrid Laurier University's Business Administration and Computer Science double degree program. 
              My educational journey has equipped me with a unique blend of skills that allows me to seamlessly bridge the worlds of business and technology.
            </p>
            <p className="mb-6">
              One thing I've learned is that in the world of technology, learning never stops. 
              I'm on an endless quest to acquire knowledge and stay ahead of the curve. 
              The dynamic nature of technology, from software engineering to machine learning and data analysis, 
              keeps me motivated to expand my skill set and embrace new challenges.
            </p>
            <p>
              Below is some of my relevant coursework from school...
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <h6>
            Software Dev
            <span>
              : Software Engineering,
              Data Structures II,
              Algorithm Design & Analysis,
              Object-Oriented Programming,
              Operating Systems,
              Computer Security
            </span>
          </h6>
          <h6>
            Data & Analysis
            <span>
              : Machine Learning,
              Artificial Intelligence,
              Databases,
              Managerial Statistics,
              Windows Application Programming
            </span>
          </h6>
          <h6>
            Math
            <span>
              : Calculus I,
              Linear Algebra,
              Mathematical Proofs,
              Discrete Mathematics
            </span>
          </h6>
          <h6>
            Finance
            <span>
              : Financial Management II,
              Options, Futures & Swaps,
              Fixed Income Analysis,
              Advanced Corporate Finance,
              Investment Management
            </span>
          </h6>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default About;
