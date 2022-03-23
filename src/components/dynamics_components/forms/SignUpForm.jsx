import { useState } from "react";
import { signUp } from "../../../services/PetCommunityServices";
import "../../../styles/index.css";

function SignUpForm() {

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
    }

    return (
        <div className="containerSignUp">
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
        </div>
    )
}
export default SignUpForm;