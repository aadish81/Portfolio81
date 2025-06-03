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
    <section id="Contact" className='flex justify-center items-center py-20 min-h-screen mt-20 '>
        <RevealOnScroll>
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
