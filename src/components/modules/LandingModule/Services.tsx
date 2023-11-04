import React from 'react'
import Image from 'next/image'

export default function Service() {
  return (
    <div className="relative flex flex-col lg:flex-row min-h-[40vw] gap-10 lg:mb-0 md:mb-26 mb-32">
      {' '}
      <div className="w-full lg:w-1/2">
        <h1 className="text-center lg:text-left relative lg:text-display-medium md:text-display-small text-display-small font-bold leading-none text-purple-light">
          Why GrowBiz?
        </h1>
        <p className="my-5 text-center lg:text-left">
          GrowBiz is a platform specifically designed to meet the needs of
          Micro, Small, and Medium Enterprises commonly known as MSMEs. Within
          GrowBiz, you can gain new knowledge, collaborate with fellow
          entrepreneurs, manage finances more efficiently, and even access the
          necessary capital for the growth of your business, all in one
          user-friendly platform.
        </p>
        <div className="flex flex-col justify-center items-center">
          <div className="flex my-5 gap-5">
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-extrabold text-2xl">300+</h1>
              <p>Investors</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-extrabold text-2xl">1200+</h1>
              <p>Courses</p>
            </div>
          </div>
          <div className="flex my-5 gap-5">
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-extrabold text-2xl">60+</h1>
              <p>Workshops</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-extrabold text-2xl">1.7k+</h1>
              <p>Active Users</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col w-full lg:gap-10 lg:m-20">
          <div>
            <div className="py-10 my-4 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
              <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-3 p-5">
                  <Image
                    src={'/assets/images/teamwork.png'}
                    width={350}
                    height={350}
                    alt="foto"
                    className="w-[70px]"
                  />
                  <p className="text-lg text-black font-semibold">
                    GrowBiz provides easy access for MSME owners.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="py-10 my-4 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
              <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-3 p-5">
                  <p className="text-lg text-black font-semibold">
                    <Image
                      src={'/assets/images/msmes.png'}
                      width={350}
                      height={350}
                      alt="foto"
                      className="w-[70px]"
                    />
                    GrowBiz assists MSMEs in achieving sustainable economic
                    growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="py-10 md:my-4 my-0 lg:my-40 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
          <div className="text-center space-y- sm:text-left">
            <div className="space-y-3 p-5">
              <Image
                src={'/assets/images/web.png'}
                width={350}
                height={350}
                alt="foto"
                className="w-[70px]"
              />
              <p className="text-lg text-black font-semibold">
                GrowBiz provides various interconnected features and services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
