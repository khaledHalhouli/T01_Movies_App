import axios from "axios";
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css"

const MovePage = () => {
  const [move, setMove] = useState("");
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

  return <div className="movePage">
    {move&&(<div className="move" style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500${move.backdrop_path})`} }><div className="moveCard">
        <img className="moveImg" src={`https://image.tmdb.org/t/p/w500${move.poster_path}`} alt={`${move.original_title}`}/>
        <div className="moveInfo">
        <h1 className="moveTitle">{move.original_title}</h1>
        <p className="moveOverView">{move.overview}</p>
        <p className="moveRate">{move.vote_average}/10</p>
        <p className="moveDur">{Math.floor( move.runtime/60)} hr {Math.ceil((move.runtime/60-Math.floor( move.runtime/60))*60)} min</p>
        <div className="moveGenres">{move.genres.map((element,index)=>{
            return <p key={index} className="genrsName">{element.name}</p>
        })}</div>
        </div>
    </div> <button>favorite</button></div>)}
  </div>
};

export default MovePage;
