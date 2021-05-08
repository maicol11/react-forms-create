import React from "react";
import CharacterComponent from "../character/character";
import './family.style.css';

const FamilyComponent = (props) => {
    return (
        <React.Fragment key='0'>
          {
            props.theGodfatherList.map((faction, index)=> {
              return (
                <React.Fragment key={faction.id}>
                  <tr className='family'>
                    <th colSpan='3' className='faction'>{faction.name}</th>
                  </tr>
                  <tr className='family'>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Level</th>
                  </tr>
                  
                  {
                    faction.family.map((character, index)=> {
                      return (
                        <React.Fragment key={character.id}>
                          <CharacterComponent character={character}/>
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

export default FamilyComponent;