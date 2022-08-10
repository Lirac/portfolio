import { useState } from 'react'
import { FaBriefcase, FaGraduationCap, FaCalendarAlt } from 'react-icons/fa'
import Qualification_data from './qualification_data'
const Qualification = () => {
  const [tabOne, setTabOne] = useState(true)
  const [tabTwo, setTabTwo] = useState(false)

  return (
    <div className="section max-w-3xl mx-auto">
      <h2 className="font-bold text-center text-xl">Qualifications</h2>
      <h4 className="text-center text-sm mb-16">My Personal Journey</h4>

      <div className="">
        <div className="flex gap-4 justify-evenly mb-8">
          <div className={`flex gap-2 items-center cursor-pointer hover:text-firstColorAlt ${tabOne && 'text-firstColor'}`} onClick={() => {
            setTabOne(true)
            setTabTwo(false)
          }}>
            <FaGraduationCap className="w-5 h-5" />
            <span className="">Education</span>
          </div>
          <div className={`flex gap-2 items-center cursor-pointer hover:text-firstColor  ${tabTwo && 'text-firstColor'}`} onClick={() => {
            setTabOne(false)
            setTabTwo(true)
          }}>
            <FaBriefcase className="w-5 h-5" />
            <span className="">Work</span>
          </div>
        </div>

        <div className="">
          <div className={`${tabOne ? '' : 'hidden'}`}>
            {/* Educational Qualification 1 */}

            <Qualification_data
              course={'Computer Science (BSc)'}
              duration={'2011-2015'}
              university={'Landmark University, Kwara State, Nigeria'}
              left={true}
            />
            <Qualification_data
              course={'Information Systems (MSc)'}
              duration={'2016-2018'}
              university={'American Univerisity of Nigeria, Yola, Nigeria'}
              left={false}
              lastrow={true}
            />
          </div>
          {/* Work */}
          <div className={`${tabTwo ? '' : 'hidden'}`}>
            <Qualification_data
              course={'Intern'}
              duration={'2018-2020'}
              university={'Start Developer Hub, Nigeria'}
              left={true}
            />
            <Qualification_data
              course={'Junior Frontend Developer'}
              duration={'2020 - 2021'}
              university={'Jiggle, Nigeria'}
              left={false}
              lastrow={true}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Qualification
