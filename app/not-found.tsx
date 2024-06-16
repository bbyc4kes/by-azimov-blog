'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

const NotFound = () => {
  const router = useRouter()

  const handleNavigate = () => {
    router.push('/')
  }

  return (
    <div className="min-h-screen w-full flex justify-center">
      <div className="flex flex-col items-center mt-24 sm:mt-32 lg:mt-60 gap-4 max-w-3xl text-center px-12">
        <h2 className="text-3xl uppercase font-semibold">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </h2>
        <p className="text-xl">
          But don&apos;t worry, you can always go back to the homepage.
        </p>
        <Button
          className="font-bold py-2 px-4 rounded"
          onClick={handleNavigate}
        >
          Go to Homepage
        </Button>
      </div>
    </div>
  )
}

export default NotFound
