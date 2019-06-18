import React, { Component } from 'react'
import Detail from '../Detail'
import { connect } from 'react-redux';

class TodoItem extends Component {

    state = {
        seeDate : false
    }

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            position:'center',
            marginLeft:'auto',
            marginRight:'auto',
            width : '80%',
            borderBottom: '1px #ccc dotted',
            borderRadius : '10px',
            fontFamily: 'font-family : Arial, Helvetica, sans-serif',
            textDecoration: this.props.completed ? 
            'line-through' : 'none'
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.props)
        this.props.removeTodoRequest(this.props.id)
    }

    onCheck = () => {
        this.props.toggleTodo(this.props._id);
        this.forceUpdate()    
    }

    toggleDate = () => {
        this.setState({
            seeDate: !this.state.seeDate
        })
    }

    render() {
        console.log(this.props.time)
        return(
            <div style={this.getStyle()}>
                <p style = {pStyle}>
                    {/* <input type = "checkbox" onChange={this.onCheck}/> {' '} */}
                    {this.props.title}
                    {/*Add detailed view here!*/}
                    <button onClick={this.onSubmit} style = {buttonStyle}>x</button>
                    <button style={{float: 'right'}} onClick={this.toggleDate}> See more... </button>
                    {this.state.seeDate ? <Detail time={this.props.time.toString()}/> : null}
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

const pStyle = {
    fontSize: '16px',
    fontFamily: 'Arial, Helvetica, sans-serif'
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTodo: (id) => { dispatch ({type: 'TOGGLE_TODO', id:id})},
        removeTodo: (id) => { dispatch ({type: 'REMOVE_TODO', id:id})}
    }
}

export default connect(null, mapDispatchToProps)(TodoItem);
