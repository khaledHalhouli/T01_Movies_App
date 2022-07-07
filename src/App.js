
import React,{useState} from 'react';
import './App.css';
import MainPage from './component/MainPage/MainPage';
import Navbars from './component/Navbar/Navbar';
import {Routes,Route} from "react-router-dom"
import MovePage from './component/MovePage/MovePage';
import FavoritePage from './component/FavoritePage/FavoritePage';
import SearchPage from './component/SearchPage/SearchPage';
function App() {
  const [search, setSearch] = useState("")
  return (
    <div className="App">
      <Navbars setSearch={setSearch}/>
      <Routes>
      
<Route path='/' element={<MainPage/>}/>
<Route path='/:id' element={<MovePage/>}/>
<Route path="/favorite" element={<FavoritePage/>}/>
<Route path='/search' element={<SearchPage search={search} setSearch={setSearch}/>}/>
      </Routes>
    </div>
  );
}


export default App;
