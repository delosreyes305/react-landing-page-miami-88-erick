import React from "react";
import Card from "./Card";

export const CardsRow = ({ people, images }) => {
  const pickAImage = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };
  return (
    <div className="container p-5 mb-5">
      <div className="row d-flex justify-content-center">

        {people.map((person, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
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
