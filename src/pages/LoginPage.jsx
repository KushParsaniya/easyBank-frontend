import { useState } from "react";
import doSignIn from "../services/LoginService";

function LoginPage() {
    
    localStorage.clear();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    function handleSignIn() {
        const data = doSignIn(email, password);
        console.log(data);
    }

    return (
        <div className="login-container">
            <div className="login-form">
                <h1>Login</h1>
                <br />
                <div className="form-group">
                    <input
                        type="email"
                        value={email}
                        className="form-control"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        value={password}
                        className="form-control"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="text-center">
                    <button className="btn btn-primary mb-3" onClick={handleSignIn}>
                        Sign In
                    </button>
                    <h6 className="mb-2">Don't Have Account</h6>
                    {/* <button className="btn btn-primary" onClick={navToSignUp}>
                        Sign Up
                    </button> */}
                </div>
            </div>
        </div>
    );
}

export default LoginPage;