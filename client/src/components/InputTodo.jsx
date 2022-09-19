import React, { useState } from "react";

const InputTodo = () => {
  const [title, setTitle] = useState("");
  const Change = (e) => {
    setTitle(e.target.value);
  };
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { title };
      await fetch("http://localhost:4000/api/perncrud", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      setTitle("");
      // window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div>
      <h1 className="mt-5">PERN TODO APP</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          placeholder="Type todo"
          value={title}
          onChange={Change}
        ></input>
        <button
          type="button"
          className="btn btn-success"
          onClick={onSubmitForm}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default InputTodo;
