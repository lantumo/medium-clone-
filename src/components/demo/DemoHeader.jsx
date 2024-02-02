
import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import logoImg from '../../assets/medium.svg'
import {nav} from '../../data'
export const DemoHeader = () => {
  const [isActive, setIsActive] = useState(false);
  useEffect(function (){
    const scrollMe = ()=>{
      window.scrollY>50? setIsActive(true):setIsActive(false)
    }
    window.addEventListener('scroll', scrollMe)
  })
  return (
    <header className={`border-b border-black sticky top-0 z-10 ${isActive?"bg-white" : "bg-banner"} transition-all duration-500`}>
        <div className="size h-[70px] flex items-center justify-between ">
            <Link>
            <img src={logoImg} alt='logo' className="h-[7rem]  "/>
            </Link>
        <div className="flex items-center gap-5">
          <div className="hidden text-sm sm:flex items-center gap-5">{nav&&nav.length>0? nav.map(navItem => <Link to={navItem.path} key={navItem.title}>{navItem.title}</Link>):<h1>no nav items found</h1>}</div>
          <div className="relative">
            <button className="hidden text-sm sm:flex gap-5">Sign In</button>
           
          </div>
          <button className="bg-black text-white font-medium px-3 p-2 text-sm rounded-full ">Get Started</button>
        </div>
            
        </div>
    </header>
  )
}

