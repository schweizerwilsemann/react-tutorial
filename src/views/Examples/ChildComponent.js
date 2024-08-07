
import React from "react";
import './Demo.scss'
/*
    JSX return block
*/ 
class ChildComponent extends React.Component{

    // state = {
    //     firstName: '',
    //     lastName: '',
        
    // }
    // handleChangeFirstName = (event) =>{
    //     this.setState({
    //         firstName: event.target.value
    //     })
    // }
    // handleChangeLastName = (event) =>{
    //     this.setState({
    //         lastName: event.target.value
    //     })
    // }
    // handleSubmit = (event) => {
    //     event.preventDefault(event)
    //     alert('click')
    //     console.log('>>> Check props: ', this.props)
    // }
    state = {
        showJobs : false
    }
    handleShowHide = () => {
        this.setState({
            showJobs : !this.state.showJobs
        })
    }
    handleOnclickDelete = (job) => {
        console.log('>>> handle onclick delete', job);
        this.props.deleteAJob(job);
    }
    render() {
        const {arrayJobs} = this.props;
        const {showJobs} = this.state;
        const check = showJobs === true ? 'showJobs = true' : 'showJobs = false' ; 
        console.log('>>>check condition: ', check);
        return(
            <>
            {!showJobs ?
                <div>
                    <button className="button-show" 
                        onClick={() => this.handleShowHide()}>Show</button>
                </div>
            :
                <>
                <div className="id"> Child Component 
                    {
                        arrayJobs.map((item, id) => {
                            if(item.salary >= 0){
                                return (
                                    <div key={item.id}>
                                        {item.id} - {item.title} - ${item.salary} <></>
                                        <span onClick={() => this.handleOnclickDelete(item)}>x</span>
                                    </div>
                                )
                            }
                            return null;
                        })
                    }
                </div>
                <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
                </>
            }
            </>
        )
    }
}

export default ChildComponent;