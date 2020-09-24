import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";
import bedroom from "./images/bedroom.jpg";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays | 26 august to 30 august | 2 guests</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined"> Cancellation Flexibility</Button>
        <Button variant="outlined"> Type of Place</Button>
        <Button variant="outlined"> Price</Button>
        <Button variant="outlined"> Rooms and beds</Button>
        <Button variant="outlined"> More filters</Button>
        <SearchResult
          img={bedroom}
          location="Nairobi Center Katikati"
          title="spacious and amazing bungalow for rental purposes"
          description="1.5 guests | pool | jacuzzi | wifi | Kitchen | Free parking | Mzinga ya Gilbeys"
          star={4.6}
          price="ksh. 3000 per night"
          total="Ksh. 4000 total"
        />
        <SearchResult
          img={bedroom}
          location="Nairobi Center Katikati"
          title="spacious and amazing bungalow for rental purposes"
          description="1.5 guests | pool | jacuzzi | wifi | Kitchen | Free parking | Mzinga ya Gilbeys"
          star={4.6}
          price="ksh. 3000 per night"
          total="Ksh. 4000 total"
        />
      </div>
    </div>
  );
}

export default SearchPage;
