
import Destination from '@/components/Destination'
import { destinations } from '@/data'

import React from 'react'



export type destinationT = {
    name: string;
    images: {
        png: string;
        webp: string;
    };
    description: string;
    distance: string;
    travel: string;
}[]


function page() {

  return (
      <div>
        
          <Destination data={destinations} />
          
    </div>
  )
}

export default page