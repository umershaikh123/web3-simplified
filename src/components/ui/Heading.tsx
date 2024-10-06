import React from "react"

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

export default Heading
