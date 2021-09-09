import React, { useState } from 'react'
import "../auth/Login.css"
import { auth, provider } from "../../firebase";
function Login() {

    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");

    const signIn = () => {
        auth.signInWithPopup(provider).catch((e) => alert(e.message));
    }
    const handleLogin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then ((auth) => {

            if (auth) {
                console.log(auth);
            }
            
        }).catch((e) => alert(e.message));

        setEmail("");
        setPassword("");
    };

    const handleRegister = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then ((auth) => {
            console.log(auth);
        }).catch((e) => alert(e.message))
    }

    return (
        <div className="login">
            <div className="login_container">
                <div className="login_logo">
                    <img src= 'https://i.ibb.co/0qqCGRK/logo-ps.png' alt=""/>
                </div>
                <div className="login_desc">
                    <p>A Place to Solve away your queries to understand better</p>
                </div>
                <div className="login_auth">
                    <div className="login_authOptions">
                        <div className="login_authOption">
                            <img
                                className="login_googleAuth"
                                src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                                alt=""
                            />
                            <p onClick= {signIn}>Continue With Google</p>
                        </div>
                        <div className="login_authOption">
                            <img
                                className="login_googleAuth"
                                src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"
                                alt=""
                            />
                            <p>Continue With Facebook</p>
                        </div>
                        <div className="login_authDesc">
                            <p>
                                <span style={{ color: "blue", cursor: "pointer" }}>
                                Sign Up With Email
                                </span>
                                . By continuing you indicate that you have read and agree to
                                PlacementSaga's
                                <span style={{ color: "blue", cursor: "pointer" }}>
                                 Terms of Service{" "}
                                </span>
                                and{" "}
                                <span style={{ color: "blue", cursor: "pointer" }}>
                                Privacy Policy
                                </span>
                                .
                            </p>
                        </div>
                    </div>
                    <div className="login_emailPass">
                        <div className="login_label">
                            <h4>Login</h4>
                        </div>
                        <div className="login_inputFields">
                            <div className="login_inputField">
                                <input
                                value = {email}
                                onChange = {(e) => setEmail(e.target.value)}
                                type="text"
                                placeholder="Email"
                                />
                            </div>
                            <div className="login_inputField">
                                <input
                                value = {password}
                                onChange = {(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Password"
                                />
                            </div>
                        </div>
                        <div className="login_forgButt">
                            <small>Forgot Password?</small>
                            <button type="submit" onClick={handleLogin}>Login</button>
                        </div>
                        <button onClick={handleRegister}>Register</button>
                    </div>
                </div>
                <div className="login_footer">
                    <p>About</p>
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Contact</p>
                    <p>&copy; PlacementSaga 2021</p>
                </div>
            </div>
        </div>
    )
}

export default Login
