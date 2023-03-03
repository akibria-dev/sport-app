import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Video from "../Video/Video";
import "./Favourite.css";
// import "./styles.css";
import { useNavigate } from "react-router-dom";
const data = [
  { id: 1, name: "Football" },
  { id: 2, name: "Cricket" },
  { id: 3, name: "Formula1" },
  { id: 4, name: "Rugby" },
  { id: 5, name: "Tennis" },
  { id: 6, name: "Golf" },
  { id: 7, name: "Boxing" },
  { id: 8, name: "Athletics" },
];

function Favourite() {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = window.localStorage.getItem("favorites");
    if (data !== null) setFavorites(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function handleFavorite(id) {
    const newFavorites = favorites.map((item) => {
      return item.id === id ? { ...item, favorite: !item.favorite } : item;
    });

    setFavorites(newFavorites);
  }

  return (
    <container className="l-grid">
      <div className="header">
        <ul>
          <li className="allsports" onClick={() => navigate("/")}>
            ALL SPORTS
          </li>
          <li className="mysports" onClick={() => navigate("/fav")}>
            MY SPORTS
          </li>
        </ul>
      </div>
      <div className="left-column">
        <div className="favList">
          <h1>Sports List</h1>
          <ul>
            {favorites.map((item, i) => (
              <li key={i}>
                {item.name}{" "}
                <button
                  onClick={() => {
                    handleFavorite(item.id);
                  }}
                >
                  {item.favorite === true ? "Remove" : "Add"}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="center-column">
        <h1>Favourites List</h1>
        <div className="fav-list-added">
          {favorites.map((item) =>
            item.favorite === true ? (
              <li
                key={item.id}
                onClick={() => {
                  navigate("/" + item.name);
                }}
              >
                {item.name}
              </li>
            ) : null
          )}
        </div>
      </div>
      <div className="right-column">{<Video />}</div>
    </container>
  );
}
export default Favourite;
