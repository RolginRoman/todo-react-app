import React from "react";
import {Task} from "../model/todo.model";
import {ListItem} from "./list-item";

interface TodoListProps {
    readonly items: Task[];
    readonly check?: (task: Task) => void;
}

interface TodoListState {
}

export class TodoList extends React.Component<TodoListProps, TodoListState> {

    constructor(props: TodoListProps) {
        super(props);
    }

    render() {
        return (
            <div className={'list'}>
                <ul>
                    {this.props.items.map(item =>
                        <li key={item.text}>
                            <ListItem item={item} check={this.props.check}/>
                        </li>)}
                </ul>
            </div>
        );
    }
}
