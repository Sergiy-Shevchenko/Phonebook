import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage } from "../pages/HomePage";
import { Phonebook } from "../pages/PhonebookPage";
import { Login } from "../pages/LoginPage";
import { Register } from "../pages/RegistrationPage";

export const App = () => {
  return (
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
