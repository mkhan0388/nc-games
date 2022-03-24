import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/users/tickle122`);
  };

  return (
    <>
      <h1 className="welcomeTitle">Welcome to Big Bad Board</h1>


      <button onClick={handleSubmit} className="button" type="submit">
        Enter
      </button>
    </>
  );
};

export default Welcome;
