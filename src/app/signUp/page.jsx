"use client";

import React from 'react'
import Link from "next/link"
import Image from "next/image"


const SignUp = () => {
    return (
        <div className='min-h-[100vh] max-w-full flex flex-col m-auto'>
            <Navbar />
            <Main />
            <Footer />
        </div>
    )
}

export default SignUp

const menufooter = [
    {
        title: 'Company'
    },
    {
        title: 'About Us'
    },
    {
        title: 'Team'
    },
    {
        title: 'Products'
    },
    {
        title: 'Blog'
    },
    {
        title: 'Pricing'
    },
]

const IconFooter = [
    {
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dribbble" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8zm5.284 3.688a6.802 6.802 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A6.95 6.95 0 0 1 8 1.18zm-2.907.642A43.123 43.123 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.865 6.865 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.817 6.817 0 0 1-1.752-4.564zM8 14.837a6.785 6.785 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.246 28.246 0 0 1 1.457 5.18A6.722 6.722 0 0 1 8 14.837zm3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.774 6.774 0 0 1-2.924 4.573z" />
        </svg>)
    },
    {
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
        </svg>)
    },
    {
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
        </svg>)
    },
    {
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pinterest" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z" />
        </svg>)
    },
    {
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>)
    },
]

const menuHeader = [
    {
        head: 'Dashboard',
        headIcon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pie-chart-fill mr-1 opacity-60" viewBox="0 0 16 16">
            <path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 0 0 8.5.015z" />
        </svg>)
    },
    {
        head: 'Profile',
        headIcon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill mr-1 opacity-60" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        </svg>)
    },
    {
        head: 'Sign Up',
        headIcon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle mr-1 opacity-60" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
        </svg>)
    },
    {
        head: 'Sign In',
        headIcon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-key-fill mr-1 opacity-60" viewBox="0 0 16 16">
            <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        </svg>)
    },
]

const svgicon = [
    {
        svg: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook text-blue-800" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
        </svg>)
    },
    {
        svg: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-apple text-black" viewBox="0 0 16 16">
            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
        </svg>)
    },
    {
        svg: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-google text-red-600" viewBox="0 0 16 16">
            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
        </svg>)
    },
]



function Navbar() {
    return (
        <div className="sticky top-0 z-sticky hidden lg:flex z-50">
            <div className="flex flex-wrap">
                <div className="w-full max-w-full px-3 flex-0">

                    <nav className="absolute md:w-[95%] md:h-[80px] lg:h-[60px] lg:w-[950px] xl:w-[1200px] mx-auto top-0 left-0 right-0 z-50 flex flex-wrap items-center px-4 py-3 my-4 rounded-full lg:flex-nowrap lg:justify-start">
                        <div className="flex items-center justify-between w-full p-0 pl-6 mx-auto flex-wrap-inherit">
                            <Link className="py-2.5 text-sm mr-4 ml-4 whitespace-nowrap font-bold text-slate-100 lg:ml-0" href="/"> Soft UI Dashboard </Link>
                            <div className="items-center justify-center overflow-hidden transition-all duration-500 ease-soft lg-max:max-h-0 basis-full lg:flex lg:basis-auto">
                                {menuHeader.map((value, index) => (

                                    <ul key={index} className="flex flex-col pl-0 mx-auto mb-0 list-none lg:flex-row xl:ml-auto">
                                        <li>
                                            <Link className="flex items-center px-4 py-2 mr-2 font-normal transition-all lg-max:opacity-0 duration-300  ease-in-out text-sm text-slate-100 lg:px-2" aria-current="page" href="/">
                                                {value.headIcon}
                                                {value.head}
                                            </Link>
                                        </li>
                                    </ul>
                                ))}
                                <ul className="hidden pl-0 mb-0 list-none lg:block lg:flex-row ml-52">
                                    <li>
                                        <Link href="https://github.com/AliNikseresht" target="_blank" className="  hover:scale-105 hover:shadow-sm active:opacity-80  ease-in text-xs tracking-tight shadow-md bg-gradient-to-tl from-gray-300 to-gray-100 rounded-2xl mb-0 mr-1 inline-block cursor-pointer border-0 bg-transparent px-8 py-2 text-center align-middle font-bold uppercase text-slate-800 transition-all duration-300">Free download</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

function Main() {
    return (
        <main className="mt-0 transition-all duration-200 ease-in-out">
            <section className="min-h-screen mb-32">
                <div className="relative flex items-start pt-12 pb-56 m-4 overflow-hidden bg-center bg-cover min-h-[470px] rounded-xl bg-[url('../../public/images/curved-images/curved14.jpg')]">
                    <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-60"></span>
                    <div className="max-w-full flex flex-col m-auto z-10">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full max-w-full mx-auto mt-0 text-center lg:flex-0 shrink-0">
                                <h1 className="mt-12 mb-2 text-white text-5xl font-bold">Welcome!</h1>
                                <p className="text-white text-center">Use these awesome forms to login or create new account in your project for free.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="flex flex-wrap -mt-48 md:-mt-56 lg:-mt-48">
                        <div className="w-full max-w-full px-6 mx-auto mt-0 md:flex-0 shrink-0 md:w-7/12 lg:w-5/12 xl:w-4/12">
                            <div className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-xl rounded-2xl bg-clip-border">
                                <div className="p-6 mb-0 text-center bg-white border-b-0 rounded-t-2xl">
                                    <h5 className='text-xl font-medium text-slate-700'>Register with</h5>
                                </div>
                                <div className="flex flex-wrap px-3 -mx-3 sm:px-6 xl:px-12">
                                    {svgicon.map((itemsvg, index) => (

                                        <div key={index} className="w-3/12 max-w-full ml-auto px-1 flex-1">
                                            <Link className="w-full text-xl justify-center flex py-3 mb-4 font-bold text-center text-gray-900 uppercase align-middle transition-all duration-300 bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-105 leading-relaxed ease-in tracking-tight hover:bg-transparent hover:opacity-75" href="/">
                                                {itemsvg.svg}
                                            </Link>
                                        </div>
                                    ))}
                                    <div className="relative w-full max-w-full px-3 mt-2 text-center shrink-0">
                                        <p className="z-20 inline px-4 mb-2 font-semibold leading-normal bg-white text-sm text-slate-400">or</p>
                                    </div>
                                </div>
                                <div className="flex-auto p-6">
                                    <form role="form text-left">
                                        <div className="mb-4">
                                            <input type="text" className="text-sm focus:shadow leading-5.6 ease-out block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" placeholder="Name" aria-label="Name" aria-describedby="email-addon" />
                                        </div>
                                        <div className="mb-4">
                                            <input type="email" className="text-sm focus:shadow leading-5.6 ease-out block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" placeholder="Email" aria-label="Email" aria-describedby="email-addon" />
                                        </div>
                                        <div className="mb-4">
                                            <input type="password" className="text-sm focus:shadow leading-5.6 ease-out block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" placeholder="Password" aria-label="Password" aria-describedby="password-addon" />
                                        </div>
                                        <div className="min-h-6 mb-0.5 block">
                                        <input className="rounded-xl duration-200 ease-in-out after:rounded-full after:shadow-2xl after:duration-200 checked:after:translate-x-5 h-5 relative mt-1 ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right" type="checkbox" />
                                            <label className="mb-2 ml-1 font-normal cursor-pointer select-none text-sm text-slate-700" for="terms"> I agree the <Link href="/" className="font-bold text-slate-700">Terms and Conditions</Link> </label>
                                        </div>
                                        <div className="text-center">
                                            <button type="button" className="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-80 hover:scale-105 hover:shadow-md text-xs  ease-in tracking-tight shadow-md bg-gradient-to-tl from-gray-900 to-slate-500 hover:border-slate-700 hover:bg-slate-700 hover:text-white">Sign up</button>
                                        </div>
                                        <p className="mt-4 mb-0 leading-normal text-sm">Already have an account? <Link href="/signIn" className="font-bold text-slate-700">Sign in</Link></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

function Footer() {
    return (
        <footer className="py-12">
            <div className="max-w-full flex flex-col m-auto">
                <div className="flex flex-wrap">
                    <div className="flex-shrink-0 w-full max-w-full mx-auto mb-6 text-center lg:flex-0 lg:w-8/12">
                        {menufooter.map((item, index) => (

                            <Link key={index} href="/profile" target="_blank" className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"> {item.title} </Link>
                        ))}
                    </div>
                    <div className="flex justify-center w-full max-w-full mx-auto mt-2 mb-6 text-center lg:w-8/12">
                        {IconFooter.map((val, index) => (
                            <Link key={index} href="https://github.com/AliNikseresht" target="_blank" className="mr-6 text-slate-400">
                                <span className="text-lg">{val.icon}</span>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-8/12 max-w-full px-3 mx-auto mt-1 text-center flex-0">
                        <p className="mb-0 text-slate-400">
                            Copyright ©
                            2023
                            Soft by <span className='text-slate-800'>AliNikseresht.</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}