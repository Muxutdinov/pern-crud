import React, { useEffect, useState } from "react";
import EditTodo from "./EditTodo";

const ListTodos = () => {
  const [title, setTitle] = useState([]);
  const getData = async () => {
    const res = await fetch("http://localhost:4000/api/perncrud");
    const Data = await res.json();
    setTitle(Data);
  };
  useEffect(() => {
    getData();
  }, []);
  const onDelete = async (id) => {
    const deleteTitle = await fetch(
      `http://localhost:4000/api/perncrud/${id}`,
      {
        method: "DELETE",
      },
      setTitle(title.filter((value) => value.id !== id))
    );
  };
  return (
    <div>
      <table className="table mt-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {title.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>
                  <EditTodo />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => onDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListTodos;
