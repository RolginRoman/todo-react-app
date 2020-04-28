// То, что вы никогда не должны делать внутри редьюсера:

// Мутировать его аргументы;
// Выполнять побочные эффекты, такие как вызовы API и переходы маршрутизации;
// Вызовите не чистые функции, например, Date.now()или Math.random()

//Редьюсер - чистая функция

import { ADD_TODO, FINISH_TODO } from "../actions/actions";

import { combineReducers } from "redux";

import { Todo } from "../types/Todo.type";

const uuid = require("uuid/v4");

function reducerTodo(state: Todo[] = [], action: any) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: uuid(), complete: false }];
    case FINISH_TODO:
      return state.map((todo: Todo) => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, { complete: true });
        }
        return todo;
      });
    default:
      return state;
  }
}

export default combineReducers({ reducerTodo }); // для объединения нескольких редъюсеров
