"use client"

import React from "react"
import leftPattern from "/public/half_circle.svg"
import rightPattern from "/public/other_half.svg"
import Image from "next/image"
import { motion } from "framer-motion"

const leftPatternVariants = {
  hidden: {
    y: -50,
  },
  visible: {
    y: 50,
    transition: {
      y: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 1,
        ease: "easeInOut",
      },
    },
  },
}

const rightPatternVariants = {
  hidden: {
    y: 50,
  },
  visible: {
    y: -50,
    transition: {
      y: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 1,
        ease: "easeInOut",
      },
    },
  },
}

export const ParabolaAnimation = ({ css }: { css?: string }) => {
  return (
    <div className={`flex flex-col items-center justify-center  h-fit  ${css}`}>
      <div className=" w-[150px] h-[152px]  bg-[var(--primary)] overflow-y-hidden flex  relative   justify-center ">
        <motion.div
          className="flex flex-col items-center justify-center absolute"
          id="left pattern"
          variants={leftPatternVariants}
          initial="hidden"
          animate="visible"
        >
          <Image
            src={leftPattern}
            width={100}
            height={100}
            alt="circle pattern"
            className="-mt-12"
          />
          <Image
            src={leftPattern}
            width={100}
            height={100}
            alt="circle pattern"
          />
          <Image
            src={leftPattern}
            width={100}
            height={100}
            alt="circle pattern"
          />
          <Image
            src={leftPattern}
            width={100}
            height={100}
            alt="circle pattern"
          />
        </motion.div>

        <motion.div
          className="flex flex-col items-end justify-end"
          id="right pattern"
          variants={rightPatternVariants}
          initial="hidden"
          animate="visible"
        >
          <Image
            src={rightPattern}
            width={100}
            height={100}
            alt="circle pattern"
          />
          <Image
            src={rightPattern}
            width={100}
            height={100}
            alt="circle pattern"
          />

          <Image
            src={rightPattern}
            width={100}
            height={100}
            alt="circle pattern"
            className="-mb-11"
          />
        </motion.div>
      </div>
    </div>
  )
}
