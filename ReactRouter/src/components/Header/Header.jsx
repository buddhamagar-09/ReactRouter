import React from "react";
import { Link, NavLink } from "react-router-dom";
import useTheme from "../Theme/ThemeContext";

export default function Header() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 shadow dark:shadow-slate-900">
      <nav className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 px-4 lg:px-6 py-2.5 transition-colors duration-300">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center text-gray-800 dark:text-white font-bold text-2xl">
            GenzKicks
          </Link>

          <div className="flex items-center lg:order-2">
            <button
              onClick={() =>
                themeMode === "light" ? darkTheme() : lightTheme()
              }
              className="text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-800 focus:ring-4 focus:ring-gray-300 dark:focus:ring-slate-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 transition-colors duration-300"
            >
              {themeMode === "light"
                ? "🌙 Dark Mode"
                : "☀️ Light Mode"}
            </button>

            <Link
              to="#"
              className="text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-800 focus:ring-4 focus:ring-gray-300 dark:focus:ring-slate-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 transition-colors duration-300"
            >
              Log in
            </Link>

            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 transition-colors duration-300"
            >
              Get started
            </Link>
          </div>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200
                    ${
                      isActive
                        ? "text-orange-700"
                        : "text-gray-700 dark:text-gray-300"
                    }
                    border-b border-gray-100 dark:border-slate-700
                    hover:bg-gray-50 dark:hover:bg-slate-800
                    lg:hover:bg-transparent lg:border-0
                    hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200
                    ${
                      isActive
                        ? "text-orange-700"
                        : "text-gray-700 dark:text-gray-300"
                    }
                    border-b border-gray-100 dark:border-slate-700
                    hover:bg-gray-50 dark:hover:bg-slate-800
                    lg:hover:bg-transparent lg:border-0
                    hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200
                    ${
                      isActive
                        ? "text-orange-700"
                        : "text-gray-700 dark:text-gray-300"
                    }
                    border-b border-gray-100 dark:border-slate-700
                    hover:bg-gray-50 dark:hover:bg-slate-800
                    lg:hover:bg-transparent lg:border-0
                    hover:text-orange-700 lg:p-0`
                  }
                >
                  About us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="github"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200
                    ${
                      isActive
                        ? "text-orange-700"
                        : "text-gray-700 dark:text-gray-300"
                    }
                    border-b border-gray-100 dark:border-slate-700
                    hover:bg-gray-50 dark:hover:bg-slate-800
                    lg:hover:bg-transparent lg:border-0
                    hover:text-orange-700 lg:p-0`
                  }
                >
                  GitHub
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}