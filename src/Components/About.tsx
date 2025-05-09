import { RevealOnScroll } from "./RevealOnScroll"

const Frontend = [
    "HTML",
    "Javascript",
    "React Js",
    "CSS",
    "Tailwind CSS"
]
const Backend = [
    "Django MVT",
    "Django Rest Framework",
    "MY SQL",
    "Asp.Net MVCL",
]
const CyberSpace = [
    "OWASP-10",
    "Computer Networking",
    "Burp Suite",
    "Linux",
    "Nmap",
    "Google Dorking"
]

function About() {
  return (
    <section id="About" className='flex justify-center items-center font-white w-full min-h-screen pb-20 mt-18'>
        <RevealOnScroll>
        <div className='max-w-3xl mx-auto px-4'>
            <h1 className=' text-center text-3xl md:text-4xl font-bold mb-8  bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent'>About Me</h1>
        
            <div className='rounded-xl border border-white/10 p-8 transition-all hover:-translate-y-0.5 '>
                
                    <p className='text-gray-400 text-center text-lg w-auto m-6'>
                    I'm a passionate full-stack developer focused on building engaging web experiences using React and Django. 
                    With a strong foundation in both frontend design and backend systems, I love creating projects that solve real problems.
                    I'm also exploring cybersecurity and and bug hunting workd, with growing experience and Python scripting.
                    Constantly learning, I aim to build scalable, secure, and user-centered digital products. 
                    </p>
                    <div id = "Skills" className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='rounded-xl  p-6 transition-all hover:-translate-y-1'>
                                <h3 className='text-xl font-bold mb-4'>Frontend</h3>
                                <div className='flex flex-wrap gap-2'>
                                    {
                                        Frontend.map((skill,key)=>(
                                            <span 
                                                key = {key}
                                                className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2) transition]'
                                            >
                                                {skill}
                                            </span>
                                        ))
                                    }
                                </div>
                        </div>
                        <div className='rounded-xl  p-6 transition-all hover:-translate-y-1'>
                                <h3 className='text-xl font-bold mb-4'>Backend</h3>
                                <div className='flex flex-wrap gap-2'>
                                    {
                                        Backend.map((skill,key)=>(
                                            <span 
                                                key = {key}
                                                className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2) transition]'
                                            >
                                                {skill}
                                            </span>
                                        ))
                                    }
                                </div>
                        </div>
                        <div className='rounded-xl  p-6 transition-all hover:-translate-y-1'>
                                <h3 className='text-xl font-bold mb-4'>Cyber Space</h3>
                                <div className='flex flex-wrap gap-2'>
                                    {
                                        CyberSpace.map((skill,key)=>(
                                            <span 
                                                key = {key}
                                                className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2) transition]'
                                            >
                                                {skill}
                                            </span>
                                        ))
                                    }
                                </div>
                        </div>


                    </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
                <div className='p-6 rounded-xl border-white/10 border transition-all hover:-translate-y-1 '>
                        <h1 className='text-xl font-bold mb-4'>
                                Education
                        </h1>
                        <ul className="text-gray-400">
                            <li><strong>BSc.CSIT</strong> - Tribhuvan University (2022-2026)</li>
                            <li><strong>+2 Science</strong> - Radiant Higher Secondary School (2019-2022)</li>
                        </ul>
                </div>
                <div className='p-6 rounded-xl border-white/10 border transition-all hover:-translate-y-1 '>
                        <h1 className='text-xl font-bold mb-4'>
                                Work Experience
                        </h1>
                        <ul className="text-gray-400">
                            <li><strong>BBPs and VDPs</strong> - Indulged in discovering bugs in web applications through Crowdsourcing Platforms</li>
                            <li><strong>Hands-On</strong> - Developed beginner level app using Django, React js, Tailwind CSS, and Asp.Net MVC</li>
                        </ul>
                </div>
            </div>   
        </div>
        </RevealOnScroll>
    </section>
  )
}

export default About