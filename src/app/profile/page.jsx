"use client";

import Link from 'next/link';
import React, { useState } from 'react'
import Image from 'next/image';
import { usePathname, useSearchParams } from "next/navigation";
import LogoUser from '../../../public/images/52.jpg'
import LogoSophi from '../../../public/images/kal-visuals-square.jpg'
import LogoAnne from '../../../public/images/marie.jpg'
import LogoIvanna from '../../../public/images/ivana-square.jpg'
import Logopeterson from '../../../public/images/team-4.jpg'
import Logonik from '../../../public/images/team-3.jpg'

import LogoTeam1 from "../../../public/images/team-1.jpg"
import LogoTeam2 from "../../../public/images/team-2.jpg"
import LogoTeam3 from "../../../public/images/team-3.jpg"
import LogoTeam4 from "../../../public/images/team-4.jpg"

import LogoHome1 from '../../../public/images/home-decor-1.jpg'
import LogoHome2 from '../../../public/images/home-decor-2.jpg'
import LogoHome3 from '../../../public/images/home-decor-3.jpg'
import Setting from '@/Components/home/asideRight';
import OpenSetting from '@/Components/home/OpenSetting';


const Profile = () => {

  const [open, setOpen] = useState(false)

  const handleCloseSetting = () => {
    setOpen(false);
  };


  return (
    <div className='min-h-[100vh] max-w-[1200px] flex flex-col m-auto xl:ml-[20%] bg-gray-100'>
      <Navbar />
      <Head />
      <DescProf />
      <DescProject />
      <OpenSetting setOpen={setOpen} />
      <Setting open={open} onClose={handleCloseSetting} />
    </div>
  )
}

export default Profile

const menuprof = [
  {
    title: 'App',
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-fill" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001 6.971 2.789Zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z" />
    </svg>)
  },
  {
    title: 'Messages',
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-left-text-fill" viewBox="0 0 16 16">
      <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" />
    </svg>)
  },
  {
    title: 'Settings',
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sliders2-vertical" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M0 10.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H3V1.5a.5.5 0 0 0-1 0V10H.5a.5.5 0 0 0-.5.5ZM2.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm3-6.5A.5.5 0 0 0 6 6h1.5v8.5a.5.5 0 0 0 1 0V6H10a.5.5 0 0 0 0-1H6a.5.5 0 0 0-.5.5ZM8 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2A.5.5 0 0 0 8 1Zm3 9.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H14V1.5a.5.5 0 0 0-1 0V10h-1.5a.5.5 0 0 0-.5.5Zm2.5 1.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Z" />
    </svg>)
  },
]

const DescUser = [
  {
    src: LogoSophi, alt: 'LogoSophi',
    title: 'Sophie B.',
    message: 'Hi! I need more information..',
    rep: 'REPLAY'
  },
  {
    src: LogoAnne, alt: 'LogoAnne',
    title: 'Anne Marie',
    message: 'Awesome work, can you..',
    rep: 'REPLAY'
  },
  {
    src: LogoIvanna, alt: 'LogoIvanna',
    title: 'Ivanna',
    message: 'About files I can..',
    rep: 'REPLAY'
  },
  {
    src: Logopeterson, alt: 'Logopeterson',
    title: 'Peterson',
    message: 'Have a great afternoon..',
    rep: 'REPLAY'
  },
  {
    src: Logonik, alt: 'Logonik',
    title: 'Nick Daniel',
    message: 'Hi! I need more information..',
    rep: 'REPLAY'
  },
]

const avatars = [
  { src: LogoTeam1, alt: 'logoteam1', name: 'Ryan Tompson' },
  { src: LogoTeam2, alt: 'logoteam5', name: 'Romina Hadid' },
  { src: LogoTeam3, alt: 'logoteam3', name: 'Alexander Smith' },
  { src: LogoTeam4, alt: 'logoteam4', name: 'Jessica Doe' },
];


function Navbar() {
  const pathname = usePathname().replace("/", "")

  return (
    <div className="w-full rounded-2xl h-[330px] bg-cover mt-4 bg-[url('../../public/images/curved-images/curved6.jpg')]">
      <div className='flex p-7 justify-between'>
        <nav>
          <ul className="flex flex-wrap mr-12 bg-transparent rounded-lg sm:mr-16">
            <li className="leading-normal text-sm">
              <Link href='/' className="opacity-50 text-slate-100">Pages</Link>
            </li>
            <li className="text-sm pl-2 capitalize leading-normal text-slate-100 before:float-left before:pr-2 before:text-gray-100 before:content-['/']" aria-current="page">{pathname}</li>
          </ul>
          <h6 className="mb-0 font-bold capitalize text-white">{pathname}</h6>
        </nav>
        <div className="flex items-center sm:mt-0 sm:mr-6 md:mr-0 lg:flex">
          <div className="flex items-center md:ml-auto md:pr-4">
            <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease-soft">
              <span className="text-sm ease-soft absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </span>
              <input type="text" className="pl-8 text-sm focus:shadow-soft-primary-outline ease-soft w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none focus:transition-shadow ps-10" placeholder="Type here..." />
            </div>
          </div>
          <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
            <li className="flex items-center">
              <Link href='/signIn' className="flex px-0 py-2 font-semibold transition-all ease-nav-brand text-sm text-slate-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 sm:mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <span className="hidden sm:inline">Sign In</span>
              </Link>
            </li>
            <li className="flex items-center px-4">
              <Link href='/' className="p-0 transition-all text-sm ease-nav-brand text-slate-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </Link>
            </li>
            <li className="relative flex items-center">
              <p className="hidden transform-dropdown-show"></p>
              <Link href='/' className="block p-0 transition-all text-sm ease-nav-brand text-slate-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
              </Link>
              <ul className="text-sm transform-dropdown before:font-awesome before:leading-default before:duration-350 before:ease-soft lg:shadow-2xl duration-200 min-w-44 before:sm:right-7 before:text-5 pointer-events-none absolute right-0 top-0 z-50 origin-top list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 opacity-0 transition-all before:absolute before:right-2 before:left-auto before:top-0 before:z-50 before:inline-block before:font-normal before:text-white before:antialiased before:transition-all before:content-['\f0d8'] sm:-mr-6 lg:absolute lg:right-0 lg:left-auto lg:mt-2 lg:block lg:cursor-pointer">
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function Head() {
  return (
    <div className="w-full px-6 mx-auto">
      <div className="relative w-full mx-auto flex flex-col min-w-0 p-4 -mt-16 overflow-hidden break-words border-0 shadow-blur shadow-xl rounded-2xl bg-white/80 bg-clip-border backdrop-blur-2xl backdrop-saturate-200">
        <div className="flex flex-wrap">
          <div className="flex-none w-auto max-w-full px-3">
            <div className="text-base ease-in-out h-20 w-20 relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200">
              <Image src={LogoUser} alt="profile_image" className="w-full h-full shadow-sm rounded-xl" />
            </div>
          </div>
          <div className="flex-none w-auto max-w-full px-3 my-auto">
            <div className="h-full">
              <h5 className="mb-1 text-slate-800 text-2xl font-bold">Ali Nikseresht</h5>
              <p className="mb-0 font-semibold leading-normal text-sm text-slate-600">Frontend Developer</p>
            </div>
          </div>
          <div className="w-full max-w-fullpx-3 mx-auto mt-4 sm:my-auto sm:mr-0 md:w-1/2 md:flex-none lg:w-5/12">
            <div>
              <ul className="relative flex flex-wrap p-1 list-none bg-transparent rounded-xl">
                <li className="z-30 flex text-center ps-10 2xl:ps-20">
                  {menuprof.map((item, index) => (
                    <Link href='/' key={index} className={`${index === 0 ? ' bg-white shadow-lg ' : ''} p-1 z-30 flex w-full rounded-lg ease-in-out bg-inherit text-slate-700`}>
                      <span className='pt-1.5 mx-3'>{item.icon}</span>
                      <span className="ml-1 mx-3">{item.title}</span>
                    </Link>
                  ))}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DescProf() {
  return (
    <div className='w-full mx-auto mt-7'>
      <div className="flex ">
        <div className="w-full flex flex-wrap xl:flex-nowrap justify-evenly max-w-full px-3">

          <div className="relative w-full mx-3 xl:mx-0 max-w-full xl:w-4/12 flex flex-wrap flex-col min-w-0 bg-white break-words border-0 shadow-xl rounded-2xl bg-clip-border">
            <div className="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
              <h6 className="mb-0 font-bold text-slate-700">Platform Settings</h6>
            </div>

            <div className="flex-auto flex-wrap p-4">

              <h6 className="font-bold leading-tight uppercase text-xs text-slate-500">Account</h6>

              <ul className="flex flex-col pl-0 mb-0 rounded-lg">

                <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit mt-2">
                  <div className="min-h-6 mb-0.5 block pl-0">
                    <input className="rounded-xl me-2 duration-200 ease-in-out after:rounded-full after:shadow-2xl after:duration-200 checked:after:translate-x-5 h-5 relative mt-1 ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right" type="checkbox" />
                    <label className="mb-2 ml-1 font-normal cursor-pointer select-none text-[13px] text-slate-500">Email me when someone follows me</label>
                  </div>
                </li>
                <li className="relative block px-0 py-2 bg-white border-0 text-inherit">
                  <div className="min-h-6 mb-0.5 block pl-0">
                    <input className="rounded-xl me-2 duration-200 ease-in-out after:rounded-full after:shadow-2xl after:duration-200 checked:after:translate-x-5 h-5 relative mt-1 ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right" type="checkbox" />
                    <label className="mb-2 ml-1 font-normal cursor-pointer select-none text-[13px] text-slate-500">Email me when someone answers on my post</label>
                  </div>
                </li>
                <li className="relative block px-0 py-2 bg-white border-0 rounded-b-lg text-inherit">
                  <div className="min-h-6 mb-0.5 block pl-0">
                    <input className="rounded-xl me-2 duration-200 ease-in-out after:rounded-full after:shadow-2xl after:duration-200 checked:after:translate-x-5 h-5 relative mt-1 ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right" type="checkbox" />
                    <label className="mb-2 ml-1 font-normal cursor-pointer select-none text-[13px] text-slate-500">Email me when someone mentions me</label>
                  </div>
                </li>

              </ul>

              <h6 className="mt-6 font-bold leading-tight uppercase text-xs text-slate-500">Application</h6>

              <ul className="flex flex-col pl-0 mb-0 rounded-lg">

                <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                  <div className="min-h-6 mb-0.5 block pl-0">
                    <input className="rounded-xl me-2 duration-200 ease-in-out after:rounded-full after:shadow-2xl after:duration-200 checked:after:translate-x-5 h-5 relative mt-1 ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right" type="checkbox" />
                    <label className="mb-2 ml-1 font-normal cursor-pointer select-none text-[13px] text-slate-500">New launches and projects</label>
                  </div>
                </li>
                <li className="relative block px-0 py-2 bg-white border-0 text-inherit">
                  <div className="min-h-6 mb-0.5 block pl-0">
                    <input className="rounded-xl me-2 duration-200 ease-in-out after:rounded-full after:shadow-2xl after:duration-200 checked:after:translate-x-5 h-5 relative mt-1 ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right" type="checkbox" />
                    <label className="mb-2 ml-1 font-normal cursor-pointer select-none text-[13px] text-slate-500">Monthly product updates</label>
                  </div>
                </li>
                <li className="relative block px-0 py-2 pb-0 bg-white border-0 rounded-b-lg text-inherit">
                  <div className="min-h-6 mb-0.5 block pl-0">
                    <input className="rounded-xl me-2 duration-200 ease-in-out after:rounded-full after:shadow-2xl after:duration-200 checked:after:translate-x-5 h-5 relative mt-1 ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right" type="checkbox" />
                    <label className="mb-2 ml-1 font-normal cursor-pointer select-none text-[13px] text-slate-500">Subscribe to newsletter</label>
                  </div>
                </li>

              </ul>

            </div>
          </div>

          <div className="w-full max-w-full my-10 xl:my-0 px-3 lg-max:mt-6 xl:w-4/12">
            <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-xl rounded-2xl bg-clip-border">
              <div className="pt-4 px-1 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                <div className="flex flex-wrap justify-between ">
                  <div className="flex items-center px-3">
                    <h6 className="mb-0 font-bold text-slate-700">Profile Information</h6>
                  </div>
                  <div className=" px-3 text-right flex items-center">
                    <Link href="/" data-target="tooltip_trigger" data-placement="top">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square text-sm text-slate-400" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex-auto p-4">
                <p className="leading-normal text-sm text-slate-500">Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).</p>
                <hr className="h-px my-6 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent" />
                <ul className="flex flex-col pl-0 mb-0 rounded-lg text-slate-500">
                  <li className="relative block px-4 py-2 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-sm text-inherit"><strong className="text-slate-700">Full Name:</strong>  Alec M. Thompson</li>
                  <li className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit"><strong className="text-slate-700">Mobile:</strong> (44) 123 1234 123</li>
                  <li className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit"><strong className="text-slate-700">Email:</strong> alecthompson@mail.com</li>
                  <li className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit"><strong className="text-slate-700">Location:</strong> USA</li>
                  <li className="relative block px-4 py-2 pb-0 pl-0 bg-white border-0 border-t-0 rounded-b-lg text-inherit">
                    <strong className="leading-normal text-sm text-slate-700">Social:</strong> &nbsp;
                    <Link className="inline-block py-0 pl-1 pr-2 mb-0 font-bold text-center text-blue-800 align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-none" href="https://github.com/AliNikseresht">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg>
                    </Link>
                    <Link className="inline-block py-0 pl-1 pr-2 mb-0 font-bold text-center align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-none text-sky-600" href="https://github.com/AliNikseresht">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                      </svg>
                    </Link>
                    <Link className="inline-block py-0 pl-1 pr-2 mb-0 font-bold text-center align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-none text-sky-900" href="https://github.com/AliNikseresht">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full max-w-full px-3 lg-max:mt-6 xl:w-4/12">
            <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-xl rounded-2xl bg-clip-border">
              <div className="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                <h6 className="mb-0 font-bold text-slate-700">Conversations</h6>
              </div>
              <div className="flex-auto p-4">
                {DescUser.map((val, index) => (

                  <ul key={index} className="flex flex-col pl-0 mb-0 rounded-lg">
                    <li className="relative flex items-center px-0 py-2 mb-2 bg-white border-0 rounded-t-lg text-inherit">
                      <div className="inline-flex items-center justify-center w-12 h-12 mr-4 text-white transition-all duration-200 text-base ease-soft-in-out rounded-xl">
                        <Image src={val.src} alt={val.alt} className='w-full shadow-2xl rounded-xl' />
                      </div>
                      <div className="flex flex-col items-start justify-center">
                        <h6 className="mb-0 leading-normal text-sm">{val.title}</h6>
                        <p className="mb-0 leading-tight text-xs">{val.message}</p>
                      </div>
                      <Link className="inline-block py-3 pl-0 pr-4 mb-0 ml-auto font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-in hover:scale-105 hover:active:scale-105 active:opacity-80 text-fuchsia-500 hover:text-fuchsia-800 hover:shadow-none active:scale-100" href="/">{val.rep}</Link>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

function DescProject() {
  return (
    <div className="flex-none w-full max-w-full px-3 mt-6">
      <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 shadow-xl rounded-2xl bg-clip-border">
        <div className="p-4 pb-0 mb-0 bg-white rounded-t-2xl">
          <h6 className="mb-1">Projects</h6>
          <p className="leading-normal text-sm">Architects design houses</p>
        </div>
        <div className="flex-auto p-4">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12">
              <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                <div className="relative">
                  <Link href='/' className="block shadow-xl rounded-2xl">
                    <Image src={LogoHome1} alt='LogoHome1' className='max-w-full shadow-2xl rounded-2xl' />
                  </Link>
                </div>
                <div className="flex-auto px-1 pt-6">
                  <p className="relative z-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text">Project #2</p>
                  <Link href="/">
                    <h5 className='text-slate-600 font-bold'>Modern</h5>
                  </Link>
                  <p className="mb-6 leading-normal text-sm text-slate-600">As Uber works through a huge amount of internal management turmoil.</p>

                  <div className="flex items-center justify-between">
                    <button type="button" className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500">View Project</button>
                    {avatars.map((value, index) => (
                      <div key={index} className="mt-2">
                        <Link href="/" className="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30" data-target="tooltip_trigger" data-placement="bottom">
                          <Image src={value.src} alt={value.alt} className='w-full rounded-full' />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12">
              <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                <div className="relative">
                  <Link href='/' className="block shadow-xl rounded-2xl">
                    <Image src={LogoHome2} alt='LogoHome1' className='max-w-full shadow-2xl rounded-2xl' />
                  </Link>
                </div>
                <div className="flex-auto px-1 pt-6">
                  <p className="relative z-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text">Project #1</p>
                  <Link href="/">
                    <h5 className='text-slate-600 font-bold'>Scandinavian</h5>
                  </Link>
                  <p className="mb-1 leading-normal text-sm text-slate-600">Music is something that every person has his or her own specific opinion about.</p>

                  <div className="flex items-center justify-between">
                    <button type="button" className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500">View Project</button>
                    {avatars.map((value, index) => (
                      <div key={index} className="mt-2">
                        <Link href="/" className="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30" data-target="tooltip_trigger" data-placement="bottom">
                          <Image src={value.src} alt={value.alt} className='w-full rounded-full' />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12">
              <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                <div className="relative">
                  <Link href='/' className="block shadow-xl rounded-2xl">
                    <Image src={LogoHome3} alt='LogoHome1' className='max-w-full shadow-2xl rounded-2xl' />
                  </Link>
                </div>
                <div className="flex-auto px-1 pt-6">
                  <p className="relative z-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text">Project #3</p>
                  <Link href="/">
                    <h5 className='text-slate-600 font-bold'>Minimalist</h5>
                  </Link>
                  <p className="mb-6 leading-normal text-sm text-slate-600">Different people have different taste, and various types of music.</p>

                  <div className="flex items-center justify-between">
                    <button type="button" className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500">View Project</button>
                    {avatars.map((value, index) => (
                      <div key={index} className="mt-2">
                        <Link href="/" className="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30" data-target="tooltip_trigger" data-placement="bottom">
                          <Image src={value.src} alt={value.alt} className='w-full rounded-full' />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12">
              <div className="relative flex flex-col h-full min-w-0 break-words bg-transparent border border-solid shadow-none rounded-2xl border-slate-300 bg-clip-border">
                <div className="flex flex-col justify-center flex-auto p-6 text-center">
                  <Link href="/" className='text-center flex flex-wrap justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-plus text-slate-400 mb-2" viewBox="0 0 16 16">
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                    <h5 className="text-slate-400 font-bold text-xl w-full">New project</h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

