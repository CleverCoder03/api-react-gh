import React, { useState } from "react";
import Axios from "axios";

function PostMethod() {
  const [title, setTitle] = useState("");
  const [userId, setuserId] = useState("");
  const [completed, setCompleted] = useState("");

  const bookData = (e) => {
    e.preventDefault();
    Axios.post("https://jsonplaceholder.typicode.com/todos/", [{ 
        title, 
        userId, 
        completed
      }]) 
    .then(response => console.log("posting", response.data))
    .catch((err)=>{alert(err)})

  }
  return (
    <div>
      <h1 className="h1 text-primary text-center font-weight-bold my-5">
        POST Method
      </h1>
      <div className="container d-flex align-items-center justify-content-center">
        <div className="container d-flex align-items-center justify-content-center">
          <button onClick={bookData} className="btn btn-primary">
            Primary
          </button>
        </div>
        <div className="container d-flex align-items-center justify-content-left flex-column my-5">
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input value={title} className="form-control" onChange={(e)=>{ setTitle(e.target.value) }} />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <input value={userId} className="form-control" onChange={(e)=>{ setuserId(e.target.value) }} />
            </div>
            <div className="mb-3">
              <label className="form-label">Page Count</label>
              <input value={completed} className="form-control" onChange={(e)=>{ setCompleted(e.target.value) }} />
            </div>
        </div>
      </div>
    </div>
  );
}

export default PostMethod;
