"use client";
import React from 'react'
import Link from "next/link"
import Image from "next/image"

import PicJohn from '../../../public/images/team-2.jpg'
import PicAlexa from '../../../public/images/team-1.jpg'
import PicLaurent from '../../../public/images/team-3.jpg'
import PicMichael from '../../../public/images/team-4.jpg'
import PicRichard from '../../../public/images/bruce-mars.jpg'
import PicMiriam from '../../../public/images/marie.jpg'

import LogoSoft from "../../../public/images/logo-xd.svg"
import LogoWebdev from "../../../public/images/small-logos/logo-webdev.svg"
import LogoSlack from "../../../public/images/logo-slack.svg"
import LogoSpotify from "../../../public/images/logo-spotify.svg"
import LogoJira from "../../../public/images/logo-jira.svg"
import LogoInvision from "../../../public/images/logo-invision.svg"




const AuthorsTable = [
    {
        src: PicJohn, alt: 'PicJohn',
        name: 'John Michael',
        email: 'john@creative-tim.com',
        job: 'Manager',
        position: 'Organization',
        status: 'ONLINE',
        time: '23/04/18',
        edit: 'Edit'
    },
    {
        src: PicAlexa, alt: 'PicAlexa',
        name: 'Alexa Liras',
        email: 'alexa@creative-tim.com',
        job: 'Programator',
        position: 'Developer',
        status: 'OFFLINE',
        time: '11/01/19',
        edit: 'Edit'
    },
    {
        src: PicLaurent, alt: 'PicLaurent',
        name: 'Laurent Perrier',
        email: 'laurent@creative-tim.com',
        job: 'Executive',
        position: 'Projects',
        status: 'ONLINE',
        time: '19/09/17',
        edit: 'Edit'
    },
    {
        src: PicMichael, alt: 'PicMichael',
        name: 'Michael Levi',
        email: 'michael@creative-tim.com',
        job: 'Programator',
        position: 'Developer',
        status: 'ONLINE',
        time: '24/12/08',
        edit: 'Edit'
    },
    {
        src: PicRichard, alt: 'PicRichard',
        name: 'Richard Gran',
        email: 'john@creative-tim.com',
        job: 'Manager',
        position: 'Executive',
        status: 'OFFLINE',
        time: '04/10/21',
        edit: 'Edit'
    },
    {
        src: PicMiriam, alt: 'PicMiriam',
        name: 'Miriam Eric',
        email: 'john@creative-tim.com',
        job: 'Programtor',
        position: 'Developer',
        status: 'OFFLINE',
        time: '14/09/20',
        edit: 'Edit'
    },
]


const ProjectsTable = [
    {
        src: LogoSpotify, alt: 'LogoSpotify',
        brand: 'Spotify',
        price: '$2,500',
        story: 'working',
        compeled: '60%',
        more: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
        )
    },
    {
        src: LogoInvision, alt: 'LogoInvision',
        brand: 'Invision',
        price: '$5,000',
        story: 'done',
        compeled: '100%',
        more: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
        )
    },
    {
        src: LogoJira, alt: 'LogoJira',
        brand: 'Jira',
        price: '$3,400',
        story: 'canceled',
        compeled: '30%',
        more: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
        )
    },
    {
        src: LogoSlack, alt: 'LogoSlack',
        brand: 'Slack',
        price: '$1,000',
        story: 'canceled',
        compeled: '0%',
        more: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
        )
    },
    {
        src: LogoWebdev, alt: 'LogoWebdev',
        brand: 'Webdev',
        price: '$14,000',
        story: 'working',
        compeled: '80%',
        more: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
        )
    },
    {
        src: LogoSoft, alt: 'LogoSoft',
        brand: 'Adobe XD',
        price: '$2,300',
        story: 'done',
        compeled: '100%',
        more: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
        )
    },
]

const TablesPage = () => {
    return (
        <div className="flex flex-wrap">
            <div className="flex-none w-full max-w-full px-3">
                <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                    <div className="p-6 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                        <h6>Projects table</h6>
                    </div>
                    <div className="flex-auto px-0 pt-0 pb-2">
                        <div className="p-0 overflow-x-auto">
                            <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                                <thead className="align-bottom">
                                    <tr>
                                        <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Author</th>
                                        <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Function</th>
                                        <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Status</th>
                                        <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Employed</th>
                                        <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {AuthorsTable.map((item, index) => (
                                        <tr key={index}>
                                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                <div className="flex px-2 py-1">
                                                    <div>
                                                        <Image src={item.src} className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl" alt={item.alt} />
                                                    </div>
                                                    <div className="flex flex-col justify-center">
                                                        <h6 className="mb-0 text-sm leading-normal">{item.name}</h6>
                                                        <p className="mb-0 text-xs leading-tight text-slate-400">{item.email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                <p className="mb-0 text-xs font-semibold leading-tight">{item.job}</p>
                                                <p className="mb-0 text-xs leading-tight text-slate-400">{item.position}</p>
                                            </td>
                                            <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                <span className={` ${index === 0 || index === 2 || index === 3 ? 'bg-green-500' : 'bg-slate-600'} px-2.5 text-xs rounded py-1.5 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white`}>{item.status}</span>
                                            </td>
                                            <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                <span className="text-xs font-semibold leading-tight text-slate-400">{item.time}</span>
                                            </td>
                                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                <a href="javascript:;" className="text-xs font-semibold leading-tight text-slate-400">{item.edit}</a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-none w-full max-w-full px-3">
                <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                    <div className="p-6 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                        <h6>Projects table</h6>
                    </div>
                    <div className="flex-auto px-0 pt-0 pb-2">
                        <div className="p-0 overflow-x-auto">
                            <table className="items-center justify-center w-full mb-0 align-top border-gray-200 text-slate-500">
                                <thead className="align-bottom">
                                    <tr>
                                        <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Project</th>
                                        <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Budget</th>
                                        <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Status</th>
                                        <th className="px-6 py-3 pl-2 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Completion</th>
                                        <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap"></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {ProjectsTable.map((value, index) => (

                                        <tr key={index}>
                                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                <div className="flex px-2">
                                                    <div>
                                                        <Image src={value.src} className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl" alt={value.alt} />
                                                    </div>
                                                    <div className="my-auto">
                                                        <h6 className="mb-0 text-sm leading-normal">{value.brand}</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                <p className="mb-0 text-sm font-semibold leading-normal">{value.price}</p>
                                            </td>
                                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                <span className="text-xs font-semibold leading-tight">{value.story}</span>
                                            </td>
                                            <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                <div className="flex items-center justify-center">
                                                    <span className="mr-2 text-xs font-semibold leading-tight">{value.compeled}</span>
                                                    <div>
                                                        <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                                            <div className="duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-400 -mt-0.38 -ml-px flex h-1.5 w-3/5 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                <button className="inline-block px-6 py-3 mb-0 text-xs font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none leading-pro ease-soft-in bg-150 tracking-tight-soft bg-x-25 text-slate-400">
                                                    {value.more}
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TablesPage