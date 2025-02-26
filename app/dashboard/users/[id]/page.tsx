'use client'
import { useParams } from 'next/navigation'
import React from 'react'

const Page =  () => {
    const params = useParams()
    const {id} = params
  return (
    <div>
        <h1 className='text-3xl'>User Profile : {id}</h1>
    </div>
  )
}

export default Page