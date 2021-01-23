import React from "react"; 

const DeathCard = (props) => {
    const { death } = props;

    return (
        <div className="DeathCard">
            <div className="InfoContainer">
                <p><strong>{death.death}</strong></p>
                <p>{death.cause}</p>
                <p>{death.responsible}</p>
                <p>{death.lastWords}</p>
            </div>
        </div>
    );
  };
  
export default DeathCard;