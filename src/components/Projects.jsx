import CardList from './CardList';
import Card from './Card';

function Projects() {
  const content = [
    `Problem & Solution`,
    `Created the Hyperthyroidism Diagnosis Assistant, a software program that leverages machine 
    learning models to support medical professionals in the accurate and timely diagnosis of hyperthyroidism.
    This project uses machine-learning models to predict whether a patient has a hyperthyroid condition.`,
    `Dataset`,
    `The project uses a dataset from the Thyroid Disease Database from UCI machine learning repository which has more than 3000 cases. 
    The dataset has 22 variables which are medical characteristics of the patient that a machine learning model can use to assist human diagnosis.`
  ];
  return (
    <div className="flex flex-col justify-center items-center min-h-[90vh]">
      <div className="w-[700px]">
        <div className="mb-6">
            <h3>
                Projects
            </h3>
        </div>
        <CardList 
          tab1={"Overview"}
          card1={
            <Card 
              title={"Hyperthyroidism Diagnosis Assistant"}
              subtitle={"Overview"}
              content={content}
              link={"https://github.com/ConkCodes/hyperthyroidism-predictor"}
            />
          }
          tab2={"My Role"}
          card2={
            <Card 
              title={"Hyperthyroidism Diagnosis Assistant"}
              subtitle={"My Role/Tech Used"}
              content={["content"]}
              link={"https://github.com/ConkCodes/hyperthyroidism-predictor"}
            />
          }
          tab3={"Subtitle"}
          card3={
            <Card 
              title={"Hyperthyroidism Diagnosis Assistant"}
              subtitle={"subtitle"}
              content={["content"]}
              link={"https://github.com/ConkCodes/hyperthyroidism-predictor"}
            />
          }
        />
      </div>
    </div>
  )
}

export default Projects;
