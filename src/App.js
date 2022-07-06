import React from "react";
import Searchbox from "./components/Searchbox";
import Cardlist from "./components/Cardlist";
import Scroll from "./components/Scroll";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [filterName, setFilterName] = useState("");
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      setRobots(res.data);
      console.log(robots);
    });
  }, []);

  const onSearchChange = event => {
    setFilterName(event.target.value);
  };

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(filterName.toLowerCase());
  });

  if (!robots.length) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="tc">
        <h1 className="f2">Robofriends</h1>
        <Searchbox searchChange={onSearchChange} />
        <Scroll>
          <Cardlist robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}
