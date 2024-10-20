"use client"

import Image from "next/image"
import logo from "/public/logo.png"
import effect1 from "/public/leftDesign.png"
import effect2 from "/public/rightDesign.png"
import Heading from "@/components/ui/Heading"
import { SubHeading } from "@/components/ui/Heading"
import { motion } from "framer-motion"
import { ParabolaAnimation, TriangleAnimation } from "@/components/Animations"
export default function HomePage() {
  return (
    <div
      className="md:h-full  h-full   mt-4 flex  justify-center   items-center overflow-clip "
      id="home"
    >
      <div className=" w-full h-full     relative ">
        <div className="flex flex-col items-center    min-h-[35rem]  ">
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

          <SubHeading
            text="New to Web3, Start"
            text2="here"
            href="https://medium.com/@garimayadav_20887"
          />
        </div>

        <div className="flex justify-between w-full ">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="absolute top-0 left-10 min-[1100px]:flex hidden"
          >
            <ParabolaAnimation css="absolute bottom-0 left-1" />
            <Image
              src={effect1}
              width={270}
              height={270}
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
            <TriangleAnimation css="absolute right-[1px] top-[135px]" />
            <Image src={effect2} width={270} height={270} alt="effect2" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
