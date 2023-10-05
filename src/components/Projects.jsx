import CardList from './CardList';
import Card from './Card';

function Projects() {
  const subtitles = [
    "Problem & Solution",
    "Dataset",
    "Results",
  ]
  const content = [
    `Created the Hyperthyroidism Diagnosis Assistant, a software program that leverages machine 
    learning models to support medical professionals in the accurate and timely diagnosis of hyperthyroidism.
    This project uses machine-learning models to predict whether a patient has a hyperthyroid condition.`,
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
        <CardList tab1={"Overview"} tab2={"My Role"} tab3={"Subtitle"}>
          <Card 
            title={"Hyperthyroidism Diagnosis Assistant"}
            subtitles={subtitles}
            contents={content}
            link={"https://github.com/ConkCodes/hyperthyroidism-predictor"}
          />
          <Card 
            title={"Hyperthyroidism Diagnosis Assistant"}
            subtitles={["My Role/Tech Used"]}
            contents={["content"]}
            link={"https://github.com/ConkCodes/hyperthyroidism-predictor"}
          />
          <Card 
            title={"Hyperthyroidism Diagnosis Assistant"}
            subtitles={["subtitle"]}
            contents={["content"]}
            link={"https://github.com/ConkCodes/hyperthyroidism-predictor"}
          />
        </CardList>
      </div>
    </div>
  )
}

export default Projects;
