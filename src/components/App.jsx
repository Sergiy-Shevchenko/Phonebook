import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage } from "./pages/HomePage";
import { Phonebook } from "./pages/PhonebookPage";
import { Login } from "./pages/LoginPage";
import { Registraton } from "./pages/RegistrationPage";

export const App = () => {
  return (
    <div>
      
      <Routes>
       <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="phonebook" element={<Phonebook/>}/>
        
        <Route path="registration" element={<Registraton/>}/>
        <Route path="login" element={<Login/>}/>
       </Route>
      </Routes>
    
    </div>
  );
};
