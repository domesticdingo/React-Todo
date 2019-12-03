import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            newItem: '',
            id: Date.now(),
            completed: false
        };
    }

    handleChanges = e => {
        this.setState({ newItem: e.target.value })
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.newItem);
        this.setState({
            newItem: '',
        });
    };

    render() {
        return (
            <Form onSubmit = {this.handleSubmit}>
                <FormGroup>
                    <Label for="todo">New Task:</Label>
                    <Input 
                        type="text"
                        name="todo"
                        value={this.state.newItem}
                        onChange={this.handleChanges}
                        placeholder="To-Do"
                    />
                </FormGroup>

                <Button type="submit">Add To-Do</Button>
                
                <Button>Clear completed</Button>
            </Form>
        )
    }
}

export default TodoForm;