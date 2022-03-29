import React, { useContext, useState } from 'react'
import { AuthContex } from '../contexts/AuthContext';

export const Form = () => {
    const {handleToken,toggleAuth}=useContext(AuthContex);
    const [formData,setFormData]=useState({
        email:"",
        password:""
    })
    const {email,password}=formData;
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value,
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        fetch('https://reqres.in/api/login',{
            method:"POST",
            body:JSON.stringify(formData),
            headers:{
                "content-type":"application/json"
            }
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res.token);
            if(res.token!==undefined)
            {
                handleToken(res.token);
                toggleAuth(true);
            }
            else if (res.token===undefined){
                handleToken(null);
                toggleAuth(false);
            }
        })
    }
  return (
    <form onSubmit={handleSubmit}>
        <input name="email" type="text" onChange={handleChange} placeholder="Enter Email" value={email}/>
        <br />
        <input name="password" type="password" onChange={handleChange} placeholder="Enter Password" value={password}/>
        <br />
        <input type="submit" value="submit" />
    </form>
  )
}
