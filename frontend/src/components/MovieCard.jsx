import "./App.css";
import Moviecard from "./components/Moviecard";

function App()
{
    return (
        <>
        < Moviecard movie={{title: "Testing", release_date: "2024" }} />
        </>
    )
}

export default App;