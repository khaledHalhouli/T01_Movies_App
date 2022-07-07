import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Link } from "react-router-dom";
import PopUp from "../PopUp/PopUP";
import PaginationPage from "../PagintionPage/PaginationPage";
const MainPage = () => {
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState();
  const [topRated, setTopRated] = useState(false);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=eb9e888f1f8bec115837636c39456418&language=en-US&page=1"
      )
      .then((result) => {
        let start = Math.round(Math.random() * 17);

        setTopRated(result.data.results.slice(start, start + 3));
        
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=eb9e888f1f8bec115837636c39456418&language=en-US&page=${pageNum}`
      )
      .then((result) => {
        setMovies(result.data.results);
       
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
      <h2 className="topRatedTitle">Top Rated</h2>
      <div className="slider">
        {topRated && (
          <Carousel activeIndex={index} onSelect={handleSelect}>
           <Carousel.Item>
           <Link to={`/${topRated[0].id}`}> 
              <img
                
                className="d-block w-100 imgSlider"
                src={`https://image.tmdb.org/t/p/w500${topRated[0].backdrop_path}`}
                alt="First slide"
              />
            </Link>
              <Carousel.Caption>
                <h3 className="moveTitleSldier">{topRated[0].original_title}</h3>
                
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
           <Link to={`/${topRated[1].id}`}> 
              <img
                className="d-block w-100 imgSlider"
               
                src={`https://image.tmdb.org/t/p/w500${topRated[1].backdrop_path}`}
                alt="Second slide"
              />
            </Link>

              <Carousel.Caption>
                <h3 className="moveTitleSldier">{topRated[1].original_title}</h3>
                
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
           <Link to={`/${topRated[2].id}`}> 
              <img
                
                className="d-block w-100 imgSlider"
                src={`https://image.tmdb.org/t/p/w500${topRated[2].backdrop_path}`}
                alt="Third slide"
              />
            </Link>

              <Carousel.Caption>
                <h3 className="moveTitleSldier">{topRated[2].original_title}</h3>
               
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        )}
      </div>
      <div className="mainPageBody">
        {movies &&
          movies.map((element, index) => {
            return (
              <Card style={{ width: "18rem" }} key={index}>
                <Link to={`/${element.id}`}>
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
                  />
                </Link>
                <Card.Body className="cardFav">
                  <Card.Title>
                    <PopUp
                      move={{
                        id: element.id,
                        poster_path: element.poster_path,
                      }}
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
