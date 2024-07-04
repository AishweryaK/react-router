// import { Link } from "react-router-dom";

// const About = ({props}:any) => {
//   console.log(props,"PRops")
//   console.log(props.name)
//   const data = {name:"aish", age:2}
//   return (
//     <div>
//       <h1 className="heading">About</h1>
//       <Link to="/" state={data}>Go to Home</Link>
//     </div>
//   );
// };

// export default About;

import { Link } from "react-router-dom";

const About = (props: any) => {
  console.log(props, "Props");
  console.log(props.name); // Correctly accessing the name prop

  const data = { name: "aish", age: 2 };

  return (
    <div>
      <h1 className="heading">About</h1>
      <Link to="/" state={data}>Go to Home</Link>
    </div>
  );
};

export default About;

