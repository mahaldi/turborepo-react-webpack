import React, {useContext} from "react";
import {ActionContext, DataContext} from 'components/Context'
import {Button} from 'components/UI'

const TestChildren = () => {

    const dataContext = useContext(DataContext)
    const {name, gender} = dataContext
    const actionContext = useContext(ActionContext)
    return (
        <React.Fragment>
            <div>
                name : {name}, gender: {gender}
            </div>
            <br />
            <Button onClick={actionContext.getData}>call action context</Button>
        </React.Fragment>
    )
}
export default TestChildren;