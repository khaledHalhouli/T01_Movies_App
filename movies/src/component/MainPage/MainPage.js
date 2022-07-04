import axios from "axios"
import React,{useEffect,useState} from "react"
import {Card,Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import { Link } from "react-router-dom";

const MainPage =()=>{
const [movies, setMovies] = useState([])
    useEffect(()=>{
axios.get("https://api.themoviedb.org/3/movie/popular?api_key=eb9e888f1f8bec115837636c39456418&language=en-US&page=1").then((result)=>{
    setMovies(result.data.results)
    console.log(result.data.results);
}).catch((err)=>{
    console.log(err);
})
    },[])

    return <div className="mainPage">
        {movies&&movies.map((element)=>{
           return <Card style={{ width: '18rem' }}>
            <Link to={`/${element.id}`}><Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${element.backdrop_path}`} /></Link>
            <Card.Body>
              <Card.Title>{element.original_title}</Card.Title>
              
              <Button variant="primary">Favorit</Button>
            </Card.Body>
          </Card>
        })}
    </div>
}

export default MainPage