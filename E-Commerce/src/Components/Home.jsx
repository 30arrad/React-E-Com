import HeroSession from "./HeroSession";
import Items from "./Items";

const Home = ({ item }) => {
  return (
    <>
      <img
        className="HEROIMG"
        src="banner.png"
        alt=""
        style={{ width: "100%" }}
      />
      <HeroSession />

      <Items item={item} />
    </>
  );
};

export default Home;
