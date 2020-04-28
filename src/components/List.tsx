import React from "react";
import ListItem from "../containers/ListItem";

import { Todo } from "../types/Todo.type";

interface TodoListProps {
  readonly todos: Todo[];
  readonly header: string;
  readonly className: string;
  readonly finishList: boolean;
}

export function List(props: TodoListProps) {
  const { todos, header, className, finishList } = props;
  const items = todos.filter((todo) => todo.complete === finishList);

  return (
    <div className={`list ${className}`}>
      <h2>{header}</h2>
      <ul>
        {items.map((item) => (
          <li key={item.text} className={"list-item"}>
            <ListItem item={item} complete={finishList} />
          </li>
        ))}
      </ul>
    </div>
  );
}
