import React, { Component } from 'react'
import { resetTodos } from '../actions/TodoAction'
import { addTodo } from '../actions/TodoAction'
import { connect } from 'react-redux';
import uuid from 'uuid';

//Input bar class
class AddTodo extends Component {

    onSubmit = (e) => {
        if(this.refs.todo.value){
        this.props.addTodo(this.refs.todo.value);
        this.refs.todo.value = ""
        }
    }

    clearTodos = (e)=> {
        this.props.resetTodos()
    }

    render() {
        return (
            <div>
                <input type="text" ref="todo" placeholder="Add task..." 
                 onKeyPress={event => {
                    if (event.key === 'Enter') {
                      this.onSubmit()
                    }
                  }}/>
                <button onClick = {this.onSubmit}>Submit</button>
                <button onClick = {this.clearTodos}>Clear Todos</button>
                <br></br>
                <br></br>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { todos: state.todos }
}

export default connect(mapStateToProps, { resetTodos, addTodo })(AddTodo);
