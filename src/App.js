import react, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MovieContextProvider } from "./context/movieContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Trending from "./components/Trending";
import Search from "./components/Search";
import Home from "./pages/Home";

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
    <MovieContextProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </MovieContextProvider>
  );
}

export default App;
