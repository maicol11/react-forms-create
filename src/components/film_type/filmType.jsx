import React from "react";
import FilmComponent from "../film/film";
import './filmType.style.css';


const FilmTypeComponent = (props) => {
    return (
        <React.Fragment key='0'>
          {
            props.filmList.map((type, index)=> {
              return (
                <React.Fragment key={type.id}>
                  <tr className='filmType'>
                    <th colSpan='4' className='type'>{type.type}</th>
                  </tr>
                  <tr className='filmType'>
                    <th>Name</th>
                    <th>Director</th>
                    <th>Premiere date</th>
                    <th>At the cinema</th>
                  </tr>
                  
                  {
                    type.film.map((f, index)=> {
                      return (
                        <React.Fragment key={f.id}>
                          <FilmComponent f={f}/>
                        </React.Fragment>
                      );
                    })
                  }
                  
                </React.Fragment>
              );
              
            })
          }
          
        </React.Fragment>
    );
}

export default FilmTypeComponent;