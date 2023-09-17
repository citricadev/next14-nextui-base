import Image from 'next/image'
import React from 'react'

const Timeline = () => {
  return (
    <div className='flex flex-col items-center py-20'>
      <Image
        src={'/img/timeline-years.png'}
        width={185}
        height={3032}
        alt='timeline'
      />
      <span className='title text-brand-gold mt-10'>
        ... y seguiremos con muchos más.
      </span>
    </div>
  )
}

export default Timeline