import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import PasswordInput from "../../components/Input/PasswordInput";
import { validateEmail } from "../../utils/helper";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        
        if (!validateEmail(email)) {
            setError("Please enter a validar email address.")
            return;
        }

        if (!password) {
            setError("Please enter the password.")
            return;
        }

        setError("")

        //Login API call
    };

    return ( 
        <>
            <Navbar />

            <div className="flex items-center justify-center mt-28">
                <div className="w-96 border rounded bg-white px-7 py-10">
                    <form onSubmit={handleLogin}>
                        <h4 className="text-2xl mb-7">Login</h4>

                        <input 
                            type="text" 
                            placeholder="Email" 
                            className="input-box w-full text-sm bg-transparent border-[1.5px] px-5 py-3 rounded mb-4 outline-none" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <PasswordInput 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

                        <button type="submit" className="btn-primary w-full text-sm bg-[#2B85FF] text-white p-2 rounded my-1 hover:bg-blue-600">
                            Login
                        </button>

                        <p className="text-sm text-center mt-4">
                            Not registered yet?{" "}
                            <Link to="/signUp" className="font-medium text-[#2B85FF] underline"> 
                                Create an Account 
                            </Link>                       
                        </p>

                    </form>
                </div>
            </div>
        </>
    );
};

export default Login
//Este código es un componente funcional de React llamado "Login". Este componente simplemente devuelve un elemento <div> que contiene el texto "Login".