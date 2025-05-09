import React from 'react'


interface Bar{
    setOpenMenu:(a:boolean)=>void

}

const Navbar:React.FC<Bar> = ({setOpenMenu})=> {
  return (
    <nav className='  w-full shadow-lg border-b border-white/12 bg-[10,10,10,0.8] backdrop-blur-lg'>
        <div className='flex justify-around items-center h-16'>
            <div className='font-bold text-3xl bg-gradient-to-r from-green-400 via-cyan-400 to-red-500 bg-clip-text text-transparent'>Aadish<span className='text-blue-500 font-mono font-bold'>:Joshi</span></div>
            <div className='sm:flex hidden'>
                <a href="#Home" className='mx-7 text-gray-400  hover:text-white transition-colors duration-200 text-lg font-bold'>Home</a>
                <a href="#About"className='mx-7 text-gray-400  hover:text-white transition-colors duration-200 text-lg font-bold'>About</a>
                <a href="#Skills"className='mx-7 text-gray-400  hover:text-white transition-colors duration-200 text-lg font-bold'>Skills</a>
                <a href="#Contact" className='mx-7 text-gray-400  hover:text-white transition-colors duration-200 text-lg font-bold'>Contact</a>
            </div>
            <div className={`sm:hidden flex ml-16 hover:cursor-pointer hover:text-gray-300 transition-colors duration-200 font-bold text-1xl `} onClick={()=>{setOpenMenu(true)}}>
                &#9776;
            </div>
        </div>
    </nav>  
  )
}

export default Navbar