import React from "react";
import './character.style.css';

const CharacterComponent = (props) => {
    return (
        <React.Fragment key={props.character.id}>
            <tr className='character'>
                <td className='title'>{props.character.name}</td>
                <td className='title'>{props.character.position}</td>
                <td className={'title level-' + props.character.level}>{props.character.level}</td>
            </tr>
        </React.Fragment>
    );
}

export default CharacterComponent;