// import React, { useEffect, useState } from "react";
// import Axios from "axios";
// import "./App.css";

// function App() {
//   const [num, setNum] = useState();
//   const [reply, setReply] = useState();
//   const [description, setDescription] = useState();
//   const [pagecount, setPagecount] = useState();
//   const [publishdate, setPublishdate] = useState();

//   useEffect(() => {
//     async function getData() {
//       const response = await Axios.get(
//         `https://fakerestapi.azurewebsites.net/api/v1/Books/${num}`
//       );
//       setReply(response.data.title);
//       setDescription(response.data.description);
//       setPagecount(response.data.pageCount);
//       setPublishdate(response.data.publishDate);
//     }
//     getData();
//   }, [num]);

//   // const chechbox = document.inner
//   // const orderButton = () => {

//   // }

//   return (
//     <div className="App">
//       <h1 className="head">
//         Order & Get Random Book Specification to Read and Enjoy!!!
//       </h1>
//       <div className="container_1">
//         <h2 className="head_2">Enter Any No. Between 1 - 100 😉</h2>
//         <input
//           className="inputArea"
//           type="number"
//           onChange={(e) => {
//             setNum(e.target.value);
//           }}
//         />
//       </div>

//       {/* <input type="checkbox" id='show'/> <label htmlFor="show" onClick={()=> { setOrder("Clear") } }>{order}</label> */}
//       <div className="container_2">
//         <h2>Title :</h2> <span>{reply}</span> <br />
//         <h2>Description :</h2> <span>{description}</span> <br />
//         <h2>Page Count :</h2> <span>{pagecount}</span> <br />
//         <h2>Publish Date :</h2> <span>{publishdate}</span> <br />
//       </div>
//     </div>
//   );
// }

// export default App;

import React from 'react'
import GetMethod from './Components/js/GetMethod'
import PostMethod from './Components/js/PostMethod'

function App() {
  return (
    <div className='App'>
      <div id="Get__method">
        <GetMethod />
      </div>
      <div id="Post__method">
        <PostMethod />
      </div>
      <div id="Delete__method">
        {/* <DeleteMethod /> */}
      </div>
    </div>
  )
}

export default App
