// components/LoginModal.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

export default function LoginModal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        onClick={toggleModal}
        className="bg-[var(--color-primary)] hover:bg-black hover:text-white text-black font-semibold px-5 py-2 rounded transition cursor-pointer"
      >
        Login
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-[104px] left-1/2 -translate-x-1/2 z-50  bg-[var(--color-primary)] text-white w-full max-w-6xl shadow-lg p-8 md:p-12"
          >
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                onClick={toggleModal}
                className="text-black hover:text-gray-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col md:flex-row gap-10">
              {/* Register Side */}
              <div className="w-full md:w-1/2 flex flex-col justify-center items-start border-r border-white/20 pr-8">
                <h2 className="text-lg font-semibold mb-4 text-black">
                  CREATE YOUR ACCOUNT
                </h2>
                <Link href={"/register"} onClick={() => setIsOpen(false)}>
                  <button className="bg-white hover:bg-black text-black hover:text-white font-semibold px-6 py-2 rounded transition duration-200">
                    REGISTER FOR FREE TODAY
                  </button>
                </Link>
                <a href="#" className="text-sm text-black mt-4 hover:underline">
                  › Why register?
                </a>
              </div>

              {/* Login Side */}
              <div className="w-full md:w-1/2 flex flex-col space-y-4">
                <h2 className="text-lg font-semibold text-black">LOGIN</h2>

                {/* Username */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full pl-10 pr-4 py-2 rounded bg-white text-black focus:outline-none"
                  />
                  <span className="absolute left-3 top-2.5 text-black">
                    <svg
                      className="w-5 h-5 text-black"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 10a4 4 0 100-8 4 4 0 000 8zm0 2c-5.33 0-8 2.667-8 4v1h16v-1c0-1.333-2.67-4-8-4z" />
                    </svg>
                  </span>
                </div>

                {/* Password */}
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full pl-10 pr-4 py-2 rounded bg-white text-black focus:outline-none"
                  />
                  <span className="absolute left-3 top-2.5 text-black">
                    <svg
                      className="w-5 h-5 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2a4 4 0 00-4 4v2H5a1 1 0 000 2h10a1 1 0 000-2h-1V6a4 4 0 00-4-4zm-2 6V6a2 2 0 114 0v2H8z" />
                      <path d="M4 10h12v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6z" />
                    </svg>
                  </span>
                </div>

                {/* Save login */}
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="save" />
                  <label htmlFor="save" className="text-sm text-black">
                    Save login
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  onClick={() => setIsOpen(false)}
                  className="bg-black text-white hover:bg-white  hover:text-black font-semibold px-6 py-2 rounded transition duration-200 w-full"
                >
                  LOGIN
                </button>

                <div className="text-sm space-y-1">
                  <a href="#" className="hover:underline block text-black">
                    › Forgot username?
                  </a>
                  <a href="#" className="hover:underline block text-black">
                    › Forgot password?
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
