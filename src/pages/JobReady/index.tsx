import React from 'react'
import Image from 'next/image'
import { Button } from 'flowbite-react'
import Lottie from 'lottie-react'
import Business6 from 'public/assets/images/business6.json'

export default function Service() {
  return (
    <div className="flex flex-col bg-blue-light relative justify-center items-center w-full h-full">
      <div className=" w-10/12 lg:pt-10 md:pt-28 pt-24">
        {/* <ToastContainer /> */}

        <div className="flex lg:flex-row flex-col justify-center items-center">
          <div className="flex flex-col">
            <h1 className="text-grey-dark lg:text-display-medium text-display-small font-bold mr-3 md:my-0 my-auto">
              Find Your Mentor & be A Mentee
            </h1>
            <br />
            <p className="text-left lg:text-xl md:text-xl text-lg">
              The "Find Your Mentor & Be A Mentee" feature on GrowBiz is
              designed to facilitate meaningful mentorship connections,
              fostering personal and professional development for users. A
              sophisticated matching to create suitable mentor-mentee pairs.
            </p>
            <br />
            <br />
            <Button
              className=" bg-purple-light w-[50%] hover:text-purple-light hover:bg-purple-lightest md:mr-auto md:mx-0 mx-auto"
              href="#about"
            >
              Let's connect!
            </Button>
          </div>
          <Lottie className="w-[1650px] h-[690px]" animationData={Business6} />
          {/* <Image
              width={350}
              height={350}
              className="rounded-t-lg relative drop-shadow-md w-[60%] lg:w-[48%] mx-auto lg:p-12 p-5 md:mt-20 rounded-2xl"
              src="/assets/images/workshop.svg"
              alt="workshop"
            /> */}
        </div>
      </div>

      <div className="w-full mt-14">
        <h1 className="text-purple-light text-center lg:text-display-medium text-display-small font-bold mr-3 md:my-0 my-auto">
          Mentors
        </h1>
        <p className="text-center lg:text-xl md:text-xl lg:px-32 px-10 text-lg mt-5">
          Users can utilize search and browse functions to find the most
          relevant connections based on specific criteria. Once a mentor-mentee
          pair is established, the platform provides a secure and user-friendly
          communication hub, including features like real-time chat, video
          conferencing, and scheduling tools to facilitate effective
          communication.
        </p>
        <div className="grid grid-cols-1 gap-10 my-14 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-1 gap-y-8">
          <div
            className={`
  
        relative bg-white drop-shadow-md w-[350px] mx-auto rounded-2xl 
        transform hover:-translate-y-[0.5rem] hover:shadow-xl cursor-pointer
        `}
          >
            <div className="flex flex-col gap-x-6 px-6 pt-6">
              <h1 className="text-title-large">Sarah Chang</h1>

              <p>
                <span className="font-productSansBold text-purple-terong">
                  Description:
                </span>{' '}
                Expertise in finance and risk management, high data analysis
                skills, and experience working with sustainable business models.
              </p>
            </div>
            <div className="flex justify-center gap-x-6 px-6 pb-6">
              <Button
                className="bg-indigo-500"
                href=""
                // disabled={!jwt}
                // disabled={!jwt || workshop.stock == 0}
              >
                Be A Mentee
                {/* {jwt ? 'Be A Mentee' : 'Login first!'} */}
              </Button>
            </div>
          </div>

          <div
            className={`
  
        relative bg-white drop-shadow-md w-[350px] mx-auto rounded-2xl 
        transform hover:-translate-y-[0.5rem] hover:shadow-xl cursor-pointer
        `}
          >
            <div className="flex flex-col gap-x-6 px-6 pt-6">
              <h1 className="text-title-large">Maria Rodriguez</h1>

              <p>
                <span className="font-productSansBold text-purple-terong">
                  Description:
                </span>{' '}
                Exceptional communication skills, a wide network in the business
                world, and expertise in building mutually beneficial business
                relationships.
              </p>
            </div>
            <div className="flex justify-center gap-x-6 px-6 pb-6">
              <Button
                className="bg-indigo-500"
                href=""
                // disabled={!jwt}
                // disabled={!jwt || workshop.stock == 0}
              >
                Be A Mentee
                {/* {jwt ? 'Be A Mentee' : 'Login first!'} */}
              </Button>
            </div>
          </div>

          <div
            className={`
  
        relative bg-white drop-shadow-md w-[350px] mx-auto rounded-2xl 
        transform hover:-translate-y-[0.5rem] hover:shadow-xl cursor-pointer
        `}
          >
            <div className="flex flex-col gap-x-6 px-6 pt-6">
              <h1 className="text-title-large">Alex Thompson</h1>

              <p>
                <span className="font-productSansBold text-purple-terong">
                  Description:
                </span>{' '}
                Experience in addressing financial challenges and business
                restructuring, in-depth knowledge of the global market, and
                negotiation skills.
              </p>
            </div>
            <div className="flex justify-center gap-x-6 px-6 pb-6">
              <Button
                className="bg-indigo-500"
                href=""
                // disabled={!jwt}
                // disabled={!jwt || workshop.stock == 0}
              >
                Be A Mentee
                {/* {jwt ? 'Be A Mentee' : 'Login first!'} */}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
