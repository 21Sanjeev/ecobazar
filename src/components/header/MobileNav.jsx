import MenuItem from "./MenuItem";

function MobileNav({ open, onClose, closeIcon, searchIcon }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-full max-w-[360px]
          bg-white transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
        role="dialog"
        aria-modal="true"
      >
        <div className="p-6 overflow-y-auto h-full">
          {/* Header */}
          <div className="flex justify-between items-center border-b border-neutral-200 pb-6">
            <img src="images/logo.png" alt="Ecobazar logo" className="max-w-[150px]"
            />
            <button onClick={onClose} aria-label="Close menu" className="focus:outline-none cursor-pointer">
              <img src={closeIcon} alt="close icon" />
            </button>
          </div>

          {/* Search */}
          <form className="flex relative max-w-full mt-6">
            <input type="text" placeholder="Search" className="border border-neutral-200 border-r-0 block outline-0 focus:border-(--primary-color) rounded-s-md w-full p-3 text-sm" />
            <button type="submit" className="bg-[var(--primary-color)] px-4 text-white" >
              <img src={searchIcon} alt="search icon" className="filter brightness-0 invert" width="24" height="24" />
            </button>
          </form>

          {/* Navigation */}
          <nav className="mt-8 border-b border-neutral-200 pb-6">
            <ul className="flex flex-col gap-6">
              <li className='group/menu'>
                <a href="/" className='group-hover/menu:text-(--primary-color) text-sm'>Home</a>
              </li>

              <MenuItem title="Shop">
                <li className="py-2 px-4 group/item">
                  <a href="#" className="text-(--gray-600) group-hover/item:text-[var(--primary-color)] text-sm">Shop 2</a>
                </li>
                <li className="py-2 px-4 group/item">
                  <a href="#" className="text-(--gray-600) group-hover/item:text-[var(--primary-color)] text-sm">Shop 3</a>
                </li>
                <li className="py-2 px-4 group/item">
                  <a href="#" className="text-(--gray-600) group-hover/item:text-[var(--primary-color)] text-sm">Shop 4</a>
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
      </aside>
    </>
  );
}

export default MobileNav;
