import { RevealOnScroll } from "./RevealOnScroll"
import {useState,useEffect} from 'react'

const aboutMe = ["Seeker...","Web Developer...","Bug Hunter..."];
let i = 0
let j = 0   

function Home() {
    const [text, setText] = useState<string>("")
    
    useEffect(() => {
        const interval = setInterval(() => {
            setText(aboutMe[i%3].substring(0,j))
            j++
            if(j>aboutMe[i%3].length){
                j = 0
                i++
            }
        },300)

        return () => {
            clearInterval(interval)
        }
    },)

  return (
    <section id="Home" className= "flex flex-col justify-center items-center w-full min-h-screen">
        <RevealOnScroll>
        <div className='text-center px-4'>
            <h1 className='font-bold  text-center text-3xl md:text-7xl mb-6 bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent '>
                 I'm a {text}
            </h1>
            <p className=' text-lg text-gray-400 mb-8 max-w-lg text-center mx-auto'>
            Fueled by a deep curiosity for technology, I dive into code with purpose and creativity.
            From crafting clean UIs with React to building solid backends with Django, I love bringing ideas to life.
                
            </p>
            <div className="flex justify-center items-center space-x-4">
                <a href="#Projects" className='px-6 py-3 font-medium  rounded bg-blue-500 transition relative  hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,226,0.4)]'>
                    View Projects
                </a>
                <a href="#Contact" className=' px-6 py-3 font-medium rounded border border-blue-500/50 transition relative hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10'>
                    Contact Me
                </a>
            </div>
        </div>
        </RevealOnScroll>
    </section>
  )
}

export default Home