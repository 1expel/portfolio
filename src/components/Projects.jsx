import CardList from './CardList';
import Card from './Card';

function Projects({projectsRef}) {
  return (
    <div ref={projectsRef} className="flex flex-col justify-center items-center responsivePaddingY12">
      <div className="responsiveContainer space-y-4">
        <div className="responsiveMarginB6">
          <h3>
            Projects
          </h3>
        </div>
        <CardList numbers={[1,2,3]} tab1={"Overview"} tab2={"Implementation"} tab3={"Tab 3"}>
          <Card 
            title={"Hyperthyroidism Diagnosis Assistant"}
            subtitles={[
              "Problem & Solution",
              "Dataset",
              "Results",
            ]}
            contents={[
              [`Created the Hyperthyroidism Diagnosis Assistant, a software program that leverages machine 
              learning models to support medical professionals in the accurate and timely diagnosis of hyperthyroidism.
              This project uses machine-learning models to predict whether a patient has a hyperthyroid condition.`],
              [`The project uses a dataset from the Thyroid Disease Database from UCI machine learning repository which has more than 3000 cases. 
              The dataset has 22 variables which are medical characteristics of the patient that a machine learning model can use to assist human diagnosis.`],
              [`The results of the model showed an 80% precision* in detecting patients with hyperthyroidism 
              and an overall model accuracy* of 98%.`,
              `note: precision = correct # of positive predictions / total # of positive predictions`,
              `note: accuracy = correct # of predictions / total # of predictions`]
            ]}
            link={"https://github.com/ConkCodes/hyperthyroidism-predictor"}
          />
          <Card 
            title={"Hyperthyroidism Diagnosis Assistant"}
            subtitles={[
              "Tech Used",
              "My Work"
            ]}
            contents={[
              ["Language: Python", 
              "Data Manipulation: Numpy, Pandas", 
              "Machine Learning Models: Scikit-Learn", 
              "Data Visualization: Matplotlib, Seaborn"],
              [`Utilized Python libraries, Pandas and NumPy, to manipulate a dataset of 66,000+ data points.`,
              `Used machine learning models from Scikit-Learn to diagnosis over 1000 patients in seconds.`,
              `Achieved a precision score of 80% and overall model accuracy of 98%.`,
              `Used libraries Matplotlib and Seaborn for data visualization, enhancing crucial insights.`]
            ]}
            link={"https://github.com/ConkCodes/hyperthyroidism-predictor"}
          />
          <Card 
            title={"Hyperthyroidism Diagnosis Assistant"}
            subtitles={["subtitle"]}
            contents={[["content"]]}
            link={"https://github.com/ConkCodes/hyperthyroidism-predictor"}
          />
        </CardList>
        <CardList numbers={[3,4,5]} tab1={"Overview"} tab2={"Implementation"} tab3={"Tab 3"}>
          <Card 
            title={"Flick - Your Ultimate Movie Night Decision-Maker!"}
            subtitles={[
              "Problem & Solution",
              "Features",
            ]}
            contents={[
              [`Flick is a user-friendly web application designed to enhance the movie-watching experience for groups of friends. 
              No more endless debates and scrolling through movie libraries, 
              because Flick simplifies the process of selecting the perfect movie to watch together.`],
              [`Create an Account 🎬: Sign up and personalize your profile. Your movie preferences matter!`,
              `Join Theatres 🍿: Enter or create your own private "Theatre" groups. Invite your friends, family, 
              or colleagues to join your Theatre and embark on cinematic adventures together.`,
              `Like or Dislike 👍👎: Express your movie preferences by giving movies a thumbs-up or thumbs-down. 
              Your choices influence the group's decision.`,
              `Mutual Movie Notifications 📢: Flick's intelligent algorithm detects movies that received unanimous likes within your Theatre. 
              When a movie gets the green light from everyone, 
              you'll be instantly notified! No more back-and-forth messages about movie selections.`],
            ]}
            link={"https://github.com/flick-cp317"}
          />
          <Card 
            title={"Flick - Your Ultimate Movie Night Decision-Maker!"}
            subtitles={[
              "Tech Used",
              "My Role",
              "My Contributions"
            ]}
            contents={[
              ["Frontend: React.js",
              "Backend: Express.js, Node.js, PostgreSQL",
              "Other Tools: Git, Insomnia"],
              ["Backend Developer"],
              [`Developed 15 API endpoints using Node.js and Express.js that interacted with 5 tables in PostgreSQL.`,
              `Wrote efficient database loading and clearing scripts, resulting in a 15% reduction in testing time.`,
              `Accelerated software implementation by 20% through my role in the planning, analysis, and design phases
              of the Software Development Life Cycle.`,]
            ]}
            link={"https://github.com/flick-cp317"}
          />
          <Card 
            title={"Flick - Your Ultimate Movie Night Decision-Maker!"}
            subtitles={["subtitle"]}
            contents={[["content"]]}
            link={"https://github.com/flick-cp317"}
          />
        </CardList>
      </div>
    </div>
  )
}

export default Projects;
