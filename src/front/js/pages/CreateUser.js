import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../store/appContext";



const CreateUser = () => {

const {store , actions } = useAppContext();

const {
user
}= store

        const [inputContraseña , setInputContraseña]= useState([])
        const [inputEmail , setInputEmail] = useState([])
      
       
        const registrarse = async (email, password) => {
          const resp = await fetch(
              `https://3001-meryvl-authenticationsy-xqz8br0syug.ws-eu97.gitpod.io/user`,
              {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email, password}),
              }
          );
        
          if (!resp.ok) throw Error("There was a problem in the login request");
        
          if (resp.status === 401) {
              throw "Invalid credentials";
          } else if (resp.status === 400) {
              throw "Invalid email or password format";
          }
        
          const data = await resp.json();
        
          return data;
        };
        
        
    
    
    

        
         
        const hanledCreateNewUser=(e , email , password)=>{
          e.preventDefault()
          registrarse(email , password)
       
          
           
        
          }
return (

<div className="bodyPage mx-5">
       
    <form>
        <div className="mb-3">
            <h2 className="">Create User</h2>
        </div>
      
          <div className=" mb-3">
            <label for="exampleInputPassword1" className="form-label" >Email</label>
            <input type="text" className="form-control" id="Password1"value={inputEmail} onChange={(e)=>setInputEmail(e.target.value)} />
          </div>

          <div className=" mb-3">
            <label for="exampleInputPassword1" className="form-label" >Contraseña</label>
            <input type="password" className="form-control" id="Password1"value={inputContraseña} onChange={(e)=>setInputContraseña(e.target.value)} />
          </div>

            <div className=" d-flex justify-content-center">
              <button type="submit" className="btn btn-primary px-3 " onClick={(e)=>{hanledCreateNewUser(e ,inputEmail , inputContraseña)}} >Enviar</button>
            </div>
          
          
          </form>
        </div>
        

    )


}


export default CreateUser;