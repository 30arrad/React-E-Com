import { useState, useEffect } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import styles from "./Items.module.css";

const ItemsAdd = ({ category }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [likedItems, setLikedItems] = useState({});

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:8080/items");
        if (!response.ok) {
          throw new Error("Failed to fetch items");
        }
        const data = await response.json();
        setItems(data.items);
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
    console.log("Added to Cart:", item.id);
  };

  const handleLike = (itemId) => {
    setLikedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId], // Toggle like state
    }));
  };

  const filteredItems =
    category === "ALL"
      ? items
      : items.filter((item) => item.item_item_Category === category);

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  return (
    <center className={styles.itemsDev}>
      {loading ? (
        <p>Loading items...</p>
      ) : filteredItems.length > 0 ? (
        filteredItems.map((item) => (
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
              {/* <p>{item.item_item_Category}</p> */}
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
                    e.stopPropagation();
                    handleAddToCart(item);
                  }}
                >
                  Add to Cart
                </button>
                <button
                  type="button"
                  className="buttonBuy BUTTONHEARD"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLike(item.id);
                  }}
                >
                  {likedItems[item.id] ? (
                    <FaHeart className="Like" color="red" />
                  ) : (
                    <FaRegHeart className="Like" color="gray" />
                  )}
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
