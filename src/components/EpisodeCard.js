import React from "react"; 

const EpisodeCard = (props) => {
    const { episode } = props;

    return (
        <div className="EpisodeCard">
            <div className="TitleContainer">
                <h3>{episode.title}</h3>
            </div>
            <div className="InfoContainer">
                <p>Season {episode.season}, Episode {episode.episode}</p>
                <p>Air date:{episode.air_date}</p>
            </div>
        </div>
    );
  };
  
  export default EpisodeCard;