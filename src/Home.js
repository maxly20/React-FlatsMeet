import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://i.ibb.co/1vQMygn/pexels-ketut-subiyanto-4474032.jpg"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
          src="https://i.ibb.co/mqnqpBK/pexels-taras-makarenko-593171.jpg"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          src="https://i.ibb.co/cJCzfDj/pexels-huseyn-kamaladdin-667838.jpg"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
        />
      </div>
      <div className="home__section">
        <Card
          src="https://i.ibb.co/L1dBSSj/pexels-jess-vide-6389020.jpg"
          title="3 Bedroom Flat in Brighton"
          description="Superhost with a stunning view of the beachside in Brighton"
          price="$140/night"
        />
        <Card
          src="https://i.ibb.co/NgR0X4L/pexels-tan-danh-1329711.jpg"
          title="Penthouse in CBD"
          description="Enjoy the amazing sights of Melbourne CBD with this stunning penthouse"
          price="$300/night"
        />
        <Card
          src="https://i.ibb.co/6tbg4nr/pexels-charlotte-may-5824524.jpg"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="$70/night"
        />
      </div>
    </div>
  );
}

export default Home;
