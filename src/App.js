import react, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieCards from "./components/MovieCards";
import Trending from "./components/Trending";

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [trendings, setTrendings] = useState([]);
  useEffect(() => {
    fetchHomePage();
  }, []);

  const fetchHomePage = async () => {
    // const response = await fetch(`
    // https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    // const data = await response.json();
    // setTrending(data);
  };
  return (
    <Router>
      <div className="App">
        <Header />
        <Trending />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
