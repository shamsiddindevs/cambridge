import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {FiAlignLeft} from "react-icons/fi";
import logo from "../assets/logo.png";
import uzb from "../assets/uzb.png";
import rus from "../assets/flag.png";
import eng from "../assets/eng.png";
import {IoMdSunny} from "react-icons/io";

const Navbar = () => {
  const [lang, setLang] = useState(uzb);
  const [theme, setTheme] = useState("winter");

  // Tema o'zgarishi bilan <html> tegi class ni yangilash
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" py-3 ">
      <div className="navbar max-w-6xl mx-auto px-5 ">
        <div className=" gap-10">
          <Link to="/">
            <img
              className="w-12 lg:w-15"
              src={logo}
              alt="logo img"
            />
          </Link>
          <div className=" hidden lg:block">
            <ul className=" flex items-center gap-5 font-semibold ">
              <li>
                <Link to="/about">Biz haqimizda </Link>
              </li>
              <li>
                <Link to="/teacher">O'qituvchilar</Link>
              </li>
              <li>
                <Link to="/teacher">Kurslar</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className=" ms-auto  flex gap-3">
          {/* tilini o'zgartirish */}
          <details className="dropdown">
            <summary className="btn btn-ghost text-lg font-normal">
              <img
                className="w-5"
                src={lang}
                alt=""
              />
              <p>{lang == uzb ? "Uzb" : lang == eng ? "Eng" : "Rus"}</p>
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-24 p-2 shadow">
              <li onClick={() => setLang(uzb)}>
                <a>
                  {" "}
                  <img
                    src={uzb}
                    alt="uzb flag"
                  />
                  Uzb
                </a>
              </li>
              <li onClick={() => setLang(rus)}>
                <a>
                  {" "}
                  <img
                    src={rus}
                    alt="uzb flag"
                  />
                  Rus
                </a>
              </li>
              <li onClick={() => setLang(eng)}>
                <a>
                  {" "}
                  <img
                    src={eng}
                    alt="uzb flag"
                  />
                  Eng
                </a>
              </li>
            </ul>
          </details>

          {/* rangini o'zgartiradi */}
          <label className="swap swap-rotate btn btn-ghost">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            {/* sun icon */}
            <IoMdSunny
              onClick={() => setTheme("dracula")}
              className="swap-on h-6 w-6 fill-current"
            />

            {/* <svg
              className="swap-on h-7 w-7 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg> */}

            {/* moon icon */}
            <svg
              onClick={() => setTheme("winter")}
              className="swap-off h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          {/* button contact */}
          <Link
            className="hidden lg:block"
            to="/contact">
            <div className="btn btn-primary">Contact</div>
          </Link>
          {/* menyu */}

          <details className=" md:hiddden dropdown dropdown-bottom dropdown-end">
            <summary className="btn m-1">
              <label className="btn btn-circle swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" />

                {/* hamburger icon */}
                <svg
                  className="swap-off fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512">
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>

                {/* close icon */}
                <svg
                  className="swap-on fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512">
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              </label>
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li>
                <Link to="/about">Biz haqimizda </Link>
              </li>
              <li>
                <Link to="/teacher">O'qituvchilar</Link>
              </li>
              <li>
                <Link to="/teacher">Kurslar</Link>
              </li>
            </ul>
          </details>

          <div className="md:hidden"></div>



          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
