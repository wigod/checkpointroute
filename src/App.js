import { useState } from 'react';
import './App.css';
import MiseEnForme from './MiseEnForme';
import { BrowserRouter, Route, Link } from 'react-router-dom';



function App() {

    

    let [films, setFilms] = useState([
    {
      id:1,
      title: "Nos premiers pas avec React",
      description: "comment on peut commencer à l'utiliser et on va découvrir le fonctionnement de react et react-dom",
      link: "https://www.youtube.com/embed/V8G0ILBE-Ok",
       coverImage: ""
    },
    {
      id:2,
      title: "La syntaxe JSX",
      description: "La syntaxe JSX",
      link: "https://www.youtube.com/embed/SFFZ0hpIk5Q",
       coverImage: ""
    },
    {
      id:3,
      title: "Create React App",
      description: "Create React App",
      link: "https://www.youtube.com/embed/kx_hJExdqzw",
       coverImage: ""
    },
  ]);

  let [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div className='container'>
      
        <div className='form-container'>
          <form action=''>
            <input type='search' placeholder='Rechercher ...' className='form-control' onChange={handleSearch} />
          </form>
        </div>

        <div className='box'>
          {films.filter((film) => {
            return film.title.toLowerCase().includes(searchTerm)            
          }).map((film) => {
            return (<MiseEnForme key={film.id} film={film} />)
          })}
        </div>
    </div>
      
  );
}

export default App;
