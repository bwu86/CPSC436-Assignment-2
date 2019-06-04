import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import { connect } from 'react-redux';

class App extends React.Component {

  render(){
    return (
      <Router>
        <div className="App">
          <div className='container'>
            <Header />
            <Route exact path="/" render={todos => (
              <React.Fragment>
                <AddTodo />
                <Todos />
              </React.Fragment>
            )} />
            <Route path="/about" component = {About} />
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(App);

