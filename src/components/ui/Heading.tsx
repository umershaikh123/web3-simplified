import React from "react"
import Image from "next/image"
import logo from "/public/logo.png"
import { motion } from "framer-motion"
const Heading = ({ text, css }: { text: string; css?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      className={`md:text-8xl text-6xl max-w-[20rem] font-bold text-center text-[var(--primary)] md:max-w-[30rem] ${css}`}
    >
      {text}
    </motion.div>
  )
}

export const SubHeading = ({ text,text2,href }: { text: string,text2:string,href:string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      className="md:text-4xl text-3xl text-center text-[var(--secondary)] font-normal mt-6"
    >
      {text} <u><a href={href} target="_blank">{text2}</a></u>
    </motion.div>
  )
}

export const Header = ({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) => {
  return (
    <div className="flex flex-col py-8 w-full justify-center items-center space-y-4 relative">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
        className="absolute top-10 min-[900px]:right-10 min-[900px]:flex hidden"
      >
        <Image src={logo} width={150} height={150} alt="logo" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, scale: 1.2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-6xl font-bold text-center text-[var(--primary)]"
      >
        {title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="text-[var(--secondary)] min-[900px]:text-4xl text-xl text-center  font-light"
      >
        {subtitle}
      </motion.p>
    </div>
  )
}
export default Heading
