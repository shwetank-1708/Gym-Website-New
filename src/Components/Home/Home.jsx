import "./Home.css";

const Home = () => {
  return (
    <div className="home w-full min-h-screen bg-cover bg-center flex items-center justify-center flex-col">
      <h1 className="text-5xl font-bold m-4 text-white">
        Crush your health and fitness goals in no time
      </h1>
      <p className="m-4 text-white text-xl">
        It doesn’t matter if your goal is to get stronger, burn fat, or to just
        stay fit our world class coaches will guide you every step of the way.
      </p>
      <button className="m-4 p-4 text-black bg-white hover:bg-gray-100 hover:font-bold rounded-full">
        Start Your Free Trial
      </button>
    </div>
  );
};

export default Home;
