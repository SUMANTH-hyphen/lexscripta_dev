import { BodyWrapper, HeadWrapper, RootWrapper } from '@/components/wrapper/text'
import Image from 'next/image'
import React from 'react'

const PageAbout = () => {
  return (
    <div className='h-screen max-h-screen max-w-screen flex flex-col justify-center items-center gap-10 lg:flex-row '>
      <RootWrapper className=' items-start w-11/12 lg:w-5/12  '>
        <HeadWrapper line={true} className=' items-start'>Who We Are</HeadWrapper>
        <BodyWrapper className=' text-start'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. <br /><br/> A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</BodyWrapper>
      </RootWrapper>
      <div className=' md:relative w-11/12 lg:w-6/12 '>  
        <Image className='' alt='flag img' src="/about_flag.jpg" width={600} height={450}/>
        <Image className=' md:absolute md:top-52 md:left-72' alt='ppl img' src="/about_ppl.jpg" width={500} height={310}/>
      </div>
    </div>
  )
}

export default PageAbout