import React, { useState } from 'react'
import { Button } from './button'
import { Play, Timer } from 'lucide-react';
import { Progress } from './progress';

function Controls() {
    const [isActive, setIsActive] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60);

    function startQuestion(): void {
        isActive ? setIsActive(false) : setIsActive(true);
    }

  return (
    <div className='w-full h-full flex flex-col gap-4 px-2 justify-center items-center'>
        {isActive && 
        <>
        <h1 className='text-5xl font-extrabold'>{timeLeft}s</h1>
        <Progress max={60} value={timeLeft}/>
        </>
        }
            
        <Button onClick={startQuestion} className='px-8 gap-4 font-sans'>
            <Play className='w-4 h-4'/>
            Start
        </Button>
    </div>
  )
}

export default Controls;