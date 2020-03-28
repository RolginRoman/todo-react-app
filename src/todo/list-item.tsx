import React from "react";
import {Task} from "../model/todo.model";

interface ListItemProps {
    readonly item: Task;
    readonly check?: (task: Task) => void;
}

export function ListItem(props: ListItemProps) {
    const handleCheckbox = (event: any) => {
        if (event.target.value && props.check) {
            props.check(props.item);
        }
    }

    return (
        <div className={'list-item'}>
            {props.check ? <input type='checkbox' className={'checkbox'} onChange={handleCheckbox}/> : null}
            <span className={'list-item__text'} title={props.item.text}>{props.item.text}</span>
        </div>
    )
}
