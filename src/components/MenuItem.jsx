import { useState } from "react";

function MenuItem({ title, children, href = "#", className = "" }) {
  const [open, setOpen] = useState(false);

  return (
    <li
      className= {`relative group/menu ${className}`}
      onClick={() => setOpen(prev => !prev)}
    >
      {/* Trigger */}
      <div className="flex gap-2 items-center justify-between cursor-pointer">
        <a
          href={href}
          className="group-hover/menu:text-(--primary-color) text-sm"
          onClick={e => e.preventDefault()} // prevent page jump on mobile
        >
          {title}
        </a>

        <svg
          width="10"
          height="6.25"
          viewBox="0 0 8 5"
          fill="none"
          className={`transition-transform duration-200 ${
            open ? "rotate-180 lg:rotate-0" : ""
          }`}
        >
          <path
            d="M7.5 0.5L4 4L0.5 0.5"
            className="group-hover/menu:stroke-white"
            stroke="#666"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Submenu */}
      <ul
        className={`
          lg:absolute lg:top-full lg:w-[200px] lg:mt-0 lg:py-2 lg:rounded-md lg:bg-white lg:shadow-md
          lg:opacity-0 lg:invisible lg:pointer-events-none
          lg:transition-all lg:duration-200
          lg:group-hover/menu:opacity-100
          lg:group-hover/menu:visible
          lg:group-hover/menu:pointer-events-auto

          mt-4 flex flex-col
          ${open ? "block" : "hidden"}
          lg:block
        `}
      >
        {children}
      </ul>
    </li>
  );
}

export default MenuItem;
