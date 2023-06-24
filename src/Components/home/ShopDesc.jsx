"use client";
import React from 'react'
import Link from "next/link"
import Image from "next/image"
import LogoWaves from "../../../public/images/shapes/waves-white.svg"
import LogoRocket from "../../../public/images/illustrations/rocket-white.png"

const shopDesc = [
    {
        title: "Today's Money",
        price: '$53,000',
        count: '+55%',
        icon: ''
    },
    {
        title: "Today's Users",
        price: '2,300',
        count: '+3%',
        icon: ''
    },
    {
        title: "New Clients",
        price: '+3,462',
        count: '-2%',
        icon: ''
    },
    {
        title: "Sales",
        price: '$103,430',
        count: '+5%',
        icon: ''
    },
]


const ShopDesc = () => {
    return (
        <div className="flex flex-wrap py-6">
            <div className="w-full px-3 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none">
                <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                    <div className="flex-auto p-4">
                        <div className="flex flex-wrap -mx-3">
                            <div className="max-w-full px-3 lg:w-1/2 lg:flex-none">
                                <div className="flex flex-col h-full">
                                    <p className="pt-2 mb-1 font-semibold text-slate-600">Built by developers</p>
                                    <h5 className="font-bold text-slate-800">Soft UI Dashboard</h5>
                                    <p className="mb-12 text-slate-600">From colors, cards, typography to complex elements, you will find the full documentation.</p>
                                    <Link href='/' className="flex mt-auto mb-0 font-semibold leading-normal text-sm group text-slate-500">
                                        Read More
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                            className="w-5 h-5 ease-bounce text-sm group-hover:translate-x-1 ml-1 leading-normal transition-all duration-200">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="max-w-full px-3 mt-12 ml-auto text-center lg:mt-0 lg:w-5/12 lg:flex-none">
                                <div className="h-full bg-gradient-to-tl from-purple-700 to-pink-600 rounded-xl">
                                    <Image src={LogoWaves} alt="waves" className='absolute top-0 hidden w-1/2 h-full lg:block' />
                                    <div className="relative flex items-center justify-center h-full">
                                        <Image src={LogoRocket} alt="rocket" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-full px-3 lg:w-5/12 lg:flex-none">
                <div className="border-black/12.5 shadow-soft-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border p-4">
                    <div className="relative h-full overflow-hidden bg-cover rounded-xl bg-[url('../../public/images/ivancik.jpg')]">
                        <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-80"></span>
                        <div className="relative z-10 flex flex-col flex-auto h-full p-4">
                            <h5 className="pt-2 mb-6 font-bold text-white">Work with the rockets</h5>
                            <p className="text-white">Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the opportunity first.</p>
                            <Link href='/' className="flex mt-auto mb-0 font-semibold leading-normal text-white group text-sm">
                                Read More
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                    className="w-5 h-5 ease-bounce text-sm group-hover:translate-x-1 ml-1 leading-normal transition-all duration-200">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopDesc