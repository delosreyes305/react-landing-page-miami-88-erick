import React from "react";
import Card from "./Card";

export const CardsRow = ({ people, images }) => {
  const pickAImage = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };
  return (
    <div className="container p-3 mb-3">
      <div className="row justify-content-center">
        {people.map((person, index) => (
          <div key={index} className="col-4 d-flex justify-content-center">
            <Card 
              name={person.name}
              age={person.age}
              image={pickAImage(images)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsRow;
