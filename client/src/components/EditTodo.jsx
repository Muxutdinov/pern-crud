import React, { useState } from "react";

const EditTodo = ({ item }) => {
  const [title, setTitle] = useState(item.title);
  const onUpdate = async (e) => {
    e.preventDefault();
    try {
      const body = { title };
      const res = await fetch(`http://localhost:4000/api/perncrud/${item.id}`, {
        method: "PUT",
        headers: { "Content-type": "aplication/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#id${item.id}`}
      >
        Update
      </button>

      <div className="modal" id={`id${item.id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit todo</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                value={title}
                className="form-control"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-bs-dismiss="modal"
                onClick={(e) => onUpdate(e)}
              >
                Update
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTodo;
