import React, { useState } from 'react';
import IPerson from '../interfaces/Person';
import "./inputsStyles.css";
import PeopleList from './peopleList';

function isNumber(str: string): boolean {
    if (typeof str !== 'string') {
      return false;
    }
  
    if (str.trim() === '') {
      return false;
    }
  
    return !Number.isNaN(Number(str));
}


const peopleList: IPerson[] = [{firstName: 'a', lastName: 'b', age: 1, email: 'e'}];

const Inputs: React.FC = () => {

    const [person, setPerson] = useState<IPerson | null>();

    // const changeHandler = (e: any) => {
    //         setPerson({...person, [e.target?.name]:[e.target?.value]});
    // };

    const submitHandler = (e: any) => {
        e.preventDefault();
        const {firstName, lastName, email, age} = e.target;
        console.log({firstName: firstName.value, lastName: lastName.value, email: email.value, age: +age.value});// change to add form of person to the list component 
    }

    return ( <div>
        <form onSubmit={submitHandler}>
            <div id='inputs'>
                <span>First Name:</span>
                <input type="text" name="firstName" />
                <span>Last Name:</span>
                <input type="text" name="lastName"/>
                <span>Email:</span>
                <input type="text" name="email" />
                <span>Age:</span>
                <input type="number" name="age"/>
            </div>
            <input  type="submit" name="submit" id='submit'/>
        </form>
        <PeopleList people={peopleList}/>
    </div> );
}

export default Inputs;