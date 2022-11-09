import Home from "./pages/Home"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
import UserContext from "./utils/UserContext"
import { useEffect, useState } from "react"
import auth from "./utils/firebaseConfig"
//toastify library for notifications
import { ToastContainer, toast } from "react-toastify"

function App() {
  const [user, setUser] = useState({})
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [confirm_password, set_confirm_password] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [panding, setPanding] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    //checking user login
    if (user) {
      onAuthStateChanged(auth, user => {
        setUser(user)
        setPanding(false)
      })
    }
  })
  if (panding) {
    return <h1>...Loading</h1>
  }
  const signup = async () => {
    //validation
    if (firstName.length > 50 || lastName.length > 50) {
      return toast.error(" must be less then 50 characters")
    }
    if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      return toast.error("Invalid Email")
    }
    if (!password.match(/(?=.*[!@#\$%\^&\*])/)) {
      return toast.error("the password must contain one symbols at least")
    }
    if (password.length < 8) {
      return toast.error("the password must be more then 8 chararcter")
    }

    try {
      if (password === confirm_password) {
        //firebase auth for create user
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredential.user
        console.log(user)
        navigate("/login")
      } else {
        toast.error("Passwords does't match")
      }
    } catch (error) {
      const errorMessage = error.message

      toast.error(errorMessage)
    }
  }

  const login = async () => {
    try {
      //firebase auth for login
      const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      const user = userCredential.user
      console.log(user)
      toast.success("Logged in")
      navigate("/")
    } catch (error) {
      const errorMessage = error.message
      toast.error(errorMessage)
    }
  }

  const logout = async () => {
    await signOut(auth)
  }
  //context
  const store = {
    signup,
    user,
    setEmail,
    setPassword,
    setLoginPassword,
    setLoginEmail,
    login,
    setFirstName,
    firstName,
    setLastName,
    lastName,
    logout,
    set_confirm_password,
  }
  return (
    <UserContext.Provider value={store}>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </UserContext.Provider>
  )
}

export default App
