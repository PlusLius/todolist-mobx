import React, { FC } from "react";
import TodoList from './TodoList.tsx'
import store from './store.ts'

const Demo: FC = () => {
  return <>
    <p>TodoList by Mobx</p>
    <TodoList store={store}/>
  </>
};

export default Demo;
