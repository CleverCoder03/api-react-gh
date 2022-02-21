import React, { useState, useEffect } from "react";
import "./GetMethod.css";
import Axios from "axios";

function GetMethod() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    Axios.get("https://fakerestapi.azurewebsites.net/api/v1/Books")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <div className="Get_Method">
      <h1 class="h1 text-primary text-center font-weight-bold">GET Method</h1>
      <div id="navbar" className="container-sm">
        <div>
          <button
            type="button"
            class="btn btn-success m-3"
            onClick={() => {
              setShow(true);
            }}
          >
            Show Data
          </button>
          <button
            type="button"
            class="btn btn-danger m-3"
            onClick={() => {
              setShow(false);
            }}
          >
            Clear Data
          </button>
        </div>
        <div>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="text/number"
              placeholder="Search by ID, Title"
              aria-label="Search"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
          </form>
        </div>
      </div>
      <div className="container">
      {show
          ? user
              .filter((userData) => {
                if (searchTerm === "") {
                  return userData;
                } else if (
                  userData.title
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return userData;
                }
              })
              .map((userData) => (
                <table class="table">
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
                      <td>{userData.id}</td>
                      <td>{userData.title}</td>
                      <td>{userData.description}</td>
                      <td>{userData.pageCount}</td>
                    </tr>
                  </tbody>
                </table>
              ))
          : null}
      </div>
    </div>
  );
}

export default GetMethod;
