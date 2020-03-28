import React from "react";
import {Task} from "../model/todo.model";
import {ListItem} from "./list-item";

interface TodoListProps {
    readonly items: Task[];
    readonly check?: (task: Task) => void;
    readonly header?: string;
    readonly className?: string;
}

interface TodoListState {
}

export class TodoList extends React.Component<TodoListProps, TodoListState> {

    render() {
        return (
            <div className={`list ${this.props.className}`}>
                {this.props.header ? <h2>{this.props.header}</h2> : null}
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
