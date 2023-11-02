import React, {useEffect, useState} from 'react';
import { Counter } from './counter';
import { GlobalStore } from 'redux-micro-frontend';
import { CounterReducer } from '../store/counterReducer';
import { IncrementLocalCounter, DecrementLocalCounter } from '../store/local.actions';
import { IncrementGlobalCounter, DecrementGlobalCounter } from '../store/global.actions';

const globalStore = GlobalStore.Get(false);
export const AppCount = () => {

    const [globalCounter, setGlobalCounter] = useState(0)
    const [localCounter, setLocalCounter] = useState(0)
    const [todo, setTodo] = useState(0)

    useEffect(() => {
        globalStore.CreateStore("CounterApp", CounterReducer, []);
        globalStore.RegisterGlobalActions("CounterApp", ["INCREMENT_GLOBAL", "DECREMENT_GLOBAL", "ADD_TODO", "REMOVE_TODO"]);
        globalStore.SubscribeToGlobalState("CounterApp", updateState)
    },[])

    const updateState = (globalState) => {
        setGlobalCounter(globalState.CounterApp.globalCounter)
        setLocalCounter(globalState.CounterApp.local)
        setTodo(globalState.CounterApp.todo)
    }

    const incrementLocalCounter = () => {
        globalStore.DispatchAction("CounterApp", IncrementLocalCounter());
    }

    const decrementLocalCounter = () => {
        globalStore.DispatchAction("CounterApp", DecrementLocalCounter());
    }

    const incrementGlobalCounter = () => {
        globalStore.DispatchAction("CounterApp", IncrementGlobalCounter());
    }

    const decrementGlobalCounter = () => {
        globalStore.DispatchAction("CounterApp", DecrementGlobalCounter());
    }
    return (
        <div>
            <Counter count={globalCounter} header="Global Counter" increment={incrementGlobalCounter} decrement={decrementGlobalCounter}></Counter>
            <Counter count={localCounter} header="Local Counter" increment={incrementLocalCounter} decrement={decrementLocalCounter}></Counter>
            <h2>
                Todo Counter : {todo}
            </h2>
        </div>
    )
}