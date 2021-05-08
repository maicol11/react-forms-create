import { useState } from "react";
import './filter.style.css';

const FilmFilterComponent = (props) => {

    const [filmType, setFilmType] = useState('f1');
    const [name, setName] = useState('');
    const [director, setDirector] = useState('');
    const [year, setYear] = useState('');
    const [cinema, setCinema] = useState('yes');

    const [nameValidator, setNameValidator] = useState('');
    const [directorValidator, setDirectorValidator] = useState('');
    const [yearValidator, setYearValidator] = useState('');

    let validate = true;
    let avaible = true;
    const addFilm = () => {
        if(name == null || name =='' || name ==' '){
            validate = false;
            setNameValidator("Name required");
        }else {
            setNameValidator("");
        }

        if(director == null || director =='' || director ==' '){
            validate = false;
            setDirectorValidator("director required");
        }else {
            setDirectorValidator("");
        }

        if(year == null || year =='' || year ==' '){
            validate = false;
            setYearValidator("Year required");
        }else {
            setYearValidator("");
        }

        if(cinema == 'no') {
            avaible = false;
        }
        
        console.log('name: ' + name);
        console.log('director: ' + director);
        console.log('year: ' + year);
        console.log('cinema: ' + avaible);

        if(validate == true){
            const newFilm = {
                id: name,
                name: name,
                director: director,
                year: year,
                cinema: avaible
            };
            props.onFilm(newFilm, filmType);
        }
        
    }

    return (
        <table>
            <tbody>
                <tr className='filterType'>
                    <td>Film Type</td>
                    <td>
                        <select value={filmType} onChange={(event)=> {setFilmType(event.target.value)}} >
                            <option value="f1">Action</option>
                            <option value="f2">Animation</option>
                        </select>
                    </td>
                </tr>
                <tr className='filterType'>
                    <td>Name</td> 
                    <td>
                        <input type='text' value={name} onChange={(event)=> {setName(event.target.value)}} />
                        <span className='error'>{nameValidator}</span>
                    </td>
                </tr>
                <tr className='filterType'>
                    <td>Director</td>
                    <td>
                        <input type='text' value={director} onChange={(event)=> {setDirector(event.target.value)}} />
                        <span className='error'>{directorValidator}</span>
                    </td>
                </tr>
                <tr className='filterType'>
                    <td>Premiere date</td>
                    <td>
                        <input type='date' value={year} onChange={(event)=> {setYear(event.target.value)}} />
                        <span className='error'>{yearValidator}</span>
                    </td>
                </tr>
                <tr className='filterType'>
                    <td>
                        Avaible At the cinema
                    </td>
                    <td>
                        <input type='radio' id='yes' name='cinema' value='yes' defaultChecked  onChange={(event)=> {setCinema(event.target.value);}}/>
                        <label for='yes'>Yes</label>
                        <input type='radio' id='no' name='cinema' value='no' onChange={(event)=> {setCinema(event.target.value)}}/>
                        <label for='no'>No</label>
                    </td>
                </tr>
                <tr className='filterType'>
                    <td colSpan='2'>
                        <button type='button' onClick={addFilm}>Add Film</button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default FilmFilterComponent;