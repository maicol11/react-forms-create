import { useState } from "react";
import './App.css';
import FamilyComponent from './components/family/family';
import FilmTypeComponent from "./components/film_type/filmType";
import FilmFilterComponent from "./components/filter/filmFilter";
import FilterComponent from './components/filter/filter';

let theGodfatherList = [
    {
      id: 'f1',
      name: 'Corleone',
      family: [
        {
          id:'f1a1',
          name: 'Vito Corleone',
          position: 'Don',
          level: 4
        },
        {
          id:'f1a2',
          name: 'Sonny Corleone',
          position: 'Sottocapo',
          level: 3
        },
        {
          id:'f1a3',
          name: 'Michael Corleone',
          position: 'Don',
          level: 4
        },
        {
          id:'f1a4',
          name: 'Tom Hagen',
          position: 'Consiglieri',
          level: 2
        },
        {
          id:'f1a5',
          name: 'Fredo Corleone',
          position: 'Sottocapo',
          level: 3
        }
      ]
    },
    {
      id: 'f2',
      name: 'Tattaglia',
      family: [
        {
          id:'f2a1',
          name: 'Philip Tattaglia',
          position: 'Don',
          level: 4
        },
        {
          id:'f2a2',
          name: 'Bruno Tattaglia',
          position: 'Don',
          level: 4
        },
        {
          id:'f2a3',
          name: 'Virgil Sollozzo,',
          position: 'Caporegime',
          level: 2
        }
      ]
    }
];


let filmsList = [
  {
    id: 'f1',
    type: 'Action',
    film: [
      {
        id:'f1a1',
        name: 'The godfather',
        director: 'Francis Ford Coppola​',
        year: '16/05/1972',
        cinema: false
      },
      {
        id:'f1a2',
        name: 'Scarface',
        director: 'Brian De Palma​',
        year: '01/12/1983',
        cinema: false
      },
    ]
  },
  {
    id: 'f2',
    type: 'Animation',
    film: [
      {
        id:'f1a4',
        name: 'Soul',
        director: 'Kemp Powers',
        year: '25/12/2020',
        cinema: true
      },
      {
        id:'f1a1',
        name: 'Up una aventura de altura',
        director: 'Pete Docter​',
        year: '05/06/2009',
        cinema: false
      },
      {
        id:'f1a2',
        name: 'Big hero 6',
        director: 'Chris Williams',
        year: '25/12/2014',
        cinema: false
      },
      {
        id:'f1a5',
        name: 'WALL·E',
        director: 'Andrew Stanton',
        year: '27/06/2008',
        cinema: false
      }
      
    ]
  },
  
];


function App() {

  const [family, setFamily] = useState(theGodfatherList);

  const [film, setFilm] = useState(filmsList);

  return (
    <div className="App">
      <h4>Families Universe The Godfather of Mario Puzo</h4>
      <br/>
      <div className='data-container'>
        <div className='first-container'>
          <div className='filter-container'>
            <FilterComponent 
              onCharacter={(characterObj, selectedFamily) =>{
                const newfamily = [];
                for(let i =0; i < family.length; i++) {
                  if(family[i].id !== selectedFamily) {
                    newfamily.push(family[i]);
                  }else {
                    newfamily.push(
                      {
                        ...family[i], 
                        family:[...family[i].family, characterObj]
                      }
                    );
                  }
                }
                setFamily(newfamily);
              }} 
            />
          </div>
          <div className='table-container'>
          <table>
            <tbody>
              <FamilyComponent theGodfatherList={family} />
            </tbody>
          </table>
          </div>
        </div>
        <div className='second-container'>
          <div className='filter-container'>
            <FilmFilterComponent 
              onFilm={(onFilm, filmType) =>{
                const newFilm = [];
                for(let i =0; i < film.length; i++) {

                  if(film[i].id !== filmType) {
                    newFilm.push(film[i]);
                  }else {
                    newFilm.push(
                      {
                        ...film[i], 
                        film:[...film[i].film, onFilm]
                      }
                    );
                  }
                }
                setFilm(newFilm);
              }} 
            />
          </div>
          <div className='table-container'>
          <table>
            <tbody>
              <FilmTypeComponent filmList={film}/>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
