import { BodyWrapper, HeadWrapper, RootWrapper } from '@/components/wrapper/text'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import Image from 'next/image'
import React from 'react'

const accordData = [
    {
        title: "Property & Business Law",
        desc: "Pityful a rethoric question ran over her cheek, then she continued her way. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
    },
    {
        title: "Famimly Law",
        desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
    },
    {
        title: "Commercial Litigation",
        desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."
    },
    {
        title: "Injury Compensation",
        desc: "The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way."
    },
]

const PageWhyus = () => {
    return (
        <div className=' min-h-screen max-w-screen flex flex-col justify-evenly items-center '>
            <RootWrapper className=' w-11/12 lg:items-center md:w-8/12'>
                <HeadWrapper line={true} className=' text-center items-center'>Why Us</HeadWrapper>
                <BodyWrapper className=''>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</BodyWrapper>
            </RootWrapper>
            <div className=' flex flex-col items-center justify-center lg:h-[60vh] lg:grid lg:grid-cols-2 '>
                <div className=' w-11/12 lg:flex lg:flex-col lg:justify-end lg:h-full lg:items-start lg:relative '>
                    <Image className=' ' alt='ppl img' src="/about_ppl.jpg" width={400} height={210} />
                    <Image className=' lg:absolute lg:bottom-20 lg:left-40' alt='flag img' src="/about_flag.jpg" width={500} height={350} />
                </div>
                <div className=' w-11/12 lg:h-full lg:flex lg:flex-col lg:justify-center lg:items-center '>
                    {
                        <Accordion type='single' defaultValue='item-0' > 
                        {/* NOTE - if collapsible is added the width of this div is decrease when all are collapsed and root div srinks */}
                            {
                                accordData.map((item, key) => {
                                    return (
                                        <AccordionItem value={`item-${key}`} key={key}>
                                            <AccordionTrigger>{item.title}</AccordionTrigger>
                                            <AccordionContent>{item.desc}</AccordionContent>
                                        </AccordionItem>
                                    )
                                })
                            }
                        </Accordion>
                    }
                </div>
            </div>
        </div>
    )
}

export default PageWhyus