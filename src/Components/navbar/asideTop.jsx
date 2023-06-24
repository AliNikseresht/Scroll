"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LogoCt from './../../../public/images/logo-ct.png'

const AsideSoftUi = () => {
    return (
        <div className="h-19.5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute top-0 right-0 hidden p-4 opacity-50 cursor-pointer text-slate-400 xl:hidden">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <Link href='/' className='block px-8 py-6 m-0 text-sm whitespace-nowrap text-slate-700'>
                <Image src={LogoCt} alt="main_logo" className='w-[17%] h-[17%] pe-1 inline transition-all duration-200 ease-nav-brand' />
                <span className="ml-1 font-semibold transition-all duration-200 ease-nav-brand">Soft UI Dashboard</span>
            </Link>
            <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />
        </div>
    )
}

export default AsideSoftUi