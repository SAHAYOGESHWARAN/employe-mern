import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <div className="content">
      {isAuthenticated ? <h1>Welcome back!</h1> : <h1>Please log in</h1>}
    </div>
  );
};

export default Home;
