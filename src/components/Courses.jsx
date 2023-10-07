import AccordianList from './AccordianList';

function Courses({coursesRef}) {
  return(
    <div ref={coursesRef} className="flex flex-col justify-center items-center responsivePaddingY12">
      <div className="responsiveContainer">
        <div className="responsiveMarginB6">
          <h3>
            Courses
          </h3>
        </div>
        <AccordianList/>
      </div>
    </div>
  );
}

export default Courses;
