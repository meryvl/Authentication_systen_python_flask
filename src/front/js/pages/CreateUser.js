import React, { useState, useEffect, useContext } from "react";

import { useAppContext } from "../store/appContext";
import { useNavigate } from "react-router-dom";



const CreateUser = () => {
const navigate = useNavigate();
const {store , actions } = useAppContext();
  const {email , password , setEmail, setPassword}= store;
      
       
    
         
        const hanledCreateNewUser=(e )=>{
          e.preventDefault();
          actions.handleSubmitRegister(e);
      
          navigate("/login")
      
           
        
          }
return (

<div className="bodyPage mx-5">
       
    <form>
        <div className="mb-3">
            <h2 className="">Create User</h2>
        </div>
      
          <div className=" mb-3">
            <label for="exampleInputPassword1" className="form-label" >Email</label>
            <input type="text" className="form-control" id="Password1"value={email} onChange={(e)=>setEmail(e.target.value)} />
          </div>

          <div className=" mb-3">
            <label for="exampleInputPassword1" className="form-label" >Contraseña</label>
            <input type="password" className="form-control" id="Password1"value={password} onChange={(e)=>setPassword(e.target.value)} />
          </div>

            <div className=" d-flex justify-content-center">
              <button type="submit" className="btn btn-primary px-3 " onClick={(e)=>{hanledCreateNewUser(e)}} >Enviar</button>
            </div>
          
          
          </form>
        </div>
        

    )


}


export default CreateUser;