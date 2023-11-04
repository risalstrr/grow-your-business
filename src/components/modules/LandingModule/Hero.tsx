import { Button } from 'flowbite-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import Business from 'public/assets/images/business.json'

const LETTER_INTERVAL_IN_MILLISECONDS = 65
const KEYWORD_INTERVAL_IN_MILLISECONDS = 1500
const KEYWORDS_LIST: string[] = ['Develop MSME businesses together with...']

export default function Hero() {
  const [keywordIndex, setKeywordIndex] = useState<number>(-1)
  const [currentKeyword, setCurrentKeyword] = useState<string>(
    'Develop MSME businesses together with...'
  )

  // functional, recursive logic for keyword animation

  function switchKeyword() {
    setKeywordIndex((prev) => (prev + 1) % KEYWORDS_LIST.length)
  }

  function writeKeyword(keyword: string) {
    setTimeout(() => {
      setCurrentKeyword((prev) => prev.concat(keyword.slice(0, 1)))
      if (keyword.slice(1)) {
        writeKeyword(keyword.slice(1))
      } else {
        switchKeyword()
      }
    }, LETTER_INTERVAL_IN_MILLISECONDS)
  }

  function sliceKeyword(len: number) {
    setTimeout(() => {
      setCurrentKeyword((prev) => prev.slice(0, prev.length - 1))
      if (len > 1) {
        sliceKeyword(len - 1)
      }
    }, LETTER_INTERVAL_IN_MILLISECONDS)
  }

  useEffect(() => {
    if (keywordIndex === -1) {
      setKeywordIndex(0)
      return
    }

    const len = currentKeyword.length
    if (len >= 1) {
      setTimeout(() => {
        sliceKeyword(len)
      }, KEYWORD_INTERVAL_IN_MILLISECONDS)
    } else {
      writeKeyword(KEYWORDS_LIST[keywordIndex])
    }
  }, [keywordIndex])

  useEffect(() => {
    if (!(currentKeyword.length >= 1)) {
      switchKeyword()
    }
  }, [currentKeyword])

  return (
    <>
      <div className="relative flex flex-col md:flex-row justify-center items-center mb-10 min-h-[40vw] w-full">
        {/* left */}
        <div className="flex lg:flex-row flex-col justify-center items-center">
          <div className="flex flex-col">
            <p className="inline text-3xl text-purple-light font-productSansBold font-black underlinable w-fit">
              {currentKeyword}
            </p>
            <h1 className="text-grey-dark lg:text-display-medium text-display-small font-bold mr-3 md:my-0 my-auto">
              GrowBiz{' '}
            </h1>
            {/* <p>
              We built this website with the hopes of well-linking MSME'S across
              the Wellesley & Needham town!
            </p> */}

            <br />
            <p className="text-left lg:text-xl md:text-xl text-lg">
              GrowBiz provides training and learning for owners of MSMEs (Micro,
              Small, and Medium Enterprises) and their employees. GrowBiz serves
              as a comprehensive center that assists MSMEs in growing, learning,
              collaborating, and achieving their business goals and sustainable
              development.
            </p>
            <br />
            <br />
            <Button
              className=" bg-purple-light w-[50%] hover:text-purple-light hover:bg-purple-lightest md:mr-auto md:mx-0 mx-auto"
              href="#about"
            >
              Let's Explore!
            </Button>
          </div>

          <Lottie animationData={Business} />
        </div>
      </div>
    </>
  )
}
