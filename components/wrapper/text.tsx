import { cn } from "@/lib/utils"
import React from "react"
import { ReactNode } from "react"

export const HeadWrapper = ({ className, children }: { className?: string, children?: ReactNode }) => {

    return ( // cn() is used to insert new styles with default styles, className styles can overwrite the default styles given 
        <div className={cn(" text-white text-5xl font-extralight md:text-6xl md:font-light ", className)}>
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
        <div className={cn(" text-white text-xl font-extralight lg:text-2xl lg:font-light ", className)}>
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
