import logo from './logo.svg';
import './App.css';

import todos from './todos.json'
import { Component } from 'react';

class App extends Component{
  constructor(){
    super();
    this.state = {
      todos
    } 
  }

    render(){
      const todos = this.state.todos.map((todo, i) => {
        return(
          <div className="card">
            {todo.titulo}
          </div>
        )
      })

      return (
        <div className="App">

            <nav className="navbar navbar-dark bg-dark">
            <a href="" className="text-white">
              Tasks
            </a>
          </nav>

          { todos }

            <img src={logo} className="App-logo" alt="logo" />
        </div>
      )
    }
}



export default App;
