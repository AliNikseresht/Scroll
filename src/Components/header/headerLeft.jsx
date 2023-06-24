"use client";
import Link from "next/link";
import React from "react";
import { usePathname, useSearchParams } from "next/navigation";

const HeaderLeft = () => {
    const pathname = usePathname().replace("/", "")
    return (
        <nav>
            <ul class="flex flex-wrap pt-1 mt-7 mr-12 bg-transparent rounded-lg sm:mr-16">
                <li class="leading-normal text-sm">
                    <Link href='/' className="opacity-50 text-slate-700">Pages</Link>
                </li>
                <li class="text-sm pl-2 capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/']" aria-current="page">{pathname}</li>
            </ul>
            <h6 class="mb-0 font-bold capitalize">{pathname}</h6>
        </nav>
    );
};

export default HeaderLeft;