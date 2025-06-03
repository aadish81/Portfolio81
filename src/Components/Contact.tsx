import { RevealOnScroll } from "./RevealOnScroll";
import {useState } from 'react'
import emailjs from 'emailjs-com'

function Contact() {
    const [formData, setformData] = useState({
        "name":"",
        "email":"",
        "message":""
    })



    const handelSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
       
        
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, event.currentTarget, import.meta.env.VITE_PUBLIC_KEY)
        .then(()=>{
            alert("Message Sent!");
            setformData({name:"",email:"",message:""})
        }).catch(()=>alert("Oop! something went wrong. Please try again."))
        

    }

  return (
    <section id="Contact" className='flex justify-center items-center py-20 min-h-screen mt-10 '>
        <RevealOnScroll>
            <div className="mb-40 md:w-160 ">
                    <h2 className="text-2xl md:text-4xl mb-12 font-bold bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent text-center">
                        Connect
                    </h2>
                    <div className="flex space-x-9 md:space-x-20 justify-center">
                        <a href="https://www.linkedin.com/in/aadish-joshi" className="hover:scale-110 hover:translate-y-2 transition-transform ease-in">
                            <img src="/linkdin.png " alt="Linkdin" className="w-[60px] h-[60px] md:w-[70px] md:h-[70px]" />
                        </a>
                        <a href="https://github.com/aadish81/" className="hover:scale-110 hover:translate-y-2 transition-transform ease-in">
                            <img src="/github.png" alt="Github" className="w-[60px] h-[60px] md:w-[70px] md:h-[70px]" />
                        </a>
                        <a href="https://medium.com/@adishjoshi1111" className="hover:scale-110 hover:translate-y-2 transition-transform ease-in">
                            <img src="/medium.png" alt="Medium" className="w-[60px] h-[60px] md:w-[70px] md:h-[70px]"/>
                        </a>
                    </div>

                    

            </div>
            <div className="px-4 w-96 md:w-160">
                <h2 className="text-3xl md:text-4xl mb-8 font-bold bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent text-center">
                    Get In Touch
                </h2>
                <form className="space-y-6" onSubmit={handelSubmit}>
                    <div className="relative">
                        <input type="text" id="name" name="name"placeholder="Name..." required className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10 "
                        value={formData.name}
                        onChange={(e)=>{setformData({...formData,name:e.target.value})}}
                        />
                    </div>
                    <div className="relative">
                        <input type="email" id="email" name="email"placeholder="example@gmail.com" required className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10 "
                        value={formData.email}
                        onChange={(e)=>setformData({...formData, email:e.target.value})}
                        />
                    </div>
                    <div className="relative">
                        <textarea  id="message" rows={5} name="message"placeholder="Your Message..." required className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10 "
                        value={formData.message}
                        onChange={(e)=>setformData({...formData,message:e.target.value})}
                        />
                    </div>
                    <button type="submit" className="w-full py-3 px-6 bg-blue-500 rounded font-medium transition overflow-hidden hover:cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] ">
                        Submit
                    </button>
                </form>

            </div>
        </RevealOnScroll>
    </section>
  )
}

export default Contact
