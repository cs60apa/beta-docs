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
                          Specification
                        </a>
                        <div></div>
                      </li>
                      <li className="my-1.5">
                        <a
                          href=""
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm hover:text-[#e3796a]"
                        >
                          Manuals
                        </a>
                        <div></div>
                      </li>
                      <li className="my-1.5">
                        <a
                          href=""
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm hover:text-[#e3796a]"
                        >
                          Compatibility tables
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
            <a href="/intro">
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
            Manuals and specifications
          </h1>
          <p className="md:text-base md:mb-5 mb-4">
            This book is a <span className="italic">tutorial</span>. It aims to
            help you gradually learn the language. But once you`re familiar with
            the basics, you`ll need other resources.
          </p>
          <div className="space-y-3">
            <h2 className="md:text-2xl text-xl font-bold md:mb-3 mb-2 hover:text-[#666666] hover:underline hover:underline-offset-8">
              Specification
            </h2>
            <p>
              <a
                href=""
                className="text-[#84a0ef] hover:text-[#e3796a] hover:border-b hover:border-[#e3796a]"
              >
                The ECMA-262 specification
              </a>{" "}
              contains the most in-depth, detailed and formalized information
              about JavaScript. It defines the language.
            </p>
            <p>
              But being that formalized, it`s difficult to understand at first.
              So if you need the most trustworthy source of information about
              the language details, the specification is the right place. But
              it`s not for everyday use.
            </p>
            <p>
              A new specification version is released every year. Between these
              releases, the latest specification draft is at
              <a
                href="https://tc39.es/ecma262/"
                className="text-[#84a0ef] hover:text-[#e3796a] hover:border-b hover:border-[#e3796a]"
              >
                https://tc39.es/ecma262/.
              </a>
            </p>
            <p>
              To read about new bleeding-edge features, including those that are
              “almost standard” (so-called “stage 3”), see proposals at
              <a
                href=" https://github.com/tc39/proposals"
                className="text-[#84a0ef] hover:text-[#e3796a] hover:border-b hover:border-[#e3796a]"
              >
                https://github.com/tc39/proposals.
              </a>
            </p>
            <p>
              Also, if you`re developing for the browser, then there are other
              specifications covered in the{" "}
              <a
                href=""
                className="text-[#84a0ef] hover:text-[#e3796a] hover:border-b hover:border-[#e3796a]"
              >
                second part
              </a>{" "}
              of the tutorial.
            </p>
          </div>
          <div className="space-y-5 md:mt-5 mt-2">
            <h2 className="md:text-2xl text-xl font-bold md:mb-4 mb-2 hover:text-[#666666] hover:underline hover:underline-offset-8">
              Manuals
            </h2>
            <ul className="list-disc space-y-3 md:mt-3 mt-2 ml-4">
              <li>
                <p>
                  <strong>MDN (Mozilla) JavaScript Reference</strong> is the
                  main manual with examples and other information. It`s great to
                  get in-depth information about individual language functions,
                  methods etc.
                </p>
                <p className="md:mt-2">
                  You can find it at{" "}
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference"
                    className="text-[#84a0ef] hover:text-[#e3796a] hover:border-b hover:border-[#e3796a]"
                  >
                    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
                  </a>
                </p>
              </li>
            </ul>
            <p>
              Although, it`s often best to use an internet search instead. Just
              use “MDN [term]” in the query, e.g.{" "}
              <a
                href="https://google.com/search?q=MDN+parseInt "
                className="text-[#84a0ef] hover:text-[#e3796a]hover:border-b hover:border-[#e3796a] "
              >
                https://google.com/search?q=MDN+parseInt
              </a>{" "}
              to search for the parseInt function.
            </p>
          </div>
          <div className="space-y-5 md:mt-5 mt-2">
            <h2 className="md:text-2xl text-xl font-bold md:mb-4 mb-2 hover:text-[#666666] hover:underline hover:underline-offset-8">
              Compatibilty tables
            </h2>
            <p>
              JavaScript is a developing language, new features get added
              regularly.
            </p>
            <p>
              To see their support among browser-based and other engines, see:{" "}
            </p>
            <ul className="list-disc space-y-3 md:mt-3 mt-2 ml-4">
              <li>
                <a
                  href="https://caniuse.com"
                  className="text-[#84a0ef] hover:text-[#e3796a] hover:border-b hover:border-[#e3796a]"
                >
                  https://caniuse.com
                </a>{" "}
                -- per-feature tables of support, e.g. to see which engines
                support modern cryptography functions:{" "}
                <a
                  href="https://caniuse.com/#feat=cryptography"
                  className="text-[#84a0ef] hover:text-[#e3796a] hover:border-b hover:border-[#e3796a]"
                >
                  https://caniuse.com/#feat=cryptography.
                </a>
              </li>
              <li>
                <a
                  href="https://kangax.github.io/compat-table"
                  className="text-[#84a0ef] hover:text-[#e3796a] hover:border-b hover:border-[#e3796a]"
                >
                  https://kangax.github.io/compat-table
                </a>{" "}
                -- a table with language features and engines that support those
                or don`t support.
              </li>
            </ul>
            <p>
              All these resources are useful in real-life development, as they
              contain valuable information about language details, their
              support, etc.
            </p>
            <p>
              Please remember them (or this page) for the cases when you need
              in-depth information about a particular feature.
            </p>
          </div>
        </div>
      </article>
      <div className="hidden md:flex md:mr-6 md:mt-60 lg:mt-80">
        <span className="text-[#868D9A] hover:rounded-l-lg dark:hover:bg-[#666666] hover:bg-[#F7F4F3] w-14 h-12">
          <a href="/code-editors">
            <IoIosArrowForward size={45} />
          </a>
        </span>
      </div>
    </div>
  );
}
