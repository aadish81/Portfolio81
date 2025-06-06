import {useEffect,useRef} from 'react'
import {ReactNode} from 'react'

interface child{
    children:ReactNode;
}

export function RevealOnScroll({children}:child){
    const ref = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        const observer  = new IntersectionObserver(([entry])=>{
            if(entry.isIntersecting){
                ref.current?.classList.add("visible");

            }
        },{threshold:0.2, rootMargin:"0px 0px -70px 0px"}
    );
    if (ref.current) observer.observe(ref.current)
    
    return ()=> observer.disconnect();
    })
    return (
        <div ref = {ref} className='reveal'>
            {children}
        </div>
    )
}