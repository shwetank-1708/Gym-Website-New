import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import "./Contact.css";

const Contact = () => {
  const onsubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.phone.value);
    console.log(e.target.email.value);
  };

  return (
    <div className="flex justify-center m-10">
      <div className="contact-message w-1/3 m-5">
        <h2 className="text-3xl font-bold m-5">Send us a message</h2>
        <p className="m-5">
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul className="m-5">
          <li className="flex items-center">
            {" "}
            <div className="mr-2">
              <MdEmail />
            </div>
            <p>Contact@email.com</p>
          </li>
          <li className="flex items-center">
            {" "}
            <div className="mr-2">
              <IoCall />
            </div>
            <p>+1 123-456-7890</p>
          </li>
          <li className="flex items-center">
            {" "}
            <div className="mr-2">
              <FaLocationDot />
            </div>
            <p>Address Road, Address, Pin Code, Country</p>
          </li>
        </ul>
      </div>

      <div className="contact-form w-1/3 m-5">
        <form onSubmit={onsubmit} className="flex flex-col">
          <label htmlFor="" className="font-bold mb-2">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            className="border rounded-full p-2 mb-3"
          />

          <label htmlFor="" className="font-bold mb-2">
            Your Phone Number
          </label>
          <input
            type="Number"
            name="phone"
            placeholder="Enter Your Phone No."
            className="border rounded-full p-2 mb-3"
          />

          <label htmlFor="" className="font-bold mb-2">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email Id"
            className="border rounded-full p-2 mb-3"
          />

          <button
            type="submit"
            className="bg-black text-white font-bold text-xl mt-3 p-3 rounded-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
