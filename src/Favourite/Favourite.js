import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "./styles.css";
import { useNavigate } from "react-router-dom";
const data = [
  { id: 1, name: "Football" },
  { id: 2, name: "Cricket" },
  { id: 3, name: "Formula1" },
];

function Favourite() {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setFavorites(data);
  }, []);

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  function handleFavorite(id) {
    const newFavorites = favorites.map((item) => {
      return item.id === id ? { ...item, favorite: !item.favorite } : item;
    });

    setFavorites(newFavorites);
  }

  return (
    <div className="App">
      <h1>Initial list</h1>
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

      <h1>Favorite list</h1>
      <ul>
        {favorites.map((item) =>
          item.favorite === true ? (
            <li key={item.id}>
              <Link to={"/" + item.name}>{item.name} </Link>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
}
export default Favourite;
