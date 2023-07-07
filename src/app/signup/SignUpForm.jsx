import { useContext } from "react";
import {initializeApp} from "firebase/app"
import {getAuth, createUserWithEmailAndPassword, 
    GoogleAuthProvider, signInWithPopup} from "firebase/auth"
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
  
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app);





export default function SignUpForm(){

    const {setUser} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleGoogle = () => {
        const provider= new GoogleAuthProvider();
        signInWithPopup(auth,provider)
        .then (response => {
       setUser(response.user)
        navigate("/")
        })
       .catch(err => alert(err.message))

    }
    const handleSignUp = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(auth, email, password)
         .then (response => {
        setUser(response.user)
         navigate("/")
})
        .catch(err => alert(err.message))
        


    }
    return(
       <section className="bg-violet-950 p-6 rounded-lg max-w-[420px] mx-auto">
        <form onSubmit={handleSignUp} className="flex flex-col items-start justify-around min-h-[30vh]">
            <label htmlFor="email"  className="flex justify-between w-full ">
                Email   
                <input type="email" name="email"className="rounded-lg border-transparent border border-violet-500 py-2 px-8 bg-zinc-50 text-zinc-700 placeholder-zinc-400
                    text-base focus:ring-2 focus:ring-violet-600 focus:border-transparent"  />
            </label>
            <label htmlFor="password"className="flex justify-between w-full ">
                Password   
                <input type="password" name="password" className="rounded-lg border-transparent border border-violet-500 py-2 px-8 bg-zinc-50 text-zinc-700 placeholder-zinc-400
                    text-base focus:ring-2 focus:ring-violet-600 focus:border-transparent" />
            </label>
            <input type="submit" value="Sign Up"className="bg-emerald-400 text-violet-950 py-2 px-8
                 rounded-lg shadow-lg transition duration-300 hover:bg-violet-300 cursor-pointer w-full" />
        </form>
        <button onClick={handleGoogle}className="bg-emerald-400 text-violet-950 py-2 px-8
                 rounded-lg shadow-lg transition duration-300 hover:bg-blue-400 cursor-pointer" > Sign Up with Google </button>
        </section>
    )
}