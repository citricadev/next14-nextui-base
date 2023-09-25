import Image from 'next/image'
import React from 'react'
import TimelineItem from './timeline-item'

const Timeline = () => {
  return (
    <div className='flex flex-col items-center py-20'>
      <TimelineItem />
      <span className='title text-gold-brand mt-10'>
        ... y seguiremos con muchos más.
      </span>
    </div>
  )
}

export default Timeline