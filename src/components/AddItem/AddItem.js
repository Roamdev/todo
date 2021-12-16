import React, { Component } from 'react';

import './AddItem.scss'

export default class AddItem extends Component {

    state = {
        label: this.props.todos.label
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddItem(this.state.label);
        this.setState({
            label: ''
        })
    }

    render() {
        return ( <
            form className = "add-item"
            onSubmit = { this.onSubmit } >

            <
            input type = 'text'
            className = 'add-item--input form-control search-input'
            onChange = { this.onLabelChange }
            placeholder = 'What needs to be done'
            value = { this.state.label }
            />

            <
            button className = 'btn btn-outline-secondary' >
            Add Todo <
            /button> <
            /form>
        )
    }
}