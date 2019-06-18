import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import { connect } from 'react-redux';

class App extends React.Component {

  componentDidMount(){
    this
    .getAPIData()
    .then(res => this.props.initTodo(res))
    .catch(err => console.log(err));
  }

  getAPIData = async () => {
    const res = await fetch('/todos')
    const body = await res.json();
    console.log(body)
    if (res.status !== 200){
      throw Error(body.message);
    }
    return body
  }

  addTodoRequest = (todo) => {
    fetch('/todos', {
      method: 'POST',
      body:JSON.stringify(todo),
      headers :{
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(response => console.log('Successfully added an item:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
    this.componentDidMount()
  }

  removeTodoRequest = (id) => {
    fetch ('/todos/' + id, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(response => console.log("Successfully removed an item:", JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
  this.componentDidMount()
  }

  render(){
    return (
      <Router>
        <div className="App" style={appStyle}>
          <div className='container'>
            <Header />
            <Route exact path="/" render={todos => (
              <React.Fragment>
                <AddTodo addTodoRequest={this.addTodoRequest}/>
                <Todos removeTodoRequest={this.removeTodoRequest}/>
              </React.Fragment>
            )} />
            <Route path="/about" component = {About} />
          </div>
        </div>
      </Router>
    );
  }
}

const appStyle = {
  backgoundColor:'#fffff0'
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    initTodo: (todos) => {dispatch ({type: 'INIT_STATUS', todos: todos})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

