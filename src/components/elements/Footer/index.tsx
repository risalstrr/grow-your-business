import { Footer } from 'flowbite-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const FooTer: React.FC = () => {
  return (
    <>
      <Footer container={true} className="px-20   drop-shadow-2xl rounded-2xl">
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div className="flex flex-col justify-center">
              <div className="flex mx-auto w-fit">
                <h1 className="self-center whitespace-nowrap ml-3 text-purple-light lg:text-headline-medium md:text-headline-medium text-title-large">
                  GrowBiz
                </h1>
              </div>
              <p className="text-neutral-800 text-sm font-productSans text-center mt-1">
                © 2023 GrowBiz
              </p>
              <Link href="" className="my-6 mx-auto">
                <Image
                  src="/assets/images/icons/github-lightblue.svg"
                  width={24}
                  height={24}
                  alt="github"
                />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-16 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="PROFILE" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="/">Home</Footer.Link>
                  <Footer.Link href="/">About Us</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="MENU" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="/forum">Forum</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms & Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
        </div>
      </Footer>
    </>
  )
}
