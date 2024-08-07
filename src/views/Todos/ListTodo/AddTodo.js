import React from "react";

class AddTodo extends React.Component{
    state = {
        title: '',

    }
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleAddTodo = () => {
        if(!this.state.title){
            alert('Title cannot be empty');
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 100),
            title: this.state.title
        }
        this.props.addNewTodo(todo);
        this.setState({
            title: ''
        })
    }
    render() {
        let {title} = this.state

        return (
            <div className="Add-todo">
                    <input type="text" value={title}
                        onChange = {(event) => this.handleOnChangeTitle(event)}

                    />
                    <button type="button" className="add" onClick={() => this.handleAddTodo()}>Add</button>
            </div>
        )
    }
}

export default AddTodo;