import { BiCodeCurly } from 'react-icons/bi'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { DiCss3 } from 'react-icons/di'
import { TbBrandJavascript } from 'react-icons/tb'
import { useState } from 'react'

const Skills = () => {
  const [JavaScriptSkills, setJavaScriptSkills] = useState(false)
  const [FrontendSkills, setFrontendSkills] = useState(true)
  const [otherSkils, setOtherSkils] = useState(false)
  const [cssFrameworks, setCssFrameworks] = useState(false)

  return (
    <div className="section">
      <h2 className="font-bold text-center text-xl">Skills</h2>
      <h4 className="text-center text-sm mb-16">My technical level</h4>

      <div className="max-w-3xl grid ">
        <div>
          {/* Skills one */}
          <div className="">
            <div
              className="flex items-center mb-9 cursor-pointer"
              onClick={() => {
                setFrontendSkills(!FrontendSkills)
                setJavaScriptSkills(false)
                setOtherSkils(false)
                setCssFrameworks(false)
              }}
            >
              <BiCodeCurly className="w-5 h-5 text-firstColor mr-4" />

              <div>
                <h1 className="font-bold text-lg">Frontend Developer</h1>
                <span className="text-sm text-gray-500">
                  More than 4 years experience
                </span>
              </div>
              <MdOutlineKeyboardArrowDown
                className={`w-5 h-5 ml-auto transition-all duration-300 text-firstColor ${
                  FrontendSkills ? 'rotate-180' : ''
                }`}
              />
            </div>

            <div
              className={`grid gap-y-5 pl-11 transition-all duration-300 ${
                FrontendSkills ? 'pb-9' : 'h-0 overflow-hidden'
              }`}
            >
              <div className="">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium text-base">HTML</h3>
                  <span>90%</span>
                </div>
                <div className="bar">
                  <span className="percentage w-11/12"></span>
                </div>
              </div>
              <div className="">
                <div className="flex justify-between mb-2 ">
                  <h3 className="font-medium text-base">CSS</h3>
                  <span>80%</span>
                </div>
                <div className="bar">
                  <span className="percentage w-10/12"></span>
                </div>
              </div>
              <div className="">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium text-base">JavaScript</h3>
                  <span>60%</span>
                </div>
                <div className="bar">
                  <span className="percentage w-[60%]"></span>
                </div>
              </div>
            </div>
          </div>
          {/* Skills 2 */}
          <div>
            <div
              className="flex items-center mb-6 cursor-pointer"
              onClick={() => {
                setFrontendSkills(false)
                setJavaScriptSkills(!JavaScriptSkills)
                setOtherSkils(false)
                setCssFrameworks(false)
              }}
            >
              <TbBrandJavascript className="w-5 h-5 text-firstColor mr-4" />

              <div>
                <h1 className="font-bold text-lg">JavaScript Frameworks</h1>
                <span className="text-xs text-gray-500">
                  More than 4 years experience
                </span>
              </div>
              <MdOutlineKeyboardArrowDown
                className={`w-5 h-5 ml-auto transition-all duration-300 text-firstColor ${
                  JavaScriptSkills ? 'rotate-180' : ''
                }`}
              />
            </div>

            <div
              className={`grid gap-y-5 pl-11 transition-all duration-300 ${
                JavaScriptSkills ? 'pb-9' : 'h-0 overflow-hidden'
              }`}
            >
              <div className="">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium text-base">Vue JS</h3>
                  <span>80%</span>
                </div>
                <div className="bar">
                  <span className="percentage w-[80%]"></span>
                </div>
              </div>
              <div className="">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium text-base">React JS</h3>
                  <span>65%</span>
                </div>
                <div className="bar">
                  <span className="percentage w-[65%]"></span>
                </div>
              </div>
              <div className="">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium text-base">Next JS</h3>
                  <span>60%</span>
                </div>
                <div className="bar">
                  <span className="percentage w-[60%]"></span>
                </div>
              </div>
            </div>
          </div>
          {/* skills 3 */}
          <div className="">
            <div
              className="flex items-center mb-9 cursor-pointer"
              onClick={() => {
                setFrontendSkills(false)
                setJavaScriptSkills(false)
                setOtherSkils(false)
                setCssFrameworks(!cssFrameworks)
              }}
            >
              <DiCss3 className="w-5 h-5 mr-4 text-firstColor" />

              <div>
                <h1 className="font-bold text-lg">CSS Framworks</h1>
                <span className="text-xs text-gray-500">
                  More than 4 years experience
                </span>
              </div>
              <MdOutlineKeyboardArrowDown
                className={`w-5 h-5 ml-auto transition-all duration-300 text-firstColor ${
                  cssFrameworks ? 'rotate-180' : ''
                }`}
              />
            </div>

            <div
              className={`grid gap-y-5 pl-11 transition-all duration-300 ${
                cssFrameworks ? 'pb-9' : 'h-0 overflow-hidden'
              }`}
            >
              <div className="">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium text-base">Tailwind CSS</h3>
                  <span>90%</span>
                </div>
                <div className="bar">
                  <span className="percentage w-[90%]"></span>
                </div>
              </div>
              <div className="">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium text-base">Bootstrap CSS</h3>
                  <span>90%</span>
                </div>
                <div className="bar">
                  <span className="percentage w-[90%]"></span>
                </div>
              </div>
              <div className="">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium text-base">Bulma</h3>
                  <span>50%</span>
                </div>
                <div className="bar">
                  <span className="percentage w-[50%]"></span>
                </div>
              </div>
              <div className="">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium text-base">Vuetify</h3>
                  <span>90%</span>
                </div>
                <div className="bar">
                  <span className="percentage w-[90%]"></span>
                </div>
              </div>
            </div>
          </div>
          {/* skills 4 */}
          <div className="">
            <div
              className="flex items-center mb-9 cursor-pointer"
              onClick={() => {
                setFrontendSkills(false)
                setJavaScriptSkills(false)
                setOtherSkils(!otherSkils)
                setCssFrameworks(false)
              }}
            >
              <DiCss3 className="w-5 h-5 mr-4 text-firstColor" />

              <div>
                <h1 className="font-bold text-lg">Others</h1>
                <span className="text-xs text-gray-500">
                  More than 4 years experience
                </span>
              </div>
              <MdOutlineKeyboardArrowDown
                className={`w-5 h-5 ml-auto transition-all duration-300 text-firstColor ${
                  otherSkils ? 'rotate-180' : ''
                }`}
              />
            </div>

            <div
              className={`grid gap-y-5 pl-11 transition-all duration-300 ${
                otherSkils ? 'pb-9' : 'h-0 overflow-hidden'
              }`}
            >
              <div className="">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium text-base">Git</h3>
                  <span>90%</span>
                </div>
                <div className="bar">
                  <span className="percentage w-[90%]"></span>
                </div>
              </div>
              <div className="">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium text-base">Sass</h3>
                  <span>90%</span>
                </div>
                <div className="bar">
                  <span className="percentage w-[90%]"></span>
                </div>
              </div>
              <div className="">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium text-base">REST API</h3>
                  <span>50%</span>
                </div>
                <div className="bar">
                  <span className="percentage w-[50%]"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
