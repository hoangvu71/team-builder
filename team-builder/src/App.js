import React, {useState} from 'react';
import logo from './logo.svg';
import Form from "./components/Form"
import './App.css';

function App() {
  const [team ,setTeam] = useState([]);
  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form setTeam={setTeam}/>
      <div>
        {team.map((ele) => <div><div>Name: {ele.name}</div><div>Email: {ele.email}</div><div>Role: {ele.role}</div></div> )}
      </div>
    </div>
  );
}

export default App;
