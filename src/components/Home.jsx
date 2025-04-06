import React from "react";
import pic from "../images/home.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiTryhackme } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";
import { ReactTyped, Typed } from "react-typed";

function Home() {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl bg-gray-100 container mx-auto px-4 md:px-20 my-5 flex">
        <div className="flex flex-col-reverse md:flex-row justify-between">
          <div className="md:w-1/2 mt-4 md:mt-35 space-y-4">
            <span className="text-xl md:text-2xl">Welcome In My Feed</span>
            <div className="flex space-x-1  text-xl md:text-3xl">
              <h1>Hello, I'm a </h1>
              {/* <span className="text-blue-500 font-bold">Full Stack Developer</span> */}

              <ReactTyped
              className="text-blue-500 font-bold"
                strings={["Full Stack Developer", "Cyber Security Enthusiast"]}
                typeSpeed={70}
                backspeed={65}
                loop={true}
              />
            </div>

            <p className="text-sm md:text-lg text-justify">
              Full Stack Developer proficient in Python, JavaScript, and modern
              frameworks like Django and React. Strong understanding of RESTful
              APIs, cloud services (Firebase), and database management (SQL).
              Experienced in AI-powered web applications, cybersecurity, and
              DevOps tools. Ranked top 5% in Core Java (NPTEL) and globally 2%
              on TryHackMe. Passionate about scalable, secure, and high
              performance solutions.
            </p>
            <br />
            <h1 className="font-bold">Available on</h1>
            <ul className="flex space-x-5">
              <li>
                <a href="https://www.linkedin.com/in/chandra-shekhar--sahu/">
                  <FaLinkedin className="text-2xl cursor-pointer" />
                </a>
              </li>
              <li>
                <a href="https://github.com/ChandraShekhar-Sahu">
                  <FaGithubSquare className="text-2xl cursor-pointer" />
                </a>
              </li>
              <li>
                <a href="https://tryhackme.com/p/cssahu">
                  <SiTryhackme className="text-2xl cursor-pointer" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/nikhil_sahu2021/">
                  <FaInstagramSquare className="text-2xl cursor-pointer" />
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <img src={pic} className="rounded-full mt-18 mb-7 md:mt-22  h-90 w-90 md:h-110 md:w-110 shadow-[0_10px_30px_rgba(34,197,94,0.6)]" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
