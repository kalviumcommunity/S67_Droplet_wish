import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import dummyWishlist from "./data/dummyWishlist"; 
import "./Wishlist.css";

const Wishlist = () => {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/droplets/${id}`);
      // Optionally, you can refresh the list or remove the item from the state
    } catch (error) {
      console.error("Error deleting entity:", error);
    }
  };

  return (
    <div className="wishlist-container">
      <h1>My Wishlist</h1>
      <div className="wishlist-grid">
        {dummyWishlist.map((item) => (
          <div key={item.id} className="wishlist-item">
            <img src={item.image} alt={item.name} className="item-image" />
            <h2>{item.name}</h2>
            <p>Price: ₹{item.price}</p>
            {item.isDiscounted && <p className="discount">Discount: {item.discountPercentage}% OFF</p>}
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              Buy Now
            </a>
            <Link to={`/update/${item.id}`} className="update-link">
              Update
            </Link>
            <button onClick={() => handleDelete(item.id)} className="delete-button">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;