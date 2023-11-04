import React, { useState } from 'react'
import { Props } from './interface'
import Image from 'next/image'
import { Button } from 'flowbite-react'
import { ALink } from '@elements'
import { IAuthContext } from 'src/components/contexts/AuthContext/interface'
import { useAuthContext } from 'src/components/contexts/AuthContext'
import { Incubation } from '../interface'
import axios from 'axios'
import Investor from '@pages/Incubation'

export const IncubationCard: React.FC<Props> = ({
  incu,
  className,
  handler,
}) => {
  const { jwt }: IAuthContext = useAuthContext()
  const [investorr, setInvestorr] = useState<Incubation | null>()
  const [arrInv, setArrInv] = useState<Incubation[] | null>()

  // const fetchInvestor = async () => {
  //   incu.investor.map((inv) => {
  //     axios
  //       .get(`http://localhost:8000/incubations/incubation/investor/${inv.id}`)
  //       .then((response) => {
  //         console.log('risaaa')
  //         console.log(response.data)
  //         setArrInv(response.data)
  //       })
  //       .catch((error) => {
  //         console.error(error)
  //       })
  //   })
  // }

  return (
    <>
      <div
        className={`
        ${className}    
        relative bg-white drop-shadow-md w-[250px] mx-auto rounded-2xl 
        transform hover:-translate-y-[0.5rem] hover:shadow-xl cursor-pointer
        `}
      >
        <Image
          src={incu.photo}
          alt="foto"
          width={500}
          height={500}
          className="object-cover w-[250px] h-[200px] rounded-t-2xl"
        />
        <div className="flex flex-col gap-x-6 px-6 pt-6">
          <h1 className="text-title-large">{incu.name}</h1>
          <p className="text-lg mb-3">{incu.description}</p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span className="font-productSansBold text-purple-terong">
              Kategori Bisnis:{' '}
            </span>
            {incu.business_category}
          </p>
          <p className="font-normal text-gray-700 mt-3 mb-6 dark:text-gray-400">
            <span className="font-productSansBold text-purple-terong">
              Kriteria UMKM:{' '}
            </span>
            {incu.criteria}
          </p>

          {/* <p className="mt-3 mb-6">Rp. {investor.price}</p> */}
        </div>
        <div className="flex justify-center gap-x-6 px-6 pb-6">
          <Button
            className="text-purple-light bg-purple-light"
            // uppercase={false}
            // onClick={() => fetchInvestor()}
            href={`https://www.antler.co/about`}
          >
            View more
          </Button>
        </div>
      </div>
    </>
  )
}
