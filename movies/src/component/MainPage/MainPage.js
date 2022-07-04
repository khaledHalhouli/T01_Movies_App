import axios from "axios"
import React,{useEffect,useState} from "react"
import {Card,Button} from "react-bootstrap"
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

    return <div>
        {movies&&movies.map((element)=>{
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        })}
    </div>
}

export default MainPage