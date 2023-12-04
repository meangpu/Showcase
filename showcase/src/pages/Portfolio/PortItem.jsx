import React from "react";

const PortItem = (props) => {
  return (
    <article className='portfolio__item'>
      <div className='portfolio__item-image'>
        <img src={props.img} alt='' />
      </div>
      <h3>{props.title}</h3>
      <div className='portfolio__item-cta'>
        {props.githubLink && (
          <a href={props.githubLink} className='meangpu-btn'>
            Github
          </a>
        )}
        {props.demoLink && (
          <a
            href={props.demoLink}
            className='meangpu-btn btn-primary'
            target='_blank'
          >
            Demo
          </a>
        )}
      </div>
    </article>
  );
};

export default PortItem;
