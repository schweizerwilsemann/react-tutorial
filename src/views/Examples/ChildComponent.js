
import React from "react";

/*
    JSX return block
*/ 
class ChildComponent extends React.Component{

    state = {
        firstName: '',
        lastName: ''
    }
    handleChangeFirstName = (event) =>{
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangeLastName = (event) =>{
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault(event)
        alert('click')
        console.log('>>> Check data input: ', this.state)
    }
    render() {
        console.log('>>> call render: ', this.state)
        return(
            <>
                <div> Child Component: {this.props.name} </div>
            </>
        )
    }
}

export default ChildComponent;