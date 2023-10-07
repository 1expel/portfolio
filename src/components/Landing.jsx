import { LinkedinSvg } from "../assets/LinkedinSvg";
import { GithubSvg } from "../assets/GithubSvg";

function Landing({landingRef}) {
  return (
    <div ref={landingRef} className="flex justify-center items-center min-h-[100vh] py-12">
      <div className="text-center sm:text-left sm:w-[300px] lg:w-[500px] px-4 sm:px-0 sm:mr-[15px] lg:mr-[50px] responsiveSpaceY6">
        <h1>
          Connor Kanalec
        </h1>
        <p>
          Passionate about leveraging technology to solve real-world problems, 
          and eager to embark on my career in the world of technology!
        </p>
        <div className="flex justify-center sm:justify-normal gap-x-4">
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
      <div className="hidden sm:block border-2 rounded-full overflow-hidden">
        <img
          src="./pfp.jpg" 
          alt="profile pic" 
          className="sm:w-[200px] lg:w-[250px] h-[auto]"
        />
      </div>
    </div>
  );
}

export default Landing;
