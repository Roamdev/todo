import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';

import './TodoList.scss';


const TodoList = ({ todos,
                    onDeleted,
                    onToggleImportant,
                    onToggleDone}) => {
  const elements = todos.map((item) => {
    const {id, ...itemProps} = item;
    return (
      <li className='list-group-item todo-list-item' key = {id}>
        <TodoListItem
          {...itemProps}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
          onDeleted={() => onDeleted(id)}
          />
      </li>
    );
  });
  return (
    <ul className='list-group todo-list'>
      {elements}
    </ul>
  );
};

export default TodoList;