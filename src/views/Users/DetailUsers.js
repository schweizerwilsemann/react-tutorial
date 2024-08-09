import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import './Global.scss'


const useRouter = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();
    
    return { navigate, location, params };
};


const DetailUsers = () => {
    const [detailUsers, setDetailUsers] = useState({
        users: {}
    });
    const {navigate, location, params} = useRouter();

    useEffect(() => {
        if(params != null){
            const id = params.id;
            const fetchData = async () => {
                const response = await axios.get(`https://reqres.in/api/users/${id}`);
                setDetailUsers({
                    users: response && response.data && response.data.data ? response.data.data : []
                })
            }
            fetchData();
        }
        
    }, [])
    const {users} = detailUsers;
    let isEmptyObject = Object.keys(users).length === 0;
    const handleBackButton = () => {
        navigate(`/users`)
    }
    return(
        <>  

            <div>User's id: {params.id}</div>
            {!isEmptyObject && 
            <>
                <div>User's Name: {users.first_name} - {users.last_name} </div>
                <div>User's Email: {users.email} </div>
                <div>
                    <img src={users.avatar}></img>
                </div>
                <div> <button type="button" onClick={() => handleBackButton()} >Back</button> </div>

            </>
            }
            
        </>
    )
}

export default DetailUsers;