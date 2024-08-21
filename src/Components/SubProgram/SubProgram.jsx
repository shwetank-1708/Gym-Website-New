import "./SubProgram.css";
import { FaRegCircleCheck } from "react-icons/fa6";

const SubProgram = ({ button, h2, li_1, li_2, li_3 }) => {
  return (
    <div className="flex flex-col items-start">
      <button className="button text-white rounded-full p-5 mb-5 hover:font-bold">
        {button}
      </button>
      <h2 className="font-bold text-4xl mb-5">{h2}</h2>
      <ul>
        <li className="li flex items-center font-bold mb-5">
          <div className="icon mr-2">
            <FaRegCircleCheck />
          </div>

          {li_1}
        </li>
        <li className="flex items-center font-bold mb-5">
          <div className="icon mr-2">
            <FaRegCircleCheck />
          </div>
          {li_2}
        </li>
        <li className="flex items-center font-bold mb-5">
          <div className="icon mr-2">
            <FaRegCircleCheck />
          </div>
          {li_3}
        </li>
      </ul>
    </div>
  );
};

export default SubProgram;
