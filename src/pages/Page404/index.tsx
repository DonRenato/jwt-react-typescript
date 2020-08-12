import React, { useEffect} from 'react';
import { useHistory } from 'react-router-dom';


function NotFound(){
    const history = useHistory();

    useEffect(()=>{
        const token = localStorage.getItem('token')
    
        if(!token){
        history.push('/login');
    }
    },[history]);

    
    return(
        <h1>ERROR 404 - PAGE NOT FOUND</h1>
    );
}


export default NotFound;