import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import './listUsers.scss'
import { useNavigate, useLocation, useParams } from "react-router-dom";

const useRouter = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();
    
    return { navigate, location, params };
};


const ListUsers = () => {
    const [users, setUsers] = useState({
        listUsers: []
    });
    const {navigate, location, params} = useRouter(); 

    const viewDetailUsers = (user) => {
        navigate(`/users/${user.id}`);

    }
    useEffect(() => {
        // axios.get('https://reqres.in/api/users?page=2')
        //     .then(response => {
        //         console.log(">>> check response: ", response.data.data);
        //     })
        const fetchData = async () =>{
            const response = await axios.get('https://reqres.in/api/users?page=2');
            setUsers({listUsers: response && response.data && response.data.data ? response.data.data : []});
        }
        fetchData();
    }, []);



    return(
        <>
            <div className="list-users-container">
                <div className="title">
                    Fetch all listUsers
                </div> <br/>
                <div className="list-users-content" >
                    {users.listUsers && users.listUsers.length > 0 &&
                        users.listUsers.map((item, index) => {
                            return (
                                <div className="child" key={item.id} 
                                onClick={() => viewDetailUsers(item)} 
                                >
                                    {index + 1} - {item.first_name} {item.last_name}
                                </div>
                            )
                        })
                    
                    }
                </div>
            </div>
        </>       
    )
}
export default ListUsers;