import React from "react"
import logo from "/public/logo.png"
import { Header } from "@/components/ui/Heading"
const About = () => {
  return (
    <div className="h-[100vh]">
      <Header
        title="About us"
        subtitle="Unlocking the Human Side of the Decentralized Web"
      />

      <div className="w-full flex">
        <div className="bg-white px-4 py-24 items-center justify-center flex flex-col w-1/2 space-y-4">
          <h1 className="text-[var(--primary)] text-7xl  font-semibold">
            What we do?
          </h1>
          <p className="text-[var(--background)] font-semibold text-2xl px-16 text-center">
            At Web3 Simplified, we translate complex concepts into relatable,
            real-world scenarios, exploring how Web3 impacts creativity,
            ownership, privacy, and connection.
          </p>
        </div>

        <div className="flex flex-col w-1/2">
          <div className="bg-[var(--primary)] text-[var(--background)] px-4 py-24 flex flex-col items-center justify-center space-y-4">
            <h1 className="text-7xl  font-semibold">Our Mission</h1>
            <p className="font-semibold text-2xl px-16 text-center">
              To reveal the real-world impact and opportunities of Web3 for
              everyone, regardless of technical expertise.
            </p>
          </div>

          <div className="bg-[var(--background)] text-white px-4 py-24 flex flex-col items-center justify-center space-y-4">
            <h1 className="text-7xl  font-semibold">Join Us</h1>
            <p className="font-semibold text-2xl px-16 text-center">
              To discover how Web3 could create new opportunities and reshape
              industries – no coding skills required.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
