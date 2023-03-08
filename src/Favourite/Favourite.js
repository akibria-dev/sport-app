import React, { useState, useEffect } from "react";
import Video from "../Video/Video";
import "./Favourite.css";
import { useNavigate } from "react-router-dom";
const dataList = [
  { id: 1, name: "Football" },
  { id: 2, name: "Cricket" },
  { id: 3, name: "Formula1" },
  { id: 4, name: "Rugby" },
  { id: 5, name: "Tennis" },
  { id: 6, name: "Golf" },
  { id: 7, name: "Boxing" },
  { id: 8, name: "Athletics" },
  { id: 9, name: "NBA" },
  { id: 10, name: "Basketball" },
];
function Favourite({ user }) {
  const [favorites, setFavorites] = useState(dataList);
  const navigate = useNavigate();
  useEffect(() => {
    const data = localStorage.getItem("favorites");
    if (data !== null) setFavorites(JSON.parse(data));
  }, []);
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    if (user !== null && user !== undefined && favorites.length > 0) {
      const prevUser = JSON.parse(localStorage.getItem("currentUser"));
      if (prevUser !== null && prevUser !== undefined && prevUser !== user) {
        setFavorites([]);
      }
      localStorage.setItem("currentUser", JSON.stringify(user));
    }
  }, [favorites.length, user]);

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
          <li className="mysports" onClick={() => navigate("/favourite")}>
            MY SPORTS
          </li>
          <li
            style={{ fontSize: 20 }}
            className="logout"
            onClick={() => navigate("/home")}
          >
            Log out
          </li>
        </ul>
      </div>
      <div className="left-column">
        <div className="favList">
          <h1>Sports List</h1>

          {favorites.map((item, i) => (
            <div className="list" key={i}>
              {item.name}{" "}
              <div
                className="buttonFav"
                onClick={() => {
                  handleFavorite(item.id);
                }}
              >
                {item.favorite === true ? "Remove" : "Add"}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="center-column">
        <h1>Favourites List</h1>

        <div className="fav-list-added">
          {favorites.map((item) =>
            item.favorite === true ? (
              <div
                className="addedtoList"
                key={item.id}
                onClick={() => {
                  navigate("/" + item.name);
                }}
              >
                {item.name}
              </div>
            ) : null
          )}
        </div>
      </div>
      <div className="right-column">{<Video />}</div>
    </container>
  );
}
export default Favourite;
