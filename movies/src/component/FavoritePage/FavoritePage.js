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


return <div>
{massage===""?movies&&movies.map((element)=>{
    return  <Card style={{ width: "18rem" }}>
        <CloseButton />
    <Link to={`/${element.id}`}>
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
      />
    </Link>
    
  </Card>
}) :<h1>{massage}</h1>}

</div>

}
export default FavoritePage