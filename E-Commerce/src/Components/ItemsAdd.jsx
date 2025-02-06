import { useState, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import styles from "./Items.module.css";

const ItemsAdd = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:8080/items");
        if (!response.ok) {
          throw new Error("Failed to fetch items");
        }
        const data = await response.json();
        setItems(data.items); // যেহেতু তুমি JSON এ ডাটা দিয়েছো, এখানে ডাটা আনতে হবে ঠিকমত
      } catch (error) {
        console.error("Error fetching items:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  const handleAddToCart = (item) => {
    console.log("Added to Cart:", item); 
    
  };

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  return (
    <center className={styles.itemsDev}>
      {loading ? (
        <p>Loading items...</p>
      ) : items.length > 0 ? (
        items.map((item) => (
          <div
            key={item.id}
            className="card itemstyle"
            style={{ width: "18rem", cursor: "pointer" }}
          >
            <img
              src={item.item_img}
              className={`card-img-top imgHover ${styles.hover}`}
              alt={item.item_Name}
            />
            <div className="card-body">
              {item.item_item_Category}
              <h5 className="card-title">{item.item_Name}</h5>
              <div className={styles.spanDiv}>
                <span className={styles.spanX}>৳ {item.item_Old_Price} </span>
                <span className={styles.spanY}>৳ {item.item_Price}</span>
              </div>
              <div className={styles.BUTTON}>
                <button
                  type="button"
                  className="btn btn-primary buttonBuy BUTTONCARD"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering item click
                    handleAddToCart(item); // When clicked, the item is added to the cart
                  }}
                >
                  Add to Cart
                </button>
                <button
                  type="button"
                  className="buttonBuy BUTTONHEARD"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering item click
                    handleAddToCart(item); // When clicked, the item is added to the cart
                  }}
                >
                  <FaRegHeart />
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No items available</p>
      )}
    </center>
  );
};

export default ItemsAdd;
