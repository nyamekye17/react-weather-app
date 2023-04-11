import './App.css';
import Weather from "./Weather"

export default function App() {
  return (
    <div className="App">
       <div class="container">
  <Weather />
   <footer>
    This project was created by Nana Aba Acquah and is {" "}
   <a href="https://github.com/nyamekye17/react-weather-app" target="_blank" rel="noreferrer" >open-sourced on Github</a>
   </footer>
   </div>
    </div>
  );
}

