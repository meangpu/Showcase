import React from "react";
import "./AllProject.css";
import { projectData } from "../../../data.json";
import GameCard from "./GameCard/GameCard";

const AllGames = () => {
  const Projects = projectData.map(
    (
      { name, des, img, video, githubLink, youtubeLink, demoLink, date },
      index
    ) => {
      return (
        <GameCard
          key={index}
          name={name}
          des={des}
          imageSrc={img}
          videoSrc={video}
          githubLink={githubLink}
          demoLink={demoLink}
          youtubeLink={youtubeLink}
          date={date}
          displayDemoBtn={true}
        />
      );
    }
  );

  return (
    <section>
      <h1>ALL PROJECT</h1>
      <br></br>
      <br></br>
      <div className='container all_game_card__container'>{Projects}</div>
    </section>
  );
};

export default AllGames;
