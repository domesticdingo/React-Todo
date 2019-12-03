import React from 'react';
import Todo from './Todo';
import { Button } from 'reactstrap';

const TodoList = props => {

    const clearList = () => {

    }

    return (
        <div className="todo-list">
            {props.todo.map(item => (
                <Todo key={item.id} item={item} />
            ))}
            <Button className="clear-button" onClick={clearList}>
                Clear Completed
            </Button>
        </div>
    )
}

export default TodoList;