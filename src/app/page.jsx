"use client";

import { useState } from "react"
import React from 'react'
import OpenSetting from '../Components/home/OpenSetting'
import Setting from '../Components/home/asideRight'
import ShopPage from "@/Components/home/ShopPage"
import ShopDesc from "@/Components/home/ShopDesc"
import ShopCharts from "@/Components/home/ShopCharts"
import TablesProjects from "@/Components/home/TablesProjects"

const Home = () => {

  const [open, setOpen] = useState(false)

  const handleCloseSetting = () => {
    setOpen(false);
  };


  return (

    <div className="min-h-[100vh] max-w-[1212px] flex flex-col m-auto xl:ml-[20%] bg-gray-100">
      <ShopPage />
      <ShopDesc />
      <ShopCharts />
      <TablesProjects />
      <OpenSetting setOpen={setOpen} />
      <Setting open={open} onClose={handleCloseSetting} />
    </div>

  )
}

export default Home
