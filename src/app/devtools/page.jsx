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
import { BsInfoCircleFill } from "react-icons/bs";

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
                          Google chrome
                        </a>
                        <div></div>
                      </li>
                      <li className="my-1.5">
                        <a
                          href=""
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm hover:text-[#e3796a]"
                        >
                          Firefox, Edge, and others
                        </a>
                        <div></div>
                      </li>
                      <li className="my-1.5">
                        <a
                          href=""
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm hover:text-[#e3796a]"
                        >
                          Safari
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
            <a href="/code-editors">
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
        <div className="prose prose-vercel max-w-none select-text space-y-3">
          <h1 className="break-words md:text-3xl text-2xl mb-3 md:mb-5 md:mt-2 font-bold">
            Developer console
          </h1>
          <p className="md:text-base">
            Code is prone to errors. You will quite likely make errors… Oh, what
            am I talking about? You are absolutely going to make errors, at
            least if you`re a human, not a{" "}
            <a
              href="https://en.wikipedia.org/wiki/Bender_(Futurama)"
              className="text-[#84a0ef] hover:text-[#e3796a] hover:border-b hover:border-[#e3796a]"
            >
              {" "}
              robot{" "}
            </a>
            .
          </p>
          <p>
            But in the browser, users don`t see errors by default. So, if
            something goes wrong in the script, we won`t see what`s broken and
            can`t fix it.
          </p>
          <p>
            To see errors and get a lot of other useful information about
            scripts, “developer tools” have been embedded in browsers.
          </p>
          <p>
            Most developers lean towards Chrome or Firefox for development
            because those browsers have the best developer tools. Other browsers
            also provide developer tools, sometimes with special features, but
            are usually playing “catch-up” to Chrome or Firefox. So most
            developers have a “favorite” browser and switch to others if a
            problem is browser-specific.
          </p>
          <p>
            Developer tools are potent; they have many features. To start, we`ll
            learn how to open them, look at errors, and run JavaScript commands.
          </p>
        </div>
        <div className="space-y-4 md:mt-5 mt-2">
          <h2 className="md:text-2xl text-xl font-bold md:mb-4 mb-2 hover:text-[#666666] hover:underline hover:underline-offset-8">
            Google chrome
          </h2>
          <p className="md:text-base">
            Open the page{" "}
            <a
              href=""
              className="text-[#84a0ef] hover:text-[#e3796a] hover:border-b hover:border-[#e3796a]"
            >
              {" "}
              bug.html{" "}
            </a>
            . <br />
            <br />
            There`s an error in the JavaScript code on it. It`s hidden from a
            regular visitor`s eyes, so let`s open developer tools to see it.
            <br />
            <br />
            Press{" "}
            <span className="box-border border-2 border-slate-50">
              {" "}
              F12{" "}
            </span>{" "}
            or, if you`re on Mac, then{" "}
            <span className="box-border border-2 border-slate-50">
              {" "}
              Cmd+Opt+J{" "}
            </span>
            .
            <br />
            <br />
            The developer tools will open on the Console tab by default.
            <br />
            <br />
            It looks somewhat like this:
          </p>
          <div>
            <p>
              <img
                src="https://javascript.info/article/devtools/chrome@2x.png"
                width={800}
                height={700}
                alt="bug.html"
              />
            </p>
          </div>
          <p>
            The exact look of developer tools depends on your version of Chrome.
            It changes from time to time but should be similar.
          </p>
          <ul className="list-disc space-y-3 md:mt-3 mt-2 ml-4">
            <li>
              Here we can see the red-colored error message. In this case, the
              script contains an unknown “lalala” command.
            </li>
            <li>
              On the right, there is a clickable link to the source{" "}
              <span className="text-[#868D9A] box-content bg-[#282A36]">
                bug.html:12
              </span>{" "}
              with the line number where the error has occurred.
            </li>
          </ul>
          <p>
            Below the error message, there is a blue{" "}
            <span className="text-[#868D9A] box-content bg-[#282A36]">
              &gt;
            </span>{" "}
            symbol. It marks a “command line” where we can type JavaScript
            commands. Press{" "}
            <span className="box-border border-2 border-slate-50"> Enter </span>{" "}
            to run them.
          </p>
          <p>
            Now we can see errors, and that`s enough for a start. We`ll come
            back to developer tools later and cover debugging more in-depth in
            the chapter
            <span className="text-[#84a0ef] hover:text-[#e3796a] ml-5 hover:border-b hover:border-[#e3796a]">
              <Links url="/debugging-chrome" text="Debugging in the browser" />
            </span>
          </p>
          <div className="border-4 rounded dark:border-[#35383F]">
            <p className=" flex md:text-base font-bold md:mt-5 mt-3 ml-3 md:ml-5">
              <span className="mt-1 mr-2 text-[#2A88B7]">
                <BsInfoCircleFill />
              </span>{" "}
              Multi-line input
            </p>
            <p className="md:mt-3 mt-2 mx-3 md:mx-5">
              Usually, when we put a line of code into the console, and then
              press{" "}
              <span className="box-border border-2 border-slate-50">
                {" "}
                Enter{" "}
              </span>
              , it executes.
            </p>
            <p className="md:mt-3 mt-2 mx-3 md:mx-5 md:mb-5">
              To insert multiple lines, press{" "}
              <span className="box-border border-2 border-slate-50">
                {" "}
                Shift+Enter{" "}
              </span>
              . This way one can enter long fragments of JavaScript code.
            </p>
          </div>
          <div className="space-y-4 md:mt-5 mt-2">
            <h2 className="md:text-2xl text-xl font-bold md:mb-4 mb-2 hover:text-[#666666] hover:underline hover:underline-offset-8">
              Firefox, Edge, and others
            </h2>
            <p>
              Most other browsers use{" "}
              <span className="box-border border-2 border-slate-50"> F12 </span>{" "}
              to open developer tools.
            </p>
            <p>
              The look & feel of them is quite similar. Once you know how to use
              one of these tools (you can start with Chrome), you can easily
              switch to another.
            </p>
          </div>
          <div className="space-y-4 md:mt-5 mt-2">
            <h2 className="md:text-2xl text-xl font-bold md:mb-4 mb-2 hover:text-[#666666] hover:underline hover:underline-offset-8">
              Safari
            </h2>
            <p>
              Safari (Mac browser, not supported by Windows/Linux) is a little
              bit special here. We need to enable the “Develop menu” first.
            </p>
            <p>
              Open Preferences and go to the “Advanced” pane. There’s a checkbox
              at the bottom:
            </p>
          </div>
          <div>
            <p>
              <img
                src="https://javascript.info/article/devtools/safari@2x.png"
                width={800}
                height={700}
                alt="safari"
              />
            </p>
          </div>
          <p>
            Now{" "}
            <span className="box-border border-2 border-slate-50">
              {" "}
              Cmd+Opt+C{" "}
            </span>{" "}
            can toggle the console. Also, note that the new top menu item named
            “Develop” has appeared. It has many commands and options.
          </p>
        </div>
        <div className="space-y-4 md:mt-5 mt-2">
          <h2 className="md:text-2xl text-xl font-bold md:mb-4 mb-2 hover:text-[#666666] hover:underline hover:underline-offset-8">
            Summary
          </h2>
          <ul className="list-disc space-y-3 md:mt-3 mt-2 ml-4">
            <li>
              Developer tools allow us to see errors, run commands, examine
              variables, and much more.
            </li>
            <li>
              They can be opened with{" "}
              <span className="box-border border-2 border-slate-50"> F12 </span>{" "}
              for most browsers on Windows. Chrome for Mac needs{" "}
              <span className="box-border border-2 border-slate-50">
                {" "}
                Cmd+Opt+J{" "}
              </span>
              , Safari:{" "}
              <span className="box-border border-2 border-slate-50">
                {" "}
                Cmd+Opt+C{" "}
              </span>{" "}
              (need to enable first).
            </li>
          </ul>
          <p>
            Now we have the environment ready. In the next section, we’ll get
            down to JavaScript.
          </p>
        </div>
      </article>
      <div className="hidden md:flex md:mr-6 md:mt-60 lg:mt-80">
        <span className="text-[#868D9A] hover:rounded-l-lg dark:hover:bg-[#666666] hover:bg-[#F7F4F3] w-14 h-12">
          <a href="">
            <IoIosArrowForward size={45} />
          </a>
        </span>
      </div>
    </div>
  );
}
