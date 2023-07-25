import React from "react";
import Links from "../components/Links";
import { BiMenu } from "react-icons/bi";
import { BsMap } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { BsTwitter } from "react-icons/bs";
import { PiFacebookLogoFill } from "react-icons/pi";

export default function js() {
  return (
    <div className="relative max-w-screen-xl mx-auto md:flex md:flex-row">
      <div className="hidden md:flex w-[284px] md:shrink-0 md:flex-col md:border-r-1 md:justify-between dark:bg-[#292C31] bg-[#F7F4F3]">
        <div className="overflow-hidden relative sticky top-0">
          <nav className="max-h-full flex flex-col pr-2 pl-3 pb-4 pt-8">
            <div
              aria-hidden="true"
              className="absolute top-0 left-0 h-3 bg-gradient-to-b from-gray-0 w-full z-10 pointer-events-none"
            ></div>
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-3 bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none"
            ></div>
            <ul className="last-of-type:pb-3">
              <li className="my-1.5 ml-[3px]">
                <h1 className="flex w-full relative select-text items-center justify-between rounded-md pl-2 py-1 text-left text-sm font-medium text-[#556E6D]">
                  Sibling chapters
                </h1>
                <div>
                  <div className="relative">
                    <ul className="last-of-type:mb-0 px-0.5 mb-8">
                      <li className="my-1.5">
                        <a
                          href=""
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm hover:text-[#e3796a]"
                        >
                          The Javascript language
                        </a>
                        <div></div>
                      </li>
                      <li className="my-1.5">
                        <a
                          href=""
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm hover:text-[#e3796a]"
                        >
                          Browser: Document, Events, Interfaces
                        </a>
                        <div></div>
                      </li>
                      <li className="my-1.5">
                        <a
                          href=""
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm hover:text-[#e3796a]"
                        >
                          Frames and windows
                        </a>
                        <div></div>
                      </li>
                      <li className="my-1.5">
                        <a
                          href=""
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm hover:text-[#e3796a]"
                        >
                          Binary data, files
                        </a>
                        <div></div>
                      </li>
                      <li className="my-1.5">
                        <a
                          href=""
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm hover:text-[#e3796a]"
                        >
                          Network requests
                        </a>
                        <div></div>
                      </li>
                      <li className="my-1.5">
                        <a
                          href=""
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm hover:text-[#e3796a]"
                        >
                          Storing data in the browser
                        </a>
                        <div></div>
                      </li>
                      <li className="my-1.5">
                        <a
                          href=""
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm hover:text-[#e3796a]"
                        >
                          Animation
                        </a>
                        <div></div>
                      </li>
                      <li className="my-1.5">
                        <a
                          href=""
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm hover:text-[#e3796a]"
                        >
                          Web components
                        </a>
                        <div></div>
                      </li>
                      <li className="my-1.5">
                        <a
                          href=""
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm hover:text-[#e3796a]"
                        >
                          Regular expressions
                        </a>
                        <div></div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="last-of-type:pb-3">
              <li className="my-1.5 ml-[3px]">
                <h1 className="flex w-full relative select-text items-center justify-between rounded-md pl-2 py-1 text-left text-sm font-medium text-[#556E6D]">
                  Share
                </h1>
                <div>
                  <div className="relative">
                  <div className="flex">
                    <p className="md:ml-3 md:my-3 text-[#71BAF2] hover:text-[#2092EB]"> <BsTwitter size={28}/></p>
                    <p className="md:ml-3 md:my-3 text-[#8C9CC2] hover:text-[#576EA4]"> <PiFacebookLogoFill size={28}/> </p>
                    </div>
                    <ul className="last-of-type:mb-0 px-0.5 mb-8">
                      <li className="my-1.5">
                        <a
                          href=""
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm hover:text-[#e3796a]"
                        >
                          Edit on Github
                        </a>
                      </li>
                    </ul>
                    <div
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none"
                    ></div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="md:flex-row hidden md:flex md:mt-5">
        <div className="md:flex-row md:space-y-8">
          <p className="text-[#868D9A] md:ml-5 hover:rounded-full dark:hover:bg-[#666666] hover:bg-[#F7F4F3]">
            {" "}
            <BiMenu size={25} />
          </p>
          <p className="text-[#868D9A] md:ml-6">
            {" "}
            <BsMap size={18} />
          </p>
        </div>
      </div>
      <article className="w-full min-w-0 max-w-6xl mt-2 md:mt-10 md:mx-10 pb-10 dark:text-[#E2E3E7] ">
        <div className="flex md:mb-4 mb-2 cursor-pointer">
          <span className="text-[#868D9A] hover:text-[#e3796a]">
          <a
                href="/"
              >
                <IoHome />
              </a>
          </span>
        </div>
        <div className="prose prose-vercel max-w-none select-text">
          <h1 className="break-words md:text-3xl text-2xl mb-3 md:mb-5 font-bold">
            The JavaScript Language
          </h1>
          <p className="md:text-base md:mb-4 mb-3">
            Here we learn JavaScript, starting from scratch and go on to
            advanced concepts like OOP.
          </p>
          <p className="md:text-base md:mb-4 mb-3">
            We concentrate on the language itself here, with the minimum of
            environment-specific notes.
          </p>
          <div className="border-4 rounded dark:border-[#35383F]">
            <ul className="list-decimal divide-y dark:divide-[#35383F] text-[#556E6D] md:mt-5 mt-3 ml-10 space-y-5">
              <li>
                <div className="md:justify-start">
                  <span className="text-[#84a0ef] hover:text-[#e3796a] ml-3 hover:border-b hover:border-[#e3796a]">
                    <Links url="" text="An introduction" />
                  </span>
                </div>
              </li>
              <li>
                <div className="md:mt-3 mt-1">
                  <span className="text-[#84a0ef] hover:text-[#e3796a] ml-3 hover:border-b hover:border-[#e3796a]">
                    <Links url="" text="Javascript Fundamentals" />
                  </span>
                </div>
              </li>
              <li>
                <div className="md:mt-3 mt-1">
                  <span className="text-[#84a0ef] hover:text-[#e3796a] ml-3 hover:border-b hover:border-[#e3796a]">
                    <Links url="" text="Code quality" />
                  </span>
                </div>
              </li>
              <li>
                <div className="md:mt-3 mt-1">
                  <span className="text-[#84a0ef] hover:text-[#e3796a] ml-3 hover:border-b hover:border-[#e3796a]">
                    <Links url="" text="Objects: the basics" />
                  </span>
                </div>
              </li>
              <li>
                <div className="md:mt-3 mt-1">
                  <span className="text-[#84a0ef] hover:text-[#e3796a] ml-3 hover:border-b hover:border-[#e3796a]">
                    <Links url="" text="Data types" />
                  </span>
                </div>
              </li>
              <li>
                <div className="md:mt-3 mt-1">
                  <span className="text-[#84a0ef] hover:text-[#e3796a] ml-3 hover:border-b hover:border-[#e3796a]">
                    <Links url="" text="Advanced working with functions" />
                  </span>
                </div>
              </li>
              <li>
                <div className="md:mt-3 mt-1">
                  <span className="text-[#84a0ef] hover:text-[#e3796a] ml-3 hover:border-b hover:border-[#e3796a]">
                    <Links url="" text="Object properties configuration" />
                  </span>
                </div>
              </li>
              <li>
                <div className="md:mt-3 mt-1">
                  <span className="text-[#84a0ef] hover:text-[#e3796a] ml-3 hover:border-b hover:border-[#e3796a]">
                    <Links url="" text="Prototypes, inheritance" />
                  </span>
                </div>
              </li>
              <li>
                <div className="md:mt-3 mt-1">
                  <span className="text-[#84a0ef] hover:text-[#e3796a] ml-3 hover:border-b hover:border-[#e3796a]">
                    <Links url="" text="Classes" />
                  </span>
                </div>
              </li>
              <li>
                <div className="md:mt-3 mt-1">
                  <span className="text-[#84a0ef] hover:text-[#e3796a] ml-3 hover:border-b hover:border-[#e3796a]">
                    <Links url="" text="Error handling" />
                  </span>
                </div>
              </li>
              <li>
                <div className="md:mt-3 mt-1">
                  <span className="text-[#84a0ef] hover:text-[#e3796a] ml-3 hover:border-b hover:border-[#e3796a]">
                    <Links url="" text="Promises, async/await" />
                  </span>
                </div>
              </li>
              <li>
                <div className="md:mt-3 mt-1">
                  <span className="text-[#84a0ef] hover:text-[#e3796a] ml-3 hover:border-b hover:border-[#e3796a]">
                    <Links url="" text="Generators, advanced iteration" />
                  </span>
                </div>
              </li>
              <li>
                <div className="md:mt-3 mt-1">
                  <span className="text-[#84a0ef] hover:text-[#e3796a] ml-3 hover:border-b hover:border-[#e3796a]">
                    <Links url="" text="Modules" />
                  </span>
                </div>
              </li>
              <li>
                <div className="md:mt-3 mt-1 md:mb-3 mb-1">
                  <span className="text-[#84a0ef] hover:text-[#e3796a] ml-3 hover:border-b hover:border-[#e3796a]">
                    <Links url="" text="Miscellaneous" />
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </article>
      <div className="hidden md:flex md:mr-6 md:mt-60 lg:mt-80">
        <p className="text-[#868D9A] hover:rounded-l-lg dark:hover:bg-[#666666] hover:bg-[#F7F4F3] w-14 h-12">
          {" "}
          <IoIosArrowForward size={45} />
        </p>
      </div>
    </div>
  );
}
