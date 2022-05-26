import Search from "./components/Search";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>weather foreacast</h1>
      <Search placeholder={"type a city name.."} />
    </div>
  );
}

export default App;
