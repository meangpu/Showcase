import React, { useState } from "react";
import "./GameCard.css";

function GameCard(props) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <article className='all_game_card_article'>
      <div
        className='game_image_wrapper'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {props.imageSrc && (
          <div className='game_card__item-image'>
            <a href={props.demoLink} target='_blank'>
              <img src={props.imageSrc} alt={props.name} />
              {isHovering && props.videoSrc && (
                <video
                  className='game_card__item-image'
                  src={props.videoSrc}
                  autoPlay
                  loop
                  muted
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              )}
            </a>
          </div>
        )}
      </div>

      <div className='game_des'>
        <h2>{props.name}</h2>
        {props.date && <p className='game_p_date'>{props.date}</p>}
        <p
          className='game_p_des'
          dangerouslySetInnerHTML={{ __html: props.des }}
        ></p>
        <div className='game_card__item-cta'>
          {props.githubLink && (
            <a href={props.githubLink} className='meangpu-btn' target='_blank'>
              github
            </a>
          )}
          {/* {props.demoLink && props.displayDemoBtn && (
            <a
              href={props.demoLink}
              className='meangpu-btn btn-primary'
              target='_blank'
            >
              demo
            </a>
          )} */}
          {props.youtubeLink && (
            <a
              href={props.youtubeLink}
              className='btn-primary meangpu-btn'
              target='_blank'
            >
              youtube
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default GameCard;
