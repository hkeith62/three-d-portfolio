import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
      <header className='header'>
        <NavLink to='/' alt='logo' className='w-20 h-10 ml-[-9rem] rounded-lg bg-white items-center 
        justify-center flex font-bold shadow-md'>
            <p className='blue-gradient_text text-center'>HOME</p>
        </NavLink>
      </header>
     
  )
}

export default Navbar
