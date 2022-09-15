import React, { useState } from 'react';
import IPerson from '../interfaces/Person';


interface IProps{
    peopleList: IPerson[];
    setPeopleList: React.Dispatch<React.SetStateAction<IPerson[]>>;
}

const PeopleList: React.FC<IProps> = ({peopleList, setPeopleList}) => {

    // const [personList, setPersonList] = useState<IPerson[]>(people);

    const deletePerson = (index: number): void => {
        const newPersonList = peopleList;
        newPersonList?.splice(index, 1);
        setPeopleList([...newPersonList!]);
    }

    return <div><ul>{peopleList!.map((person: IPerson, index: number) =>  <div>
        <input onClick={() => deletePerson(index)} disabled={index === 4} id='peopleList[peopleList]' type="button" value="delete"></input>
        <li style={{ color: person.age > 20 ? "red" : "black" }}> {person.firstName}</li>
        <li style={{ color: person.age > 20 ? "red" : "black" }}> {person.lastName}</li>
        <li> {person.email}</li>
        <li> {person.age}</li><br /><br /></div>)}</ul>
        </div> 
}

export default PeopleList;