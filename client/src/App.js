import React, { Fragment } from "react";
import "./App.css";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

const App = () => {
  return (
    <div className="App">
      <Fragment>
        <InputTodo />
        <ListTodos />
      </Fragment>
    </div>
  );
};

export default App;
