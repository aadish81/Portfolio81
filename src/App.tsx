import LoadingScreen from "./Components/LoadingScreen"
import {useState} from 'react'
import Navbar from "./Components/Navbar"
import Sidebar from "./Components/Sidebar"
import Home from "./Components/Home"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"

function App() {
  const [flag, setFlag] = useState<boolean>(false)
  const [openMenu , setOpenMenu] = useState<boolean>(false)



  return (
    <>
      <div>
        {!flag && <LoadingScreen isLoaded={()=>{setFlag(true)}}/>}
      </div>
      <div className= {`min-h-screen transition-opacity duration-700 ${flag ? "opacity-100":"opacity-0"}`} >
        <Navbar setOpenMenu={setOpenMenu} />
        <div className="sm:hidden ">
          {openMenu && <Sidebar setOpenMenu={setOpenMenu} openMenu={openMenu}  />}
        </div>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
      </div>
    </>
  )
}

export default App
