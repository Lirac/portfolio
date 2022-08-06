import { FaCalendarAlt } from 'react-icons/fa'

const Qualification_data = ({
  course,
  university,
  duration,
  left,
  lastrow,
}) => {
  return (
    <div className="grid grid-cols-[1fr_max-content_1fr] gap-x-6">
      {!left && <div></div>}
      {!left && (
        <div>
          <span className="inline-block w-3 h-3 rounded-full bg-firstColor"></span>
          <span
            className={`${
              lastrow
                ? 'hidden'
                : 'block w-[1px] h-full bg-firstColor translate-x-[6px] translate-y-[-7px]'
            }`}
          ></span>
        </div>
      )}
      <div>
        <h3 className="font-semibold">{course}</h3>
        <span className="text-gray-600 text-xs inline-block mb-4">
          {university}
        </span>
        <div className="flex gap-2 items-center text-gray-600 text-sm">
          <FaCalendarAlt className="w-4 h-4 " />
          {duration}
        </div>
      </div>

      {left && (
        <div>
          <span className="inline-block w-3 h-3 rounded-full bg-firstColor"></span>
          <span
            className={` ${
              lastrow
                ? 'hidden'
                : 'block w-[1px] h-full bg-firstColor translate-x-[6px] translate-y-[-7px]'
            }`}
          ></span>
        </div>
      )}
    </div>
  )
}

export default Qualification_data
