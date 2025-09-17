import "./App.css";
import {routes, route} from "react-router-dom"
import Moviecard from "./components/MovieCard";
import Home from "./pages/home";
function App()
{
    return (
        <main className="main-content">
             <routes>
            <route path='/' element ={<Home/>}/>
              <route path='/' element ={<Favorite/>}/>
        </routes> 
        </main>
       
    )
}

export default App; 