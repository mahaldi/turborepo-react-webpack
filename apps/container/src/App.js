import React from "react";
// import {Button} from 'components/ComponentsApp'
// import { Link } from "ui";
// import './App.css';
import {Button} from 'components/ComponentsApp'

function Test() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header">
          Docs
          <div className="Turborepo">Container Example test</div>
        </h1>
        <div>
          <Button>button other dimention</Button>
          {/* <Link className="App-link" href="https://turbo.build/repo">
            Turborepo Docs
          </Link>
          <span> | </span>
          <Link className="App-link" href="https://reactjs.org">
            React Docs
          </Link> */}
        </div>
      </header>
    </div>
  )
}

export default Test;
