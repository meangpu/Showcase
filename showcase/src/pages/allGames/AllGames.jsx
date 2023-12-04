import React from "react";
import "./AllGames.css";
import { gameData } from "../../../AllGame.json";
import { dmeData } from "../../../DMEgame.json";
import Footer from "../about/Components/Footer/Footer";
import GameCard from "./GameCard/GameCard";

const AllGames = () => {
  const AllVideo = gameData.map(
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

  const dmeGame = dmeData.map(
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
          displayDemoBtn={false}
        />
      );
    }
  );

  return (
    <section>
      <div className='container all_game_card__container'>{AllVideo}</div>
      <br></br>
      <br></br>
      <h2>old projects</h2>
      <div className='container all_game_card__container_square'>{dmeGame}</div>
      <Footer />
    </section>
  );
};

export default AllGames;
