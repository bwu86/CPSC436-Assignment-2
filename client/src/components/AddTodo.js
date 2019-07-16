import React, { Component } from 'react'
import { resetTodos } from '../actions/TodoAction'
import { addTodo } from '../actions/TodoAction'
import { connect } from 'react-redux';

//Input bar class
class AddTodo extends Component {

    onSubmit = (e) => {
        if(this.refs.todo.value){
            console.log(this.refs.todo.value)
            let newItem = {
                title: this.refs.todo.value,
                completed: false,
                time: new Date(),
            }
            console.log(newItem)
            this.props.addTodoRequest(newItem);
            this.refs.todo.value = null;
        }

    }

    clearTodos = (e)=> {
        this.props.resetTodos();
        this.props.clearTodoRequest();
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
