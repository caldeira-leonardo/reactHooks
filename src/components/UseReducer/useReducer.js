import { useReducer, useState } from "react";
import Todo from "./todo";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
};
function reducer(todos, action) {
  // é muito bom para utilizar como um handle, ao invez de criar um handle pra cada coisa
  // colocamos dentro de um reducer cada uma das ações do componente e assim podemos atualiza-lo
  // de uma maneira direta e mais intuitiva
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

export default function UseReducerComponent() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState();

  function handleSubmit(e) {
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
    e.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </>
  );
}
