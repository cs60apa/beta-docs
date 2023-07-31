"use client";
import React from "react";
import Links from "../components/Links";
import { BiMenu } from "react-icons/bi";
import { BsMap } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BiCalendar } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { PiFacebookLogoFill } from "react-icons/pi";

export default function Manuals() {
  return (
    <div className="relative max-w-screen-xl mx-auto md:flex md:flex-row">
      <div className="hidden md:flex w-[284px] md:shrink-0 top-[121px] md:flex-col md:border-r-1 md:justify-between dark:bg-[#292C31] bg-[#F7F4F3]">
        <div className="overflow-hidden relative sticky top-0">
          <nav className="max-h-full flex flex-col pr-2 pl-3 pb-4 pt-5">
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
                          IDE
                        </a>
                        <div></div>
                      </li>
                      <li className="my-1.5">
                        <a
                          href=""
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm hover:text-[#e3796a]"
                        >
                          Lightweight editors
                        </a>
                        <div></div>
                      </li>
                      <li className="my-1.5">
                        <a
                          href=""
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm hover:text-[#e3796a]"
                        >
                          Let's not argue
                        </a>
                        <div></div>
                      </li>
                      <li className="my-1.5">
                        <a
                          href=""
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-2 text-left text-sm hover:text-[#e3796a]"
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
                    <div className="flex">
                      <p className="md:ml-3 md:my-3 text-[#71BAF2] hover:text-[#2092EB]">
                        {" "}
                        <BsTwitter size={28} />
                      </p>
                      <p className="md:ml-3 md:my-3 text-[#8C9CC2] hover:text-[#576EA4]">
                        {" "}
                        <PiFacebookLogoFill size={28} />{" "}
                      </p>
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
        <div className="md:flex-row md:space-y-8 ">
          <p className="text-[#868D9A] md:ml-5 hover:rounded-full hover:bg-[#666666]">
            {" "}
            <BiMenu size={25} />
          </p>
          <p className="text-[#868D9A] md:ml-6">
            {" "}
            <BsMap size={18} />
          </p>
        </div>
        <div className="hidden md:flex md:mt-72 ">
          <span className="text-[#868D9A] hover:rounded-l-lg dark:hover:bg-[#666666] hover:bg-[#F7F4F3] w-14 h-12">
            <a href="/manuals-specifications">
              <IoIosArrowBack size={45} />
            </a>
          </span>
        </div>
      </div>
      <article className="w-full min-w-0 max-w-6xl mt-2 md:mt-10 md:mx-10 pb-10 dark:text-[#E2E3E7]">
        <div className="md:grid md:grid-flow-col">
          <div className="flex md:mb-4 mb-2 cursor-pointer">
            <span className="text-[#868D9A] hover:text-[#e3796a] md:mr-2 mr-1">
              <a href="/">
                <IoHome />
              </a>
            </span>
            <span className="mt-1 md:mr-2 mr-1">
              {" "}
              <HiOutlineArrowNarrowRight />{" "}
            </span>
            <span className="text-[#84a0ef] md:text-sm md:mr-2 mr-1 hover:text-[#e3796a] hover:border-b hover:border-[#e3796a]">
              <Links url="/js" text="The Javascript language" />
            </span>
            <span className="mt-1 md:mr-2 mr-1">
              {" "}
              <HiOutlineArrowNarrowRight />{" "}
            </span>
            <span className="text-[#84a0ef] md:text-sm md:mr-10 mr-1 hover:text-[#e3796a] hover:border-b hover:border-[#e3796a]">
              <Links url="/getting-started" text="An introduction" />
            </span>
          </div>
          <div className="flex text-[#868D9A] md:mr-1 justify-end">
            {" "}
            <BiCalendar size={20} /> July 8, 2023
          </div>
        </div>
        <div className="prose prose-vercel max-w-none select-text">
          <h1 className="break-words md:text-3xl text-2xl mb-3 md:mb-5 font-bold">
            Code editors
          </h1>
          <p className="md:text-base md:mb-5 mb-4">
            A code editor is the place where programmers spend most of their
            time.
          </p>
          <p className="md:text-base md:mb-5 mb-4">
            There are two main types of code editors: IDEs and lightweight
            editors. Many people use one tool of each type.
          </p>
          <div className="space-y-3">
            <h2 className="md:text-2xl text-xl font-bold md:mb-3 mb-2 hover:text-[#666666] hover:underline hover:underline-offset-8">
              IDE
            </h2>
            <p>
              The term{" "}
              <a
                href="https://en.wikipedia.org/wiki/Integrated_development_environment"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#84a0ef] hover:text-[#e3796a] hover:border-b hover:border-[#e3796a]"
              >
                IDE
              </a>{" "}
              (Integrated Development Environment) refers to a powerful editor
              with many features that usually operates on a “whole project.” As
              the name suggests, it`s not just an editor, but a full-scale
              “development environment.”
            </p>
            <p>
              An IDE loads the project (which can be many files), allows
              navigation between files, provides autocompletion based on the
              whole project (not just the open file), and integrates with a
              version management system (like{" "}
              <a
                href="https://git-scm.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#84a0ef] hover:text-[#e3796a] hover:border-b hover:border-[#e3796a]"
              >
                git
              </a>
              ), a testing environment, and other “project-level” stuff.
            </p>
            <p>
              If you haven`t selected an IDE yet, consider the following
              options:{" "}
            </p>
            <ul className="list-disc space-y-3 md:mt-3 mt-2 ml-4">
              <li>
                <a
                  href="https://code.visualstudio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#84a0ef] hover:text-[#e3796a] hover:border-b hover:border-[#e3796a]"
                >
                  Visual Studio Code
                </a>{" "}
                (cross-platform, free).
              </li>
              <li>
                <a
                  href="https://www.jetbrains.com/webstorm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#84a0ef] hover:text-[#e3796a] hover:border-b hover:border-[#e3796a]"
                >
                  WebStorm
                </a>{" "}
                (cross-platform, paid).
              </li>
            </ul>
            <p>
              For Windows, there`s also “Visual Studio”, not to be confused with
              “Visual Studio Code”. “Visual Studio” is a paid and mighty
              Windows-only editor, well-suited for the .NET platform. It`s also
              good at JavaScript. There`s also a free version{" "}
              <a
                href="https://visualstudio.microsoft.com/vs/community/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#84a0ef] hover:text-[#e3796a] hover:border-b hover:border-[#e3796a]"
              >
                Visual Studio Community
              </a>
              .
            </p>
            <p>
              Many IDEs are paid, but have a trial period. Their cost is usually
              negligible compared to a qualified developer`s salary, so just
              choose the best one for you.
            </p>
          </div>
          <div className="space-y-3 md:mt-5 mt-2">
            <h2 className="md:text-2xl text-xl font-bold md:mb-3 mb-2 hover:text-[#666666] hover:underline hover:underline-offset-8">
              Lightweight editors
            </h2>
            <p>
              “Lightweight editors” are not as powerful as IDEs, but they`re
              fast, elegant and simple.
            </p>
            <p>They are mainly used to open and edit a file instantly</p>
            <p>
              The main difference between a “lightweight editor” and an “IDE” is
              that an IDE works on a project-level, so it loads much more data
              on start, analyzes the project structure if needed and so on. A
              lightweight editor is much faster if we need only one file.
            </p>
            <p>
              In practice, lightweight editors may have a lot of plugins
              including directory-level syntax analyzers and autocompleters, so
              there`s no strict border between a lightweight editor and an IDE.
            </p>
            <p>There are many options, for instance: </p>
            <ul className="list-disc space-y-3 md:mt-3 mt-2 ml-4">
              <li>
                <a
                  href="https://www.sublimetext.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#84a0ef] hover:text-[#e3796a] hover:border-b hover:border-[#e3796a]"
                >
                  Sublime Text
                </a>{" "}
                (cross-platform, shareware)
              </li>
              <li>
                {" "}
                <a
                  href="https://notepad-plus-plus.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#84a0ef] hover:text-[#e3796a] hover:border-b hover:border-[#e3796a]"
                >
                  Notepad++
                </a>{" "}
                (Windows, free).
              </li>
              <li>
                <a
                  href="https://www.vim.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#84a0ef] hover:text-[#e3796a] hover:border-b hover:border-[#e3796a]"
                >
                  Vim
                </a>{" "}
                and{" "}
                <a
                  href="https://www.gnu.org/software/emacs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#84a0ef] hover:text-[#e3796a] hover:border-b hover:border-[#e3796a]"
                >
                  Emacs
                </a>{" "}
                are also cool if you know how to use them.
              </li>
            </ul>
          </div>
          <div className="space-y-3 md:mt-5 mt-2">
            <h2 className="md:text-2xl text-xl font-bold md:mb-3 mb-2 hover:text-[#666666] hover:underline hover:underline-offset-8">
              Let`s not argue
            </h2>
            <p>
              The editors in the lists above are those that either I or my
              friends whom I consider good developers have been using for a long
              time and are happy with.
            </p>
            <p>
              There are other great editors in our big world. Please choose the
              one you like the most.
            </p>
            <p>
              The choice of an editor, like any other tool, is individual and
              depends on your projects, habits, and personal preferences.
            </p>
            <p>The author`s personal opinion: </p>
            <ul className="list-disc space-y-3 md:mt-3 mt-2 ml-4">
              <li>
                I`d use{" "}
                <a
                  href="https://code.visualstudio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#84a0ef] hover:text-[#e3796a] hover:border-b hover:border-[#e3796a]"
                >
                  Visual Studio Code
                </a>{" "}
                if I develop mostly frontend.
              </li>
              <li>
                Otherwise, if it`s mostly another language/platform and
                partially frontend, then consider other editors, such as XCode
                (Mac), Visual Studio (Windows) or Jetbrains family (Webstorm,
                PHPStorm, RubyMine etc, depending on the language).
              </li>
            </ul>
          </div>
        </div>
      </article>
      <div className="hidden md:flex md:mr-6 md:mt-60 lg:mt-80">
        <span className="text-[#868D9A] hover:rounded-l-lg dark:hover:bg-[#666666] hover:bg-[#F7F4F3] w-14 h-12">
          <a href="/devtools">
            <IoIosArrowForward size={45} />
          </a>
        </span>
      </div>
    </div>
  );
}
