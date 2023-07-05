import { useContext } from "react";
import {initializeApp} from "firebase/app"
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import { AuthContext } from "../../App";
import { useNavigate } from "react-router-dom";
const firebaseConfig = {
    apiKey: "AIzaSyBlYKXJxhytlTakCYLQXHAFbEDYARhufPA",
    authDomain: "chekov-me.firebaseapp.com",
    projectId: "chekov-me",
    storageBucket: "chekov-me.appspot.com",
    messagingSenderId: "775816859375",
    appId: "1:775816859375:web:7ef40d04e9f46bb44e151a"
  };

export default function SignUpForm(){

    const {setUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSignUp = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const app = initializeApp(firebaseConfig)
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, email, password)
         .then (response => {
        setUser(response.user)
         navigate("/")
})
        .catch(err => alert(err.message))
        


    }
    return(
        <form onSubmit={handleSignUp}>
            <label htmlFor="email">
                Email   
                <input type="email" name="email" />
            </label>
            <br />
            <label htmlFor="password">
                Password   
                <input type="password" name="password" />
            </label>
            <br />
            <input type="submit" value="Sign Up" />
        </form>
    )
}