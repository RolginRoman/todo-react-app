import React from "react";

import { Todo } from "../types/Todo.type";

interface ListItemProps {
  readonly item: Todo;
  readonly complete: boolean;
  readonly onCheck: (id: string) => void;
}

export function ListItem(props: ListItemProps) {
  const onChangeCheckbox = (event: any) => {
    if (event.target.value && props.onCheck) {
      props.onCheck(props.item.id);
    }
  };

  return (
    <>
      {!props.complete && (
        <input
          type="checkbox"
          className={"checkbox"}
          onChange={onChangeCheckbox}
        />
      )}
      <span className={"list-item__text"} title={props.item.text}>
        {props.item.text}
      </span>
    </>
  );
}
