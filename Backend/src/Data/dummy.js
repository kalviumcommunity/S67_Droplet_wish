import React from "react";
import PropTypes from "prop-types";
import dummyWishlist from "../data/dummyWishlist"; // Importing local dummy data

// WishlistItem Component (Individual Wishlist Item)
const WishlistItem = ({ name, price, image, category, isDiscounted, discountPercentage, link }) => {
  // Calculate final price if discounted
  const finalPrice = isDiscounted ? price - (price * discountPercentage) / 100 : price;

  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-md bg-white p-4">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="mt-2">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-gray-500">Category: {category}</p>
        <p className="text-gray-700 font-semibold">
          Price: ₹{finalPrice.toLocaleString()}{" "}
          {isDiscounted && (
            <span className="text-red-500 line-through text-sm ml-2">₹{price.toLocaleString()}</span>
          )}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600"
        >
          View Product
        </a>
      </div>
    </div>
  );
};

// Wishlist Component (Displaying List of Wishlist Items)
const Wishlist = () => {
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {dummyWishlist.length > 0 ? (
        dummyWishlist.map((item) => <WishlistItem key={item.id} {...item} />)
      ) : (
        <p>No items in your wishlist.</p>
      )}
    </div>
  );
};

// PropTypes for validation (WishlistItem)
WishlistItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  isDiscounted: PropTypes.bool.isRequired,
  discountPercentage: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
};

// Exporting Wishlist as default
export default Wishlist;
