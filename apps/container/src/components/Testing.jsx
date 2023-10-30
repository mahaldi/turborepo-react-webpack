import React from "react";
import TestChildren from "./ChildrenPalingDalem.jsx";

const TestingPage = () => {
    return (
        <React.Fragment>
            <div>div 1</div>
            <div>div 2</div>
            <TestChildren />
        </React.Fragment>
    )
}
export default TestingPage;