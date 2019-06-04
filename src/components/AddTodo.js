import React, { Component } from 'react'
import { resetTodos } from '../actions/TodoAction'
import { addTodo } from '../actions/TodoAction'
import { connect } from 'react-redux';

class AddTodo extends Component {

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.refs.todo.value);
    }

    clearTodos = (e)=> {
        this.props.resetTodos()
    }

    render() {
        return (
            <div>
                <input type="text" ref="todo" placeholder="Add task..."/>
                <button onClick = {this.onSubmit}>Submit</button>
                <button onClick = {this.clearTodos}>Clear Todos</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { todos: state.todos }
}

export default connect(mapStateToProps, { resetTodos, addTodo })(AddTodo);
