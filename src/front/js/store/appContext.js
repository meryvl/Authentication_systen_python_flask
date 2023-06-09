import React, { createContext, useContext, useState, useEffect } from "react";
const AppContext = createContext();

const AppContextProvider = ({ children }) => {
 const [inputEmail , setInputEmail]= useState()
const [inputContraseña , setInputContraseña]= useState()
const [user , setUser] = useState([])
const [email , setEmail]  = useState()
const [password , setPassword] =useState()
const log = async (email, password) => {
  const resp = await fetch(`https://3001-meryvl-authenticationsy-xqz8br0syug.ws-eu97.gitpod.io/login`, { 
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({ email: email, password: password }) 
  })

  if(!resp.ok) throw Error("There was a problem in the login request")

  if(resp.status === 401){
       throw("Invalid credentials")
  }
  else if(resp.status === 400){
       throw ("Invalid email or password format")
  }
  const data = await resp.json()
  // save your token in the localStorage
 //also you should set your user into the store using the setStore function
  localStorage.setItem("jwt-token", data.token);

  return data
}



const getMyTasks = async (email, password) => {
  // retrieve token form localStorage
  const token = localStorage.getItem('jwt-token');

  const resp = await fetch(`https://3001-meryvl-authenticationsy-xqz8br0syug.ws-eu97.gitpod.io/protected`, {
     method: 'GET',
     headers: { 
       "Content-Type": "application/json",
       "Authorization": 'Bearer '+token // ⬅⬅⬅ authorization token
     } 
  })
  if(!resp.ok){
    throw Error("There was a problem in the login request")
  } 

  else if(resp.status === 403){
      throw Error("Missing or invalid token");
  }
 

  const data = await resp.json();
  console.log("This is the data you requested", data);
  return data

}

const register = async (email, password) => {
  const resp = await fetch(
      `https://3001-meryvl-authenticationsy-xqz8br0syug.ws-eu97.gitpod.io/signup`,
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



const handleSubmitRegister = (e) => {
  e.preventDefault();

  register(email, password);
};



useEffect(() => {

  if (!sessionStorage.getItem("jwt-token")) return

  getMyTasks()
    .then((data) => {
      setUsuario({token: data.token, user: data.user});
    });

},[]);

const handleLogOut = () => {
  sessionStorage.removeItem("jwt-token");
  setUsuario({ token: "", user: "" });
};



const  store ={
 inputEmail,
 inputContraseña,
 setInputContraseña,
 setInputEmail,
 user,
 setUser,
 email,
 password,
 setEmail,
 setPassword
}
const actions={
  getMyTasks,
  log,
  handleSubmitRegister,
  handleLogOut


}

  return (
    <AppContext.Provider value={{ store, actions }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);


export default AppContextProvider;

