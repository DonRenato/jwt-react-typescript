import React, { useEffect } from 'react';
import { useHistory, } from 'react-router-dom';




function Home() {
    const history = useHistory();    

    useEffect(()=>{
        const token = localStorage.getItem('token')
        
        if(!token){
        history.push('/login');
        }

     
    },[history])

    ;
    function handleLogout(){
        localStorage.clear();
        history.push('/login');
    }

    return(
        <>
        <h1>BEM VINDO AO SISTEMA</h1>
        
      
        
        <button onClick={handleLogout}>Logout</button>
        </>
    );
}


export default Home;