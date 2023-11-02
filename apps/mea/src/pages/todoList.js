import React, {useEffect, useState} from 'react';
import { Todo } from './todo';
import { createStore } from 'redux';
import { AddTodo as AddTodoComponent } from './addTodo';
import { TodoReducer } from '../store/todoReducer';
import { GlobalStore } from 'redux-micro-frontend';
import { AddTodo, RemoveTodo } from '../store/todo.action';

const globalStore = GlobalStore.Get(true);
export const TodoList = () => {
    const [globalCounter, setGlobalCounter] = useState(0)
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const todoStore = createStore(TodoReducer)
        globalStore.RegisterStore("TodoApp", todoStore, [GlobalStore.AllowAll]);

        try {
            globalStore.SubscribeToPartnerState("TodoApp", "CounterApp", counterChanged)
        }
        catch (error) { 
            console.log('massuk err', error)
            //Since
        }
        globalStore.Subscribe("TodoApp", stateChanged);
    }, [])

    const addTodo = (description) => {
        globalStore.DispatchAction("TodoApp", AddTodo(description));
    }

    const removeTodo = (todoId) => {
        globalStore.DispatchAction("TodoApp", RemoveTodo(todoId));
    }

    const counterChanged = (counterState) => {
        setGlobalCounter(counterState.globalCounter)
    }

    const stateChanged = (todoState) => {
        setTodos(todoState)
    }
    return (
        <div>
            <AddTodoComponent addTodo={addTodo}></AddTodoComponent>
            <h2>Todos</h2>
            <ul>
                {todos.map(todo => {
                    return (
                        <li key={todo}>
                            <Todo id={todo.id} description={todo.description} removeTodo={removeTodo}/>
                        </li>
                    )
                })}
            </ul>
            <div>
                Global Counter: {globalCounter}
            </div>
        </div>
    )
}

// export class TodoList extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             todos: [],
//             globalCounter: 0
//         };

//         this.addTodo = this.addTodo.bind(this);
//         this.removeTodo = this.removeTodo.bind(this);
//         this.counterChanged = this.counterChanged.bind(this);
//         this.stateChanged = this.stateChanged.bind(this);

//         this.globalStore = GlobalStore.Get();
//         this.store = createStore(TodoReducer);
//         this.globalStore.RegisterStore("TodoApp", this.store, [GlobalStore.AllowAll]);
        
//         try {
//             this.globalStore.SubscribeToPartnerState("TodoApp", "CounterApp", this.counterChanged)
//         }
//         catch (error) { 
//             //Since
//         }
//         this.globalStore.Subscribe("TodoApp", this.stateChanged);
//     }

//     addTodo(description) {
//         this.globalStore.DispatchAction("TodoApp", AddTodo(description));
//     }

//     removeTodo(todoId) {
//         this.globalStore.DispatchAction("TodoApp", RemoveTodo(todoId));
//     }

//     counterChanged(counterState) {
//         this.setState({
//             globalCounter: counterState.globalCounter
//         });
//     }

//     stateChanged(todoState) {
//         this.setState({
//             todos: todoState
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <AddTodoComponent addTodo={this.addTodo}></AddTodoComponent>
//                 <h2>Todos</h2>
//                 <ul>
//                     {this.state.todos.map(todo => {
//                         return (
//                             <li key={todo}>
//                                 <Todo id={todo.id} description={todo.description} removeTodo={this.removeTodo}/>
//                             </li>
//                         )
//                     })}
//                 </ul>
//                 <div>
//                     Global Counter: {this.state.globalCounter}
//                 </div>
//             </div>
//         )
//     }
// }