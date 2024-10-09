"use client"
import React from "react"

import Link from "next/link"
import EmailIcon from "@mui/icons-material/Email"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import XIcon from "@mui/icons-material/X"
import Image from "next/image"
import logo from "/public/logo.png"
import mediumLogo from "/public/medium.png"
import { motion } from "framer-motion"

const footerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
}

export default function Footer() {
  return (
    <motion.div
      className="flex justify-between px-16 items-center py-12"
      id="contact"
      initial="hidden"
      whileInView="visible"
      variants={footerVariants}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex  items-center">
        <Image src={logo} width={100} height={100} alt="logo" />

        <h1 className="text-[var(--primary)] text-2xl -ml-2  font-semibold">
          web3 simplified
        </h1>
      </div>

      <div className=" flex     space-x-4 ">
        <Link href={"mailto:web3simplifiedinfo@gmail.com"} target="_blank">
          <EmailIcon
            sx={{ color: "var(--secondary)", fontSize: 40 }}
            className="hover:scale-110 transition duration-300 ease-in-out"
          />
        </Link>

        <Link
          href={"https://www.linkedin.com/in/garima-yadav-4027823b/"}
          target="_blank"
        >
          <LinkedInIcon
            sx={{ color: "var(--secondary)", fontSize: 40 }}
            className="hover:scale-110 transition duration-300 ease-in-out"
          />
        </Link>

        <Link href={"https://x.com/web3simplifiedx"} target="_blank">
          <XIcon
            sx={{ color: "var(--secondary)", fontSize: 40 }}
            className="hover:scale-110 transition duration-300 ease-in-out"
          />
        </Link>

        <Link href={"https://medium.com/@garimayadav_20887"} target="_blank">
          <Image
            src={mediumLogo}
            width={40}
            height={40}
            alt="mediumLogo"
            className="hover:scale-110 transition duration-300 ease-in-out"
          />
        </Link>
      </div>
    </motion.div>
  )
}
