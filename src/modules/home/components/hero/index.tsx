import { Button, Heading } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"
import { Github } from "@medusajs/icons"
import Link from "next/link"

const Hero = () => {
  return (
    <div>
      <div className="flex flex-row relative h-full">
        <img src="/home.png" alt="home" className="object-cover" />
        <div className=" absolute flex flex-col text-lg lg:px-1  md:px-10 md:py-48 py-28 md:ml-32 lg:py-64 2xl:py-96 2xl:px-36 sm:px-0 px-10">
          <p className="font-optinonoy text-cream  text-2xl 2xl:text-7xl md:text-6xl sm:text-lg ">
            <span>Epitome of poise, beauty and grace </span>
          </p>

          <div className="flex flex-row sm:px-3  py-0 sm:py-2 md:px-32 2xl:px-72  lg:px-72 md:py-3 md:text-md text-sm px-24">
            <Link href="http://localhost:8000/store">
              <span className="md:py-2 sm:px-4 rounded-full md:px-10 2xl:px-40 px-3 py-2 font-optinonoy bg-cream text-black  ">
                SHOP NOW
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="2xl:pt-24 py-5 text-3xl font-optinonoy text-center">
        Shop by category
      </div>
      <div className="flex flex-row 2xl:pt-16 relative h-full">
        <span className="flex flex-col text-center text-xl font-optinonoy">
          <img
            src="/f1.png"
            alt="f1"
            className="object-cover xl:w-128 lg:w-97 2xl:w-102 sm:w-101 md:w-100 w-99"
          />
          <span className="p-3"> Kanchipuram</span>
        </span>
        <span className="flex flex-col text-xl text-center font-optinonoy">
          <img
            src="/f2.png"
            alt="f1"
            className="object-cover xl:w-128 lg:w-97 sm:w-101 2xl:w-102 md:w-100 w-99"
          />
          <span className="p-3"> Churidar</span>
        </span>
        <span className="flex flex-col text-xl text-center font-optinonoy">
          <img
            src="/f3.png"
            alt="f1"
            className="object-cover xl:w-128 lg:w-97 sm:w-101 2xl:w-102 md:w-100 w-99"
          />

          <span className="p-3"> Benares</span>
        </span>
      </div>
      <div>
        <div className="text-center p-10 text-3xl font-optinonoy">
          Eternal by Vibha
        </div>
        <div className="text-center relative flex flex-col 2xl:text-2xl text-sm 2xl:p-10 p-1">
          <img src="/image 2.png" alt="image 2" className="object-cover " />
          <p className="2xl:pt-96 md:pt-32 lg:pt-48 pt-16 text-cream md:text-5xl uppercase font-optinonoy absolute">
            <p className="2xl:pr-16 pr-8 2xl:p-5 p-5 ">
              <span className=" 2xl:pr-44 pr-2"> Elegance </span>
              <span className="2xl:pl-44">Redefined</span>
            </p>
            <text>
              Experience our exclusive touch of designs only at eternal by vibha
            </text>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
