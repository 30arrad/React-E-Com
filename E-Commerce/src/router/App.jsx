import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Components/Footer";
import NavBer from "../Components/NavBer";
import Card from "../Components/Card";
import Watchlist from "../Components/Watchlist";
import { useState } from "react";
import Home from "../Components/Home";
import HeroSession from "../Components/HeroSession";
import Items from "../Components/Items";
import ItemsAdd from "../Components/ItemsAdd";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <>
      <NavBer
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      ></NavBer>

      {selectedTab === "Home" ? (
        <Home></Home>
      ) : selectedTab === "My Card" ? (
        <div className="App">
          <Card />
        </div>
      ) : (
        <div className="">
          <Watchlist />
        </div>
      )}

      <Footer />
    </>
  );
}

export default App;
