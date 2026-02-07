import React, { useState } from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
import CardsRow from "./CardsRow";

//create your first component
export const Home = () => {
  const [images, setImages] = useState([
    "https://images.pexels.com/photos/7163695/pexels-photo-7163695.jpeg",
    "https://images.pexels.com/photos/167758/pexels-photo-167758.jpeg",
    "https://images.pexels.com/photos/531987/pexels-photo-531987.jpeg",
    "https://images.pexels.com/photos/14688083/pexels-photo-14688083.jpeg",
    "https://images.pexels.com/photos/17755369/pexels-photo-17755369.jpeg",
    "https://images.pexels.com/photos/27948637/pexels-photo-27948637/free-photo-of-paisaje-naturaleza-cielo-puesta-de-sol.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/8116078/pexels-photo-8116078.jpeg",
    "https://images.pexels.com/photos/16739963/pexels-photo-16739963.jpeg",
    "https://images.pexels.com/photos/29408898/pexels-photo-29408898.jpeg",
    "https://images.pexels.com/photos/32182752/pexels-photo-32182752.jpeg",
    "https://images.pexels.com/photos/28375394/pexels-photo-28375394.jpeg",
    "https://images.pexels.com/photos/17827046/pexels-photo-17827046.jpeg",
    "https://cdn.pixabay.com/photo/2018/09/05/18/24/scenery-3656768_640.jpg",
    "https://wallpaper.forfun.com/fetch/f5/f524255431e9e00bff0bc124ef008c4a.jpeg",
    "https://wallpapercave.com/wp/wp5810527.jpg",
  ]);

  const [people, setPeople] = useState([
    {
      name: "Ryan",
      age: 27,
    },

    {
      name: "Erick",
      age: 35,
    },

    {
      name: "Diego",
      age: 40,
    },

    {
      name: "Moufdi",
      age: 21,
    },

    {
      name: "Patrick",
      age: 29,
    },

    {
      name: "Josh",
      age: 38,
    },

    {
      name: "Alejandra",
      age: 33,
    },

    {
      name: "Camilo",
      age: 1,
    },

    {
      name: "Maria",
      age: 14,
    },
  ]);

  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <Jumbotron />
        <main className="flex-grow-1">
          <CardsRow people={people} images={images} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
