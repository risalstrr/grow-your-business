import React, { useState } from 'react'
import { Props } from './interface'
import Image from 'next/image'
import { Button } from 'flowbite-react'
import { ALink } from '@elements'
import { IAuthContext } from 'src/components/contexts/AuthContext/interface'
import { useAuthContext } from 'src/components/contexts/AuthContext'
import { WorkshopInterface } from '../interface'
import axios from 'axios'

export const LessonCard: React.FC<Props> = ({ lesson, className, handler }) => {
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
          src={lesson.photo}
          alt="foto"
          width={500}
          height={500}
          className="object-cover w-[350px] h-[200px] rounded-t-2xl"
        />
        <div className="flex flex-col gap-x-6 px-6 pt-6">
          <h1 className="text-title-large">{lesson.title}</h1>
          <p>{lesson.description}</p>
          <p>
            <span className="font-productSansBold text-purple-terong">
              Harga:
            </span>{' '}
            {lesson.price}
          </p>
          <p>
            <span className="font-productSansBold text-purple-terong">
              Rating:{' '}
            </span>
            {lesson.rating}
          </p>
          <p>
            <span className="font-productSansBold text-purple-terong">
              Total pendaftar:{' '}
            </span>
            {lesson.total_mentee}
          </p>
          <p className="mt-3 mb-6">
            <span className="font-productSansBold text-purple-terong">
              Pengajar:
            </span>{' '}
            {lesson.creator}
          </p>
          <p className="mt-3 mb-6">
            <span className="font-productSansBold text-purple-terong">
              Kelas dimulai:
            </span>{' '}
            {lesson.class_start.toString()}
          </p>
          <p className="mt-3 mb-6">
            <span className="font-productSansBold text-purple-terong">
              Kelas berakhir:
            </span>{' '}
            {lesson.class_end.toString()}
          </p>
        </div>
        <div className="flex justify-center gap-x-6 px-6 pb-6">
          {/* <ALink
            className="text-purple-light"
            uppercase={false}
            href={`http://localhost:3000/workshops/${workshop.id}`}
          >
            View more
          </ALink> */}
          <Button
            className="bg-indigo-500"
            href="https://web.whatsapp.com/"
            // disabled={!jwt || workshop.stock == 0}
          >
            {jwt ? 'Hubungi Contact Person' : 'Login first!'}
          </Button>
        </div>
      </div>
    </>
  )
}
