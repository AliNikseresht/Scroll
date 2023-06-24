"use client";
import React from "react";
import AsideSoftUi from "./asideTop";
import AsideNeedHelp from "./asideNeedHelp";
import AsideItems from "./AsideItems";
import { usePathname } from "next/navigation";

const Aside = () => {
    const pathname = usePathname();

    return (
        pathname !== "/signUp" &&
        pathname !== "/signIn" &&
        (
            <aside className="hidden xl:flex w-[17%] h-[95.6%] z-10 ease-nav-brand fixed inset-y-0 my-4 ml-4 -translate-x-full flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 p-0 antialiased shadow-none transition-transform duration-200 xl:left-0 xl:translate-x-0">
                <AsideSoftUi />
                <div className="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full">
                    <ul className="flex flex-col pl-0 mb-0 text-stone-800">
                        <AsideItems />
                    </ul>
                </div>
                <AsideNeedHelp />
            </aside>
        )
    );
};

export default Aside;