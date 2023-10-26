import React from "react";
import {Button} from 'components/UI'
import {tambah} from 'components/Utils'

const Landing = (props) => {
  const test = () => {
    console.log(tambah(1, 1))
  }
  
  const goto = () => {
    const { history } = props
    history.push('/safora')
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header">
          Docs
          <div className="Turborepo">Safora Example Landing</div>
        </h1>
        <div>
          <Button onClick={test}>Safora dimention</Button>
          <Button onClick={goto}>page detail safora</Button>
        </div>
      </header>
    </div>
  )
}

export default Landing;
