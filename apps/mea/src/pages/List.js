import React from "react";
import {Button} from 'components/UI'
import { Link } from "react-router-dom";
import {TodoList} from './todoList'
const List = props => {
    const {history} = props
    const goto = () => {
        history.push('/safora')
    }
    return (
        <div>
            <h1>Page list Mea 2</h1>
            <TodoList />
            <Button onClick={goto}>ke page safora detail</Button>
            <Link to="/mea/detail">page mea detail</Link>
        </div>
    )
}
export default List