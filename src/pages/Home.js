import { useContext } from "react"
import Navigation from "../components/Navigation"
import UserContext from "../utils/UserContext"

export default function Home() {
  const { firstName, lastName, user } = useContext(UserContext)
  return (
    <>
      <Navigation />
      <div style={{ marginTop: 100, position: "absolute", right: 400, textAlign: "center", color: "#5e548e" }}>
        <div style={{ fontSize: 80 }}>
          Welcome ,
          <span style={{ fontSize: 40 }}>
            {firstName} {lastName}
          </span>
        </div>

        <h4>Your Email is : {user.email}</h4>
      </div>
    </>
  )
}
