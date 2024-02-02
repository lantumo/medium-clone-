import { Link } from "react-router-dom"
import logoImg from '../../assets/medium.svg'
export const HomeHeader = () => {
  return (
    <header className="border-b border-black sticky top-0 z-10">
        <div className="size h-[70px] flex items-center justify-between">
            <Link>
            <img src={logoImg} alt='logo'/>
            </Link>
        </div>
    </header>
  )
}

