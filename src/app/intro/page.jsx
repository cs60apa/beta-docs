import React from "react";
import Links from "../components/Links";
import { BsInfoCircleFill } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BiCalendar } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { BsMap } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsTwitter } from "react-icons/bs";
import { PiFacebookLogoFill } from "react-icons/pi";

export default function Intro() {
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
                    <div className="flex">
                      <p className="md:ml-3 md:my-3 text-[#71BAF2] hover:text-[#2092EB]">
                        {" "}
                        <BsTwitter size={28} />{" "}
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
            <a href="/getting-started">
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
            An Introduction to Javascript
          </h1>
          <p className="md:text-base md:mb-5 mb-4">
            Lets see whats so special about JavaScript, what we can achieve with
            it, and what other technologies play well with it.
          </p>
          <h2 className="md:text-2xl text-xl font-bold md:mb-3 mb-2 hover:text-[#666666] hover:underline hover:underline-offset-8">
            What is Javascript?
          </h2>
          <div className="space-y-3">
            <p>
              <span className="italic">JavaScript</span> was initially created
              to “make web pages alive”.
            </p>
            <p>
              The programs in this language are called scripts. They can be
              written right in a web page's HTML and run automatically as the
              page loads.
            </p>
            <p>
              Scripts are provided and executed as plain text. They don't need
              special preparation or compilation to run.
            </p>
            <p>
              In this aspect, JavaScript is very different from another language
              called{" "}
              <a
                href="https://en.wikipedia.org/wiki/Java_(programming_language)"
                className="text-[#84a0ef] hover:text-[#e3796a]"
              >
                Java.
              </a>
            </p>
            <div className="border-4 rounded dark:border-[#35383F]">
              <p className=" flex md:text-base font-bold md:mt-5 mt-3 ml-3 md:ml-5">
                <span className="mt-1 mr-2 text-[#2A88B7]">
                  <BsInfoCircleFill />
                </span>{" "}
                Why is it called JavaScript?
              </p>
              <p className="md:mt-3 mt-2 mx-3 md:mx-5">
                When JavaScript was created, it initially had another name:
                “LiveScript”. But Java was very popular at that time, so it was
                decided that positioning a new language as a “younger brother”
                of Java would help.
              </p>
              <p className="md:my-3 mt-2 mx-3 mb-2 md:mx-5">
                But as it evolved, JavaScript became a fully independent
                language with its own specification called{" "}
                <a
                  href="https://en.wikipedia.org/wiki/ECMAScript"
                  className="text-[#84a0ef] hover:text-[#e3796a]"
                >
                  ECMAScript
                </a>
                , and now it has no relation to Java at all.
              </p>
            </div>
            <p>
              Today, JavaScript can execute not only in the browser, but also on
              the server, or actually on any device that has a special program
              called{" "}
              <a
                href="https://en.wikipedia.org/wiki/JavaScript_engine"
                className="text-[#84a0ef] hover:text-[#e3796a]"
              >
                the JavaScript engine.
              </a>
            </p>
            <p>
              The browser has an embedded engine sometimes called a “JavaScript
              virtual machine”.
            </p>
            <p>Different engines have different “codenames”. For example: </p>
            <ul className="list-disc space-y-2 md:mt-3 mt-2 ml-4">
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/V8_(JavaScript_engine)"
                  className="text-[#84a0ef] hover:text-[#e3796a]"
                >
                  V8{" "}
                </a>{" "}
                -- in Chrome, Opera and Edge.
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/SpiderMonkey"
                  className="text-[#84a0ef] hover:text-[#e3796a]"
                >
                  SpiderMonkey
                </a>{" "}
                -- in Firefox.
              </li>
              <li>
                …There are other codenames like “Chakra” for IE,
                “JavaScriptCore”, “Nitro” and “SquirrelFish” for Safari, etc.
              </li>
            </ul>
            <p>
              The terms above are good to remember because they are used in
              developer articles on the internet. We`ll use them too. For
              instance, if “a feature X is supported by V8”, then it probably
              works in Chrome, Opera and Edge.
            </p>
            <div className="border-4 rounded dark:border-[#35383F]">
              <p className=" flex md:text-base font-bold md:mt-5 mt-3 ml-3 md:ml-5">
                <span className="mt-1 mr-2 text-[#2A88B7]">
                  <BsInfoCircleFill />
                </span>{" "}
                How do engines work?
              </p>
              <p className="md:mt-3 mt-2 mx-3 md:mx-5">
                Engines are complicated. But the basics are easy.{" "}
              </p>
              <ul className="list-decimal md:mt-3 mt-2 mx-3 md:mx-5 space-y-2">
                <li>
                  The engine (embedded if it`s a browser) reads (“parses”) the
                  script.
                </li>
                <li>
                  Then it converts (“compiles”) the script to machine code.
                </li>
                <li>And then the machine code runs, pretty fast.</li>
              </ul>
              <p className="md:my-3 my-2 mx-3 md:mx-5">
                The engine applies optimizations at each step of the process. It
                even watches the compiled script as it runs, analyzes the data
                that flows through it, and further optimizes the machine code
                based on that knowledge.
              </p>
            </div>
          </div>
          <div className="space-y-3 md:mt-5 mt-3">
            <h1 className="md:text-2xl text-xl font-bold md:mb-3 mb-2 hover:text-[#666666] hover:underline hover:underline-offset-8">
              What can in-browser JavaScript do?
            </h1>
            <p>
              Modern JavaScript is a “safe” programming language. It does not
              provide low-level access to memory or the CPU, because it was
              initially created for browsers which do not require it.
            </p>
            <p>
              JavaScript`s capabilities greatly depend on the environment it`s
              running in. For instance, Node.js supports functions that allow
              JavaScript to read/write arbitrary files, perform network
              requests, etc.
            </p>
            <p>
              In-browser JavaScript can do everything related to webpage
              manipulation, interaction with the user, and the webserver.
            </p>
            <p>For instance, in-browser JavaScript is able to: </p>
            <ul className="list-disc space-y-2 md:mt-3 mt-2 ml-4">
              <li>
                Add new HTML to the page, change the existing content, modify
                styles.
              </li>
              <li>
                React to user actions, run on mouse clicks, pointer movements,
                key presses.
              </li>
              <li>
                Send requests over the network to remote servers, download and
                upload files (so-called AJAX and COMET technologies).
              </li>
              <li>
                Get and set cookies, ask questions to the visitor, show
                messages.
              </li>
              <li>Remember the data on the client-side (“local storage”).</li>
            </ul>
          </div>
          <div className="space-y-3 md:mt-5 mt-3">
            <a
              href=""
              className="md:text-2xl text-xl font-bold md:mb-3 mb-2 hover:text-[#666666] hover:underline hover:underline-offset-8"
            >
              What CAN`T in-browser JavaScript do?
            </a>
            <p>
              JavaScript`s abilities in the browser are limited to protect the
              user`s safety. The aim is to prevent an evil webpage from
              accessing private information or harming the user`s data.
            </p>
            <p>Examples of such restrictions include: </p>
            <ul className="list-disc space-y-2 md:mt-3 mt-2 ml-4">
              <li className=" space-y-2">
                <p>
                  JavaScript on a webpage may not read/write arbitrary files on
                  the hard disk, copy them or execute programs. It has no direct
                  access to OS functions.
                </p>
                <p>
                  Modern browsers allow it to work with files, but the access is
                  limited and only provided if the user does certain actions,
                  like “dropping” a file into a browser window or selecting it
                  via an
                </p>
                <p>
                  There are ways to interact with the camera/microphone and
                  other devices, but they require a user`s explicit permission.
                  So a JavaScript-enabled page may not sneakily enable a
                  web-camera, observe the surroundings and send the information
                  to the NSA.
                </p>
              </li>
              <li className=" space-y-2">
                <p>
                  Different tabs/windows generally do not know about each other.
                  Sometimes they do, for example when one window uses JavaScript
                  to open the other one. But even in this case, JavaScript from
                  one page may not access the other page if they come from
                  different sites (from a different domain, protocol or port).
                </p>
                <p>
                  This is called the “Same Origin Policy”. To work around that,
                  both pages must agree for data exchange and must contain
                  special JavaScript code that handles it. We`ll cover that in
                  the tutorial.
                </p>
                <p>
                  This limitation is, again, for the user`s safety. A page from
                  http://anysite.com which a user has opened must not be able to
                  access another browser tab with the URL http://gmail.com, for
                  example, and steal information from there.
                </p>
              </li>
              <li>
                JavaScript can easily communicate over the net to the server
                where the current page came from. But its ability to receive
                data from other sites/domains is crippled. Though possible, it
                requires explicit agreement (expressed in HTTP headers) from the
                remote side. Once again, that`s a safety limitation.
              </li>
            </ul>
            <p></p>
            <p>
              Such limitations do not exist if JavaScript is used outside of the
              browser, for example on a server. Modern browsers also allow
              plugins/extensions which may ask for extended permissions.
            </p>
          </div>
          <div className="space-y-3 md:mt-5 mt-3">
            <h1 className="md:text-2xl text-xl font-bold md:mb-3 mb-2 hover:text-[#666666] hover:underline hover:underline-offset-8 ">
              What makes JavaScript unique?
            </h1>
            <p>There are at least three great things about JavaScript:</p>
            <div className="border-4 rounded dark:border-[#35383F]">
              <ul className="list-disc space-y-2 md:mt-3 my-2 ml-4 md:ml-8">
                <li>Full integration with HTML/CSS.</li>
                <li>Simple things are done simply.</li>
                <li>Supported by all major browsers and enabled by default.</li>
              </ul>
            </div>
            <p>
              JavaScript is the only browser technology that combines these
              three things.
            </p>
            <p>
              That`s what makes JavaScript unique. That`s why it`s the most
              widespread tool for creating browser interfaces.
            </p>
            <p>
              That said, JavaScript can be used to create servers, mobile
              applications, etc.
            </p>
          </div>
          <div className="space-y-3 md:mt-5 mt-3">
            <h1 className="md:text-2xl text-xl font-bold md:mb-3 mb-2 hover:text-[#666666] hover:underline hover:underline-offset-8 ">
              Languages “over” JavaScript
            </h1>
            <p>
              The syntax of JavaScript does not suit everyone`s needs. Different
              people want different features.
            </p>
            <p>
              That`s to be expected, because projects and requirements are
              different for everyone.
            </p>
            <p>
              So, recently a plethora of new languages appeared, which are
              transpiled (converted) to JavaScript before they run in the
              browser.
            </p>
            <p>
              Modern tools make the transpilation very fast and transparent,
              actually allowing developers to code in another language and
              auto-converting it “under the hood”.
            </p>
            <p>Examples of such languages: </p>
            <ul className="list-disc space-y-2 md:mt-3 my-2 ml-4 md:ml-8">
              <li>
                {" "}
                <a
                  href=""
                  className="text-[#84a0ef] hover:text-[#e3796a] hover:border-b hover:border-[#e3796a]"
                >
                  CoffeeScript
                </a>{" "}
                is “syntactic sugar” for JavaScript. It introduces shorter
                syntax, allowing us to write clearer and more precise code.
                Usually, Ruby devs like it.
              </li>
              <li>
                {" "}
                <a
                  href=""
                  className="text-[#84a0ef] hover:text-[#e3796a] hover:border-b hover:border-[#e3796a]"
                >
                  TypeScript
                </a>{" "}
                is concentrated on adding “strict data typing” to simplify the
                development and support of complex systems. It is developed by
                Microsoft.
              </li>
              <li>
                {" "}
                <a
                  href=""
                  className="text-[#84a0ef] hover:text-[#e3796a] hover:border-b hover:border-[#e3796a]"
                >
                  Flow
                </a>{" "}
                also adds data typing, but in a different way. Developed by
                Facebook.
              </li>
              <li>
                {" "}
                <a
                  href=""
                  className="text-[#84a0ef] hover:text-[#e3796a] hover:border-b hover:border-[#e3796a]"
                >
                  Dart
                </a>{" "}
                is a standalone language that has its own engine that runs in
                non-browser environments (like mobile apps), but also can be
                transpiled to JavaScript. Developed by Google.
              </li>
              <li>
                {" "}
                <a
                  href=""
                  className="text-[#84a0ef] hover:text-[#e3796a] hover:border-b hover:border-[#e3796a]"
                >
                  Brython
                </a>{" "}
                is a Python transpiler to JavaScript that enables the writing of
                applications in pure Python without JavaScript.
              </li>
              <li>
                {" "}
                <a
                  href=""
                  className="text-[#84a0ef] hover:text-[#e3796a] hover:border-b hover:border-[#e3796a]"
                >
                  Kotlin
                </a>{" "}
                is a modern, concise and safe programming language that can
                target the browser or Node.
              </li>
            </ul>
            <p>
              There are more. Of course, even if we use one of these transpiled
              languages, we should also know JavaScript to really understand
              what we`re doing.
            </p>
          </div>
          <div className="space-y-3 md:mt-5 mt-3">
            <h1 className="md:text-2xl text-xl font-bold md:mb-3 mb-2 hover:text-[#666666] hover:underline hover:underline-offset-8 ">
              Summary
            </h1>
            <ul className="list-disc space-y-2 md:mt-3 my-2 ml-4 md:ml-8">
              <li>
                JavaScript was initially created as a browser-only language, but
                it is now used in many other environments as well.
              </li>
              <li>
                Today, JavaScript has a unique position as the most
                widely-adopted browser language, fully integrated with HTML/CSS.
              </li>
              <li>
                There are many languages that get “transpiled” to JavaScript and
                provide certain features. It is recommended to take a look at
                them, at least briefly, after mastering JavaScript.
              </li>
            </ul>
          </div>
        </div>
      </article>
      <div className="hidden md:flex md:mt-5">
        <span className="md:mt-72 text-[#868D9A] hover:rounded-l-lg dark:hover:bg-[#666666] hover:bg-[#F7F4F3] w-14 h-12">
          <a href="/manuals-specifications">
            <IoIosArrowForward size={45} />
          </a>
        </span>
      </div>
    </div>
  );
}
