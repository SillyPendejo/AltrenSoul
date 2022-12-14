import React, { memo } from 'react'
import cls from 'classnames'

// svg
import { IIconProps } from '~svg'

const D20: React.FC<IIconProps> = props => {
  const { className, ...rest } = props

  return (
    <svg className={cls(className)} xmlns="http://www.w3.org/2000/svg" viewBox={'0 0 22 22'} {...rest}>
      <mask id="mask0_1_4" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
        <path
          d="M20.47 6.62L12.57 2.18C12.41 2.06 12.21 2 12 2C11.79 2 11.59 2.06 11.43 2.18L3.53 6.62C3.21 6.79 3 7.12 3 7.5V16.5C3 16.88 3.21 17.21 3.53 17.38L11.43 21.82C11.59 21.94 11.79 22 12 22C12.21 22 12.41 21.94 12.57 21.82L20.47 17.38C20.79 17.21 21 16.88 21 16.5V7.5C21 7.12 20.79 6.79 20.47 6.62ZM11.45 15.96L6.31 15.93V14.91C6.31 14.91 9.74 11.58 9.75 10.57C9.75 9.33 8.73 9.46 8.73 9.46C8.73 9.46 7.75 9.5 7.64 10.71L6.14 10.76C6.14 10.76 6.18 8.26 8.83 8.26C11.2 8.26 11.23 10.04 11.23 10.5C11.23 12.18 8.15 14.77 8.15 14.77L11.45 14.76V15.96ZM17.5 13.5C17.5 14.9 16.35 16.05 14.93 16.05C13.5 16.05 12.36 14.9 12.36 13.5V10.84C12.36 9.42 13.5 8.27 14.93 8.27C16.36 8.27 17.5 9.42 17.5 10.84V13.5ZM16 10.77V13.53C16 14.12 15.5 14.6 14.92 14.6C14.34 14.6 13.86 14.12 13.86 13.53V10.77C13.86 10.18 14.34 9.71 14.92 9.71C15.5 9.71 16 10.18 16 10.77Z"
          fill="black"
        />
      </mask>
      <g mask="url(#mask0_1_4)">
        <rect width="24" height="24" fill="url(#paint0_linear_1_4)" />
      </g>
      <defs>
        <linearGradient id="paint0_linear_1_4" x1="11.5" y1="31.5" x2="28" y2="10" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0EA5E9" />
          <stop offset="0.453125" stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#F43F5E" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default memo(D20)
