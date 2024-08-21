import { FaCheckCircle } from "react-icons/fa";
import "./SubMembership.css";

const SubMembership = ({ h2, h1, li_1, li_2, li_3, p, button }) => {
  return (
    <div className="sub flex flex-col items-center text-center m-10 rounded-3xl w-[400px] p-5">
      <h2 className="text-3xl font-bold p-5">{h2}</h2>
      <h1 className="text-4xl font-bold p-5">{h1}</h1>
      <ul>
        <li className="flex items-center p-2">
          <div className="mr-2">
            <FaCheckCircle />
          </div>

          {li_1}
        </li>
        <li className="flex items-center p-2">
          {" "}
          <div className="mr-2">
            <FaCheckCircle />
          </div>
          {li_2}
        </li>
        <li className="flex items-center p-2">
          {" "}
          <div className="mr-2">
            <FaCheckCircle />
          </div>
          {li_3}
        </li>
      </ul>
      <p className="p-2">{p}</p>
      <button className="bg-black text-white rounded-full p-3 font-bold m-3">
        {button}
      </button>
    </div>
  );
};

export default SubMembership;
