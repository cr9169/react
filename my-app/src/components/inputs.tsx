import React from 'react';
import "./inputsStyles.css";

class Inputs extends React.Component {

    constructor(props: any) {
      super(props);
      this.firstNameState = {value: ''};
      this.lastNameState = {value: ''};
      this.age = {value: ''};
      this.email = {value: ''};
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event: any) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
        return ( 
            <form onSubmit={this.handleSubmit}>
                <div>
                    <div id='inputs'>
                        <input type="text" value={this.state.value} onChange={this.handleChange}/>
                        <input type="text" value={this.state.value} onChange={this.handleChange}/>
                        <input type="text" value={this.state.value} onChange={this.handleChange}/>
                        <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    </div>
                    <input type="submit" value="Submit" id='submit'/>
                </div> 
            </form>
        );
    }
  }
