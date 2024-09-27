import React from 'react';
import styled from 'styled-components';

let TodoDiv = styled.div`
padding: 30px;
background-color: lightblue;
border: 1px solid blue;
border-radius: 15px;
height: auto;
max-width: 200px;
`

const Todo = props => {

    return (
        <TodoDiv>
            <p>{props.item.name}</p>
            <p>Completed? {JSON.stringify(props.item.completed)}</p>
            <button onClick={() => props.toggleItem(props.item.id)}>Toggle completed</button>
        </TodoDiv>
    )
}

export default Todo;