import "./App.css";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Nav from "./Components/Navbar/Navbar";
import ProgramImage from "./Components/ProgramImage/ProgramImage";
import Programs from "./Components/Programs/Programs";
import SubProgram from "./Components/SubProgram/SubProgram";
import Title from "./Components/Title/Title";
import cross_fit from "./assets/cross-fit.jpg";
import strength_training from "./assets/strength-training.jpg";
import personal_training from "./assets/personal-training.jpg";
import member from "./assets/member.jpg";
import Membership from "./Components/Membership/Membership";
import SubMembership from "./Components/SubMembership/SubMembership";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  const programData = [
    {
      image: { cross_fit },
      subprogram: {
        button: "Group CrossFit Classes",
        h2: "Get fit while having fun with our group CrossFit classes",
        li_1: "Just 30 minutes long",
        li_2: "Warm up & workout included",
        li_3: "Fun is guaranteed",
      },
    },
    {
      image: { strength_training },
      subprogram: {
        button: "Strength Training",
        h2: "Crush any strength program with our suite of strength equipment",
        li_1: "Fully fitted powerlifting and strongman section",
        li_2: "Olympic lifting platforms, weights, and bars",
        li_3: "Dumbells ranging 5lbs-250lbs",
      },
    },
    {
      image: { personal_training },
      subprogram: {
        button: "Personal Training",
        h2: "Be guided every step of the way with one of our world class coaches",
        li_1: "Weightloss",
        li_2: "Competitive CrossFit",
        li_3: "Powerlifting",
      },
    },
    {
      image: { member },
      subprogram: {
        button: "Member Only Events",
        h2: "Make new friends and get competitive with fun member events",
        li_1: "Friendly competition",
        li_2: "Monthly challenges",
        li_3: "Summer potlucks and games",
      },
    },
  ];

  const membershipData = [
    {
      membership: {
        h2: "Month to Month",
        h1: "$165/mo",
        li_1: "All classes",
        li_2: "All member events",
        li_3: "Full gym access",
        p: "Charges every month unless you cancel",
        button: "Start 7 day free trial",
      },
    },
    {
      membership: {
        h2: "6 Month Membership",
        h1: "$145/mo",
        li_1: "All classes",
        li_2: "All member events",
        li_3: "Full gym access",
        p: "Charges every month unless you cancel",
        button: "Start 7 day free trial",
      },
    },
    {
      membership: {
        h2: "1 Year Membership",
        h1: "$125/mo",
        li_1: "All classes",
        li_2: "All member events",
        li_3: "Full gym access",
        p: "Charges every month unless you cancel",
        button: "Start 7 day free trial",
      },
    },
  ];

  return (
    <div className="">
      <Nav />
      <Home />
      <About />
      <Title subtitle="Our Programs" title="What We Offer" />
      <Programs>
        <div className="flex justify-center items-center m-10">
          <div className="w-1/3 m-10">
            <SubProgram
              button={programData[0].subprogram.button}
              h2={programData[0].subprogram.h2}
              li_1={programData[0].subprogram.li_1}
              li_2={programData[0].subprogram.li_2}
              li_3={programData[0].subprogram.li_3}
            />
          </div>

          <div className="w-1/3 m-10">
            <ProgramImage image={programData[0].image.cross_fit} />
          </div>
        </div>
      </Programs>

      <Programs>
        <div className="flex justify-center items-center m-10">
          <div className="w-1/3 m-10">
            <ProgramImage image={programData[1].image.strength_training} />
          </div>

          <div className="w-1/3 m-10">
            <SubProgram
              button={programData[1].subprogram.button}
              h2={programData[1].subprogram.h2}
              li_1={programData[1].subprogram.li_1}
              li_2={programData[1].subprogram.li_2}
              li_3={programData[1].subprogram.li_3}
            />
          </div>
        </div>
      </Programs>

      <Programs>
        <div className="flex justify-center items-center m-10">
          <div className="w-1/3 m-10">
            <SubProgram
              button={programData[2].subprogram.button}
              h2={programData[2].subprogram.h2}
              li_1={programData[2].subprogram.li_1}
              li_2={programData[2].subprogram.li_2}
              li_3={programData[2].subprogram.li_3}
            />
          </div>

          <div className="w-1/3 m-10">
            <ProgramImage image={programData[2].image.personal_training} />
          </div>
        </div>
      </Programs>

      <Programs>
        <div className="flex justify-center items-center m-10">
          <div className="w-1/3 m-10">
            <ProgramImage image={programData[3].image.member} />
          </div>

          <div className="w-1/3 m-10">
            <SubProgram
              button={programData[3].subprogram.button}
              h2={programData[3].subprogram.h2}
              li_1={programData[3].subprogram.li_1}
              li_2={programData[3].subprogram.li_2}
              li_3={programData[3].subprogram.li_3}
            />
          </div>
        </div>
      </Programs>

      <Title
        subtitle="Membership"
        title="Crushing your health and fitness goals starts here..."
      />

      <Membership>
        <div className="flex justify-center">
          <div>
            <SubMembership
              h2={membershipData[0].membership.h2}
              h1={membershipData[0].membership.h1}
              li_1={membershipData[0].membership.li_1}
              li_2={membershipData[0].membership.li_2}
              li_3={membershipData[0].membership.li_3}
              p={membershipData[0].membership.p}
              button={membershipData[0].membership.button}
            />
          </div>

          <div>
            <SubMembership
              h2={membershipData[1].membership.h2}
              h1={membershipData[1].membership.h1}
              li_1={membershipData[1].membership.li_1}
              li_2={membershipData[1].membership.li_2}
              li_3={membershipData[1].membership.li_3}
              p={membershipData[1].membership.p}
              button={membershipData[1].membership.button}
            />
          </div>

          <div>
            <SubMembership
              h2={membershipData[2].membership.h2}
              h1={membershipData[2].membership.h1}
              li_1={membershipData[2].membership.li_1}
              li_2={membershipData[2].membership.li_2}
              li_3={membershipData[2].membership.li_3}
              p={membershipData[2].membership.p}
              button={membershipData[2].membership.button}
            />
          </div>
        </div>
      </Membership>

      <Title subtitle="Contact Us" title="Get in Touch" />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
