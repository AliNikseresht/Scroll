"use client";

import React from 'react'
import LogoSoft from "../../../public/images/logo-xd.svg"
import LogoAtlassian from "../../../public/images/logo-atlassian.svg"
import LogoSlack from "../../../public/images/logo-slack.svg"
import LogoSpotify from "../../../public/images/logo-spotify.svg"
import LogoJira from "../../../public/images/logo-jira.svg"
import LogoInvision from "../../../public/images/logo-invision.svg"
import LogoTeam1 from "../../../public/images/team-1.jpg"
import LogoTeam2 from "../../../public/images/team-2.jpg"
import LogoTeam3 from "../../../public/images/team-3.jpg"
import LogoTeam4 from "../../../public/images/team-4.jpg"
import Link from "next/link"
import Image from "next/image"



const titleItems = [
    {
        name: 'COMPANIES',
    },
    {
        name: 'MEMBERS'
    },
    {
        name: 'BUDGET'
    },
    {
        name: 'COMPLETION'
    },
]


const companyItems = [
    {
        src: LogoSoft, alt: 'LogoSoft',
        companyName: 'Soft UI XD Version',
        membersImg: '',
        budget: '$14,000',
        completion: '60%'
    },
    {
        src: LogoAtlassian, alt: 'LogoAtlassian',
        companyName: 'Add Progress Track',
        membersImg: '',
        budget: '$3,000',
        completion: '10%'
    },
    {
        src: LogoSlack, alt: 'LogoSlack',
        companyName: 'Fix Platform Errors',
        membersImg: '',
        budget: 'Not set',
        completion: '100%'
    },
    {
        src: LogoSpotify, alt: 'LogoSpotify',
        companyName: 'Launch our Mobile App',
        membersImg: '',
        budget: '$20,500',
        completion: '100%'
    },
    {
        src: LogoJira, alt: 'LogoJira',
        companyName: 'Add the New Pricing Page',
        membersImg: '',
        budget: '$500',
        completion: '25%'
    },
    {
        src: LogoInvision, alt: 'LogoInvision',
        companyName: 'Redesign New Online Shop',
        membersImg: '',
        budget: '$2,000',
        completion: '40%'
    },
]

const avatars = [
    { src: LogoTeam1, alt: 'logoteam1', name: 'Ryan Tompson' },
    { src: LogoTeam2, alt: 'logoteam5', name: 'Romina Hadid' },
    { src: LogoTeam3, alt: 'logoteam3', name: 'Alexander Smith' },
    { src: LogoTeam4, alt: 'logoteam4', name: 'Jessica Doe' },
];

// startConstForOverView//

const overview = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill relative z-10 text-lime-500" viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
            </svg>
        ),
        titleOverview: '$2400, Design changes',
        time: '22 DEC 7:20 PM'
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill text-amber-500" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>

        ),
        titleOverview: 'New order #1832412',
        time: '21 DEC 11 PM'
    },
    {
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-check-fill text-cyan-500" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
        </svg>),
        titleOverview: 'Server payments for April',
        time: '21 DEC 9:34 PM'
    },
    {
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-credit-card-2-back-fill text-amber-600" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5H0V4zm11.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zM0 11v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1H0z" />
        </svg>),
        titleOverview: 'New card added for order #4395133',
        time: '20 DEC 2:20 AM'
    },
    {
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key-fill text-fuchsia-500" viewBox="0 0 16 16">
            <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        </svg>),
        titleOverview: 'Unlock packages for development',
        time: '18 DEC 4:54 AM'
    },
    {
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cash-coin" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" />
            <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
            <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
            <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
        </svg>),
        titleOverview: 'New order #9583120',
        time: '17 DEC'
    },
]


const TablesProjects = () => {
    return (
        <div className="flex flex-wrap my-6">
            {/* card1 */}
            <div className="w-full max-w-full px-3 mt-0 mb-6 md:mb-0 md:w-1/2 md:flex-none lg:w-2/3 lg:flex-none">
                <div className="border-black/12.5 shadow-soft-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                    <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
                        <div className="flex flex-wrap mt-0 -mx-3">
                            <div className="flex-none w-7/12 max-w-full px-3 mt-0 lg:w-1/2 lg:flex-none">
                                <h6>Projects</h6>
                                <p className="mb-0 leading-normal text-sm flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-cyan-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                    <span className="ml-1 font-semibold pt-1 text-slate-500">30 done</span>
                                    <span className="ml-1 font-semibold pt-1 text-slate-500">this month</span>
                                </p>
                            </div>
                            <div className="flex-none w-5/12 max-w-full px-3 my-auto text-right lg:w-1/2 lg:flex-none">
                                <div className="relative pr-6 lg:flex justify-end">
                                    <Link href='' className="cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-slate-400">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-auto p-6 px-0 pb-2">
                        <div className="overflow-x-auto">
                            <table className="items-center justify-center w-full mb-0 align-top border-gray-200 text-slate-500">
                                <thead className="align-bottom flex">
                                    <tr>
                                        {titleItems.map((item, index) => (
                                            <th key={index} className={`px-6 py-3 text-[11px] font-bold tracking-normal text-left uppercase align-middle bg-transparent border-b whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70 ${index === 0 ? '' : ''}`}>{item.name}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {companyItems.map((items, index) => (
                                        <tr key={index}>
                                            <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                                                <div class="flex px-2 py-1">
                                                    <div>
                                                        <Image src={items.src} className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl" alt={items.alt} /></div>
                                                    <div class="flex flex-col justify-center">
                                                        <h6 class="mb-0 leading-normal text-sm">{items.companyName}</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                                                <div className="mt-2 avatar-group">
                                                    {avatars.map((avatar, index) => (
                                                        <>
                                                            <Link
                                                                key={index}
                                                                href="/"
                                                                className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30"
                                                                data-target="tooltip_trigger"
                                                                data-placement="bottom"
                                                            >
                                                                <Image src={avatar.src} className="w-full rounded-full" alt={avatar.alt} />
                                                            </Link>
                                                            <div
                                                                data-target="tooltip"
                                                                className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                                                role="tooltip"
                                                            >
                                                                {avatar.name}
                                                                <div className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']" data-popper-arrow></div>
                                                            </div>
                                                        </>
                                                    ))}
                                                </div>
                                            </td>
                                            <td class="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap">
                                                <span class="font-semibold leading-tight text-xs"> {items.budget} </span>
                                            </td>
                                            <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                                                <div class="w-3/4 mx-auto">
                                                    <div>
                                                        <div>
                                                            <span class="font-semibold leading-tight text-xs">{items.completion}</span>
                                                        </div>
                                                    </div>
                                                    <div class="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                                        <div class="duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-400 -mt-0.38 -ml-px flex h-1.5 w-3/5 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* card2 */}

            <div className="w-full max-w-full px-3 md:w-1/2 md:flex-none lg:w-1/3 lg:flex-none">
                <div className="border-black shadow-soft-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                    <div className="border-black mb-0 rounded-t-2xl border-b-0 border-solid bg-whit p-6 pb-0">
                        <h6 className="text-slate-700 mb-3">Orders overview</h6>
                        <p className="text-sm flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-lime-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                            </svg>
                            <span className="font-semibold text-slate-600">24%</span>
                            <span className="text-slate-500">this month</span>
                        </p>
                    </div>
                    <div className="flex-auto ms-[1.3%] p-4">
                        {overview.map((value, index) => (
                            <div key={index} className="before:border-r-solid relative before:absolute before:top-0 before:left-4 before:h-full before:border-r-2 before:border-r-slate-300 before:content-[''] before:lg:-ml-px">
                                <div className="flex relative mb-4 mt-0 ">
                                    <span className="ms-4 w-6.5 h-6.5 text-base z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                                        {value.icon}
                                    </span>
                                    <div className="ml-11.252 pt-1.4 lg:max-w-120 relative -top-0.5 w-auto">
                                        <h6 className="mb-0 font-semibold leading-normal text-sm text-slate-700">{value.titleOverview}</h6>
                                        <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">{value.time}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TablesProjects