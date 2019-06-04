import React, { Component } from 'react'
import { connect } from 'react-redux';
import { toggleTodo } from '../actions/TodoAction' 
import { removeTodo } from '../actions/TodoAction' 

class TodoItem extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.completed ? 
            'line-through' : 'none'
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.actions.removeTodo(this.props.key);
    }

    onCheck = () => {
        this.props.actions.toggleTodo(this.props.key);        
    }

    render() {
        console.log(this.props)
        return(
            <div style={this.getStyle()}>
                <p>
                    <input type = "checkbox" onChange={this.onCheck}/> {' '}
                    {this.props.title}
                    <button onClick={this.onSubmit} style = {buttonStyle}>x</button>
                </p>
            </div>
        );
    }
}

const buttonStyle = {
    background: "#ff0000",
    color: "#fff",
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default connect()(TodoItem);
