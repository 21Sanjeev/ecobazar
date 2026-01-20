import { useEffect, useState } from "react";

import logo from '../assets/images/logo.png';
import searchIcon from '../assets/images/Search.svg';
import PhoneIcon from '../assets/images/PhoneCall.svg';
import hamburgerIcon from '../assets/images/menu.svg';
import closeIcon from '../assets/images/close.svg';
import MenuItem from "../components/MenuItem";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [animate, setAnimate] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            requestAnimationFrame(() => setAnimate(true));
        } else {
            setAnimate(false);
        }
    }, [isOpen]);

    const closeMenu = () => {
        setAnimate(false); 
        setTimeout(() => {
            setIsOpen(false);
        }, 400);
    };

    return(
        <header>
            <div className="top-header border-b border-neutral-200 hidden md:block">
                <div className="app-container flex justify-between content-center py-3">
                    <p className="flex gap-2 text-xs items-center text-(--gray-600)">
                        <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5 7.86364C15.5 13.5909 8 18.5 8 18.5C8 18.5 0.5 13.5909 0.5 7.86364C0.5 5.91068 1.29018 4.03771 2.6967 2.65676C4.10322 1.27581 6.01088 0.5 8 0.5C9.98912 0.5 11.8968 1.27581 13.3033 2.65676C14.7098 4.03771 15.5 5.91068 15.5 7.86364Z" stroke="#666666" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8 10.3182C9.38071 10.3182 10.5 9.21925 10.5 7.86364C10.5 6.50803 9.38071 5.40909 8 5.40909C6.61929 5.40909 5.5 6.50803 5.5 7.86364C5.5 9.21925 6.61929 10.3182 8 10.3182Z" stroke="#666666" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
                    </p>
                    <div className="flex items-center gap-4 justify-end">
                        <div className="flex items-center gap-4">
                            <button className="text-(--gray-600) border-0 p-0 m-0 flex items-center gap-1 cursor-pointer text-xs">
                                <span>Eng</span>
                                <svg width="10" height="6.25" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 0.5L4 4L0.5 0.5" stroke="#666666" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                            <button className="text-(--gray-600) border-0 p-0 m-0 flex items-center gap-1 cursor-pointer text-xs">
                                <span>USD</span>
                                <svg width="10" height="6.25" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 0.5L4 4L0.5 0.5" stroke="#666666" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        <div className="bg-neutral-200 w-[1px] h-full"></div>
                        <div className="text-(--gray-600)">
                            <a href="#" className="text-(--gray-600) text-xs hover:text-(--primary-color)">Sign In</a>
                            <span className="text-xs"> / </span>
                            <a href="#" className="text-(--gray-600) text-xs hover:text-(--primary-color)">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="app-container flex items-center justify-between py-4 border-b border-neutral-200 lg:py-3 lg:border-0">
                <a href="/">
                    <img src={logo} alt="Ecobazar logo" className='max-w-[150px] lg:max-w-full' />
                </a>
                <form className="hidden md:flex relative max-w-[320px] lg:max-w-full">
                    <img src={searchIcon} alt="search icon" className='absolute left-2 top-[50%] translate-y-[-50%]' />
                    <input type="text" className='border border-neutral-200 border-r-0 block py-2 px-4 pl-8 outline-0 focus:border-(--primary-color) rounded-s-md w-full lg:py-3 text-sm' placeholder='Search' />
                    <button type='submit' className='block h-auto border border-(--primary-color) text-white px-3 bg-(--primary-color) text-sm rounded-e-md cursor-pointer hover:bg-transparent hover:text-(--primary-color) lg:px-4'>Search</button>
                </form>
                <div className="hidden lg:flex items-center gap-3">
                    <a href="#" className='relative'>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.9995 28.0722C-10.6667 13.3333 7.99999 -2.66666 15.9995 7.45075C24 -2.66666 42.6666 13.3333 15.9995 28.0722Z" stroke="#1A1A1A" strokeWidth="1.5"/>
                        </svg>
                        <span className='count-rounded'>2</span>
                    </a>
                    <div className="bg-neutral-200 w-[1px] h-[32px]"></div>
                    <button className='relative'>
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.3333 14.1667H7.08333L4.25 29.75H29.75L26.9167 14.1667H22.6667M11.3333 14.1667V9.91667C11.3333 6.78705 13.8704 4.25 17 4.25C20.1296 4.25 22.6667 6.78705 22.6667 9.91667V14.1667M11.3333 14.1667H22.6667M11.3333 14.1667V18.4167M22.6667 14.1667V18.4167" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className='count-rounded'>2</span>
                    </button>
                    <div className='flex flex-col gap-[1px]'>
                        <p className='text-(--gray-600) text-xs'>Shopping Cart:</p>
                        <p className='font-medium'>$57.00</p>
                    </div>
                </div>
                <div className='flex gap-4 items-center lg:hidden'>
                    <button className='relative'>
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.3333 14.1667H7.08333L4.25 29.75H29.75L26.9167 14.1667H22.6667M11.3333 14.1667V9.91667C11.3333 6.78705 13.8704 4.25 17 4.25C20.1296 4.25 22.6667 6.78705 22.6667 9.91667V14.1667M11.3333 14.1667H22.6667M11.3333 14.1667V18.4167M22.6667 14.1667V18.4167" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className='count-rounded'>2</span>
                    </button>
                    <button onClick={() => setIsOpen(true)}>
                        <img src={hamburgerIcon} alt="menu icon" />
                    </button>
                </div>
            </div>
            <div className='bg-(--gray-800) text-(--gray-400) hidden lg:block'>
                <div className="app-container flex items-center justify-between">
                    <nav>
                        <ul className='flex items-center gap-8'>
                            <li className='py-3 group/menu menu-active'>
                                <a href="/" className='group-hover/menu:text-white text-sm'>Home</a>
                            </li>
                            <MenuItem title="Shop" className="py-3">
                                <li className="py-2 px-4 group/item">
                                    <a href="#" className="text-(--gray-600) group-hover/item:text-[var(--primary-color)] text-sm">
                                    Shop 2
                                    </a>
                                </li>
                                <li className="py-2 px-4 group/item">
                                    <a href="#" className="text-(--gray-600) group-hover/item:text-[var(--primary-color)] text-sm">
                                    Shop 3
                                    </a>
                                </li>
                                <li className="py-2 px-4 group/item">
                                    <a href="#" className="text-(--gray-600) group-hover/item:text-[var(--primary-color)] text-sm">
                                    Shop 4
                                    </a>
                                </li>
                            </MenuItem>
                            <li className='py-3 group/menu'>
                                <a href="#" className='group-hover/menu:text-white text-sm'>Pages</a>
                            </li>
                            <li className='py-3 group/menu'>
                                <a href="#" className='group-hover/menu:text-white text-sm'>Blog</a>
                            </li>
                            <li className='py-3 group/menu'>
                                <a href="#" className='group-hover/menu:text-white text-sm'>About Us</a>
                            </li>
                            <li className='py-3 group/menu'>
                                <a href="#" className='group-hover/menu:text-white text-sm'>Contact Us</a>
                            </li>
                        </ul>
                    </nav>
                    <a href="tel:219555-0114" className='text-white flex gap-2 items-center text-sm'>
                        <img src={PhoneIcon} alt="Phone icon" />
                        <span>(219) 555-0114</span>
                    </a>
                </div>
            </div>
            {isOpen && (
                <>
                    <div className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${animate ? "opacity-100 visible" : "opacity-0 invisible"} `} onClick={closeMenu} />

                    <div className={`fixed top-0 left-0 z-50 h-full w-full max-w-[360px] bg-white px-6 py-10 overflow-y-auto transform overflow-y-scroll transition-transform duration-300 ease-linear ${animate ? "translate-x-0" : "-translate-x-full"} `} onClick={(e) => e.stopPropagation()} >
                        <div>
                            <div className="flex justify-between items-center border-b border-neutral-200 pb-6">
                                <a href="/">
                                    <img alt="Ecobazar logo" className="max-w-[150px] lg:max-w-full" src={logo} />
                                </a>
                                <button onClick={closeMenu}>
                                    <img src={closeIcon} alt="close icon" />
                                </button>
                            </div>
                            <form className="flex relative max-w-full mt-6">
                                <input type="text" className='border border-neutral-200 border-r-0 block outline-0 focus:border-(--primary-color) rounded-s-md w-full p-3 text-sm' placeholder='Search' />
                                <button type='submit' className='block h-auto border border-(--primary-color) text-white bg-(--primary-color) text-sm rounded-e-md cursor-pointer hover:bg-transparent hover:text-(--primary-color) px-3'>
                                    <img src={searchIcon} alt="search icon" className='filter brightness-0 invert' width="24" height="24" />
                                </button>
                            </form>
                            <nav className="mt-8 border-b border-neutral-200 pb-6">
                                <ul className='flex gap-6 flex-col'>
                                    <li className='group/menu'>
                                        <a href="/" className='group-hover/menu:text-(--primary-color) text-sm'>Home</a>
                                    </li>
                                    <MenuItem title="Shop">
                                        <li className="py-2 px-4 group/item">
                                            <a href="#" className="text-(--gray-600) group-hover/item:text-[var(--primary-color)] text-sm">
                                            Shop 2
                                            </a>
                                        </li>
                                        <li className="py-2 px-4 group/item">
                                            <a href="#" className="text-(--gray-600) group-hover/item:text-[var(--primary-color)] text-sm">
                                            Shop 3
                                            </a>
                                        </li>
                                        <li className="py-2 px-4 group/item">
                                            <a href="#" className="text-(--gray-600) group-hover/item:text-[var(--primary-color)] text-sm">
                                            Shop 4
                                            </a>
                                        </li>
                                    </MenuItem>
                                    <li className='group/menu'>
                                        <a href="#" className='group-hover/menu:text-(--primary-color) text-sm'>Pages</a>
                                    </li>
                                    <li className='group/menu'>
                                        <a href="#" className='group-hover/menu:text-(--primary-color) text-sm'>Blog</a>
                                    </li>
                                    <li className='group/menu'>
                                        <a href="#" className='group-hover/menu:text-(--primary-color) text-sm'>About Us</a>
                                    </li>
                                    <li className='group/menu'>
                                        <a href="#" className='group-hover/menu:text-(--primary-color) text-sm'>Contact Us</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="mt-8 pb-6">
                            <div>
                                <a href="#" className="relative flex gap-3 items-center text-sm">
                                    <span className="border border-neutral-200 rounded-2 w-[40px] h-[40px] flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#1A1A1A" viewBox="0 0 16 16">
                                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                                        </svg>
                                    </span>
                                    <span>My Account</span>
                                </a>
                                <a href="#" className="relative flex gap-3 items-center text-sm mt-6">
                                    <span className="border border-neutral-200 rounded-2 w-[40px] h-[40px] flex justify-center items-center">
                                        <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.9995 28.0722C-10.6667 13.3333 7.99999 -2.66666 15.9995 7.45075C24 -2.66666 42.6666 13.3333 15.9995 28.0722Z" stroke="#1A1A1A" strokeWidth="1.5"></path></svg>
                                    </span>
                                    <span>Wishlist</span>
                                </a>
                                <a href="#" className="relative flex gap-3 items-center text-sm mt-6">
                                    <span className="border border-neutral-200 rounded-2 w-[40px] h-[40px] flex justify-center items-center relative">
                                        <svg width="18" height="18" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.3333 14.1667H7.08333L4.25 29.75H29.75L26.9167 14.1667H22.6667M11.3333 14.1667V9.91667C11.3333 6.78705 13.8704 4.25 17 4.25C20.1296 4.25 22.6667 6.78705 22.6667 9.91667V14.1667M11.3333 14.1667H22.6667M11.3333 14.1667V18.4167M22.6667 14.1667V18.4167" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                        <span className="count-rounded">2</span>
                                    </span>
                                    <span>Shopping Cart</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </header>
    );
}

export default Header;