import Title from "../Title/Title";
import "./About.css";

const About = () => {
  return (
    <div className="about flex flex-col justify-center items-center">
      <Title subtitle="About Us" title="Nurture Your Tomorrow" />
      <h2 className="text-center m-4 text-xl font-bold about-heading">
        Hi! We are a local CrossFit gym in Denver, Colorado.
      </h2>
      <p className="text-center mt-4 mb-10 font-bold w-1/2 about-para">
        CrossFit Gym was started by Alex and Sparky in 2012. Its our mission to
        help people in Denver get fit, stay healthy, and live life on their
        terms without fitness being an obstacle.
      </p>
    </div>
  );
};

export default About;
