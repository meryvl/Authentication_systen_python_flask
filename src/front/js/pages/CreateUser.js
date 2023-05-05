import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";




const CreateUser = () => {


	
        const [inputUser , setInputUser]= useState([])
        const [inputContraseña , setInputContraseña]= useState([])
        const [inputEmail , setInputEmail] = useState([])
        const [inputLastName, setInputLastName] = useState([])
        const [inputNamePerfil , setInputNamePerfil]=useState([])
        const [user , setUser] = useState([])
       
    
        
        
         
        const hanledCreateNewUser=(e)=>{
          e.preventDefault()
        const newUser ={
            Name: inputNamePerfil,
            Last_Name : inputLastName,
            email: inputEmail,
            userName: inputUser,
            contraseña: inputContraseña,
            urlfoto: " https://concepto.de/wp-content/uploads/2018/10/bosque2-e1539893598295.jpg"
        }
            setUser([...user, newUser])
            console.log(newUser)
           
        
          }
return (

<div className="bodyPage mx-5">
       
    <form className="FormCreateUser">
        <div className="mb-3">
            <h2 className="">Create User</h2>
        </div>
        
        <div className=" mb-3">  
            <label className="form-label">Name </label>
            <input type="text" className="form-control" value={inputNamePerfil} onChange={(e)=>setInputNamePerfil(e.target.value)}  />
        </div>
        <div className=" mb-3">  
            <label className="form-label">Last Name </label>
            <input type="text" className="form-control" value={inputLastName} onChange={(e)=>setInputLastName(e.target.value)}  />
        </div>

       


        <div className=" mb-3">  
            <label className="form-label">User Name</label>
            <input type="text" className="form-control" value={inputUser} onChange={(e)=>setInputUser(e.target.value)}  />
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