import { cleanup } from "@testing-library/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Color from "../HOC/Color";

function Home() {
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/todo');
        }, 3000)

        return () => clearTimeout(timer);
    },[navigate])
    
    return (
        <div>
            Hello World from home
        </div>
    )
}

export default Color(Home)
// export default Home;