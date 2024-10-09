"use client"
import Link from "next/link"
import React from "react"
import { motion } from "framer-motion"
const Button = () => {
  return <div>Button</div>
}

export default Button

export const LinkButton = ({
  text,
  href,
  handleClick,
}: {
  text: string
  href: string
  handleClick?: () => void
}) => {
  return (
    <motion.div variants={linkButtonVariants}>
      <Link href={href} onClick={handleClick}>
        <button className="bg-[var(--primary)] px-10  rounded-3xl py-2 text-[var(--background)] font-semibold hover:bg-[var(--background)] hover:text-[var(--primary)] border-2 border-[var(--primary)] duration-300 ease-in-out">
          {text}
        </button>
      </Link>
    </motion.div>
  )
}

const linkButtonVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
}
