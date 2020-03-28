import React from 'react';
import {Task} from "../model/todo.model";
import {TodoList} from "./todo-list";
const uuid = require('uuid/v4');

interface TodoProps {
    add: (task: Task) => void;
    check: (task: Task) => void;
    currentTasks: Task[];
    done: Task[];
}

interface TodoState {
    taskText?: string;
}

function id() {
    return uuid();
}

class Todo extends React.Component<TodoProps, TodoState> {
    constructor(props: TodoProps) {
        super(props);
        this.state = {
            taskText: '',
        }
        this.addItem = this.addItem.bind(this);
        this.check = this.check.bind(this);
        this.changeInput = this.changeInput.bind(this);
        this.createItem = this.createItem.bind(this);
    }

    render(): React.ReactNode {
        return (
            <div className={'todo'}>
                <div className={'controls'}>
                    <input className={'task-input'} value={this.state.taskText} type='text' placeholder='Type task here'
                           onChange={this.changeInput} required/>
                    <button className={'create-button'} onClick={this.createItem}>Add</button>
                </div>
                <div className={'dashboard'}>
                    <TodoList check={this.check} items={this.props.currentTasks}/>
                    <TodoList items={this.props.done}/>
                </div>
            </div>
        )
    }

    private addItem(task: Task) {
        this.props.add(task);
    }

    private check(task: Task) {
        this.props.check(task);
    }

    private changeInput(event: any) {
        this.setState({taskText: event.target.value});
    }

    private createItem() {
        if (this.state.taskText === '') {
            alert('please add text');
            return;
        }
        this.addItem({text: this.state.taskText, id: id()});
        this.setState({taskText: ''});
    }
}

export default Todo;
