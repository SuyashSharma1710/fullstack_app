import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Mynotes from "./pages/Mynotes"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {


  return (
    <div className="relative mx-auto max-w-6xl min-h-screen ">

      <Router>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/mynotes" Component={()=><Mynotes/>}/>


        </Routes>

      <div className="absolute w-full bottom-1" >
        <Footer />
      </div>
      </Router>


    </div>
  )
}

export default App
