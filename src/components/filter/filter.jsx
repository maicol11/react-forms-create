import { useState } from "react";
import './filter.style.css';

const FilterComponent = (props) => {

    const [family, setFamily] = useState('f1');
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [level, setlevel] = useState('');

    const [nameValidator, setNameValidator] = useState('');
    const [positionValidator, setPositionValidator] = useState('');
    const [levelValidator, setLevelValidator] = useState('');

    let validate = true;
    const addCharacter = () => {
        if(name == null || name =='' || name ==' '){
            validate = false;
            setNameValidator("Name required");
        }else {
            setNameValidator("");
        }

        if(position == null || position =='' || position ==' '){
            validate = false;
            setPositionValidator("Position required");
        }else {
            setPositionValidator("");
        }

        if(level == null || level <= 0){
            validate = false;
            setLevelValidator("Level must be greater than 0");
        }else {
            setLevelValidator("");
        }
        
        console.log('name: ' + name);
        console.log('position: ' + position);
        console.log('level: ' + Number(level));
        if(validate == true){
            const newCharacter = {
                id: name,
                name: name,
                position: position,
                level: Number(level)
            };
            props.onCharacter(newCharacter, family);
        }
        
    }

    return (
        <table>
            <tbody>
                <tr className='filter'>
                    <td>Family</td>
                    <td>
                        <select value={family} onChange={(event)=> {setFamily(event.target.value)}} >
                            <option value="f1">Corleone</option>
                            <option value="f2">Tattaglia</option>
                        </select>
                    </td>
                </tr>
                <tr className='filter'>
                    <td>Name</td> 
                    <td>
                        <input type='text' value={name} onChange={(event)=> {setName(event.target.value)}} />
                        <span className='error'>{nameValidator}</span>
                    </td>
                </tr>
                <tr className='filter'>
                    <td>Position</td>
                    <td>
                        <input type='text' value={position} onChange={(event)=> {setPosition(event.target.value)}} />
                        <span className='error'>{positionValidator}</span>
                    </td>
                </tr>
                <tr className='filter'>
                    <td>Level</td>
                    <td>
                        <input type='number' value={level} onChange={(event)=> {setlevel(event.target.value)}} />
                        <span className='error'>{levelValidator}</span>
                    </td>
                </tr>
                <tr className='filter'>
                    <td colSpan='2'>
                        <button type='button' onClick={addCharacter}>Add Character</button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default FilterComponent;