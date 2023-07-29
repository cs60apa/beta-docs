"use client";
import React from "react";
import Link from "next/link";
import { IoIosPerson } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoMdSunny, IoMdMoon } from "react-icons/io";
import { useTheme } from "next-themes";

function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="relative mx-auto px-4 md:px-8 border-b-4 dark:border-[#35383F] z-1 ">
      <div className="flex-start md:ml-2">
        <p>
          <img
            src="https://devcircleafrica.com/wp-content/uploads/2022/07/cropped-logo-color.png"
            width={200}
            height={150}
            alt="logo"
          />
        </p>
      </div>
      <div className="flex grid-cols-3 gap-3 mt-3 ml-5 lg:mr-5 md:mr-3 absolute top-3 right-0 justify-end">
        <div className="md:mr-2">
          <Link href="">
            <IoIosPerson size={20} />
          </Link>
        </div>
        <div>
          <button
            className="md:mr-2"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
          {theme === "dark" ? <IoMdSunny size={20} /> : <IoMdMoon size={20} />}
          </button>
        </div>
        <div>
          <Link href="">
            <CiSearch size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
