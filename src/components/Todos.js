import React from 'react';
import TodoItem from './TodoItem';
import { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

class Todos extends Component {
    render(){
        console.log(this.props.todos)
        return this.props.todos!= null && this.props.todos.map((todo) => (
            <div>
                <TodoItem key={todo.key} title={todo.title} completed = {todo.completed}/>        
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