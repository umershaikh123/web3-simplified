import Image from "next/image"
import logo from "/public/logo.png"
import effect1 from "/public/effect1.png"
import effect2 from "/public/effect2.png"
import Heading from "@/components/ui/Heading"
import { SubHeading } from "@/components/ui/Heading"
export default function HomePage() {
  return (
    <div className=" min-h-[85vh] mt-4 relative ">
      <div className="flex flex-col items-center min-h-[70vh]">
        <Image
          src={logo}
          width={250}
          height={250}
          alt="logo"
          className="-ml-2"
        />
        <Heading text="Web3 Simplified" css="-mt-4" />
        <SubHeading text="It's About People, Not Just Tech" />
      </div>

      <div className="flex  justify-between w-full   ">
        <Image
          src={effect1}
          width={300}
          height={300}
          alt="logo"
          className="absolute  bottom-0 left-10 min-[950px]:flex hidden"
        />

        <Image
          src={effect2}
          width={300}
          height={300}
          alt="logo"
          className="absolute  top-0 right-10 min-[950px]:flex hidden"
        />
      </div>
    </div>
  )
}
