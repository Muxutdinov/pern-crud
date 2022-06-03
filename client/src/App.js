import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.msg));
  }, []);
  return (
    <div>
      <h1>{!data ? "Loading" : data}</h1>
    </div>
  );
};

export default App;
