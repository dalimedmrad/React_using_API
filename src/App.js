import React, { useEffect, useState } from "react";
import Userslist from "./UserList";
import  './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>List Of Users</h1>
      <Userslist/>
    </div>
  );
 };
export default App;