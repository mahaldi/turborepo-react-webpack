import React from "react";
import {Button} from 'commons/Components'
// import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { Checkpoints } from 'commons/Utils';

const List = props => {
    const {history} = props
    const goto = () => {
        history.push({
					pathname: Checkpoints.opptyDetail.replace(':id', '13123')
				})
    }
    return (
        <div>
            <h1>Page list Mea 2</h1>
            <Button onClick={goto}>ke page safora detail</Button>
            {/* <Link to="/mea/detail">page mea detail</Link> */}
        </div>
    )
}

List.propTypes = {
	history: PropTypes.shape({
        push: PropTypes.func
    }).isRequired,
};
export default List
