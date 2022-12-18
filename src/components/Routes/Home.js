import React from 'react';
import About from "./About"
import {Routes,Route,Link,useNavigate} from 'react-router-dom'


const Home = () => {
    const navigate=useNavigate()
    const goBack=()=>{
        navigate(-1,{
            replace:true
        })
    }

    return (
        <div>
            <h2>This is Home.</h2>
            <Link to='about'>About</Link>
            <Routes>
                <Route path="about" element={<About/>}>About</Route>
            </Routes>
            <button onClick={goBack}>Back</button>
        </div>
    );
};

export default Home;