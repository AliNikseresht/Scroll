"use client";

import React from 'react'
import HeaderRight from './headerRight'
import HeaderLeft from './headerLeft'
import { usePathname } from "next/navigation";
const Header = () => {
    const pathname = usePathname();
    return (
        pathname !== "/signUp" &&
        pathname !== "/signIn" &&
        pathname !== "/profile" &&


        (
            <header className='w-full m-auto md:my-0 md:p-0 md:w-[98%] lg:w-[98%] xl:w-[80%] xl:ml-[19.5%] flex flex-wrap items-center justify-between px-0 py-2 transition-all shadow-none duration-250 ease-in rounded-2xl lg:flex-nowrap lg:justify-start'>
                <div className='flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit'>
                    <HeaderLeft />
                    <HeaderRight />
                </div>
            </header>
        )
    )
}

export default Header