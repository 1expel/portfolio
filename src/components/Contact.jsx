import { LinkedinSvg } from "../assets/LinkedinSvg";
import { GithubSvg } from "../assets/GithubSvg";

function Contact() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[60vh] py-12">
      <div className="w-[700px] space-y-6">
        <div>
          <h3>
            Thank You - Feel Free to Contact Me
          </h3>
        </div>
        <div>
          <p>
            Thank you for taking the time to view my portfolio! 
            I'm truly excited to have you here as I embark on my journey to pursue a career in software development or data analysis. 
            If you have any questions or would like to connect, whether it's about my projects, experiences, or aspirations, please don't hesitate to reach out. 
            Your visit means a lot to me, and I look forward to the possibilities that lie ahead in the world of technology.
          </p>
        </div>
        <div className="flex gap-x-4">
          <a href="https://www.linkedin.com/in/connor-kanalec/">
            <LinkedinSvg width="32" height="32"/>
          </a>
          <a href="https://github.com/ConkCodes">
            <GithubSvg width="32" height="32"/>
          </a>
          <a href="mailto:ckanalec@gmail.com">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"/></svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact;
