import React from "react"
import { LinkButton } from "./ui/Button"

const Navbar = () => {
  return (
    <div className="flex px-16 space-x-8 items-center w-full justify-start ">
      <LinkButton text="Home" href="" />
      <LinkButton text="About" href="" />
      <LinkButton text="Contact" href="" />
    </div>
  )
}

export default Navbar
