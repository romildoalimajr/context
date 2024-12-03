import { useContext } from "react";

import { CounterContext } from "../context/CounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";


const About = () => {
  const { color } = useTitleColorContext();
  const { counter } = useContext(CounterContext);
  return (
    <div>
      <h1 style={{ color: color }}>About</h1>
      <p>Valor do contador.: {counter}</p>
    </div>
  )
}

export default About;