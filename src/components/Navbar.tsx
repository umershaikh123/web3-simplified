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
      className="flex md:px-16 space-x-8 items-center w-full justify-start"
    >
      <LinkButton text="Home" href="" />
      <LinkButton text="About" href="" />
      <LinkButton text="Contact" href="" />
    </motion.div>
  )
}

export default Navbar
