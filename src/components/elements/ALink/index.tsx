import React from 'react'
import { Props } from './interface'

export const ALink: React.FC<Props> = ({
  children,
  uppercase,
  className,
  href,
}) => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <a
          href={href}
          className={`
          ${className} 
          block font-black text-blue-600 border-b-[1.5px] border-transparent hover:border-blue-600
          ${uppercase ? `uppercase` : ``}
        `}
        >
          {children}
        </a>
      </div>
    </>
  )
}
