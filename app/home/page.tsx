import { Button } from '@/components/ui/button'
import { HeadWrapper, RootWrapper, SubHeadWrapper } from '@/components/wrapper/text'
import Image from 'next/image'
import React from 'react'

const PageHome = () => {

  return (
    <div className=' relative max-h-screen max-w-screen '>
      <Image
        src="/home_bg.jpg"
        width={2600}
        height={1600}
        alt="home screen bg"
        className=' h-screen w-screen object-none md:object-cover'
      />
      <div className=' bg-black bg-opacity-45 h-full w-full absolute top-0 left-0 ' />
      <RootWrapper className=' absolute top-1/3 left-1/2 transform -translate-x-1/2 whitespace-nowrap lg:top-1/3 lg:left-[60%] lg:translate-x-0'>
        <HeadWrapper>The Law Firm</HeadWrapper>
        <SubHeadWrapper >A free template solely for law firm</SubHeadWrapper>
        <Button variant="ghost" className=' text-white hover:text-black border-white border-1 px-4 py-7 tracking-[0.2em] font-thin '>FREE CONSULTATION</Button>
      </RootWrapper>
      {/* <div className='  flex flex-col gap-5 items-center justify-center text-center text-white left-1/2 transform -translate-x-1/2 whitespace-nowrap lg:gap-5 lg:items-start lg:top-1/3 lg:left-[60%] lg:translate-x-0  '>
        <div className=' text-white flex flex-col gap-5 items-center justify-center lg:items-start lg:gap-10 '>
          <div className=' text-5xl font-extralight lg:text-6xl lg:font-light'>The Law Firm</div>
          <div className=' text-lg font-extralight '>A free template solely for your law firm</div>
        </div>
      </div> */}
    </div>
  )
}

export default PageHome