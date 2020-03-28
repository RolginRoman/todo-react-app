import React from 'react';
import './App.css';
import Todo from "./todo/todo";
import {Task} from "./model/todo.model";

interface AppState {
    currentTasks: Task[];
    done: Task[];
}

export class App extends React.Component<any, AppState> {

    // @ts-ignore
    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
        this.check = this.check.bind(this);
        this.state = {
            currentTasks: [],
            done: [],
        }
    }

    render(): React.ReactNode {
        return (
            <div className="App">
                <Todo add={this.add} check={this.check} currentTasks={this.state.currentTasks}
                      done={this.state.done}></Todo>
            </div>
        );
    }

    public add(task: Task): void {
        this.setState({
            currentTasks: [...this.state.currentTasks, task]
        })
    }

    public check(task: Task): void {
        this.setState({
            currentTasks: this.state.currentTasks.filter(current => current.id !== task.id),
            done: [...this.state.done, task]
        })
    }
}

export default App;
