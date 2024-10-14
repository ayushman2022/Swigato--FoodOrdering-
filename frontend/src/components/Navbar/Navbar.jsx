import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

// List of all food items
const allFoodItems = [
  "Apple",
  "Avocado",
  "Banana",
  "Bacon",
  "Bagel",
  "Barbecue",
  "Biryani",
  "Bread",
  "Broccoli",
  "Burger",
  "Cake",
  "Carrot",
  "Cheese",
  "Chicken",
  "Chips",
  "Chowmein",
  "Corn",
  "Croissant",
  "Curry",
  "Doughnut",
  "Egg",
  "Eggplant",
  "Falafel",
  "Fries",
  "Garlic Bread",
  "Grapes",
  "Grilled Chicken",
  "Hamburger",
  "Hotdog",
  "Ice Cream",
  "Lasagna",
  "Lettuce",
  "Mango",
  "Muffin",
  "Noodles",
  "Omelette",
  "Orange",
  "Pancake",
  "Pasta",
  "Pizza",
  "Popcorn",
  "Pudding",
  "Quinoa",
  "Rice",
  "Salad",
  "Samosa",
  "Sandwich",
  "Sausage",
  "Soda",
  "Soup",
  "Spaghetti",
  "Spinach",
  "Steak",
  "Sushi",
  "Tacos",
  "Tea",
  "Toast",
  "Tomato",
  "Turkey",
  "Waffle",
  "Watermelon",
  "Yogurt",
  "Zucchini",
];

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const [showSearchInput, setShowSearchInput] = useState(false); // State to toggle search input
  const [searchQuery, setSearchQuery] = useState(""); // State to capture search input
  const [filteredSuggestions, setFilteredSuggestions] = useState([]); // State to store filtered suggestions
  const { getTotalCartAmount } = useContext(StoreContext);

  const handleSearchIconClick = () => {
    setShowSearchInput(!showSearchInput); // Toggle search input visibility
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // Logic to handle search functionality (e.g., filtering, routing to search results)
    console.log("Search query:", searchQuery);
  };

  // Handle search input change and filter suggestions
  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      const filtered = allFoodItems.filter((item) =>
        item.toLowerCase().startsWith(query.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  // Handle suggestion click to fill the input
  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setFilteredSuggestions([]); // Clear suggestions after selection
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.newlogo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("Contact us")}
          className={menu === "Contact us" ? "active" : ""}
        >
          Contact us
        </a>
        <a
          href="#appdownload"
          onClick={() => setMenu("Mobile-app")}
          className={menu === "Mobile-app" ? "active" : ""}
        >
          Mobile-app
        </a>
      </ul>

      <div className="navbar-right">
        {/* Search Icon */}
        <div className="navbar-search-icon" onClick={handleSearchIconClick}>
          <img src={assets.search_icon} alt="Search" />
        </div>

        {/* Search Input */}
        {showSearchInput && (
          <div className="search-container">
            <form onSubmit={handleSearch} className="search-form">
              <input
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                placeholder="Search food items..."
                className="search-input"
              />
              <button type="submit" className="search-button">
                Go
              </button>
            </form>

            {/* Suggestions List */}
            {filteredSuggestions.length > 0 && (
              <ul className="suggestions-list">
                {filteredSuggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Cart Icon */}
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>

        {/* Sign In Button */}
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
