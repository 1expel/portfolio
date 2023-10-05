import Accordian from './Accordian';

function AccordianList() {
  return (
    <div className="hs-accordion-group">
      <Accordian 
        title={"Software Dev Courses"}
        content={"Software Engineering, Data Structures II, Algorithm Design & Analysis, Object-Oriented Programming, Operating Systems, Computer Security"} 
        active={" active"} 
        hidden={""} 
        number={"one"}
      />
      <Accordian 
        title={"Data Analysis Courses"} 
        content={"Machine Learning, Artificial Intelligence, Databases, Managerial Statistics, Windows Application Programming"}
        active={""} 
        hidden={" hidden"} 
        number={"two"}
      />
      <Accordian 
        title={"Math Courses"}
        content={"Calculus I, Linear Algebra, Mathematical Proofs, Discrete Mathematics"} 
        active={""} 
        hidden={" hidden"} 
        number={"three"}
      />
      <Accordian 
        title={"Finance Courses"} 
        content={"Financial Management II, Options, Futures & Swaps, Fixed Income Analysis, Advanced Corporate Finance, Investment Management"}
        active={""} 
        hidden={" hidden"} 
        number={"four"}
      />
    </div>
  );
}

export default AccordianList;
