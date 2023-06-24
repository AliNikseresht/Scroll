"use client";
import React from 'react'
import { usePathname } from "next/navigation";
import Link from 'next/link';
const menu = ["Creative Tim", "About Us", "Blog", "License"];


const Footer = () => {

  const pathname = usePathname();


  return (
    pathname !== "/signUp" &&
    pathname !== "/signIn" &&
    (
      <footer className="h-[50px] w-full md:w-[98%] lg:w-[99%] xl:w-[80%] mx-auto xl:ml-[19.8%] z-30 flex items-center">
        <div className="w-full px-6 mx-auto">
          <div className="flex flex-wrap items-center -mx-3 lg:justify-between">
            <div className="w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none">
              <div className="leading-normal flex text-center text-sm text-slate-500 lg:text-left">
                © 2023,
                made with <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="px-0.5 w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                by
                <Link href="https://github.com/AliNikseresht" className="font-semibold text-slate-700 px-1">AliNikseresht</Link>
                for a better web.
              </div>
            </div>
            <div className="w-full max-w-full px-3 mt-0 shrink-0 lg:w-1/2 lg:flex-none">
              <ul className="flex flex-wrap justify-center pl-0 mb-0 list-none lg:justify-end">
                {menu.map((val, i) => {
                  return (
                    <li className="block px-4 pt-0 pb-1 font-normal transition-colors ease-soft-in-out text-sm text-slate-500" key={i}>
                      <Link href='/404'>
                        {val}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  )
}

export default Footer