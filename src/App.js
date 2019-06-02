import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

import uuid from 'uuid';

class App extends React.Component {
  state = {
    todos: [
        {
            id: uuid.v4(),
            title: "Finish assignment 2",
            completed: false,
        },
        {
            id: uuid.v4(),
            title: "Work on project deliverable",
            completed: false,
        },
        {
            id: uuid.v4(),
            title: "Hit the gym!",
            completed: false,
        }

    ]
  }

  //Toggles complete state
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })});
  }

  //Deletes todo item
  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }
  
  render(){
  console.log(this.state.todos)
    return (
      <Router>
        <div className="App">
          <div className='container'>
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos = {this.state.todos} markComplete={this.markComplete} 
                deleteTodo = {this.deleteTodo}/>
              </React.Fragment>
            )} />
            <Route path="/about" component = {About} />
          </div>
        </div>
      </Router>

    );
  }
}

export default App;
