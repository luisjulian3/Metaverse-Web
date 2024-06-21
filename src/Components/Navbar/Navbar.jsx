import React from 'react'
import Logo from "../../assets/logo.png"
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import DarkMode from './DarkMode';

const NavLinks = [
  {
    id:1,
    name: "Home",
    link: "#"
  },
    {
    id:2,
    name: "Products",
    link: "#"
  },
    {
    id:3,
    name: "Piricing",
    link: "#"
  },
    {
    id:4,
    name: "Contact",
    link: "#"
  },
]

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <div className='relative z-[9999] text-black dark:text-white'>
        <div className='container py-2 md:py-2'>
            <div className="flex justify-between items-center">
                {/* logosection */}
                <div className='flex items-center-gap3'>
                    <img src={Logo} alt="" className='h-9'/>
                    <p className='text-3xl'>VR <span className='font-bold'>World</span></p>
                </div>
                {/* Menu Section */}
                  <nav className='hidden md:block'>
                    <ul className='flex items-center gap-8'>
                      {
                        NavLinks.map(({ id, name, link}) => {
                          return (
                            <li key={id} className='py-4'>
                              <a href={link} className='text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors duration-500'>{name}</a>
                            </li>
                          );
                      })
                    }
                    {/* Darkmode Feature */}
                    <DarkMode/>
                    </ul>
                  </nav>
                  {/* Movile view sidebar */}
                  <div className='md:hidden block'>
                    <div className='flex items-center gap-4'>
                      <DarkMode/>
                    {
                      showMenu ? 
                      (<HiMenuAlt1 onClick={toggleMenu} className='cursor-pointer' size={30}/>)
                      : 
                      (<HiMenuAlt3 onClick={toggleMenu} className='cursor-pointer' size={30}/>)
                    }
                    </div>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar