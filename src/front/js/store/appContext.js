import React, { createContext, useContext, useState, useEffect } from "react";
const AppContext = createContext();

const AppContextProvider = ({ children }) => {
 const [inputEmail , setInputEmail]= useState()
const [inputContraseña , setInputContraseña]= useState()
        
 
const  store ={
 inputEmail,
 inputContraseña,
 setInputContraseña,
 setInputEmail
}
const actions={


}

  return (
    <AppContext.Provider value={{ store, actions }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);


export default AppContextProvider;

