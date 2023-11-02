import React, {useEffect} from "react";
import {Button} from 'components/UI'
// import {tambah} from 'components/Utils'
import {fetchPosts, commentsSelector, postsSelector, fetchComments} from 'components/Slices'

const Landing = (props) => {
  const { history, store, selector } = props;
  // const test = () => {
  //   console.log(tambah(1, 1))
  // }
  const goto = () => {
    history.push('/safora')
  }
	const {
	  comments,
	  loading: commentsLoading,
	  error: commentsHasErrors,
	} = selector(commentsSelector)
  
	console.log('comments dari landing safora', comments)

  // useEffect(() => {
	// 	dispatch(fetchPosts())
	// }, [dispatch])


	// useEffect(() => {
  //   console.log('dari safora landing')
	// 	dispatch(fetchComments(1))
	// }, [dispatch])

  useEffect(() => {
    if(store)
      console.log('printed on safora service', store.products)
  }, [store])

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header">
          Docs
          <div>comments dari safora length : {comments.length}</div>
          <div className="Turborepo">Safora Example Landing test 2</div>
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
