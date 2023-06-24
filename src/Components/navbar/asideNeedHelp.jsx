"use client";

import Link from 'next/link'
import React from 'react'

const AsideNeedHelp = () => {
    return (
        <div className="mx-4 mt-1">
            <p className="invisible hidden text-gray-800 after:bg-gradient-to-tl after:from-red-600 after:to-rose-400"></p>
            <div className="after:opacity-65 after:bg-gradient-to-tl after:from-slate-600 after:to-slate-300 relative flex min-w-0 flex-col items-center break-words rounded-2xl border-0 border-solid border-blue-900 bg-white bg-clip-border shadow-none after:absolute after:top-0 after:bottom-0 after:left-0 after:z-10 after:block after:h-full after:w-full after:rounded-2xl after:content-['']" sidenav-card>
                <div className="mb-7.5 absolute h-full w-full rounded-2xl bg-cover bg-center"></div>
                <div className="relative z-20 flex-auto w-full p-4 text-left text-white">
                    <div className="flex items-center justify-center w-8 h-8 mb-4 text-center text-gray-600 bg-white bg-center rounded-lg shadow-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 top-0 z-10 text-lg bg-gradient-to-tl from-slate-600 to-slate-300 bg-clip-text opacity-80">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                        </svg>
                    </div>
                    <div className="transition-all duration-200 ease-nav-brand">
                        <h6 className="mb-0 text-white">Need help?</h6>
                        <p className="mt-0 mb-4 font-semibold leading-tight text-xs">Please check our docs</p>
                        <Link href='https://github.com/AliNikseresht' className='inline-block w-full px-8 py-2 mb-0 font-bold text-center text-black uppercase transition-all ease-in bg-white border-0 border-white rounded-lg shadow-md text-xs hover:shadow-2xl hover:scale-105'>Documentation</Link>
                    </div>
                </div>
            </div>
            <Link href='https://github.com/AliNikseresht' className='inline-block w-full px-6 py-3 my-4 font-bold text-center text-white uppercase align-middle transition-all ease-in border-0 rounded-lg select-none shadow-md bg-x-25 text-xs bg-gradient-to-tl from-purple-700 to-pink-500 hover:shadow-2xl hover:scale-105'>
                Upgrade to pro
            </Link>
        </div>
    )
}

export default AsideNeedHelp