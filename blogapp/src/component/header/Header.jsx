import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Button from "../Button";
import { useSelector } from "react-redux";
import HeaderButtons from "./HeaderButtons";


export default function Header() {

    const location = useLocation();
    const loggedin = location.pathname === '/login';
    const navBar = useSelector((state) => (state.status));
    const objNavItem = ['Home', 'Posted Blog']
    const objNavpage = ['/home', '/postedblog']

    return (
        <div className="pl-4 sticky z-50 top-0 bg-gray-700 bg-opacity-40 " >
            <div className="w-full flex  justify-between ">
                <Link to={"/home"} className="flex items-center  text-indigo-400 no-underline hover:no-underline font-bold text-2xl" >
                    Sharp <span className="bg-clip-text h-10 pt-1  text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">Blog</span>
                </Link>
                <div>
                {navBar ? (<ul className="flex">
                        {
                            objNavItem.map((item,index) => (
                                <li key={index}>
                                    <NavLink
                                        to={objNavpage[index]}
                                        className={({ isActive }) =>
                                            `${!isActive ? "text-gray-400" : "text-white"}  block py-2 pr-4 pl-3 duration-100 text-lg font-semibold    hover:text-gray-100`
                                        }
                                    >
                                        {item}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>) : (<div></div>)} 
                </div>
                <div className="flex justify-end ">
                    <a className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 pt-4  transform hover:scale-125 duration-300 ease-in-out" href="https://twitter.com/intent/tweet?url=#">
                        <svg className="fill-current h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                            <path
                                d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"
                            ></path>
                        </svg>
                    </a>
                    <a
                        className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 pt-4 transform hover:scale-125 duration-300 ease-in-out"
                        href="https://www.facebook.com/sharer/sharer.php?u=#"
                    >
                        <svg className="fill-current h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                            <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path>
                        </svg>
                    </a>
                <HeaderButtons loggedin={loggedin} status={navBar} />
                </div>
            </div>
        </div>
    )

    return (
        <header className="shadow sticky z-50 top-0 py-3 bg-transparent">
            <div className="flex">
                <div>
                    <img
                        src="https://revenuearchitects.com/wp-content/uploads/2017/02/Blog_pic-300x170.png"
                        className="mr-3 h-12"
                        alt="Logo"
                    />
                </div>
                <div className="flex justify-between w-full relative hover-element">
                    <div className="w-20"></div>
                    {navBar ? (<ul className="flex">
                        {
                            objNavItem.map((item,index) => (
                                <li key={index}>
                                    <NavLink
                                        to={objNavpage[index]}
                                        className={({ isActive }) =>
                                            `${!isActive ? "text-orange-700" : "text-black"}  block py-2 pr-4 pl-3 duration-100 text-lg font-semibold  hover:bg-gray-50   hover:text-orange-700`
                                        }
                                    >
                                        {item}
                                    </NavLink>
                                </li>
                            ))
                        }
                        
                        <NavLink
                        to={'editform/postblog'}>
                            <li className="bg-orange-200 flex self-center border border-black p-2 rounded-xl">Add Blog</li>
                        </NavLink>
                    </ul>) : (<div></div>)}
                        <div className="flex justify-center ">
                            <HeaderButtons loggedin={loggedin} status={navBar} />
                    </div>
                </div>
            </div>
        </header>
    )

}
