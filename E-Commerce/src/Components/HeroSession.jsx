import { useState } from "react";
import styles from "./HeroSession.module.css";
import ItemsAdd from "./ItemsAdd";

const HeroSession = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

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
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => handleCategoryChange("ALL")}
          >
            ALL
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => handleCategoryChange("GANJI")}
          >
            T-SHIRTS
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => handleCategoryChange("JACKETS")}
          >
            JACKETS
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => handleCategoryChange("PANTS")}
          >
            PANTS
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => handleCategoryChange("HOODIES")}
          >
            HOODIES
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => handleCategoryChange("SHIRTS")}
          >
            SHIRTS
          </button>
        </div>
        <ItemsAdd category={selectedCategory} />
      </center>
    </>
  );
};

export default HeroSession;
