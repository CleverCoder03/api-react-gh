import React, { useState, useEffect } from "react";
import "./Component.css";
import Axios from "axios";

function GetMethod() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [user, setUser] = useState([]);
  const [num, setNum] = useState("");
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pageCount, setPageCount] = useState("");

  useEffect(() => {
    Axios.get("https://fakerestapi.azurewebsites.net/api/v1/Books")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  useEffect(() => {
    Axios.get(`https://fakerestapi.azurewebsites.net/api/v1/Books/${num}`)
      .then((res) => {
        setId(res.data.id);
        setTitle(res.data.title);
        setDescription(res.data.description);
        setPageCount(res.data.pageCount);
      })
      .catch((err) => {
        alert(err);
      });
  }, [num]);

  return (
    <div className="Get_Method">
      <h1 className="h1 text-primary text-center font-weight-bold">GET Method</h1>
      <div id="navbar" className="container-sm">
        <div>
          <button
            type="button"
            className="btn btn-success m-3"
            onClick={() => {
              setShow(true);
              setShow2(false);
            }}
          >
            Show All Data
          </button>
          <button
            type="button"
            className="btn btn-danger m-3"
            onClick={() => {
              setShow(false);
              setShow2(false);
            }}
          >
            Clear All Data
          </button>
        </div>
        <div>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="number"
              placeholder="Search by ID"
              aria-label="Search"
              onChange={(e) => {
                setShow(false);
                setShow2(true);
                setNum(e.target.value);
              }}
            />
          </form>
        </div>
      </div>
      <div id="getMethodBox" className="container">
        {show
          ? user.map((userData) => (
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Page Count</th>
                  </tr>
                </thead>

                <tbody className="animationOnLoad">
                  <tr key={userData.id}>
                    <td>{userData.id || id}</td>
                    <td>{userData.title || title}</td>
                    <td>{userData.description || description}</td>
                    <td>{userData.pageCount || pageCount}</td>
                  </tr>
                </tbody>
              </table>
            ))
          : null}
        {show2 ? (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Page Count</th>
              </tr>
            </thead>

            <tbody className="animationOnLoad">
              <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>{description}</td>
                <td>{pageCount}</td>
              </tr>
            </tbody>
          </table>
        ) : null}
      </div>
    </div>
  );
}

export default GetMethod;