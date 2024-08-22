import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from './card'
import { Rocket } from 'lucide-react'

function ExerciseCard() {
  return (
    <Card className="border-none shadow-none">
        <CardHeader className='px-2 py-6'>
          <CardTitle className="flex flex-row">
            <Rocket className="mr-2"/>Check In</CardTitle>
          <CardDescription>5-10 mins | 2-15 members</CardDescription>
        </CardHeader>        
      </Card>
  )
}

export default ExerciseCard