import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
import cabin from "./images/log-cabin.jpg";

import archi from "./images/archi.jpg";
import bedroom from "./images/bedroom.jpg";
import living from "./images/living-room.jpg";
import boat from "./images/boat-house.jpg";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src={cabin}
          title="Cabin Homes"
          description=" Comfortable private places with rooms for friends or family"
        />
        <Card
          src={boat}
          title="RiverHouse Homes"
          description=" Superhost with a stunning vew of the beachside in Malindi"
        />
        <Card
          src={archi}
          title="Modern Homes"
          description=" Enjoy thhe amazing sights of Ruai from this amazing penthouse"
        />
      </div>
      <div className="home__section">
        <Card
          src={bedroom}
          title="Amazing Homes"
          description=" Comfortable private places with rooms for friends or family"
          price="Ksh. 5000/night"
        />
        <Card
          src={living}
          title="Entire Homes"
          description=" Awesome spaces for amazing people"
          price="Ksh. 2000/night"
        />
        <Card
          src={boat}
          title="Spacious Homes"
          description=" Superhost with a stunning vew of the beachside in Malindi"
          price="Ksh. 6000/night"
        />
      </div>
    </div>
  );
}

export default Home;
