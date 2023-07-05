import { Link } from "react-router-dom"
import LoginForm from "./LoginForm"
export default function Login(){
    return(
        <main>
            <h1>Login</h1>
            Not a user? <Link to="/signup">Sign Up</Link>
            <LoginForm/>

        </main>
    )
}