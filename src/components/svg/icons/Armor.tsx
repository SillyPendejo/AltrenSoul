import React, { memo } from 'react'
import cls from 'classnames'

// svg
import { IIconProps } from '~svg'

const Armor: React.FC<IIconProps> = props => {
  const { className, ...rest } = props

  return (
    <svg className={cls('fill-current', className)} xmlns="http://www.w3.org/2000/svg" viewBox={'0 0 48 48'} {...rest}>
      <path d="M24 31.1q4.45-4.05 5.725-5.675Q31 23.8 31 22.15q0-1.6-1.125-2.725T27.15 18.3q-.95 0-1.775.375T24 19.7q-.55-.65-1.375-1.025-.825-.375-1.775-.375-1.6 0-2.725 1.125T17 22.15q0 .8.225 1.525.225.725.975 1.675.75.95 2.125 2.3Q21.7 29 24 31.1Zm0 12.85q-7-1.75-11.5-8.125T8 21.85V9.95l16-6 16 6v11.9q0 7.6-4.5 13.975T24 43.95Zm0-3.1q5.75-1.9 9.375-7.175T37 21.85v-9.8l-13-4.9-13 4.9v9.8q0 6.55 3.625 11.825Q18.25 38.95 24 40.85ZM24 24Z" />
    </svg>
  )
}

export default memo(Armor)
