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
      anotherOne: '',
      completed: false
    };
  }

  addItem = userinput => {
    const newItem = {
      name: userinput,
      id: Date.now()
    }
    this.setState({
      todo: [...this.state.todo, newItem]
    });
  };

  render() {
    return (
      <MainDiv>
        <h1>A handy to-do list app!</h1>
        <TodoForm addItem={this.addItem} />
        <TodoList todo={this.state.todo} />
      </MainDiv>
    );
  }
}

export default App;
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);