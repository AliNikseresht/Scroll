"use client";

import React from 'react'
import LogoTweet from "../../../public/images/twitter-icon-svg-28.jpg"
import Link from "next/link"
import Image from "next/image"

const Setting = ({open, onClose}) => {
    return (
        <div>
            <div className={`${open ? 'flex' : 'hidden'} z-50 shadow-slate-300 shadow-2xl 2xl:w-[23%] ease-out fixed right-0 top-0 h-full min-w-0 flex-col rounded-none border-0 bg-white bg-clip-border px-2.5 duration-200`}>
                <div className="flex justify-between px-6 pt-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
                    <div>
                        <h5 className="mt-4 mb-0 text-2xl text-slate-800">Soft UI Configurator</h5>
                        <p className='text-slate-500'>See our dashboard options.</p>
                    </div>
                    <div className="mt-6">
                        <button onClick={onClose} className="inline-block p-0 mb-4 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer hover:scale-105 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 active:opacity-85 text-slate-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>


                <hr className="h-px mx-0 my-1 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />
                <div className="flex-auto p-6 pt-0 sm:pt-4">

                    <div>
                        <h6 className="mb-0 text-slate-900">Sidebar Colors</h6>
                    </div>
                    <Link href="/">
                        <div className="my-2 text-left">
                            <span className="text-xs rounded-full h-5 mr-1 w-5 ease-soft-in-out bg-gradient-to-tl from-purple-700 to-pink-500 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-slate-700 text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700" active-color data-color-from="purple-700" data-color-to="pink-500" onclick="sidebarColor(this)"></span>
                            <span className="text-xs rounded-full h-5 mr-1 w-5 ease-soft-in-out bg-gradient-to-tl from-gray-900 to-slate-800 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700" data-color-from="gray-900" data-color-to="slate-800" onclick="sidebarColor(this)"></span>
                            <span className="text-xs rounded-full h-5 mr-1 w-5 ease-soft-in-out bg-gradient-to-tl from-blue-600 to-cyan-400 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700" data-color-from="blue-600" data-color-to="cyan-400" onclick="sidebarColor(this)"></span>
                            <span className="text-xs rounded-full h-5 mr-1 w-5 ease-soft-in-out bg-gradient-to-tl from-green-600 to-lime-400 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700" data-color-from="green-600" data-color-to="lime-400" onclick="sidebarColor(this)"></span>
                            <span className="text-xs rounded-full h-5 mr-1 w-5 ease-soft-in-out bg-gradient-to-tl from-red-500 to-yellow-400 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700" data-color-from="red-500" data-color-to="yellow-400" onclick="sidebarColor(this)"></span>
                            <span className="text-xs rounded-full h-5 mr-1 w-5 ease-soft-in-out bg-gradient-to-tl from-red-600 to-rose-400 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700" data-color-from="red-600" data-color-to="rose-400" onclick="sidebarColor(this)"></span>
                        </div>
                    </Link>

                    <div className="mt-4">
                        <h6 className="mb-0 text-slate-800">Sidenav Type</h6>
                        <p className="leading-normal text-sm text-slate-500 mt-1 mb-3">Choose between 2 different sidenav types.</p>
                    </div>
                    <div className="flex">
                        <button className="inline-block w-full px-4 py-3 mb-2 font-bold text-center text-white uppercase align-middle transition-all border border-transparent border-solid rounded-lg cursor-pointer xl-max:cursor-not-allowed xl-max:opacity-65 xl-max:pointer-events-none xl-max:text-white xl-max:border-0 hover:scale-105 hover:shadow-xs active:opacity-85 leading-pro text-xs ease-in tracking-tight shadow-md bg-150 bg-x-25 bg-gradient-to-tl from-purple-700 to-pink-500 bg-fuchsia-500 hover:border-fuchsia-500" data-className="bg-transparent" active-style>Transparent</button>
                        <button className="inline-block w-full px-4 py-3 mb-2 ml-2 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg cursor-pointer xl-max:cursor-not-allowed xl-max:opacity-65 xl-max:pointer-events-none xl-max:text-white xl-max:border-0 hover:scale-105 hover:shadow-xs active:opacity-85 leading-pro text-xs ease-in tracking-tight shadow-md bg-150 bg-x-25 border-fuchsia-500 bg-none text-fuchsia-500 hover:border-fuchsia-500" data-className="bg-white">White</button>
                    </div>
                    <p className="block mt-2 leading-normal text-sm xl:hidden">You can change the sidenav type just on desktop view.</p>


                    <div className="mt-2">
                        <h6 className="mb-0 text-slate-800">Navbar Fixed</h6>
                    </div>
                    <div className="min-h-6 mb-0.5 block pl-0">
                        <input className="rounded-xl duration-200 ease-in-out after:rounded-full after:shadow-2xl after:duration-200 checked:after:translate-x-5 h-5 relative mt-1 ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right" type="checkbox" />
                    </div>

                    <hr className="h-px bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent sm:my-6" />

                    <Link className="inline-block w-full px-6 py-3 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer leading-pro text-xs ease-in hover:shadow-xs hover:scale-105 active:opacity-80 tracking-tight shadow-md bg-gradient-to-tl from-gray-900 to-slate-500" href="https://github.com/AliNikseresht" target="_blank">Free Download</Link>
                    <Link className="inline-block w-full px-6 py-3 mb-2 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer active:shadow-xs hover:scale-105 active:opacity-80 leading-pro text-xs ease-in tracking-tight border-slate-700 text-slate-700 hover:bg-transparent hover:text-slate-700 hover:shadow-none active:bg-slate-700 active:text-white active:hover:bg-transparent active:hover:text-slate-700 active:hover:shadow-none" href="https://github.com/AliNikseresht" target="_blank">View documentation</Link>
                    <div className="w-full text-center">
                        <Link href="https://github.com/AliNikseresht" className='text-slate-800' data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star creativetimofficial/soft-ui-dashboard on GitHub">Star</Link>
                        <h6 className="mt-4 text-slate-800 mb-3">Thank you for sharing!</h6>
                        <div className='flex justify-center'>
                            <Link href="https://github.com/AliNikseresht" className="w-[35%] ms-2.5 h-[50px] p-4 flex font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:shadow-xs hover:scale-105 active:opacity-80 leading-pro text-xs ease-in tracking-tight shadow-md me-2 border-slate-700 bg-slate-700" target="_blank">
                                <Image className='w-[100%] h-[100%] object-cover me-1' src={LogoTweet} alt='LogoTweet' /> TWEET </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Setting