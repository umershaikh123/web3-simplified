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
    <motion.div
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="flex md:px-16 md:space-x-8 space-x-4 items-center w-full justify-start"
    >
      <LinkButton text="Home" href="" handleClick={() => scrollTo("home")} />
      <LinkButton text="About" href="" handleClick={() => scrollTo("about")} />
      <LinkButton
        text="Contact"
        href=""
        handleClick={() => scrollTo("contact")}
      />
    </motion.div>
  )
}

function scrollTo(sectionId: string) {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: "smooth" })
  }
}

export default Navbar
