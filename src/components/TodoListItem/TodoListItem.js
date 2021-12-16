import React,{Component} from 'react';

import './TodoListItem.scss';


export default class TodoListItem extends Component {
  render() {
    const { label,
            onDeleted,
            onToggleImportant,
            onToggleDone,
            important,
            done} = this.props;
    let className = 'todo-list-item';
    if(done) {
      className += ' done';
    };
    if(important) {
      className += ' important'
    }

    return (
      <span className={className}>
        <div
          className='todo-list-item-label'
          onClick={onToggleDone}
          >
          {label}
        </div>
        <div className="todo-list-item--btn-panel">
          <button
            type='button'
            onClick={onDeleted}
            className='btn btn-outline-danger btn-sm'>
            <i className='fa fa-trash-o'></i>
          </button>
          <button
            type='button'
            onClick={onToggleImportant}
            className='btn btn-outline-success btn-sm'>
            <i className='fa fa-exclamation'></i>
          </button>
        </div>
      </span>
    )
  }
};
