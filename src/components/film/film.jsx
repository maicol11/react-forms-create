import React from "react";
import './film.style.css';

const FilmComponent = (props) => {
    return (
        <React.Fragment key={props.f.id}>
            <tr className='film'>
                <td className='title'>{props.f.name}</td>
                <td className='title'>{props.f.director}</td>
                <td className='title'>{props.f.year}</td>
                <td className='title'>
                    {props.f.cinema === true?<span className='yes'>Yes</span>:<span className='no'>No</span> }
                </td>
            </tr>
        </React.Fragment>
    );
}

export default FilmComponent;