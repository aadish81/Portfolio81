import React from 'react'


interface Bar{
  openMenu:boolean,
  setOpenMenu: (a:boolean) => void
    
}


const  Sidebar:React.FC<Bar> = ({setOpenMenu, openMenu}) => {



  return (
    <nav className={`fixed  top-0 z-40 w-[100%] h-screen   backdrop-blur-sm slider`}>
        <div className='flex flex-col justify-center items-center gap-8  font-mono '>
            <div className='h-16  flex justify-start items-center '><span className=' text-gray-400 hover:text-white font-bold hover:cursor-pointer text-2xl' onClick={()=>setOpenMenu(false)} >&#10006;</span></div>
            <a href="#Home" className={`text-gray-400  hover:text-white  text-lg font-bold hover:-translate-y-2 transition-transform duration-500 ${openMenu?"opacity-100 translate-y-0 ":"opacity-0 translate-y-5"}`} onClick={()=>setOpenMenu(false)}>Home</a>
            <a href="#About"className={`text-gray-400  hover:text-white  text-lg font-bold hover:-translate-y-2 transition-transform duration-500 ${openMenu?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`} onClick={()=>setOpenMenu(false)}>About</a>
            <a href="#Skills"className={`text-gray-400  hover:text-white  text-lg font-bold hover:-translate-y-2 transform transition-transform duration-500 ${openMenu?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`} onClick={()=>setOpenMenu(false)}>Skills</a>
            <a href="#Contact"className={`text-gray-400  hover:text-white  text-lg font-bold hover:-translate-y-2 transform transition-transform duration-500 ${openMenu?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`} onClick={()=>setOpenMenu(false)}>Contact</a>
        </div>

    </nav>
  )
}

export default Sidebar