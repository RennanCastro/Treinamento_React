import React from "react";
import  { useHistory } from "react-router-dom";

function Home() {

  const history = useHistory();

  return (
    <div>
      <h1>HOME</h1>
      <button onClick ={()=>{history.push("login");}}> 
      Login 
      </button>
    </div>
  );
}

export default Home;
