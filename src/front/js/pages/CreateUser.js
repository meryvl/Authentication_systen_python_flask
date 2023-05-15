import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";




const CreateUser = () => {


	
  
        const [inputContraseña , setInputContraseña]= useState([])
        const [inputEmail , setInputEmail] = useState([])
        const [user , setUser] = useState([])
       
        const getUser =()=>{
          return(
          fetch('https://3001-meryvl-authenticationsy-xqz8br0syug.ws-eu97.gitpod.io/users/')
          .then((res) => res.json())
          .then((res) =>{
            console.log("Perfect!!",res)
                  setUser(res)
          })
          .catch(eror =>console.log(eror))
        )
      }
      
    
    
    
      const postfetch=(newUser)=>{
      console.log(newUser)
      return(
      fetch('https://3001-meryvl-authenticationsy-xqz8br0syug.ws-eu97.gitpod.io/user',{
              method:'POST',
              body:JSON.stringify(newUser),
              headers:{
                  "Content-Type": "application/json",
              }
          })
      .then(() =>{
        getUser()
              
      })
      .catch(eror =>console.log(eror)))
    }
        
        
         
        const hanledCreateNewUser=(e)=>{
          e.preventDefault()
        const newUser ={
            email: inputEmail,
            contraseña: inputContraseña,
        }
        postfetch([...user, newUser])
            console.log(newUser)
           
        
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
              <button type="submit" className="btn btn-primary px-3 " onClick={hanledCreateNewUser} >Enviar</button>
            </div>
          
          
          </form>
        </div>
        

    )


}


export default CreateUser;