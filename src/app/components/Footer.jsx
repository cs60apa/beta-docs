import React from "react";

function Footer() {
  return (
    <div className="bg-[#000000] text-[#fff]">
      <div className="flex justify-center align-center list-none py-20 ">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 divide-x">
          <li>
            <a
              href=""
              className="ml-3 md:ml-5 text-xs md:text-sm lg:text-xl hover:text-[#84a0ef]"
            >
              About us
            </a>
          </li>
          <li>
            <a
              href=""
              className="ml-2 md:ml-5 text-xs md:text-sm lg:text-xl hover:text-[#84a0ef]"
            >
              Contact us
            </a>
          </li>
          <li>
            <a
              href=""
              className="ml-1 md:ml-5 text-xs md:text-sm lg:text-xl hover:text-[#84a0ef]"
            >
              Terms of Usage
            </a>
          </li>
          <li>
            <a
              href=""
              className="ml-2 md:ml-5 text-xs md:text-sm lg:text-xl hover:text-[#84a0ef]"
            >
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center align-center">
        <p>Copyright 2023. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
