import React, { useEffect, useState } from "react";

const Home = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log("------>", num);
  });
  return (
    <div>
      <h3>This is Home</h3>
      <div>{num}</div>
    </div>
  );
};

export default Home;
