import React from "react";
import PortItem from "./PortItem";
import { gameData } from "../../../../../data.json";
import "./Portfolio.css";

const Portfolio = () => {
  const AllGame = gameData.map(
    (
      { name, des, img, gif, gameLink, githubLink, demoLink, youtubeLink },
      index
    ) => {
      return (
        <PortItem
          key={index}
          title={name}
          img={img}
          demoLink={gameLink}
          githubLink={githubLink}
        />
      );
    }
  );
  return (
    <section id='Portfolio'>
      <h5>My recent</h5> <h2>project</h2>
      <div className='container portfolio__container'>{AllGame}</div>
    </section>
  );
};

export default Portfolio;
