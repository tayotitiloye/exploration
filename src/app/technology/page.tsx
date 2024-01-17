import Technology from '@/components/Technology'
import { technology } from '@/data'
import React, { useState } from 'react'

export type technologyT= {
    name: string;
    images: {
        portrait: string;
        landscape: string;
    };
    description: string;
}[]

function page() {

  
  return (
    <div>
      <Technology data={technology} />
      </div>
    )   
}

export default page