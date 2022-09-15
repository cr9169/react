import React from 'react';
import IPerson from '../interfaces/Person';


interface IProps{
    people: IPerson[];
}

const deletePerson(id: string) {
    
}
const PeopleList: React.FC<IProps> = ({people}) => {
    return <div><ul>{people.map((person: IPerson) => <div>
        <input onClick={deleteCard(this)} id='peopleList[peopleList.length]' type="button" value="delete"></input>
        <li> {person.firstName}</li>
        <li> {person.lastName}</li>
        <li> {person.email}</li>
        <li> {person.age}</li><br /><br /></div>)}</ul></div>
}

export default PeopleList;