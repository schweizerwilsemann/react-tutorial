import React from "react";
import MyComponent from "./MyComponent";
class AddComponent extends React.Component{
    state = {
        title: '',
        salary: ''
    }
    handleChangeTitle = (event) =>{
        this.setState({
            title: event.target.value
        })
    }
    handleChangeSalary = (event) =>{
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault(event)
        if(!this.state.title || !this.state.salary) {
            alert('Missing required parameters')
            return;
        }
        console.log('>>> Check data input: ', this.state)
        this.props.addNewJob({
            id: Math.floor((Math.random() * 100)),
            title: this.state.title,
            salary: this.state.salary
        })

        this.setState({
            title: '',
            salary: ''
        })
    }
    render(){
        return(
            <form>
                    <label htmlFor="fname">Jobs Title: </label><br/>
                    <input 
                        type="text" 
                        value={this.state.title}
                        onChange={(event) => this.handleChangeTitle(event)}
                    /><br/>
                    <label htmlFor="lname">salary: </label><br/>
                    <input 
                        type="text" 
                        value={this.state.salary}
                        onChange={(event) => this.handleChangeSalary(event)}
                    />
                    <br/><br/>
                    <input type="submit" className="submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form> 
        )
    }
}

export default AddComponent;