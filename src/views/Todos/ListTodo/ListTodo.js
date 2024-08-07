import React from "react";
import './ListTodo.scss'
import AddTodo from "./AddTodo";
import { ToastContainer, toast } from 'react-toastify';

class ListTodo extends React.Component {
    state = {
        ListTodos: [
            {id: 'todo1', title: 'Doing Homework'},
            {id: 'todo2', title: 'Learning React'},
            {id: 'todo3', title: '学汉语'},
        ],
        editTodo: {}
    }
    addNewTodo = (todo) => {
        this.setState({
            ListTodos: [...this.state.ListTodos, todo]
        })
        toast.success("Easy peasy, lemon squeezy!")
    }

    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.ListTodos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id);
        this.setState({
            ListTodos: currentTodos
        })
        toast.success("Deteted Successfully!")
    }

    handleEditTodo = (todo) => {
        let {editTodo, ListTodos} = this.state;
        let isEmptyObject = Object.keys(editTodo).length === 0;

        //save
        if(!isEmptyObject && editTodo.id === todo.id){
            let ListTodosCopy = [...ListTodos];
            let objIndex = ListTodosCopy.findIndex(item => item.id === todo.id);
            ListTodosCopy[objIndex].title = editTodo.title;

            this.setState({
                ListTodos: ListTodosCopy,
                editTodo: {}
            })
            toast.success("Edited Successfully!")
            return;
        }

        this.setState({
            editTodo: todo
        })
    }
    handleOnchangeEditTodo = (event) => {
        let editTodoCopy = {...this.state.editTodo};
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }
    render(){
        let {ListTodos, editTodo} = this.state;
        // let ListTodos = this.state.ListTodos
        let isEmptyObject = Object.keys(editTodo).length === 0;
        console.log('>>> check empty object: ', isEmptyObject);
        return(
            <>
                <p>
                    Sim peo to do app
                </p>
                <div className="List-todo-container">
                    <AddTodo 
                        addNewTodo = {this.addNewTodo}
                    />
                    <div className="List-todo-contain">
                        {ListTodos && ListTodos.length > 0 && ListTodos.map((item, index) => {
                            return(
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObject ?
                                        <span> {index + 1} - {item.title} </span>
                                        :
                                        <>
                                            {editTodo.id === item.id ?
                                                <span>
                                                    {index + 1} - 
                                                    <input value={editTodo.title} 
                                                        onChange={(event) => this.handleOnchangeEditTodo(event)}
                                                    />   
                                                </span>
                                                :
                                                <span>
                                                    {index + 1} - {item.title} 
                                                </span>
                                            }
                                        </>
                                        
                                    } 
                                    <button className="edit" onClick={() => this.handleEditTodo(item)}>
                                        {!isEmptyObject && editTodo.id === item.id ? 'Save' : 'Edit'}
                                    </button>
                                    <button className="delete"
                                        onClick={() => this.handleDeleteTodo(item)}
                                    
                                    >Delete</button>
                                </div>
                            )
                        }) }
                        
                    </div>
                </div>
            </>
        )
    }
}

export default ListTodo; 