import React from 'react';
import "./inputsStyles.css";

const Inputs: React.FC = () => {

    const submitInfo = () => {

    };

    return ( <div>
        <div id='inputs'>
            <input type="input" placeholder='First Name'/>
            <input type="input" placeholder='Last Name'/>
            <input type="input" placeholder='Email'/>
            <input type="input" placeholder='Age'/>
        </div>
        <button onClick = {submitInfo} type="submit" id='submit'>
            Submit
        </button>
    </div> );
}

export default Inputs;