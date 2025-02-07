import styles from "./HeroSession.module.css";

const HeroSession = ({ items }) => {
  // const FilterrItems = () => {
  //   items.filter((items) => items === items.item_item_Category);
  //   console.log(items.item_item_Category);
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
          <button
            type="button"
            className="btn btn-secondary"
            // onClick={() => {
            //   FilterrItems(items);
            // }}
          >
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
