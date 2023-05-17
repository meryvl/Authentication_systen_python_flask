import React, { useState, useEffect, useContext } from "react";
import { useAppContext } from "../store/appContext";
import { useNavigate } from "react-router-dom";


const Login = () => {
const {store , actions } = useAppContext();

const {
 inputEmail,
 inputContraseña,
 setInputContraseña,
 setInputEmail,
 setUser
}= store

const {
  log,
 
} =actions 
        
const navigate = useNavigate();

const handleSubmitLogIn = (e , email , password) => {
  e.preventDefault();

  return (    
    log(email, password)
  .then((data) => {
    setUser({token: data.token, user: data.user});
  }));

};




const handleSubmit=(e , email , contraseña)=>{
  e.preventDefault()  
  log(email , contraseña)
 
  handleSubmitLogIn(e, email , password)
  .then(() => {navigate("/protected")})
 
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
              <button type="submit" className="btn btn-primary px-3 " onClick={(e)=>{handleSubmit(e, inputEmail, inputContraseña)} }>Enviar</button>
            </div>
          </form>
        </div>
        
          </div>
        

    )


}


export default Login;