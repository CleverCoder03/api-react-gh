import React, { useState } from "react";
import "../css/Component.css";
import Axios from "axios";

function DeleteMethod() {
  const [num, setNum] = useState("");
  const response = () => {
    Axios.delete(`https://fakerestapi.azurewebsites.net/api/v1/Books/${num}`).then(res => console.log(res.data)).catch(err => alert(err));
  };
  return (
    <div>
      <h1 className="h1 text-primary text-center font-weight-bold my-5">
        POST Method
      </h1>
      <div className="container d-flex align-items-center justify-content-center flex-column">
          <input
          className="my-5"
            type="number"
            onChange={(e) => {
              setNum(e.target.value);
            }}
          />
          <button onClick={response} className="btn btn-danger">
            DELETE
          </button>
      </div>
    </div>
  );
}

export default DeleteMethod;
