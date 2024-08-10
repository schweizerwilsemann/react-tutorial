import { cleanup } from "@testing-library/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Color from "../HOC/Color";
import image from '../../assets/images/GQhT_kmbEAADsew.jpg';
import { connect } from "react-redux";
import { type } from "@testing-library/user-event/dist/type";
import './Demo.scss'

function Home(props) {
    const navigate = useNavigate();
    console.log(">>> check props: ", props.dataRedux);
    const listUsers = props.dataRedux;
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         navigate('/todo');
    //     }, 3000)

    //     return () => clearTimeout(timer);
    // },[navigate])
    const handleDeleteUser = (user) => {
        console.log(">>>> delete", user);
        props.deleteUserRedux(user);
    }
    const handleCreateUser = () => {
        props.addUserRedux();
    }
    
    return (
        <>
            <div>
                Hello World from home
            </div>
            <img src= {image} alt="" className="image" />
            <div>
                {listUsers && listUsers.length > 0 && 
                    listUsers.map((item, index) => {
                        return(
                            <div key={item.id}>
                                {index + 1} - {item.name} 
                                &nbsp; <span className="delele" onClick={()=>handleDeleteUser(item)} >x</span>
                            </div>
                        )
                    })
                }
                <button onClick={() => handleCreateUser()}>Add New</button>
            </div>
        </>
        
    )
}


const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({
            type: 'DELETE_USER',
            payload: userDelete
        }),
        addUserRedux: () => dispatch({
            type: 'CREATE_USER'
        })
    }       
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
// export default Home;

