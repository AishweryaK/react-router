import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ContactDetail = () => {
    const name = useParams();
    console.log(name,"username");
    // useEffect(()=> {
    //     if(username=="aish")
    //         console.log("hello")
    //     else
    //     console.log(username, "USER")
    // },[username])
    return (
      <div>
        <h1 className="heading">Contact Page of {name.username} </h1>
      </div>
    );
  };
  
  export default ContactDetail;
 