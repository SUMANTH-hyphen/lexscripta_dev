import { Button } from '@/components/ui/button'
import { PageHeadWrapper, RootWrapper, SubHeadWrapper } from '@/components/wrapper/text'
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
        <PageHeadWrapper>The Law Firm</PageHeadWrapper>
        <SubHeadWrapper >A free template solely for law firm</SubHeadWrapper>
        <Button variant="ghost" className=' text-white hover:text-black border-white border-1 px-4 py-7 tracking-[0.2em] font-thin '>FREE CONSULTATION</Button>
      </RootWrapper>
    </div>
  )
}

export default PageHome