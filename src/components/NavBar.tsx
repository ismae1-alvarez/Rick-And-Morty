import { Fragment, useState } from 'react'
import 'tailwindcss/tailwind.css'
function NavBar() {

    const [menu, setMenu] = useState<boolean>(false)
  return (
   <Fragment>
        <header className=" flex justify-between flex-wrap items-center p-5 font-thin border-b-2 border-[#f1f1f1] shadow-lg w-full ">
            {/* <h1 className="text-black md:text-gray-400 text-2xl"><a href="">Medium breakpoint</a></h1> */}
            <a href="#">
                <img src="/img/logo.png" className='h-10 w-10' alt="" />
            </a>
            <button onClick={()=> setMenu(!menu)} className='md:hidden flex flex-wrap'>
                <img src="/img/menu.svg" className='h-8 w-8' alt="menu-bars" />
            </button>
            
            <nav className={`${menu ? 'h-72 opacity-100' : 'h-0 opacity-0'} opacity-100 md:h-fit overflow-hidden transition-all duration-500 ease-linear gap-10 md:w-fit flex-nowrap w-full justify-center items-center`}>
            <ul className='flex flex-col md:flex-row gap-8 w-full text-xl justify-center items-center'>
                <li className='my-5'><a href="/">Location</a></li>
                <li className='my-5'><a href="/characters">Characters</a></li>
                <li className='my-5'><a href="/episodes">Episodes</a></li>
            </ul>
            </nav>
        </header>

        <img src="/img/title.png" className="h-fit w-ful  p-5 mx-auto my-5" alt="" />
   </Fragment>

  )
}
export default NavBar