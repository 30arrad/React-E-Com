// import { useEffect, useState } from "react";
import styles from "./HeroSession.module.css";
// import ItemsAdd from "./ItemsAdd";

const HeroSession = () => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:8080/items")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  // const Catagori = ({ data }) => {
  //   if (data.item_item_Category === data.item_item_Category) {
  //     return <ItemsAdd></ItemsAdd>;
  //   }
  // };

  return (
    <>
      <img
        className="HEROIMG"
        src="banner.png"
        alt=""
        style={{ width: "100%" }}
      />

      <center className={styles.ALL}>
        <h1>BEST CLOTHING COLLECTION</h1>
        <p>Discover quality styles and fashion trends for every occasion.</p>
        <div className={styles.BUTTON}>
          <button type="button" className="btn btn-secondary">
            ALL
          </button>
          <button type="button" className="btn btn-secondary ">
            T-SHIRTS
          </button>
          <button type="button" className="btn btn-secondary">
            JACKETS
          </button>
          <button type="button" className="btn btn-secondary">
            PANTS
          </button>
          <button type="button" className="btn btn-secondary">
            HOODIES
          </button>
          <button type="button" className="btn btn-secondary">
            SHIRTS
          </button>
        </div>
      </center>
    </>
  );
};

export default HeroSession;
