import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Link } from "react-router-dom";
import PopUp from "../PopUp/PopUP";
import PaginationPage from "../PagintionPage/PaginationPage";
const MainPage = () => {
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=eb9e888f1f8bec115837636c39456418&language=en-US&page=${pageNum}`
      )
      .then((result) => {
        setMovies(result.data.results);
        console.log(result.data.results);
      })
      .catch((err) => {
        console.log(err);
      });

    if (!pageNum) {
      setPageNum(1);
    }
  }, [pageNum]);

  return (
    <div className="mainPage">
      <div className="mainPageBody">
        {movies &&
          movies.map((element) => {
            return (
              <Card style={{ width: "18rem" }}>
                <Link to={`/${element.id}`}>
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
                  />
                </Link>
                <Card.Body className="cardFav">
                  <Card.Title >
                    <PopUp
                      move={{id:element.id,poster_path:element.poster_path}}
                      moveName={element.original_title}
                    />
                  </Card.Title>
                </Card.Body>
              </Card>
            );
          })}
      </div>
      <PaginationPage
        pagesNumber={20}
        setPageNum={setPageNum}
        pageNum={pageNum}
      />
    </div>
  );
};

export default MainPage;
