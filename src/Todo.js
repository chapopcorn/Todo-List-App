import React, { Component } from 'react';
import './App.css';
import logo from './tick.png';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      entry: ''
    }
  }

  onChange =(e)=> {
    this.setState({
      entry: e.target.value
    })
  }

  onAdd=(e)=> {
    this.setState(prevState => ({
      tasks: prevState.tasks.concat(this.state.entry),
      entry: ''
    }))
  }

  onDelete (index){
    const tasks = this.state.tasks;
  
    tasks.splice(index, 1);
    this.setState({ 
      tasks });
  }
  
  render() {
    return(
      <div>
        <header className='App-header'>
          <img src={logo} className='App-pic' alt='tick mark'/>
          <h1>TICK</h1>
        </header>
        <input type='text'
          value={this.state.entry} 
          placeholder = 'add new task ...'
          onChange={this.onChange}/>

        <input 
          type='submit'
          value='+' 
          onClick={this.onAdd}/>
        
        <ul>{
          this.state.tasks.map((entry, indexKey) => {
            return (
              <li key={indexKey}>
                {entry}
                <a href='#'onClick={() => this.onDelete(indexKey) }>-</a>
              </li>
            );
          })}
        </ul>
      </div>
    )
  }
}

  