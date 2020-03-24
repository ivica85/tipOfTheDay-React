import React, { useEffect, useState } from "react";
import AdviceCard from "./AdviceCard";
import axios from "axios";

function Advice() {
  const [advice, setAdvice] = useState([]);

  function fetchAdvice() {
    axios
      .get("https://api.adviceslip.com/advice")
      .then(res => {
        const { advice } = res.data.slip;
        setAdvice(advice);
      })
      .catch(error => {
        alert("Conection probmem", error);
      });
  }

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div>
      <AdviceCard advice={fetchAdvice}>
        <h1>{advice}</h1>
      </AdviceCard>
    </div>
  );
}

export default Advice;
