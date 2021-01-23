import React from "react"; 

const CharacterCard = (props) => {
    const { character } = props;

    return (
        <div className="CharacterCard">
            <div className="ImageContainer">
                <img src={character.img} alt={character.name}/>
                <p>{character.portrayed}</p>
            </div>
            <div className="InfoContainer">
                <p><strong>{character.name}</strong></p>
                <p>{character.status}</p>
                <p>{character.birthday}</p>
                <ul>
                    {character.occupation.map((o, i) => <li key={i}>{o}</li>)}
                </ul>
            </div>
           
        </div>
    );
  };
  
  export default CharacterCard;