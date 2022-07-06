
import './App.css';
import MainPage from './component/MainPage/MainPage';
import Navbars from './component/Navbar/Navbar';
import {Routes,Route} from "react-router-dom"
import MovePage from './component/MovePage/MovePage';
import FavoritePage from './component/FavoritePage/FavoritePage';
function App() {
  return (
    <div className="App">
      <Navbars/>
      <Routes>
      
<Route path='/' element={<MainPage/>}/>
<Route path='/:id' element={<MovePage/>}/>
<Route path="/favorite" element={<FavoritePage/>}/>
      </Routes>
    </div>
  );
}


export default App;
