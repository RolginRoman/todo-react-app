import React, { useState } from "react";

type Props = {
  addTodo: (text: string) => void;
};

const Input = function (props: Props) {
  const [inputValue, setInputValue] = useState("");
  function onChangeInput(evt: any) {
    setInputValue(evt.target.value);
  }
  function onSubmit() {
    if (inputValue) {
      props.addTodo(inputValue);
      setInputValue("");
    }
  }
  return (
    <div className={"controls"}>
      <form>
        <input
          className={"task-input"}
          value={inputValue}
          type="text"
          placeholder="Type task here"
          onChange={onChangeInput}
          required
        />
        <button className={"create-button"} type="submit" onClick={onSubmit}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Input;
