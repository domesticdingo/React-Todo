import React from 'react';
import ReactDOM from 'react-dom';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import styled from 'styled-components';

let MainDiv = styled.div`
display: flex;
margin: auto;
flex-direction: column;
align-items: center;
`

const todo = [
  {name: 'Walk the dog', id: 101, completed: false},
  {name: 'Take out trash', id: 102, completed: true}
];

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      todo: todo,
      anotherOne: ''
    };
  }

  addItem = userinput => {
    const newItem = {
      name: userinput,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todo: [...this.state.todo, newItem]
    });
  };

  toggleItem = itemId => {
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item;
        }
      })
    })
  }

  clearList = () => {
    this.setState({
      todo: this.state.todo.filter(todo => !todo.completed)
    })
  }

  render() {
    return (
      <MainDiv>
        <h1>A handy to-do list app!</h1>
        <TodoForm addItem={this.addItem} />
        <TodoList toggleItem={this.toggleItem} todo={this.state.todo} />
        <button onClick={this.clearList}>Clear Completed</button>
      </MainDiv>
    );
  }
}

export default App;
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);