import { useState } from "react";
import "./Animals.css";
import Cat from "./images/Cat.jpg";
import Dog from "./images/Dog.jpg";
import Horse from "./images/Horse.jpg";

export default function Animals() {
  const [animalImageURL, setAnimalImageURL] = useState(Cat);

  const handleShowCat = () => {
    setAnimalImageURL(Cat);
  };
  const handleShowDog = () => {
    setAnimalImageURL(Dog);
  };
  const handleShowHorse = () => {
    setAnimalImageURL(Horse);
  };

  return (
    <div className="imageContainer">
      <div className="imageBox">
        <img className="photo" src={animalImageURL}></img>
      </div>
      <div className="buttonBox">
        <button onClick={handleShowCat} className="button">
          Cat
        </button>
        <button onClick={handleShowDog} className="button">
          Dog
        </button>
        <button onClick={handleShowHorse} className="button">
          Horse
        </button>
      </div>
    </div>
  );
}
