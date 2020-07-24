import React, { useEffect } from 'react';
import Form from '../../components/Form';
function Login(props){
    
    
    return <div className='container-fluid'>
        <div className='blog-r d-flex align-items-center justify-content-center'>
       <Form setUser={props.setUser} user={props.user}></Form>
        </div>
    </div>
}

export default Login;