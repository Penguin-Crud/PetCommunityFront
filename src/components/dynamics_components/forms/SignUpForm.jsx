import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../../services/PetCommunityServices";
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
        signUp("/signup", data).then(res => navigate("/signin") )
        navigate("/signin")
    }

    return (
        <div className="containerSignUp">
            <p>Register</p>
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
    )
}
export default SignUpForm;