import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./componets/Login"
import { Body } from "./Body"
import { Profile } from "./componets/Profile"

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body/>}>
        <Route path="login" element={<Login/>}/>
        <Route path="profile" element={<Profile/>}/>
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
