import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn, signUp } from "../../../services/PetCommunityServices";
import { Link } from "react-router-dom";
import "../../../styles/index.css";

function SignUpForm() {
    let navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const register = (e) => {
        e.preventDefault()

        let data = {
            username: username,
            email: email,
            password: password
        }
        console.log(data)
        signUp("/signup", data)
            .then(res => 
                signIn("/signin",{username: data.username, password: data.password})
                    .then(res => {
                        console.log(res.data)
                        localStorage.setItem('authToken', res.data.accessToken)
                        localStorage.setItem('authUsername', res.data.username)
                        localStorage.setItem('authUserID',res.data.id)
                        
                        navigate("/") 
                    }
                )
                // navigate("/signin") 
        )
        
    }

    return (
        <div className="containerSignUp">
                <p className="title-register" >Register</p>
            <div>
                <form onSubmit={register}>
                    <input
                        required
                        type="text" 
                        name="username" 
                        id="username" 
                        placeholder="UserName" 
                        onChange={ (e) => setUsername(e.target.value) }
                        />
                    <input
                        required
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Email"
                        onChange={ (e) => setEmail(e.target.value) }
                        />
                    <input
                        required
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Password"
                        onChange={ (e) => setPassword(e.target.value) }
                        />   
                
                    <button type="submit" > SignUp </button>
                </form>
                <Link to="/signin"><p>Login</p></Link>
            </div>
        </div>
    )
}
export default SignUpForm;