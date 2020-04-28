export const ADD_TODO = "ADD_TODO";
export const FINISH_TODO = "FINISH_TODO";

//actions
export function addTodo(text: string) {
  return {
    type: ADD_TODO,
    text,
  };
}

// export boundAddTodo = (text:string) =>

export function finishTodo(id: string) {
  return {
    type: FINISH_TODO,
    id,
  };
}

// dispatch(func)
