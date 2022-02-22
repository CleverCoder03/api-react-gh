import React, { useState } from "react";
import "./PostMethod.css";
import Axios from "axios";

function PostMethod() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pageCount, setpageCount] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [publishDate, setPublishDate] = useState("");

  const bookData = (e) => {
    e.preventDefault();
    Axios.post("https://fakerestapi.azurewebsites.net/api/v1/Books/", [{ 
        title, 
        description, 
        pageCount, 
        excerpt, 
        publishDate }]) 
    .then(response => console.log("posting", response.data))
    .catch((err)=>{alert(err)})

  }
  return (
    <div>
      <h1 className="h1 text-primary text-center font-weight-bold">
        POST Method
      </h1>
      <div className="container d-flex align-items-center justify-content-center">
        <div className="container d-flex align-items-center justify-content-center">
          <button onClick={bookData} className="btn btn-primary">
            Primary
          </button>
        </div>
        <div className="container d-flex align-items-center justify-content-left flex-column">
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input value={title} className="form-control" onChange={(e)=>{ setTitle(e.target.value) }} />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <input value={description} className="form-control" onChange={(e)=>{ setDescription(e.target.value) }} />
            </div>
            <div className="mb-3">
              <label className="form-label">Page Count</label>
              <input value={pageCount} className="form-control" onChange={(e)=>{ setpageCount(e.target.value) }} />
            </div>
            <div className="mb-3">
              <label className="form-label">Excerpt</label>
              <input value={excerpt} className="form-control" onChange={(e)=>{ setExcerpt(e.target.value) }} />
            </div>
            <div className="mb-3">
              <label className="form-label">Publish Date</label>
              <input type="text" value={publishDate} className="form-control" onChange={(e)=>{ setPublishDate(e.target.value) }} />
            </div>
        </div>
      </div>
    </div>
  );
}

export default PostMethod;
