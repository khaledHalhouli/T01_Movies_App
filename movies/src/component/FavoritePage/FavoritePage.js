import React,{useState,useEffect} from "react"
import { Card, CloseButton } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Link } from "react-router-dom";
const FavoritePage =()=>{
const [movies, setMovies] = useState("")
const [massage, setMassage] = useState("")

useEffect(()=>{
    
    if(JSON.parse(localStorage.getItem("favorite"))){
        setMovies(JSON.parse(localStorage.getItem("favorite")))
        setMassage("")
    }else{
        setMassage("Favorit list is empty")
    }
    
},[])
const closeBut=(move)=>{
    let moveFavArr = JSON.parse(localStorage.getItem("favorite")).filter(
        (element) => {
          return element.id !== move.id;
        }
      );
      localStorage.setItem("favorite", JSON.stringify(moveFavArr));
      setMovies(JSON.parse(localStorage.getItem("favorite")))
}


return <div className="favPageBody">
{movies&&movies.length!==0?movies&&movies.map((element)=>{
    return  <Card style={{ width: "18rem" }} className={"cardFavs"}>
        <CloseButton onClick={()=>{closeBut(element)}}/>
    <Link to={`/${element.id}`}>
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
      />
    </Link>
    
  </Card>
}) :<h1>Favorit list is empty</h1>}

</div>

}
export default FavoritePage