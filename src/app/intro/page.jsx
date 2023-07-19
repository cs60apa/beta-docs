import React from "react";

export default function Intro() {
  return (
    <main>
      <div className="relaive max-w-screen-xl px-4 py-10 mx-auto md:flex md:py-10 md:flex-row">
      <div className="sticky hidden md:flex w-[284px] md:shrink-0 top-[121px] h-[calc(100vh-121px)] md:flex-col md:justify-between bg-[#292C31]">
          <div className="overflow-hidden relative">
            <nav className="h-[calc(100vh-200px)] styled-scrollbar overflow-y-scroll flex flex-col pr-2 pb-4">
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 h-3 bg-gradient-to-b from-gray-0 w-full z-10 pointer-events-none"
              ></div>
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-3 bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none"
              ></div>
              <ul className="last-of-type:pb-3">
                <li className="my-1.5 ml-[3px]" data-active="false">
                  <h1 className="flex w-full relative select-text items-center justify-between rounded-md pl-2 py-1 text-left text-sm font-medium text-[#556E6D]">
                    Chapter
                  </h1>
                  <div>
                    <div className="relative">
                      <ul className="last-of-type:mb-0 px-0.5 mb-8">
                        <li className="my-1.5">
                          <a
                            href=""
                            className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm hover:text-[#e3796a]"
                          >
                            An Introduction
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
              <ul className="last-of-type:pb-3">
                <li className="my-1.5 ml-[3px]">
                  <h1 className="flex w-full relative select-text items-center justify-between rounded-md pl-2 py-1 text-left text-sm font-medium text-[#556E6D]">
                    Lesson navigation
                  </h1>
                  <div>
                    <div className="relative">
                      <ul className="last-of-type:mb-0 px-0.5 mb-8">
                        <li className="my-1.5">
                          <a
                            href=""
                            className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm hover:text-[#e3796a]"
                          >
                            What is Javacsript?
                          </a>
                          <div></div>
                        </li>
                        <li className="my-1.5">
                          <a
                            href=""
                            className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm hover:text-[#e3796a]"
                          >
                            What can in-browser Javascript do?
                          </a>
                          <div></div>
                        </li>
                        <li className="my-1.5">
                          <a
                            href=""
                            className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm hover:text-[#e3796a]"
                          >
                            What CAN'T in-browser Javascript do?
                          </a>
                          <div></div>
                        </li>
                        <li className="my-1.5">
                          <a
                            href=""
                            className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm hover:text-[#e3796a]"
                          >
                            What makes Javascript unique?
                          </a>
                          <div></div>
                        </li>
                        <li className="my-1.5">
                          <a
                            href=""
                            className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm hover:text-[#e3796a]"
                          >
                            Languages "over" Javacsript
                          </a>
                          <div></div>
                        </li>
                        <li className="my-1.5">
                          <a
                            href=""
                            className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm hover:text-[#e3796a]"
                          >
                            Summary
                          </a>
                          <div></div>
                        </li>
                        <li className="my-1.5">
                          <a
                            href=""
                            className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm hover:text-[#e3796a]"
                          >
                            Comments
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
        <article className="w-full min-w-0 max-w-6xl mt-4 px-1 md:px-6">
          <div className="prose prose-vercel max-w-none">
            <h1 className="break-words">An Introduction to Javascript</h1>
            <p>
              Lets see whats so special about JavaScript, what we can achieve
              with it, and what other technologies play well with it.
            </p>
            <h2>What is Javascript</h2>
            <p>
              JavaScript was initially created to “make web pages alive”. The
              programs in this language are called scripts. They can be written
              right in a web page's HTML and run automatically as the page
              loads. Scripts are provided and executed as plain text. They don't
              need special preparation or compilation to run. In this aspect,
              JavaScript is very different from another language called Java.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
