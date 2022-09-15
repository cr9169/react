import React, { useState } from 'react';
import IPerson from '../interfaces/Person';
import PeopleList from './peopleList';
import "./inputsStyles.css";

const Inputs: React.FC = () => {

    const [peopleList, setPeopleList] = useState<IPerson[]>([]);

    const submitHandler = (e: any) => {
        e.preventDefault();
        const {firstName, lastName, email, age} = e.target;
        setPeopleList(peopleList => peopleList?.concat({firstName: firstName.value, lastName: lastName.value, email: email.value, age: +age.value}));
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
        <PeopleList peopleList={peopleList!} setPeopleList={setPeopleList}/>
    </div> );
}

export default Inputs;