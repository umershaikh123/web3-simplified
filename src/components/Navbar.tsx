"use client"
import React from "react"
import { LinkButton } from "./ui/Button"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const Navbar = () => {
  return (
    <div className="w-full  flex justify-center">
      <motion.div
        initial="hidden"
        animate="show"
        variants={containerVariants}
        className="flex md:px-16 md:space-x-8 space-x-4 items-center w-full md:justify-start justify-center max-w-[100rem] "
      >
        <LinkButton text="Home" href="" targetRef="" handleClick={() => scrollTo("home")} />
        <LinkButton
          text="About"
          href=""
          targetRef=""
          handleClick={() => scrollTo("about")}
        />
        <LinkButton
          text="Blogs"
          href="https://medium.com/@garimayadav_20887"
          targetRef="_blank"
          handleClick={() => scrollTo("contact")}
        />
      </motion.div>
    </div>
  )
}

function scrollTo(sectionId: string) {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: "smooth" })
  }
}

export default Navbar
