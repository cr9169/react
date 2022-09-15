import React, { useState } from 'react';
import IPerson from '../interfaces/Person';


interface IProps{
    people: IPerson[];
}

const PeopleList: React.FC<IProps> = ({people}) => {

    const [personList, setPersonList] = useState<IPerson[]>(people);

    const deletePerson = (index: number): void => {
        const newPersonList = personList;
        newPersonList?.splice(index, 1);
        setPersonList(newPersonList);
    }

    return <div><ul>{people.map((person: IPerson) => <div>
        <input onClick={() => {deletePerson}} id='peopleList[peopleList]' type="button" value="delete"></input>
        <li> {person.firstName}</li>
        <li> {person.lastName}</li>
        <li> {person.email}</li>
        <li> {person.age}</li><br /><br /></div>)}</ul>
        <input id='peopleList[peopleList.length]' type="button" value="delete"></input></div>
}

export default PeopleList;