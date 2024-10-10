"use client"

import React from "react"

import { Header } from "@/components/ui/Heading"

import { motion } from "framer-motion"

const About = () => {
  return (
    <div
      className="h-full md:min-h-full  flex flex-col items-center justify-center overflow-x-clip"
      id="about"
    >
      <div className=" w-full h-full max-h-[70rem] flex   items-center flex-col">
        <Header
          title="About us"
          subtitle="Unlocking the Human Side of the Decentralized Web"
        />

        <div className="w-full min-[900px]:flex-row flex flex-col">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="bg-white px-4 py-10 items-center justify-center flex flex-col min-[900px]:w-1/2 w-full space-y-4"
            id="section1"
          >
            <h1 className="text-[var(--primary)] md:text-6xl text-4xl  font-semibold">
              What we do?
            </h1>
            <p className="text-[var(--background)] font-semibold md:text-2xl md:px-16 px-4 text-xl text-center">
              At Web3 Simplified, we translate complex concepts into relatable,
              real-world scenarios, exploring how Web3 impacts creativity,
              ownership, privacy, and connection.
            </p>
          </motion.div>

          <div className="flex flex-col min-[900px]:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="bg-[var(--primary)] text-[var(--background)] px-4 py-10 flex flex-col items-center justify-center space-y-4"
              id="section2"
            >
              <h1 className="md:text-6xl text-4xl  font-semibold">
                Our Mission
              </h1>
              <p className="font-semibold md:text-2xl md:px-16 px-4 text-xl text-center">
                To reveal the real-world impact and opportunities of Web3 for
                everyone, regardless of technical expertise.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="bg-[var(--background)] text-white px-4 py-10 flex flex-col items-center justify-center space-y-4  border-b border-white"
              id="section3"
            >
              <h1 className="md:text-6xl text-4xl  font-semibold">Join Us</h1>
              <p className="font-semibold md:text-2xl md:px-16 px-4 text-xl text-center">
                To discover how Web3 could create new opportunities and reshape
                industries – no coding skills required.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
