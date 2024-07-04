
import { useLocation } from "react-router-dom";
import "../pages/styles.css";

const Home = () => {
  const location= useLocation();
  console.log(location, "LO")
  return (
    <div>
      <h1 className="heading">Home</h1>
      <h4 className="heading">name = {location.state?.name} </h4>
      <h4 className="heading">age = {location.state?.age} </h4>
      <h4 className="heading">some = {location.state?.some} </h4>
    </div>
  );
};

export default Home;
