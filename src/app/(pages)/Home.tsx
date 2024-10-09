"use client"

import Image from "next/image"
import logo from "/public/logo.png"
import effect1 from "/public/effect1.png"
import effect2 from "/public/effect2.png"
import Heading from "@/components/ui/Heading"
import { SubHeading } from "@/components/ui/Heading"
import { motion } from "framer-motion"
import { ParabolaAnimation, TriangleAnimation } from "@/components/Animations"
export default function HomePage() {
  return (
    <div className="h-full  md:py-16 mb-16  relative overflow-clip" id="home">
      <div className="flex flex-col items-center min-h-[80vh] justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src={logo}
            width={250}
            height={250}
            alt="logo"
            className="-ml-2"
          />
        </motion.div>

        <Heading text="Web3 Simplified" css="-mt-4" />

        <SubHeading text="It's About People, Not Just Tech" />
      </div>

      <div className="flex justify-between w-full">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="absolute bottom-0 left-10 min-[1100px]:flex hidden"
        >
          <ParabolaAnimation css="absolute bottom-0" />
          <Image
            src={effect1}
            width={300}
            height={300}
            alt="effect1"
            className=""
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="absolute top-0 right-10 min-[1100px]:flex hidden"
        >
          <TriangleAnimation css="absolute right-1 top-[135px]" />
          <Image src={effect2} width={270} height={270} alt="effect2" />
        </motion.div>
      </div>
    </div>
  )
}
