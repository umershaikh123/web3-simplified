"use client"

import React from "react"
import leftPattern from "/public/half_circle.svg"
import rightPattern from "/public/other_half.svg"
import Image from "next/image"
import { motion } from "framer-motion"
import whiteTraingle from "/public/triangle_white.svg"
import OrangeTraingle from "/public/triangle_orange.svg"

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
      <div className=" w-[130px] h-[138px]  bg-[var(--primary)] overflow-y-hidden flex  relative   justify-center ">
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

const triangleVariants = {
  hidden: {
    y: 0,
  },
  visible: {
    y: -125,
    transition: {
      duration: 1,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
}

export const TriangleAnimation = ({ css }: { css?: string }) => {
  return (
    <div className={`flex flex-col items-center justify-center h-fit ${css}`}>
      <div className="w-[132px] h-[140px] bg-[#ffc610] overflow-hidden flex relative justify-center">
        <motion.div
          className="absolute top-0 flex flex-col"
          initial="hidden"
          animate="visible"
        >
          {/* Each triangle moves independently */}
          <motion.div variants={triangleVariants}>
            <Image
              src={whiteTraingle}
              width={150}
              height={150}
              alt="triangle"
            />
          </motion.div>
          <motion.div variants={triangleVariants}>
            <Image
              src={OrangeTraingle}
              width={150}
              height={150}
              alt="triangle"
            />
          </motion.div>
          <motion.div variants={triangleVariants}>
            <Image
              src={whiteTraingle}
              width={150}
              height={150}
              alt="triangle"
            />
          </motion.div>
          <motion.div variants={triangleVariants}>
            <Image
              src={OrangeTraingle}
              width={150}
              height={150}
              alt="triangle"
            />
          </motion.div>
          <motion.div variants={triangleVariants}>
            <Image
              src={whiteTraingle}
              width={150}
              height={150}
              alt="triangle"
            />
          </motion.div>
          <motion.div variants={triangleVariants}>
            <Image
              src={OrangeTraingle}
              width={150}
              height={150}
              alt="triangle"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
