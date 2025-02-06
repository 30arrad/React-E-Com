import HeroSession from "./HeroSession";
import Items from "./Items";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/items")
      .then((res) => res.json())
      .then(console.log(data))
      .then((data) => setData(data.items));
  }, []);
  return (
    <>
      <HeroSession></HeroSession>
      {data.map((item) => (
        <Items key={item.id} item={data} />
      ))}
    </>
  );
};

export default Home;
