import { JavaScriptSvg } from "../assets/JavaScriptSvg";
import { JavaSvg } from "../assets/JavaSvg";
import { PythonSvg } from "../assets/PythonSvg";
import { PhpSvg } from "../assets/PhpSvg";
import { SqlSvg } from "../assets/SqlSvg";
import { Html5Svg } from "../assets/Html5Svg";
import { Css3Svg } from "../assets/Css3Svg";
import { ReactSvg } from "../assets/ReactSvg";
import { ExpressSvg } from "../assets/ExpressSvg";
import { NodeSvg } from "../assets/NodeSvg";
import { TailwindSvg } from "../assets/TailwindSvg";
import { NumpySvg } from "../assets/NumpySvg";
import { PandasSvg } from "../assets/PandasSvg";
import { ScikitSvg } from "../assets/ScikitSvg";
import { MatplotlibSvg } from "../assets/MatplotlibSvg";
import { SeabornSvg } from "../assets/SeabornSvg";
import { GitSvg } from "../assets/GitSvg";
import { PostgreSvg } from "../assets/PostgreSvg";
import { ViteSvg } from "../assets/ViteSvg";
import { PostmanSvg } from "../assets/PostmanSvg";
import { InsomniaSvg } from "../assets/InsomniaSvg";
import { HerokuSvg } from "../assets/HerokuSvg";
import { VscodeSvg } from "../assets/VscodeSvg";

function Skills({skillsRef}) {
  return (
    <div ref={skillsRef} className="flex flex-col justify-center items-center py-12">
      <div className="w-[700px]">
        <div className="mb-6">
          <h3>
            Skills
          </h3>
        </div>
        <div className="space-y-4">
          <div>
            <h5 className="mb-2">
              Languages
            </h5>
            <div className="flex gap-x-4">
              <JavaScriptSvg width="64" height="64"/>
              <JavaSvg width="64" height="64"/>
              <PythonSvg width="64" height="64"/>
              <svg viewBox="32.18585611720149 20.47 223.6851360941233 247.05999999999997" xmlns="http://www.w3.org/2000/svg" width="64" height="64"><path d="M252.71 93.61a21.67 21.67 0 0 0-2.65-10.87 20.74 20.74 0 0 0-7.87-7.67Q198.77 50 155.32 25c-7.8-4.51-15.36-4.35-23.11.23C120.69 32 63 65.09 45.81 75.06c-7.08 4.1-10.52 10.38-10.52 18.54v100.8a21.77 21.77 0 0 0 2.55 10.66 20.63 20.63 0 0 0 8 7.88c17.19 10 74.89 43.05 86.41 49.85 7.75 4.58 15.31 4.74 23.12.23q43.41-25.08 86.87-50.09a20.63 20.63 0 0 0 8-7.88 21.77 21.77 0 0 0 2.55-10.66V93.61z" fill="#004482"/><path d="M252.73 194.4a21.72 21.72 0 0 1-2.55 10.66 18.58 18.58 0 0 1-1.45 2.24L144 144l98.19-68.93a20.72 20.72 0 0 1 7.86 7.67 21.57 21.57 0 0 1 2.66 10.87c.02 33.6.02 100.79.02 100.79z" fill="#00599c"/><path d="M250.05 82.74L37.81 205.06a21.75 21.75 0 0 1-2.53-10.65V93.6c0-8.16 3.45-14.44 10.52-18.54C63 65.09 120.69 32 132.22 25.21c7.73-4.58 15.3-4.74 23.1-.23q43.41 25.08 86.87 50.09a20.72 20.72 0 0 1 7.86 7.67z" fill="#659ad2"/><path d="M148.2 184.72a39.91 39.91 0 0 1-35-20.63q-.53-.94-1-1.92A39.94 39.94 0 0 1 179 119.4c.53.64 1 1.31 1.53 2 .24.33.48.66.7 1l35.07-20.2q-1.28-2.06-2.68-4c-.49-.69-1-1.35-1.48-2A79.9 79.9 0 0 0 78 181.92c.34.64.69 1.27 1 1.9a79.91 79.91 0 0 0 136.86 3.62l-34.29-20.73a39.88 39.88 0 0 1-33.37 18.01z" fill="#fff"/></svg>
              <PhpSvg width="64" height="64"/>
              <SqlSvg width="64" height="64"/>
              <Html5Svg width="64" height="64"/>
              <Css3Svg width="64" height="64"/>
            </div>
          </div>
          <div>
            <h5 className="mb-2">
              Libraries
            </h5>
            <div className="flex gap-x-4">
              <ReactSvg width="64" height="64"/>
              <ExpressSvg width="64" height="64"/>
              <TailwindSvg width="64" height="64"/>
              <NumpySvg width="64" height="64"/>
              <PandasSvg width="64" height="64"/>
              <ScikitSvg width="64" height="64"/>
              <MatplotlibSvg width="64" height="64"/>
              <SeabornSvg width="64" height="64"/>
            </div>
          </div>
          <div>
            <h5 className="mb-2">
              Technologies
            </h5>
            <div className="flex gap-x-4">
              <NodeSvg width="64" height="64"/>
              <GitSvg width="64" height="64"/>
              <PostgreSvg width="64" height="64"/>
              <ViteSvg width="64" height="64"/>
              <PostmanSvg width="64" height="64"/>
              <InsomniaSvg width="64" height="64"/>
              <HerokuSvg width="64" height="64"/>
              <VscodeSvg width="64" height="64"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
