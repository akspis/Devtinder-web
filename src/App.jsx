import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./componets/Login"
import { Body } from "./Body"
import { Profile } from "./componets/Profile"
import { Provider } from "react-redux"
import { store } from "./utils/appStore"
import { Feed } from "./componets/Feed"

function App() {
  return (
    <>
    <Provider store={store}>
     <BrowserRouter future={{
    v7_startTransition: true,
  }}>
      <Routes>
        <Route path="/" element={<Body/>}>
        <Route path="login" element={<Login/>}/>
        <Route path="Feed" element={<Feed/>}/>
        <Route path="profile" element={<Profile/>}/>
        </Route>
      </Routes>
     </BrowserRouter>
     </Provider>
    </>
  )
}

export default App
