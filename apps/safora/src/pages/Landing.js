import React, {useEffect} from "react";
import {Button} from 'components/UI'
// import {tambah} from 'components/Utils'

const Landing = (props) => {
  const { history, store } = props
  // const test = () => {
  //   console.log(tambah(1, 1))
  // }

  const goto = () => {
    history.push('/safora')
  }

  useEffect(() => {
    if(store)
      console.log('printed on safora service', store.products)
  }, [store])

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header">
          Docs
          <div className="Turborepo">Safora Example Landing test 1</div>
        </h1>
        <div>
          {/* <Button onClick={test}>Safora dimention</Button> */}
          <Button onClick={goto}>page detail safora</Button>
        </div>
      </header>
    </div>
  )
}

export default Landing;
