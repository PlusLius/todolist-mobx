import React, { FC } from "react";
import { observer } from "mobx-react";
import { ObservableTodoListStore } from "./store";
import TodoView from "./TodoView.tsx";

type PropsType = {
  store: ObservableTodoListStore;
};

const TodoList: FC<PropsType> = observer((props: PropsType) => {
  const { store } = props;

  function newTodo() {
    const taskName = prompt("输入一个 todo 名称");
    if (taskName) {
      store.addTodo(taskName);
    }
  }
  
  function del(id: string){
    store.removeTodo(id)
  }
  return (
    <>
      <div>
        <button onClick={newTodo}>add todo</button>
        {/* {JSON.stringify(store.todos)} */}
        <ul>
          {store.todos.map((todo) => {
            const { id } = todo;
            return <TodoView key={id} todo={todo} del={del}/>;
          })}
        </ul>
      </div>
    </>
  );
});

export default TodoList;
