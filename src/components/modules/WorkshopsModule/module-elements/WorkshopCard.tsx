import React, { useState } from 'react'
import { Props } from './interface'
import Image from 'next/image'
import { Button } from 'flowbite-react'
import { ALink } from '@elements'
import { IAuthContext } from 'src/components/contexts/AuthContext/interface'
import { useAuthContext } from 'src/components/contexts/AuthContext'
import { WorkshopInterface } from '../interface'
import axios from 'axios'

export const WorkshopCard: React.FC<Props> = ({
  workshop,
  className,
  handler,
}) => {
  const { jwt }: IAuthContext = useAuthContext()

  return (
    <>
      <div
        className={`
        ${className}    
        relative bg-white drop-shadow-md w-[350px] mx-auto rounded-2xl 
        transform hover:-translate-y-[0.5rem] hover:shadow-xl cursor-pointer
        `}
      >
        <Image
          src={workshop.photo}
          alt="foto"
          width={500}
          height={500}
          className="object-cover w-[350px] h-[200px] rounded-t-2xl"
        />
        <div className="flex flex-col gap-x-6 px-6 pt-6">
          <h1 className="text-title-large">{workshop.title}</h1>
          <p>{workshop.description}</p>
          <p>
            <span className="font-productSansBold text-purple-terong">
              Places:
            </span>{' '}
            {workshop.places}
          </p>
          <p>
            <span className="font-productSansBold text-purple-terong">
              cp:{' '}
            </span>
            {workshop.contact_person}
          </p>
          <p>
            <span className="font-productSansBold text-purple-terong">
              Speaker name:{' '}
            </span>
            {workshop.speaker_name}
          </p>
          <p className="mt-3 mb-6">
            <span className="font-productSansBold text-purple-terong">Rp.</span>{' '}
            {workshop.price}
          </p>
        </div>
        <div className="flex justify-center gap-x-6 px-6 pb-6">
          <Button
            className="bg-indigo-500"
            href={workshop.registration}
            disabled={!jwt}
            // disabled={!jwt || workshop.stock == 0}
          >
            {jwt ? 'Join' : 'Login first!'}
          </Button>
        </div>
      </div>
    </>
  )
}
