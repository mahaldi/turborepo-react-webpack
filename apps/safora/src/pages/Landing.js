import React from "react";
import {Button} from 'components/UI'
import {tambah} from 'components/Utils'

function Landing() {
  const test = () => {
    console.log(tambah(1, 1))
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header">
          Docs
          <div className="Turborepo">Safora Example asdasd</div>
        </h1>
        <div>
          <Button onClick={test}>Safora dimention</Button>
        </div>
      </header>
    </div>
  )
}

export default Landing;
