import { cn } from "@/lib/utils"
import React from "react"
import { ReactNode } from "react"

export const PageHeadWrapper = ({ className, children }: { className?: string, children?: ReactNode }) => {

    return ( // cn() is used to insert new styles with default styles, className styles can overwrite the default styles given 
        <div className={cn(" text-white text-5xl font-extralight md:text-6xl md:font-light ", className)}>
            {children}
        </div>
    )

} 

export const HeadWrapper = ({ className, children, line }: { className?: string, children?: ReactNode, line?: boolean }) => {

    return ( // cn() is used to insert new styles with default styles, className styles can overwrite the default styles given 
        <div className={cn(" text-black text-3xl font-extralight flex flex-col items-center justify-center md:text-4xl md:font-light  ", className)}>
            {
                line ? (
                    <div className=" w-14 h-0.5 bg-[#1D82FF] mb-5"></div>
                ) : ""
            }
            {children}
        </div>
    )

} 

export const SubHeadWrapper = ({ className, children }: { className?: string, children?: ReactNode }) => {

    return ( // cn() is used to insert new styles with default styles, className styles can overwrite the default styles given 
        <div className={cn(" text-white text-lg font-extralight md:mb-10 ", className)}>
            {children}
        </div>
    )

} 

export const BodyWrapper = ({ className, children }: { className?: string, children?: ReactNode }) => {

    return ( // cn() is used to insert new styles with default styles, className styles can overwrite the default styles given 
        <div className={cn(" text-gray-700 text-base text-center font-light md:text-xl md:font-light ", className)}>
            {children}
        </div>
    )

} 

export const RootWrapper = ({ className, children }: { className?: string, children?: ReactNode }) => {

    return ( // cn() is used to insert new styles with default styles, className styles can overwrite the default styles given 
        <div className={cn(" flex flex-col gap-5 items-center justify-center lg:items-start ", className)}>
            {children}
        </div>
    )

} 
