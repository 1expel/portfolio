import Card from './Card';

function Projects() {
    return (
        <div className="flex flex-col justify-center items-center min-h-[90vh]">
            <div className="w-[700px]">
                <div className="mb-6">
                    <h3>
                        Projects
                    </h3>
                </div>
                <Card 
                    title={"Hyperthyroidism Diagnosis Assistant"}
                    subtitle={"Overview"}
                    content={"content"}
                    link={"https://github.com/ConkCodes/hyperthyroidism-predictor"}
                />
                <Card 
                    title={"Hyperthyroidism Diagnosis Assistant"}
                    subtitle={"My Role/Tech Used"}
                    content={"content"}
                    link={"https://github.com/ConkCodes/hyperthyroidism-predictor"}
                />
                <Card 
                    title={"Hyperthyroidism Diagnosis Assistant"}
                    subtitle={"subtitle"}
                    content={"content"}
                    link={"https://github.com/ConkCodes/hyperthyroidism-predictor"}
                />
            </div>
        </div>
    )
}

export default Projects;
