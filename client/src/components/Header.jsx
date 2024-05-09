import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { FaMoon, FaSun, FaSearch } from 'react-icons/fa';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
      document.querySelector("body").classList.add("dark:bg-slate-800");
    } else {
      document.querySelector("html").classList.remove("dark");
      document.querySelector("body").classList.remove("dark:bg-slate-800");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  }

  return (
    <div className='bg-slate-200 dark:bg-gray-900 shadow-md text-white'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='mr-3 px-2 py-1 font-bold bg-gradient-to-r from-[#4e7b72] via-[#77a49b] to-[#1a4b42] rounded-lg text-white'>Auth App By Reh</h1>
        </Link>
        <ul className='flex gap-4 text-gray-800 dark:text-white items-center'>
          <Link to='/'>
            <li className="hidden md:block">Home</li>
          </Link>
          
          <Link to='/profile'>
            {currentUser ? (
              <img src={currentUser.profilePicture} alt='profile' className='h-7 w-7 rounded-full object-cover' />
            ) : (
              <li>Sign In</li>
            )}
          </Link>
          <button className="text-slate-700 hover:underline dark:text-white ml-3 md:ml-0" onClick={handleChangeTheme}>
            {theme === 'light' ? (
              <FaSun size={24} />
            ) : (
              <FaMoon size={24} />
            )}
          </button>
        </ul>
       
      </div>
    </div>
  );
}
