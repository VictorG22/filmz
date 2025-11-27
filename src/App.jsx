import { Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import TVShows from "./pages/TVShows"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieDetails from "./pages/MovieDetails"
import ShowDetails from "./pages/ShowDetails"
import Search from "./pages/SearchMedia"


function App() {

  return (
    <>
    <Nav />
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/movies" element={<Movies />}/>
    <Route path="/tv-shows" element={<TVShows />}/>
    <Route path="/search" element={<Search />}/>
    <Route path="/movie-details/:id" element={<MovieDetails />}/>
    <Route path="/show-details/:id" element={<ShowDetails />}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
