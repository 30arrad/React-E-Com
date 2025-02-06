import { FaRegHeart } from "react-icons/fa";
import styles from "./Items.module.css";

const Items = () => {
  const items = {
    id: "00001",
    item_img: `Images/Hoodies/H-1.jpg`,
    item_Name: `Mens Premium Hoodie Urban - Light Coffee`,
    item_Old_Price: 2500,
    item_Price: 1790,
    item_item_Category: `HOODIES`,
  };
  return (
    <center className={styles.itemsDev}>
      <div className="card itemstyle" style={{ width: "18rem" }}>
        <img
          src={items.item_img}
          className="card-img-top imgHover {styles.hover}"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{items.item_Name}</h5>
          <div className={styles.spanDiv}>
            <span className={styles.spanX}>৳ {items.item_Old_Price} </span>
            <span className={styles.spanY}>৳ {items.item_Price}</span>
          </div>
          <div className={styles.BUTTON}>
            <button
              type="button"
              className="btn btn-primary buttonBuy BUTTONCARD"
            >
              Add to Card
            </button>
            <button type="button" className="  buttonBuy BUTTONHEARD">
              <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
    </center>
  );
};

export default Items;
