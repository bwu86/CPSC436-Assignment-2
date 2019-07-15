import React from 'react';
import TodoItem from './TodoItem';
import { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

class Todos extends Component {
      render(){
        return this.props.todos.map((todo) => (
            <div>
                <TodoItem removeTodoRequest={this.props.removeTodoRequest} id={todo._id} title={todo.title} completed = {todo.completed} time={todo.time}/>        
            </div>
        ));
    }
}

//PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
    return {
      todos: state.todos
    };
  }
  
export default connect(mapStateToProps)(Todos);