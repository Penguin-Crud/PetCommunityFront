import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../../services/PetCommunityServices";
import { Link } from "react-router-dom";
import "../../../styles/index.css";
import Nav from "../../Nav";

function SignInForm() {
    let navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const login = (e) => {
        e.preventDefault()

        let data = {
            username: username,
            password: password
        }
        console.log(data)
        signIn("/signin", data).then(res => {
            console.log(res.data)
            localStorage.setItem('authToken', res.data.accessToken)
            localStorage.setItem('authUsername', res.data.username)
            localStorage.setItem('authUserID',res.data.id)
            navigate("/")
        })
    }

    return (
        <div className="containerSignUp">
                <p className="title-register" >Login</p>
                <div>
                    <form onSubmit={login}>
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
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="Password"
                            onChange={ (e) => setPassword(e.target.value) }
                            />   
                    
                        <button type="submit" > SignIn </button>
                    </form>
                    <Link to="/signup"><p>Register!</p></Link>
            </div>
        </div>
    )
}
export default SignInForm;