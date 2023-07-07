import { Link } from "react-router-dom"
import LoginForm from "./LoginForm"
export default function Login(){
    return(
        <main className="bg-violet-900 min-h-screen
         text-orange-50 px-4 py-8 text-center ">
            <h1 className="text-3xl font-semibold py-4">Login</h1>
            <LoginForm/>
           <p className="mt-4"> 
            Not a user? <Link to="/signup" className="text-sky-300">Sign Up</Link>
            </p>
        </main>
    )
}