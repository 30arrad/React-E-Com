import { FaRegHeart } from "react-icons/fa";
import styles from "./Items.module.css";

const Items = () => {
  const item = {
    id: "00001",
    item_img: `Images/Hoodies/H-1.jpg`,
    item_Name: `Mens Premium Hoodie Urban - Light Coffee`,
    item_Old_Price: 2500,
    item_Price: 1790,
    item_item_Category: `HOODIES`,
  };

  const backendData = () => {
    fetch("http://localhost:8080/items")
      .then((res) => res.json())
      .then(console.log);
  };

  return (
    <center className={styles.itemsDev}>
      <div className="card itemstyle" style={{ width: "18rem" }}>
        <img
          src={item.item_img}
          className="card-img-top imgHover {styles.hover}"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{item.item_Name}</h5>
          <div className={styles.spanDiv}>
            <span className={styles.spanX}>৳ {item.item_Old_Price} </span>
            <span className={styles.spanY}>৳ {item.item_Price}</span>
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

      <button onClick={backendData}>BackEnd</button>
    </center>
  );
};

export default Items;
