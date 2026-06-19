import React from "react";

export default function Contact() {
  return (
    <div className="relative flex items-top justify-center min-h-[700px] bg-white dark:bg-slate-900 transition-colors duration-300 sm:items-center sm:pt-0">

      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">

          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* LEFT SECTION */}
            <div className="p-6 mr-2 bg-gray-100 dark:bg-slate-800 sm:rounded-lg">

              <h1 className="text-3xl sm:text-4xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                Get in touch:
              </h1>

              <p className="text-lg sm:text-xl font-medium text-gray-600 dark:text-gray-300 mt-2">
                Fill in the form to start a conversation
              </p>

              {/* Address */}
              <div className="flex items-center mt-8 text-gray-600 dark:text-gray-300">
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  Acme Inc, Street, State, Postal Code
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center mt-4 text-gray-600 dark:text-gray-300">
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  +44 1234567890
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center mt-2 text-gray-600 dark:text-gray-300">
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  info@acme.org
                </div>
              </div>

            </div>

            {/* RIGHT FORM */}
            <form className="p-6 flex flex-col justify-center">

              <input
                type="text"
                placeholder="Full Name"
                className="mt-2 py-3 px-3 rounded-lg bg-white dark:bg-slate-800 border border-gray-400 dark:border-slate-600 text-gray-800 dark:text-white focus:border-orange-500 focus:outline-none"
              />

              <input
                type="email"
                placeholder="Email"
                className="mt-2 py-3 px-3 rounded-lg bg-white dark:bg-slate-800 border border-gray-400 dark:border-slate-600 text-gray-800 dark:text-white focus:border-orange-500 focus:outline-none"
              />

              <input
                type="tel"
                placeholder="Telephone Number"
                className="mt-2 py-3 px-3 rounded-lg bg-white dark:bg-slate-800 border border-gray-400 dark:border-slate-600 text-gray-800 dark:text-white focus:border-orange-500 focus:outline-none"
              />

              <button
                type="submit"
                className="md:w-32 bg-orange-700 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg mt-3 transition"
              >
                Submit
              </button>

            </form>

          </div>
        </div>
      </div>
    </div>
  );
}