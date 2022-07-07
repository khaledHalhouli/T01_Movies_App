import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Link } from "react-router-dom";
import PopUp from "../PopUp/PopUP";
import React ,{useEffect} from "react"

const SearchPage =({search,setSearch})=>{
    
    useEffect(()=>{

        
            let searcMovies=JSON.parse(localStorage.getItem("search"))
            setSearch(searcMovies)
        
    },[])

    
    return   <div className="searchPage">
    
    <div className="searchPageBody">
      {search &&
        search.map((element,index) => {
          return (
            <Card style={{ width: "18rem" }} key={index}>
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
    
  </div>

}

export default SearchPage
