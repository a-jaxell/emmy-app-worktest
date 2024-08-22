import React from 'react'
import { Button } from './button'
import { Play } from 'lucide-react';

function Controls() {
  return (
    <div className='w-full h-full flex px-2 justify-center items-center'>
        <Button className='px-8 gap-4'>
            <Play className='w-4 h-4'/>
            Start
        </Button>
    </div>
  )
}

export default Controls;