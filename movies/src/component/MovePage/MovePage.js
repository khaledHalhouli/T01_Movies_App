import axios from "axios";
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import { AiFillHeart } from "react-icons/ai";

const MovePage = () => {
  const [move, setMove] = useState("");
  const [favIcon, setfavIcon] = useState("iconFavNo");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `
    https://api.themoviedb.org/3/movie/${id}?api_key=eb9e888f1f8bec115837636c39456418&language=en-US`
      )
      .then((result) => {
        setMove(result.data);
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  useEffect(() => {
    if (
      localStorage.getItem("favorite") &&
      JSON.parse(localStorage.getItem("favorite")).includes(move.id)
    ) {
      setfavIcon("iconFavYes");
    }
    console.log(2);
  }, [move]);
  const favoriteButton = () => {
    if (
      !localStorage.getItem("favorite") ||
      !JSON.parse(localStorage.getItem("favorite")).includes(move.id)
    ) {
      console.log(
        !JSON.parse(localStorage.getItem("favorite")).includes(move.id)
      );
      let moveFavArr = localStorage.getItem("favorite")
        ? JSON.parse(localStorage.getItem("favorite"))
        : [];
      localStorage.setItem(
        "favorite",
        JSON.stringify([...moveFavArr, move.id])
      );
      setfavIcon("iconFavYes");
    } else {
      let moveFavArr = JSON.parse(localStorage.getItem("favorite")).filter(
        (element) => {
          return element !== move.id;
        }
      );
      localStorage.setItem("favorite", JSON.stringify(moveFavArr));

      setfavIcon("iconFavNo");
    }
  };

  return (
    <div className="movePage">
      {move && (
        <div
          className="move"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${move.backdrop_path})`,
          }}
        >
          <div className="moveCard">
            <img
              className="moveImg"
              src={`https://image.tmdb.org/t/p/w500${move.poster_path}`}
              alt={`${move.original_title}`}
            />
            <div className="moveInfo">
              <h1 className="moveTitle">{move.original_title}</h1>
              <p className="moveOverView">{move.overview}</p>
              <p className="moveRate">{move.vote_average}/10</p>
              <p className="moveDur">
                {Math.floor(move.runtime / 60)} hr{" "}
                {Math.ceil(
                  (move.runtime / 60 - Math.floor(move.runtime / 60)) * 60
                )}{" "}
                min
              </p>
              <div className="moveGenres">
                {move.genres.map((element, index) => {
                  return (
                    <p key={index} className="genrsName">
                      {element.name}
                    </p>
                  );
                })}
              </div>
            </div>
          <p className={`${favIcon}`} onClick={favoriteButton}>
            <AiFillHeart />
          </p>
          </div>{" "}
        </div>
      )}
    </div>
  );
};

export default MovePage;
