import { RevealOnScroll } from "./RevealOnScroll"

function Projects() {
  return (
    <section id="Projects" className='min-h-screen flex items-center justify-center py-20 mt-20'>
        <RevealOnScroll>
        <div className='max-w-5xl mx-auto px-4'>
            <h2 className='text-center text-3xl md:text-4xl font-bold mb-8  bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent'>
                Projects
            </h2>
        
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='p-6  rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition-all'>
                    <h3 className='text-xl font-bold mb-5'>
                        Django Poll Webapp 
                    </h3>
                    <p className='mb-4 text-gray-500'>
                        Django MVt project uses Django ORM, and MySQLI to 
                        prepare a full stack application that allows for CRUD operations.
                    </p>
                    <div>
                        {["Django MVT","ORM","MySQLi"].map((value,key)=>(
                            <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 mx-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2) transition-all]'>
                                {value}
                            </span>
                        )

                        )}                 
                    </div>
                    <div className='mt-4'>
                        <a href="https://github.com/aadish81/Poll-App-Django" className='text-blue-400 hover:text-blue-300 transition-colors'>View Project--</a>
                    </div>
                </div>
                <div className='p-6  rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition-all'>
                    <h3 className='text-xl font-bold mb-5'>
                        Student Record Webapp
                    </h3>
                    <p className='mb-4 text-gray-500'>
                        Asp.Net Core MVC project uses Entity Framework, and My SQL database to 
                        prepare a full stack application that allows for CRUD operations.
                    </p>
                    <div>
                        {["Asp.Net","Entity Framework","MySQL"].map((value,key)=>(
                            <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 mx-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2) transition-all]'>
                                {value}
                            </span>
                        )

                        )}                  
                    </div>
                    <div className='mt-4'>
                        <a href="https://github.com/aadish81/Asp-Net-Core-MVC-CRUD-App" className='text-blue-400 hover:text-blue-300 transition-colors'>View Project--</a>
                    </div>
                </div>
                <div className='p-6  rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition-all'>
                    <h3 className='text-xl font-bold mb-5'>
                        Portfolio
                    </h3>
                    <p className='mb-4 text-gray-500'>
                        This very website uses React Js, Tailwind CSS, emailjs service, from emailjs.com, for contect me section, and 
                        web api to reveal the page section on scrolling.
                        
                    </p>
                    <div>
                        {["React Js","Tailwind CSS","emailjs service"].map((value,key)=>(
                            <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 mx-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2) transition-all]'>
                                {value}
                            </span>
                        )

                        )}                 
                    </div>
                    <div className='mt-4'>
                        <a href="/" className='text-blue-400 hover:text-blue-300 transition-colors'>View Project--</a>
                    </div>
                </div>
                <div className='p-6  rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition-all'>
                    <h3 className='text-xl font-bold mb-5'>
                        Pending...
                    </h3>
                    <p className='mb-4 text-gray-500'>
                        I'm working on this project. This project 
                        allows user to chat with the peoples. Once they 
                        sign-up and are logged-in they can chat with the peopel they are friend with.
                    </p>
                    <div>
                        {["React Js","Django","Websocket.io","MySQL"].map((value,key)=>(
                            <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 m-2 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2) transition-all]'>
                                {value}
                            </span>
                        )

                        )}                 
                    </div>
                    <div className='mt-4'>
                        <a href="/" className='text-blue-400 hover:text-blue-300 transition-colors'>View Project--</a>
                    </div>
                </div>  
            </div>
        </div>
        </RevealOnScroll>
    </section>
  )
}

export default Projects