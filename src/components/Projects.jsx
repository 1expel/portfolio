import CardList from './CardList';
import Card from './Card';

function Projects({projectsRef}) {
  return (
    <div ref={projectsRef} className="flex flex-col justify-center items-center min-h-[90vh] py-12">
      <div className="w-[700px]">
        <div className="mb-6">
          <h3>
            Projects
          </h3>
        </div>
        <CardList tab1={"Overview"} tab2={"Tech"} tab3={"Tab 3"}>
          <Card 
            title={"Hyperthyroidism Diagnosis Assistant"}
            subtitles={[
              "Problem & Solution",
              "Dataset",
              "Results",
            ]}
            contents={[
              `Created the Hyperthyroidism Diagnosis Assistant, a software program that leverages machine 
              learning models to support medical professionals in the accurate and timely diagnosis of hyperthyroidism.
              This project uses machine-learning models to predict whether a patient has a hyperthyroid condition.`,
              `The project uses a dataset from the Thyroid Disease Database from UCI machine learning repository which has more than 3000 cases. 
              The dataset has 22 variables which are medical characteristics of the patient that a machine learning model can use to assist human diagnosis.`,
              `insert results`
            ]}
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
        <CardList tab1={"Overview"} tab2={"My Role"} tab3={"Tab 3"}>
          <Card 
            title={"Flick"}
            subtitles={[
              "Problem & Solution",
              "Features",
            ]}
            contents={[
              `Flick is a user-friendly web application designed to enhance the movie-watching experience for groups of friends. 
              No more endless debates and scrolling through movie libraries, 
              because Flick simplifies the process of selecting the perfect movie to watch together.`,
              `🎬 Create an Account: Sign up and personalize your profile. Your movie preferences matter!
              🍿 Join Theatres: Enter or create your own private "Theatre" groups. Invite your friends, family, 
              or colleagues to join your Theatre and embark on cinematic adventures together.
              👍👎 Like or Dislike: Express your movie preferences by giving movies a thumbs-up or thumbs-down. 
              Your choices influence the group's decision.
              📢 Mutual Movie Notifications: Flick's intelligent algorithm detects movies that received unanimous likes within your Theatre. 
              When a movie gets the green light from everyone, 
              you'll be instantly notified! No more back-and-forth messages about movie selections.`,
            ]}
            link={"https://github.com/flick-cp317"}
          />
          <Card 
            title={"Flick"}
            subtitles={["My Role/Tech Used"]}
            contents={["content"]}
            link={"https://github.com/flick-cp317"}
          />
          <Card 
            title={"Flick"}
            subtitles={["subtitle"]}
            contents={["content"]}
            link={"https://github.com/flick-cp317"}
          />
        </CardList>
      </div>
    </div>
  )
}

export default Projects;
