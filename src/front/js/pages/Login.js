import React, { useState, useEffect, useContext } from "react";
import { useAppContext } from "../store/appContext";



const Login = () => {
const {store , actions } = useAppContext();

const {
 inputEmail,
 inputContraseña,
 setInputContraseña,
 setInputEmail
}= store
        
        
         
        const login =(e)=>{
          e.preventDefault()
         
          
              
                setInputEmail("")
                setInputContraseña("")
          
        
           
        
          }
return (
<div>
      
        
        <div className="bodyPage mx-5">
           
    <form>
          <div className="mb-3">
    <h2 className="">Login Sesion </h2>
            <label className="form-label">User Name</label>
            <input type="text" className="form-control" value={inputEmail} onChange={(e)=>setInputEmail(e.target.value)}  />
           
          </div>
          <div className=" mb-3">
            <label for="exampleInputPassword1" className="form-label" >Contraseña</label>
            <input type="password" className="form-control" id="Password1"value={inputContraseña} onChange={(e)=>setInputContraseña(e.target.value)} />
          </div>
              <a href="#">I don't have a user</a>
            <div className=" d-flex justify-content-center">
              <button type="submit" className="btn btn-primary px-3 " onClick={login} >Enviar</button>
            </div>
          </form>
        </div>
        
          </div>
        

    )


}


export default Login;