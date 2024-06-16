import React from 'react'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <section className="max-w-7xl min-h-screen mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-20 lg:items-start px-8 py-16 lg:py-36">
      <div className="flex flex-col h-96 gap-10">
        <div className="w-full flex flex-col gap-10">
          <h1 className="text-4xl font-bold">
            Looking for the fresh content?
            <br /> This is byAzimov.
          </h1>
          <p className="text-lg">
            Search, write and share ideas using byAzimov!
            <br /> An open-source blog about web development, programming and
            more.
          </p>
        </div>
        <Button className="w-48">Read the Blog</Button>
      </div>
      <div className="flex justify-center items-center">
        <img
          src="/images/byAzimov.png"
          alt="byAzimov"
          className="w-64 h-64 rounded-full"
        />
      </div>
    </section>
  )
}

export default Hero
