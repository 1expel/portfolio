import { LinkedinSvg } from "../assets/LinkedinSvg";
import { GithubSvg } from "../assets/GithubSvg";

function Landing() {
  return (
    <div className="flex justify-center items-center min-h-[90vh] py-12">
      <div className="w-[600px] mr-[50px] space-y-6">
        <h1>
          Connor Kanalec
        </h1>
        <p>
          I'm a recent graduate in business and computer science passionate about leveraging technology to solve real-world problems, 
          and eager to embark on my career in the world of technology!
        </p>
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
      <div className="border-2 rounded-full overflow-hidden">
        <img 
          src="src/assets/pfp.jpg" 
          alt="profile pic" 
          className="w-[300px] h-[auto]"
        />
      </div>
    </div>
  );
}

export default Landing;
