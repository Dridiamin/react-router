import "./App.css";
import MovieList from "./Components/MovieList";
import Filter from "./Components/Filter";
import { useState } from "react";
import AddMovie from "./Components/AddMovie";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Trailler from "./Pages/Trailler";

const movies = [
  {
    title: "The Godfather",
    description:
      "The Godfather” is a classic crime drama film directed by Francis Ford Coppola and based on the novel by Mario Puzo. The film explores the story of the Corleone crime family in New York City.",
    posterURL:
      "https://cf.geekdo-images.com/umGE4fOLYylHloIvw5bitA__itemrep/img/QzNC3UI614S7Fg49w_pA19SBEms=/fit-in/246x300/filters:strip_icc()/pic3364797.jpg",
    rating: 5,
    id: 5,
    trailler: "https://www.youtube.com/watch?v=UaVTIH8mujA&pp=ygUVdGhlIGdvZGZhdGhlciB0cmFpbGVy",
  },
  
  {
    title: "Chernobyl",
    description:
      "C'est la plus grande catastrophe de l'histoire de l'énergie atomique civile, survenue le 26 avril 1986 dans un parc de centrales électronucléaires édifiés dans l'ancienne URSS, sur la localité de Tchernobyl, située au nord de l'Ukraine, près de la frontière de Biélorussie.",
    posterURL:
      "https://upload.wikimedia.org/wikipedia/en/a/a7/Chernobyl_2019_Miniseries.jpg",
    rating: 5,
    id: 5,
    trailler: "https://www.youtube.com/watch?v=s9APLXM9Ei8",
  },
  {
    title: "Fast and Furious",
    description:
      "Fast & Furious (also known as The Fast and the Furious) is a media franchise centered on a series of action films that are largely concerned with street racing, heists, spies, and family.",
    posterURL:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6482/6482295_sa.jpg;maxHeight=640;maxWidth=550",
    rating: 5,
    id: 5,
    trailler: "https://www.youtube.com/watch?v=32RAq6JzY-w&pp=ygUYZmFzdCBhbmQgZnVyaW91cyB0cmFpbGVy",
  },
  {
    title: "The Dark knight",
    description:
      "The plot follows the vigilante Batman, police lieutenant James Gordon, and district attorney Harvey Dent, who form an alliance to dismantle organized crime in Gotham City. Their efforts are derailed by the Joker, an anarchistic mastermind who seeks to test how far Batman will go to save the city from chaos.",
    posterURL:
      "https://play-lh.googleusercontent.com/qhfncXOqccJ5Y_IBPaRy0O79QZQDl7L5FyKQAsLFICt8c9-2Vfmqd2bniAPESto0ZmSLTOzjl-o1F_jgb2Nr",
    rating: 5,
    id: 5,
    trailler: "https://www.youtube.com/watch?v=EXeTwQWrcwY&pp=ygUXdGhlIGRhcmsga25pZ2h0IHRyYWlsZXI%3D",
  },
  {
    title: "UNDISPUTED",
    description:
      "World heavyweight champion Iceman (Ving Rhames) is convicted of rape and sent to a maximum security prison. Monroe (Wesley Snipes), a former heavyweight contender, is the undefeated champion in the inter-prison division. They fight each other",
    posterURL:
      "https://movieposters2.com/images/1599198-b.jpg",
    rating: 5,
    id: 5,
    trailler: "https://www.youtube.com/watch?v=mTCo06TJe20&pp=ygUSdW5kaXNwdXRlZCB0cmFpbGVy",
  },
];

function App() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const filtrage = (text) => {};

  const add = (newMovie) => {
    movies.push(newMovie);

    console.log(movies);
    console.log(newMovie);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              text={text}
              setText={setText}
              rating={rating}
              setRating={setRating}
              movies={movies}
            />
          }
        />
        <Route path="/trailler/:id" element={<Trailler movies={movies} />} />
      </Routes>
      {/* <Filter
        text={text}
        setText={setText}
        rating={rating}
        setRating={setRating}
      />
      <MovieList
        movies={movies.filter(
          (movie, i) =>
            movie.title.toLowerCase().includes(text.toLowerCase()) &&
            movie.rating == rating
        )}
      /> */}
      <AddMovie add={add} />
    </div>
  );
}

export default App;
