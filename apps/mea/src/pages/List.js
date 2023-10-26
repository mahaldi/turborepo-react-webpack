import React from "react";
import {Button} from 'components/UI'
import { Link } from "react-router-dom";
const List = props => {
    const {history} = props
    const goto = () => {
        history.push('/safora')
    }
    return (
        <div>
            <h1>Page list Mea</h1>
            <Button onClick={goto}>ke page safora detail</Button>
            <Link to="/mea/detail">page mea detail</Link>
        </div>
    )
}
export default List