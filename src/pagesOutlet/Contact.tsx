import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const extraData = {some:"thing"}
  return (
    <div>
      <h1 className="heading">Contact</h1>
      <button onClick={()=>navigate("/", {state: extraData})}> Go home</button>
    </div>
  );
};

export default Contact;
