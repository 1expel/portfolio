import AccordianList from './AccordianList';

function Courses({coursesRef}) {
  return(
    <div ref={coursesRef} className="flex flex-col justify-center items-center py-12">
      <div className="w-[700px]">
        <div className="mb-6">
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
