import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 border-y border-gray-200 dark:border-slate-700 transition-colors duration-300">

      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">

        <div className="md:flex md:justify-between">

          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center text-gray-800 dark:text-white font-bold text-2xl">
             GenzKicks
              
            </Link>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white uppercase">
                Resources
              </h2>

              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white uppercase">
                Follow us
              </h2>

              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/hiteshchoudhary"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Discord
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white uppercase">
                Legal
              </h2>

              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <hr className="my-6 border-gray-200 dark:border-slate-700 sm:mx-auto lg:my-8" />

        {/* Bottom */}
        <div className="sm:flex sm:items-center sm:justify-between">

          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            © 2026{" "}
            <a
              href=""
              className="hover:underline"
            >
           GenzKicks
            </a>
            . All Rights Reserved.
          </span>

        </div>

      </div>
    </footer>
  );
}