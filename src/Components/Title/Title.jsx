import "./Title.css";

const Title = ({ subtitle, title }) => {
  return (
    <div className="title text-center bg-#121212">
      <p className="mt-10 mb-5 text-2xl font-bold">{subtitle}</p>
      <h2 className="mb-4 text-5xl font-bold">{title}</h2>
    </div>
  );
};

export default Title;
