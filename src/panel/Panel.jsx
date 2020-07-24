import React from 'react';

export default function Panel(props){

    const {user,setUser} = props;
    return (
        <h1 style={{color:'black'}}>Paneline Hoşgeldin.. {user.username}</h1>
    );
}