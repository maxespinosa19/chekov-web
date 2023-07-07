import { Link } from "react-router-dom"
import SignUpForm from "./SignUpForm"

export default function SignUp(){
    return(
        <section className="bg-violet-900 min-h-screen
        text-orange-50 px-4 py-8 mb-4 text-center">
            <h1 className="text-3xl font-semibold py-4" >Sign Up</h1>
            <SignUpForm/>
            <p className="mt-4"> 
            Already a User?
            </p>
            <Link to="/login" className="text-sky-300">Login</Link>
        </section>
    )
}