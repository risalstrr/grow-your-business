import React from 'react'
import { Props } from './interface'

export const DialogueCard: React.FC<Props> = ({ children, className }) => {
  return (
    <>
      <div
        className={`relative bg-white drop-shadow-md w-[85%] lg:w-[90%] mx-auto lg:p-12 p-5 rounded-2xl ${className}`}
      >
        {children}
      </div>
    </>
  )
}
