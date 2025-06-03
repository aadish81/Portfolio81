
import {useState,useEffect} from 'react'

const displayText = "<Hello World>"
let i = 0
interface loaded{
    isLoaded: ()=>void;
}

const LoadingScreen:React.FC<loaded> = ({isLoaded}) => {
    const [text , setText] = useState<string>("")

    useEffect(()=>{
        const interval = setInterval(()=>{
            setText(displayText.substring(0,i))
            i++
       
            if(i>displayText.length){
                clearInterval(interval)

                setTimeout(()=>{
                    isLoaded()
                },1000)
            }
        },150)
        return () => clearInterval(interval)
    
    },[])

  return (
    <div className='fixed inset-0  flex flex-col  justify-center items-center z-50 bg-black text-white'>
        
                <div className='mb-4 text-3xl md:text-7xl  font-mono font-bold bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent'>
                    {text}<span className='ml-0.2 blink font-bold bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent'>|</span>
                </div>
                <div className='h-[3px] w-[200px] md:w-[400px] rounded-full bg-gray-600 overflow-hidden'>
                    <div className='h-full w-[40%] rounded-full  bg-blue-500 progress-animation'></div>
                </div>

    </div>
  )
}

export default LoadingScreen