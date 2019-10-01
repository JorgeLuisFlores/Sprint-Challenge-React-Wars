import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Cards from "./components/cards.js";
import Jumbo from "./components/jumbo.js";
import Getdata from "./components/carddata.js";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const carddata = await axios.get("https://swapi.co/api/species");
        setData(carddata.data.results);
      } catch {
        console.log("error");
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <Jumbo />

      {data.map((data, index) => {
        return (
          <Cards
            name={data.name}
            classification={data.classification}
            designation={data.designation}
          />
        );
      })}
    </div>
  );
};

export default App;
