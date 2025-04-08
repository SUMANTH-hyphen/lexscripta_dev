"use client"

import React from 'react'
import { BodyWrapper, HeadWrapper, RootWrapper } from '@/components/wrapper/text'
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    // CarouselNext,
    // CarouselPrevious,
} from "@/components/ui/carousel"
import { type CarouselApi } from "@/components/ui/carousel"
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const areas = [
    {
        image: "/criminal.jpg",
        icon: "",
        title: "Criminal Law",
        desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
    },
    {
        image: "/about_flag.jpg",
        icon: "",
        title: "Financial Law",
        desc: "The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way."
    },
    {
        image: "/about_ppl.jpg",
        icon: "",
        title: "Cyber Crime Law",
        desc: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. And if she hasn’t been rewritten, then they are still using her."
    },
    {
        image: "/about_flag.jpg",
        icon: "",
        title: "Real Estate Law",
        desc: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. And if she hasn’t been rewritten, then they are still using her. Original article: Web Designer Notebook | Text from Dummy Text Generator"
    },
    {
        image: "/criminal.jpg",
        icon: "",
        title: "Family Law",
        desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
    },
]

const PageAreas = () => {

    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
    const plugin = React.useRef(
        Autoplay({ delay: 3500, stopOnInteraction: true })
    )

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <div className=' h-screen min-h-screen max-w-screen flex flex-col justify-evenly items-center '>
            <RootWrapper className=' w-11/12 lg:items-center md:w-8/12'>
                <HeadWrapper line={true} className=' text-center items-center'>Practicing Areas</HeadWrapper>
                <BodyWrapper className=''>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</BodyWrapper>
            </RootWrapper>
            <div className=' w-11/12 md:w-10/12 lg:w-9/12 flex flex-col items-center justify-evenly '>
                <Carousel
                    setApi={setApi}
                    plugins={[plugin.current]}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent className=' '>
                        {areas.map((area, index) => (
                            <CarouselItem key={index} className=' '>
                                <Card className=' h-full md:h-[25rem] lg:h-[30rem]'> {/* <-- Fix the height here */}
                                    <CardContent className='h-full p-0 grid grid-cols-1 lg:grid-cols-7 lg:gap-10'>
                                        <Image
                                            src={area.image}
                                            alt='card-img'
                                            height={900}
                                            width={500}
                                            className=' lg:col-span-3 h-full w-full object-cover'
                                        />
                                        <div className='h-full w-full flex flex-col justify-center lg:py-10 lg:pr-10 lg:overflow-hidden lg:col-span-4'>
                                            <HeadWrapper line={false}>{area.title}</HeadWrapper>
                                            <BodyWrapper className="overflow-hidden text-ellipsis">{area.desc}</BodyWrapper>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>

                        ))}
                    </CarouselContent>
                    {/* <CarouselPrevious />
                    <CarouselNext /> */}
                </Carousel>
                <div>
                    {
                        Array.from({ length: count }, (_, i) => (
                            <Button
                                key={i}
                                className={`mx-1 h-1.5 w-4 rounded-full p-0 transition-all duration-300 ease-in-out ${i === current - 1
                                    ? "bg-black hover:bg-white"
                                    : "bg-neutral-600/75"
                                    }`}
                                onClick={() => api?.scrollTo(i)}
                            />
                        ))
                    }
                </div>
            </div>
        </div >
    )
}

export default PageAreas
