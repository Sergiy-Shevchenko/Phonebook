import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage } from "../pages/HomePage";
import { Phonebook } from "../pages/PhonebookPage";
import { Login } from "../pages/LoginPage";
import { Register } from "../pages/RegistrationPage";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "redux/ayth/auth-selector";
import { useEffect } from "react";
import { refreshUser } from "redux/ayth/auth-operation";

export const App = () => {
  const dispatch = useDispatch();
  const isRegresing = useSelector(selectIsRefreshing);
  
  useEffect(()=>{
    dispatch(refreshUser())
  }, [dispatch])

  return isRegresing ? ( <b>Refreshing user...</b>) : (
    <div>
      
      <Routes>
       <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="phonebook" element={<Phonebook/>}/>
        
        <Route path="registration" element={<Register/>}/>
        <Route path="login" element={<Login/>}/>
       </Route>
      </Routes>
    
    </div>
  );
};
