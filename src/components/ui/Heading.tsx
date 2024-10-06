import React from "react"
import Image from "next/image"
import logo from "/public/logo.png"
const Heading = ({ text, css }: { text: string; css?: string }) => {
  return (
    <div
      className={`text-8xl font-bold text-center text-[var(--primary)] max-w-[30rem] ${css}`}
    >
      {text}
    </div>
  )
}

export const SubHeading = ({ text }: { text: string }) => {
  return (
    <div className="text-4xl text-center text-[var(--secondary)]  font-normal mt-6">
      {text}
    </div>
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
    <div className="flex flex-col py-16 w-full justify-center items-center space-y-4 relative">
      <Image
        src={logo}
        width={150}
        height={150}
        alt="logo"
        className="absolute  top-10 right-10  "
      />
      <h1 className="text-6xl font-bold text-center text-[var(--primary)]">
        {title}
      </h1>
      <p className="text-[var(--secondary)] text-4xl font-light">{subtitle}</p>
    </div>
  )
}

export default Heading
