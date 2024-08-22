import React from 'react'
import { Button } from './ui/button'
import { ChevronLeft, Rocket } from "lucide-react"

function Header() {
  return (
    <header className='flex flex-row items-center justify-between p-5 h-1/6 w-full bg-slate-200'>
  <Button size={'icon'}>
    <ChevronLeft className='h-4 w-4'/>
  </Button>
  <div className='flex flex-row items-center justify-center w-full'>
    <Rocket className='h-4 w-4 mr-2'/>
    <h1 className='font-sans text-lg'>Check In</h1>
  </div>
</header>
  )
}

export default Header