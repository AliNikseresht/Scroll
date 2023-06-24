"use client";
import React, { useState } from 'react'
import OpenSetting from '../../Components/home/OpenSetting'
import Setting from '../../Components/home/asideRight'
import TablesPage from '@/Components/home/TablesPage'


const Tables = () => {
  const [open, setOpen] = useState(false)

  const handleCloseSetting = () => {
    setOpen(false);
  };

  return (
    <div className='min-h-[100vh] max-w-[1212px] flex flex-col m-auto xl:ml-[20%] bg-gray-100'>
      <TablesPage />
      <OpenSetting setOpen={setOpen} />
      <Setting open={open} onClose={handleCloseSetting} />
    </div>
  )
}

export default Tables
