
import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from './AddComponent'
/*
    JSX return block
*/ 
class MyComponent extends React.Component{

    state = {
        arrayJobs:[
            {id: '1', title: 'dev lor', salary: '500'},
            {id: '2', title: 'tester', salary: '200'},
            {id: '3', title: 'prject manager', salary: '1000'}
        ]
    }
   
    addNewJob = (job) => {
        this.setState({
            arrayJobs: [...this.state.arrayJobs, job]
        })
    }

    deleteAJob = (job) => {
        let currentJobs = this.state.arrayJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrayJobs: currentJobs
        })
    }
    render(){
        return (
            <>
                <AddComponent 
                    addNewJob = {this.addNewJob}
                />
                    
                <ChildComponent
                    arrayJobs = {this.state.arrayJobs}
                    deleteAJob = {this.deleteAJob}
                />
            </>            
        )
    }
}

export default MyComponent;