import Link from "next/link"
import React from "react"

const Button = () => {
  return <div>Button</div>
}

export default Button

export const LinkButton = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link href={href}>
      <button className="bg-[var(--primary)] px-10  rounded-3xl py-2 text-[var(--background)] font-semibold hover:bg-[var(--background)] hover:text-[var(--primary)] border-2 border-[var(--primary)] duration-300 ease-in-out">
        {text}
      </button>
    </Link>
  )
}
